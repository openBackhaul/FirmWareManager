'use strict';

const { executeTransaction } = require('./writeOperations');
const store = require('./DomainControllerStore');

function createStorage() {
    const candidate = { storage: 'candidate', server: [] };
    return {
        lock: jest.fn().mockReturnValue({ success: true }),
        unlock: jest.fn().mockReturnValue({ success: true }),
        cloneDatastore: jest.fn(storage => ({
            success: true,
            data: storage === 'running' ? { storage: 'running', server: [] } : candidate
        })),
        overwriteDatastore: jest.fn().mockReturnValue({ success: true }),
        getDatastore: jest.fn().mockReturnValue({ success: true, data: candidate })
    };
}

describe('executeTransaction', () => {
    test('creates a candidate when absent and commits validated changes', async () => {
        const originalDomainController = store.domainController;
        const originalLocks = store.locks;
        store.domainController = {
            'domain-controller': {
                'network-control-domain': [{ storage: 'running', server: [{ label: 'original' }] }]
            }
        };
        store.locks = { running: false, candidate: false };

        try {
            const validation = jest.fn(candidate => {
                expect(candidate.server).toEqual([{ label: 'original' }, { label: 'new' }]);
                expect(store.getDatastore('running').data.server).toEqual([{ label: 'original' }]);
                return { success: true };
            });
            const result = await executeTransaction({
                storage: store,
                modifyCandidate: candidate => candidate.server.push({ label: 'new' }),
                validations: [validation]
            });

            expect(result).toEqual({ success: true, status: 204 });
            expect(validation).toHaveBeenCalledTimes(1);
            expect(store.getDatastore('running').data.server).toEqual([
                { label: 'original' }, { label: 'new' }
            ]);
            expect(store.getDatastore('candidate').data.storage).toBe('candidate');
            expect(store.isLocked('running')).toBe(false);
            expect(store.isLocked('candidate')).toBe(false);
        } finally {
            store.domainController = originalDomainController;
            store.locks = originalLocks;
        }
    });

    test('returns a lock error when running is locked', async () => {
        const storage = createStorage();
        const failure = { success: false, error: new Error('running locked') };
        storage.lock.mockReturnValueOnce(failure);
        const modifyCandidate = jest.fn();

        await expect(executeTransaction({ storage, modifyCandidate })).resolves.toEqual({
            success: false, status: 423, error: failure
        });
        expect(storage.lock).toHaveBeenCalledTimes(1);
        expect(storage.unlock).not.toHaveBeenCalled();
        expect(modifyCandidate).not.toHaveBeenCalled();
    });

    test('returns a lock error and releases running when candidate is locked', async () => {
        const storage = createStorage();
        const failure = { success: false, error: new Error('candidate locked') };
        storage.lock.mockReturnValueOnce({ success: true }).mockReturnValueOnce(failure);

        await expect(executeTransaction({ storage, modifyCandidate: jest.fn() })).resolves.toEqual({
            success: false, status: 423, error: failure
        });
        expect(storage.unlock).toHaveBeenCalledWith('running');
        expect(storage.unlock).not.toHaveBeenCalledWith('candidate');
        expect(storage.cloneDatastore).not.toHaveBeenCalled();
    });

    test.each([
        ['running clone', 'cloneDatastore', 1],
        ['candidate creation', 'overwriteDatastore', 1],
        ['candidate clone', 'cloneDatastore', 2],
        ['running commit', 'overwriteDatastore', 2]
    ])('returns a failure from %s and releases both locks', async (label, method, callNumber) => {
        const storage = createStorage();
        const failure = { success: false, error: new Error(label) };
        if (callNumber === 2) {
            const firstResult = method === 'cloneDatastore'
                ? { success: true, data: { storage: 'running', server: [] } }
                : { success: true };
            storage[method].mockReturnValueOnce(firstResult);
        }
        storage[method].mockReturnValueOnce(failure);

        await expect(executeTransaction({ storage, modifyCandidate: jest.fn() })).resolves.toBe(failure);
        expect(storage.unlock).toHaveBeenCalledWith('candidate');
        expect(storage.unlock).toHaveBeenCalledWith('running');
        if (callNumber === 1) {
            expect(storage.overwriteDatastore).toHaveBeenCalledTimes(method === 'overwriteDatastore' ? 1 : 0);
        }
    });

    test('stops without committing when modification fails', async () => {
        const storage = createStorage();
        const failure = { success: false, error: new Error('modification failed') };
        const validation = jest.fn();

        await expect(executeTransaction({
            storage,
            modifyCandidate: async () => failure,
            validations: [validation]
        })).resolves.toBe(failure);
        expect(validation).not.toHaveBeenCalled();
        expect(storage.overwriteDatastore).toHaveBeenCalledTimes(1);
        expect(storage.unlock).toHaveBeenCalledWith('candidate');
        expect(storage.unlock).toHaveBeenCalledWith('running');
    });

    test('stops at the first failed validation without committing', async () => {
        const storage = createStorage();
        const failure = { success: false, error: 'invalid candidate' };
        const firstValidation = jest.fn().mockResolvedValue(failure);
        const secondValidation = jest.fn();

        await expect(executeTransaction({
            storage,
            modifyCandidate: jest.fn(),
            validations: [firstValidation, secondValidation]
        })).resolves.toEqual({ success: false, status: 462, error: failure });
        expect(firstValidation).toHaveBeenCalledWith(storage.getDatastore.mock.results[0].value.data);
        expect(secondValidation).not.toHaveBeenCalled();
        expect(storage.overwriteDatastore).toHaveBeenCalledTimes(1);
        expect(storage.unlock).toHaveBeenCalledWith('candidate');
        expect(storage.unlock).toHaveBeenCalledWith('running');
    });

    test.each(['modifyCandidate', 'validation'])('releases both locks when %s throws', async source => {
        const storage = createStorage();
        const error = new Error('unexpected failure');
        const reject = jest.fn().mockRejectedValue(error);

        await expect(executeTransaction({
            storage,
            modifyCandidate: source === 'modifyCandidate' ? reject : jest.fn(),
            validations: source === 'validation' ? [reject] : []
        })).rejects.toBe(error);
        expect(storage.overwriteDatastore).toHaveBeenCalledTimes(1);
        expect(storage.unlock).toHaveBeenCalledWith('candidate');
        expect(storage.unlock).toHaveBeenCalledWith('running');
    });
});
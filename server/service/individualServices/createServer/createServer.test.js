'use strict';

jest.mock('../../../utils/DomainControllerStore', () => ({
    getDatastore: jest.fn(),
    save: jest.fn()
}));

jest.mock('../../../utils/writeOperations', () => ({
    executeTransaction: jest.fn()
}));

const { executeTransaction } = require('../../../utils/writeOperations');
const DomainControllerStore = require('../../../utils/DomainControllerStore');
const { createServer } = require('./createServer');

describe('createServer', () => {
    let runningData;

    beforeEach(() => {
        jest.clearAllMocks();
        runningData = { server: [] };
        DomainControllerStore.getDatastore.mockReturnValue({ data: runningData });
        DomainControllerStore.save.mockResolvedValue({ success: true });
        executeTransaction.mockResolvedValue({ success: true });
    });

    test('creates a server and saves the datastore', async () => {
        const candidateDS = { server: [] };
        executeTransaction.mockImplementation(async (transaction) => {
            expect(transaction.storage).toBe(DomainControllerStore);
            expect(transaction.validations).toEqual([]);
            await transaction.modifyCandidate(candidateDS);
            return { success: true };
        });

        await expect(createServer({
            'server-label': 'edge-server',
            'user-name': 'operator',
            password: 'secret',
            'ssh-key': 'key-data'
        })).resolves.toBeUndefined();

        expect(candidateDS.server).toEqual([{
            label: 'edge-server',
            'user-name': 'operator',
            password: 'secret',
            'ssh-key': 'key-data'
        }]);
        expect(DomainControllerStore.getDatastore).toHaveBeenCalledWith('running');
        expect(DomainControllerStore.save).toHaveBeenCalledTimes(1);
    });

    test('rejects when the server label already exists', async () => {
        runningData.server.push({ label: 'edge-server' });

        await expect(createServer({ 'server-label': 'edge-server' })).rejects.toEqual({
            code: 409,
            message: 'Server already exists'
        });

        expect(executeTransaction).not.toHaveBeenCalled();
        expect(DomainControllerStore.save).not.toHaveBeenCalled();
    });

    test('rejects when the transaction fails without saving', async () => {
        executeTransaction.mockResolvedValue({ success: false });

        await expect(createServer({ 'server-label': 'edge-server' })).rejects.toEqual({
            code: 462,
            message: 'Validation failed.'
        });

        expect(DomainControllerStore.save).not.toHaveBeenCalled();
    });
});

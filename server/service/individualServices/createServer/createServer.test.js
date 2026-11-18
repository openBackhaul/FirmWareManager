'use strict';

jest.mock('../../../utils/fileOperations', () => ({
    DomainControllerStore: {
        load: jest.fn()
    },
    executeTransaction: jest.fn()
}));

const databaseCC = require('../../../utils/fileOperations');
const { createServer } = require('./createServer');

describe('createServer', () => {
    let runningData;
    let storage;

    beforeEach(() => {
        jest.clearAllMocks();
        runningData = { server: [] };
        storage = {
            getDatastore: jest.fn(() => ({ data: runningData })),
            save: jest.fn().mockResolvedValue({ success: true })
        };
        databaseCC.DomainControllerStore.load.mockResolvedValue({ storage });
    });

    test('creates a server and saves the datastore', async () => {
        const candidateDS = { server: [] };
        databaseCC.executeTransaction.mockImplementation(async ({ storage, modifyCandidate }) => {
            expect(storage).toBe(storage);
            return modifyCandidate(candidateDS);
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
        expect(storage.save).toHaveBeenCalledTimes(1);
    });

    test('rejects when the server label already exists', async () => {
        runningData.server.push({ label: 'edge-server' });

        await expect(createServer({ 'server-label': 'edge-server' })).rejects.toEqual({
            code: 409,
            message: 'Server already exists'
        });

        expect(databaseCC.executeTransaction).not.toHaveBeenCalled();
        expect(storage.save).not.toHaveBeenCalled();
    });

    test('rejects when the transaction fails without saving', async () => {
        databaseCC.executeTransaction.mockResolvedValue({ success: false });

        await expect(createServer({ 'server-label': 'edge-server' })).rejects.toEqual({
            code: 462,
            message: 'Validation failed.'
        });

        expect(storage.save).not.toHaveBeenCalled();
    });
});

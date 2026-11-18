'use strict';

jest.mock('../../../utils/fileOperations', () => ({
    DomainControllerStore: {
        load: jest.fn()
    }
}));

const databaseCC = require('../../../utils/fileOperations');
const { listIncompleteServers } = require('./listIncompleteServers');

describe('listIncompleteServers', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('returns labels for servers missing any required credentials', async () => {
        const servers = [
            {
                label: 'complete',
                'user-name': 'operator',
                password: 'secret',
                'ssh-key': 'key-data'
            },
            {
                label: 'missing-user',
                password: 'secret',
                'ssh-key': 'key-data'
            },
            {
                label: 'missing-password',
                'user-name': 'operator',
                password: null,
                'ssh-key': 'key-data'
            },
            {
                label: 'empty-key',
                'user-name': 'operator',
                password: 'secret',
                'ssh-key': ''
            }
        ];
        databaseCC.DomainControllerStore.load.mockResolvedValue({
            storage: {
                getDatastore: jest.fn(() => ({ data: { server: servers } }))
            }
        });

        await expect(listIncompleteServers()).resolves.toEqual([
            'missing-user',
            'missing-password',
            'empty-key'
        ]);
    });

    test('returns an empty list when there are no servers', async () => {
        databaseCC.DomainControllerStore.load.mockResolvedValue({
            storage: {
                getDatastore: jest.fn(() => ({ data: { server: [] } }))
            }
        });

        await expect(listIncompleteServers()).resolves.toEqual([]);
    });

    test('rejects with the load error code and message', async () => {
        databaseCC.DomainControllerStore.load.mockRejectedValue({
            statusCode: 503,
            message: 'storage unavailable'
        });

        await expect(listIncompleteServers()).rejects.toEqual({
            code: 503,
            message: 'storage unavailable'
        });
    });
});

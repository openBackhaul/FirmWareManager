'use strict';

jest.mock('../../../utils/DomainControllerStore', () => ({
    getDatastore: jest.fn()
}));

const DomainControllerStore = require('../../../utils/DomainControllerStore');
const { listIncompleteServers } = require('./listIncompleteServers');

describe('listIncompleteServers', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        DomainControllerStore.getDatastore.mockReturnValue({ data: { server: [] } });
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
        DomainControllerStore.getDatastore.mockReturnValue({ data: { server: servers } });

        await expect(listIncompleteServers()).resolves.toEqual([
            'missing-user',
            'missing-password',
            'empty-key'
        ]);
        expect(DomainControllerStore.getDatastore).toHaveBeenCalledWith('running');
    });

    test('returns an empty list when the datastore has no server list', async () => {
        const runningDS = {};
        DomainControllerStore.getDatastore.mockReturnValue({ data: runningDS });

        await expect(listIncompleteServers()).resolves.toEqual([]);
        expect(runningDS.server).toEqual([]);
    });

    test('rejects with the datastore error code and message', async () => {
        const error = Object.assign(new Error('storage unavailable'), { statusCode: 503 });
        DomainControllerStore.getDatastore.mockImplementation(() => {
            throw error;
        });

        await expect(listIncompleteServers()).rejects.toEqual({
            code: 503,
            message: 'storage unavailable'
        });
    });
});

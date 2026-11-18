'use strict';

const { listExistingServers } = require('./listExistingServers');
const databaseCC = require('../../../utils/fileOperations');

jest.mock('../../../utils/fileOperations', () => ({
    DomainControllerStore: {
        load: jest.fn()
    }
}));

describe('listExistingServers', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should return existing servers from running datastore', async () => {
        const mockServers = [
            {
                label: 'server1',
                'user-name': 'admin1'
            },
            {
                label: 'server2',
                'user-name': 'admin2'
            }
        ];

        const mockStorage = {
            getDatastore: jest.fn().mockReturnValue({
                data: {
                    server: mockServers
                }
            })
        };

        databaseCC.DomainControllerStore.load.mockResolvedValue({
            storage: mockStorage
        });

        const result = await listExistingServers(
            'user1',
            'originator1',
            'corr-123',
            'trace-123',
            'journey-123'
        );

        expect(databaseCC.DomainControllerStore.load).toHaveBeenCalledTimes(1);
        expect(mockStorage.getDatastore).toHaveBeenCalledWith('running');
        expect(result).toEqual(mockServers);
    });

    test('should return empty array when no servers exist', async () => {
        const mockStorage = {
            getDatastore: jest.fn().mockReturnValue({
                data: {
                    server: []
                }
            })
        };

        databaseCC.DomainControllerStore.load.mockResolvedValue({
            storage: mockStorage
        });

        const result = await listExistingServers();

        expect(result).toEqual([]);
        expect(mockStorage.getDatastore).toHaveBeenCalledWith('running');
    });

    test('should reject when DomainControllerStore.load fails', async () => {
        const error = new Error('Load failed');
        error.statusCode = 500;

        databaseCC.DomainControllerStore.load.mockRejectedValue(error);

        await expect(
            listExistingServers()
        ).rejects.toEqual({
            code: 500,
            message: 'Load failed'
        });
    });

    test('should reject when getDatastore throws error', async () => {
        const error = new Error('Datastore error');
        error.statusCode = 400;

        const mockStorage = {
            getDatastore: jest.fn(() => {
                throw error;
            })
        };

        databaseCC.DomainControllerStore.load.mockResolvedValue({
            storage: mockStorage
        });

        await expect(
            listExistingServers()
        ).rejects.toEqual({
            code: 400,
            message: 'Datastore error'
        });
    });

});
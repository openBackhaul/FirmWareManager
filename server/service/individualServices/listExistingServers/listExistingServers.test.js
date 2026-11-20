'use strict';

const { listExistingServers } = require('./listExistingServers');
const DomainControllerStore = require('../../../utils/DomainControllerStore');

jest.mock('../../../utils/DomainControllerStore');

describe('listExistingServers', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should return list of existing servers', async () => {
        const mockServers = [
            {
                label: 'server1',
                'user-name': 'admin1',
                password: 'pass1'
            },
            {
                label: 'server2',
                'user-name': 'admin2',
                password: 'pass2'
            }
        ];

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: mockServers
            }
        });

        const result = await listExistingServers(
            'testUser',
            'testOriginator',
            'corr-id',
            'trace-id',
            'journey-id'
        );

        expect(DomainControllerStore.getDatastore)
            .toHaveBeenCalledWith('running');

        expect(result).toEqual(mockServers);
    });

    test('should return empty array when no servers exist', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: []
            }
        });

        const result = await listExistingServers();

        expect(DomainControllerStore.getDatastore)
            .toHaveBeenCalledWith('running');

        expect(result).toEqual([]);
    });

    test('should reject when getDatastore throws an error', async () => {
        const mockError = new Error('Datastore not found');
        mockError.statusCode = 500;

        DomainControllerStore.getDatastore.mockImplementation(() => {
            throw mockError;
        });

        await expect(
            listExistingServers()
        ).rejects.toEqual({
            code: 500,
            message: 'Datastore not found'
        });
    });

    test('should reject with undefined code if statusCode is missing', async () => {
        const mockError = new Error('Unexpected error');

        DomainControllerStore.getDatastore.mockImplementation(() => {
            throw mockError;
        });

        await expect(
            listExistingServers()
        ).rejects.toEqual({
            code: undefined,
            message: 'Unexpected error'
        });
    });

});
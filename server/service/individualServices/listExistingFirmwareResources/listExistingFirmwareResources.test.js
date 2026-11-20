'use strict';

const { listExistingFirmwareResources } = require('./listExistingFirmwareResources');
const DomainControllerStore = require('../../../utils/DomainControllerStore');

jest.mock('../../../utils/DomainControllerStore');

describe('listExistingFirmwareResources', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should return list of existing firmware resources', async () => {
        const mockFirmwareResources = [
            {
                name: 'HuaweiFirmware',
                version: '1.2.3',
                server: 'server1',
                'source-uri': 'https://example.com/fw1',
                'file-name': 'fw1.bin'
            },
            {
                name: 'NokiaFirmware',
                version: '2.0.0',
                server: 'server2',
                'source-uri': 'https://example.com/fw2',
                'file-name': 'fw2.bin'
            }
        ];

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                'firmware-resource': mockFirmwareResources
            }
        });

        const result = await listExistingFirmwareResources(
            'testUser',
            'testOriginator',
            'corr-id',
            'trace-id',
            'journey-id'
        );

        expect(DomainControllerStore.getDatastore)
            .toHaveBeenCalledWith('running');

        expect(result).toEqual(mockFirmwareResources);
    });

    test('should return empty array when no firmware resources exist', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                'firmware-resource': []
            }
        });

        const result = await listExistingFirmwareResources();

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
            listExistingFirmwareResources()
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
            listExistingFirmwareResources()
        ).rejects.toEqual({
            code: undefined,
            message: 'Unexpected error'
        });
    });

});
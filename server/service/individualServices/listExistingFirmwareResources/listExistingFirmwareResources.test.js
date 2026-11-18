'use strict';

const { listExistingFirmwareResources } = require('./listExistingFirmwareResources');
const databaseCC = require('../../../utils/fileOperations');

jest.mock('../../../utils/fileOperations', () => ({
    DomainControllerStore: {
        load: jest.fn()
    }
}));

describe('listExistingFirmwareResources', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should return firmware-resource from running datastore', async () => {
        const mockFirmwareResources = [
            {
                uuid: 'fw-1',
                name: 'Firmware-1',
                version: '1.0.0'
            },
            {
                uuid: 'fw-2',
                name: 'Firmware-2',
                version: '2.0.0'
            }
        ];

        const mockStorage = {
            getDatastore: jest.fn().mockReturnValue({
                data: {
                    'firmware-resource': mockFirmwareResources
                }
            })
        };

        databaseCC.DomainControllerStore.load.mockResolvedValue({
            storage: mockStorage
        });

        const result = await listExistingFirmwareResources(
            'testUser',
            'testOriginator',
            'testCorrelationId',
            '1',
            'testJourney'
        );

        expect(databaseCC.DomainControllerStore.load).toHaveBeenCalledTimes(1);
        expect(mockStorage.getDatastore).toHaveBeenCalledWith('running');
        expect(result).toEqual(mockFirmwareResources);
    });

    test('should return empty array when firmware-resource is empty', async () => {
        const mockStorage = {
            getDatastore: jest.fn().mockReturnValue({
                data: {
                    'firmware-resource': []
                }
            })
        };

        databaseCC.DomainControllerStore.load.mockResolvedValue({
            storage: mockStorage
        });

        const result = await listExistingFirmwareResources();

        expect(result).toEqual([]);
        expect(mockStorage.getDatastore).toHaveBeenCalledWith('running');
    });

    test('should reject when DomainControllerStore.load throws error', async () => {
        const mockError = new Error('Failed to load datastore');
        mockError.statusCode = 500;

        databaseCC.DomainControllerStore.load.mockRejectedValue(mockError);

        await expect(
            listExistingFirmwareResources(
                'testUser',
                'testOriginator',
                'testCorrelationId',
                '1',
                'testJourney'
            )
        ).rejects.toEqual({
            code: 500,
            message: 'Failed to load datastore'
        });

        expect(databaseCC.DomainControllerStore.load).toHaveBeenCalledTimes(1);
    });

    test('should reject with undefined code when error has no statusCode', async () => {
        const mockError = new Error('Unexpected error');

        databaseCC.DomainControllerStore.load.mockRejectedValue(mockError);

        await expect(
            listExistingFirmwareResources()
        ).rejects.toEqual({
            code: undefined,
            message: 'Unexpected error'
        });
    });

});
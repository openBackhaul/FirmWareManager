'use strict';

const { listExistingDeviceModels } = require('./listExistingDeviceModels');
const DomainControllerStore = require('../../../utils/DomainControllerStore');

jest.mock('../../../utils/DomainControllerStore');

describe('listExistingDeviceModels', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should return all existing device models', async () => {
        const deviceModels = [
            {
                name: 'ALC_42%',
                approval: ['HuaweiFirmware,1.2.3'],
                'default-device-group': 'ALC_42%'
            },
            {
                name: 'ABC_99%',
                approval: ['HuaweiFirmware,2.0.0'],
                'default-device-group': 'ABC_99%'
            }
        ];

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                'device-model': deviceModels
            }
        });

        const result = await listExistingDeviceModels();

        expect(DomainControllerStore.getDatastore)
            .toHaveBeenCalledWith('running');

        expect(result).toEqual(deviceModels);
    });

    test('should return empty array when no device models exist', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                'device-model': []
            }
        });

        const result = await listExistingDeviceModels();

        expect(result).toEqual([]);
    });

    test('should return undefined when device-model does not exist', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {}
        });

        const result = await listExistingDeviceModels();

        expect(result).toBeUndefined();
    });

    test('should reject when datastore throws an error', async () => {
        DomainControllerStore.getDatastore.mockImplementation(() => {
            throw {
                statusCode: 500,
                message: 'Datastore error'
            };
        });

        await expect(
            listExistingDeviceModels()
        ).rejects.toEqual({
            code: 500,
            message: 'Datastore error'
        });
    });

    test('should reject when datastore is unavailable', async () => {
        DomainControllerStore.getDatastore.mockImplementation(() => {
            throw {
                statusCode: 503,
                message: 'Service unavailable'
            };
        });

        await expect(
            listExistingDeviceModels()
        ).rejects.toEqual({
            code: 503,
            message: 'Service unavailable'
        });
    });
});
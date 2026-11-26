'use strict';

const { listUnknownDeviceModels } = require('./listUnknownDeviceModels');
const DomainControllerStore = require('../../../utils/DomainControllerStore');

jest.mock('../../../utils/DomainControllerStore');

describe('listUnknownDeviceModels', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should return empty array when all device models are known', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                'device-model': [
                    {
                        name: 'ALC_42%'
                    }
                ],
                device: [
                    {
                        'mount-name': 'radio-001',
                        'device-model': 'ALC_42%'
                    }
                ]
            }
        });

        const result = await listUnknownDeviceModels();

        expect(result).toEqual([]);
    });

    test('should return one unknown device model', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                'device-model': [
                    {
                        name: 'ALC_42%'
                    }
                ],
                device: [
                    {
                        'mount-name': 'radio-001',
                        'device-model': 'UNKNOWN_MODEL'
                    }
                ]
            }
        });

        const result = await listUnknownDeviceModels();

        expect(result).toEqual(['UNKNOWN_MODEL']);
    });

    test('should return multiple unknown device models', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                'device-model': [
                    {
                        name: 'ALC_42%'
                    }
                ],
                device: [
                    {
                        'mount-name': 'radio-001',
                        'device-model': 'UNKNOWN_MODEL_1'
                    },
                    {
                        'mount-name': 'radio-002',
                        'device-model': 'UNKNOWN_MODEL_2'
                    }
                ]
            }
        });

        const result = await listUnknownDeviceModels();

        expect(result).toEqual([
            'UNKNOWN_MODEL_1',
            'UNKNOWN_MODEL_2'
        ]);
    });

    test('should return unique unknown device models only once', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                'device-model': [
                    {
                        name: 'ALC_42%'
                    }
                ],
                device: [
                    {
                        'mount-name': 'radio-001',
                        'device-model': 'UNKNOWN_MODEL'
                    },
                    {
                        'mount-name': 'radio-002',
                        'device-model': 'UNKNOWN_MODEL'
                    }
                ]
            }
        });

        const result = await listUnknownDeviceModels();

        expect(result).toEqual(['UNKNOWN_MODEL']);
    });

    test('should return empty array when there are no devices', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                'device-model': [
                    {
                        name: 'ALC_42%'
                    }
                ],
                device: []
            }
        });

        const result = await listUnknownDeviceModels();

        expect(result).toEqual([]);
    });

    test('should return empty array when device-model and device collections are missing', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {}
        });

        const result = await listUnknownDeviceModels();

        expect(result).toEqual([]);
    });

    test('should reject when datastore throws an error', async () => {
        DomainControllerStore.getDatastore.mockImplementation(() => {
            throw {
                statusCode: 500,
                message: 'Datastore error'
            };
        });

        await expect(
            listUnknownDeviceModels()
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
            listUnknownDeviceModels()
        ).rejects.toEqual({
            code: 503,
            message: 'Service unavailable'
        });
    });
});
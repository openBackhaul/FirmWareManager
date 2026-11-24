'use strict';

const { deleteFirmwareResource } = require('./deleteFirmwareResource');
const DomainControllerStore = require('../../../utils/DomainControllerStore');
const { executeTransaction } = require('../../../utils/writeOperations');

jest.mock('../../../utils/DomainControllerStore');
jest.mock('../../../utils/writeOperations');

describe('deleteFirmwareResource', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        DomainControllerStore.save = jest.fn().mockResolvedValue();
    });

    test('should reject with 404 when firmware-resource-name does not exist', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                'firmware-resource': []
            }
        });

        await expect(
            deleteFirmwareResource({
                'firmware-resource-name': 'HuaweiFirmware',
                'firmware-resource-version': '1.2.3'
            })
        ).rejects.toMatchObject({
            status: 404
        });

        expect(executeTransaction).not.toHaveBeenCalled();
    });

    test('should reject with 463 when firmware resource is referenced by a device group', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                'firmware-resource': [
                    {
                        name: 'HuaweiFirmware',
                        version: '1.2.3'
                    }
                ],
                'device-group': [
                    {
                        label: 'DG1',
                        'target-firmware-list': [
                            {
                                resource: 'HuaweiFirmware,1.2.3'
                            }
                        ]
                    }
                ]
            }
        });

        await expect(
            deleteFirmwareResource({
                'firmware-resource-name': 'HuaweiFirmware',
                'firmware-resource-version': '1.2.3'
            })
        ).rejects.toMatchObject({
            status: 463
        });

        expect(executeTransaction).not.toHaveBeenCalled();
    });

    test('should remove firmware resource and approval reference successfully', async () => {
        const candidateDS = {
            'firmware-resource': [
                {
                    name: 'HuaweiFirmware',
                    version: '1.2.3'
                }
            ],
            'device-model': [
                {
                    name: 'ALC_42%',
                    approval: [
                        'HuaweiFirmware,1.2.3',
                        'HuaweiFirmware,1.2.4'
                    ]
                }
            ]
        };

        DomainControllerStore.getDatastore.mockReturnValue({
            data: JSON.parse(JSON.stringify(candidateDS))
        });

        executeTransaction.mockImplementation(
            async ({ modifyCandidate }) => {
                await modifyCandidate(candidateDS);

                return {
                    success: true
                };
            }
        );

        await expect(
            deleteFirmwareResource({
                'firmware-resource-name': 'HuaweiFirmware',
                'firmware-resource-version': '1.2.3'
            })
        ).resolves.toBeUndefined();

        expect(candidateDS['firmware-resource']).toHaveLength(0);

        expect(candidateDS['device-model'][0].approval).toEqual([
            'HuaweiFirmware,1.2.4'
        ]);

        expect(DomainControllerStore.save).toHaveBeenCalledTimes(1);
    });

    test('should remove approval from multiple device models', async () => {
        const candidateDS = {
            'firmware-resource': [
                {
                    name: 'HuaweiFirmware',
                    version: '1.2.3'
                }
            ],
            'device-model': [
                {
                    name: 'Model1',
                    approval: [
                        'HuaweiFirmware,1.2.3'
                    ]
                },
                {
                    name: 'Model2',
                    approval: [
                        'HuaweiFirmware,1.2.3',
                        'HuaweiFirmware,2.0.0'
                    ]
                }
            ]
        };

        DomainControllerStore.getDatastore.mockReturnValue({
            data: JSON.parse(JSON.stringify(candidateDS))
        });

        executeTransaction.mockImplementation(
            async ({ modifyCandidate }) => {
                await modifyCandidate(candidateDS);

                return {
                    success: true
                };
            }
        );

        await deleteFirmwareResource({
            'firmware-resource-name': 'HuaweiFirmware',
            'firmware-resource-version': '1.2.3'
        });

        expect(candidateDS['device-model'][0].approval).toEqual([]);

        expect(candidateDS['device-model'][1].approval).toEqual([
            'HuaweiFirmware,2.0.0'
        ]);
    });

    test('should reject when transaction validation fails', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                'firmware-resource': [
                    {
                        name: 'HuaweiFirmware',
                        version: '1.2.3'
                    }
                ]
            }
        });

        executeTransaction.mockResolvedValue({
            success: false
        });

        await expect(
            deleteFirmwareResource({
                'firmware-resource-name': 'HuaweiFirmware',
                'firmware-resource-version': '1.2.3'
            })
        ).rejects.toMatchObject({
            status: 462
        });

        expect(DomainControllerStore.save).not.toHaveBeenCalled();
    });

    test('should reject when executeTransaction throws an error', async () => {
        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                'firmware-resource': [
                    {
                        name: 'HuaweiFirmware',
                        version: '1.2.3'
                    }
                ]
            }
        });

        executeTransaction.mockRejectedValue(
            new Error('Transaction failed')
        );

        await expect(
            deleteFirmwareResource({
                'firmware-resource-name': 'HuaweiFirmware',
                'firmware-resource-version': '1.2.3'
            })
        ).rejects.toThrow('Transaction failed');
    });
});
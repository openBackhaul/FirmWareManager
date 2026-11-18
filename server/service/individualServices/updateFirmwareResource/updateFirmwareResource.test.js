'use strict';

const { updateFirmwareResource } = require('./updateFirmwareResource');
const databaseCC = require('../../../utils/fileOperations');

jest.mock('../../../utils/fileOperations', () => ({
    DomainControllerStore: {
        load: jest.fn()
    },
    executeTransaction: jest.fn()
}));

describe('updateFirmwareResource', () => {
    let mockStorage;
    let mockRunningData;

    beforeEach(() => {
        jest.clearAllMocks();

        mockRunningData = {
            "firmware-resource": [
                {
                    name: 'FW1',
                    version: '1.0',
                    server: 'SERVER1',
                    'source-uri': 'uri1',
                    'file-name': 'file1.bin'
                }
            ],
            server: [
                {
                    label: 'SERVER1'
                },
                {
                    label: 'SERVER2'
                }
            ]
        };

        mockStorage = {
            getDatastore: jest.fn().mockReturnValue({
                data: mockRunningData
            }),
            save: jest.fn().mockResolvedValue()
        };

        databaseCC.DomainControllerStore.load.mockResolvedValue({
            storage: mockStorage
        });
    });

    describe('success scenarios', () => {
        test('should update firmware resource successfully', async () => {
            databaseCC.executeTransaction.mockImplementation(
                async ({ modifyCandidate }) => {
                    const candidateDS = JSON.parse(
                        JSON.stringify(mockRunningData)
                    );

                    await modifyCandidate(candidateDS);

                    expect(
                        candidateDS['firmware-resource'][0]
                    ).toEqual({
                        name: 'FW1',
                        version: '2.0',
                        server: 'SERVER2',
                        'source-uri': 'new-uri',
                        'file-name': 'new-file.bin'
                    });

                    return { success: true };
                }
            );

            await expect(
                updateFirmwareResource({
                    'firmware-resource-name': 'FW1',
                    'firmware-resource-version': '2.0',
                    'server-label': 'SERVER2',
                    'source-uri': 'new-uri',
                    'file-name': 'new-file.bin'
                })
            ).resolves.toBeUndefined();

            expect(databaseCC.executeTransaction).toHaveBeenCalled();
            expect(mockStorage.save).toHaveBeenCalled();
        });

        test('should ignore empty optional values', async () => {
            databaseCC.executeTransaction.mockImplementation(
                async ({ modifyCandidate }) => {
                    const candidateDS = JSON.parse(
                        JSON.stringify(mockRunningData)
                    );

                    await modifyCandidate(candidateDS);

                    expect(
                        candidateDS['firmware-resource'][0]
                    ).toEqual({
                        name: 'FW1',
                        version: '1.0',
                        server: 'SERVER1',
                        'source-uri': 'uri1',
                        'file-name': 'file1.bin'
                    });

                    return { success: true };
                }
            );

            await expect(
                updateFirmwareResource({
                    'firmware-resource-name': 'FW1',
                    'firmware-resource-version': '',
                    'server-label': '',
                    'source-uri': '',
                    'file-name': ''
                })
            ).resolves.toBeUndefined();
        });
    });

    describe('validation failures', () => {
        test('should throw 404 when firmware resource does not exist', async () => {
            await expect(
                updateFirmwareResource({
                    'firmware-resource-name': 'UNKNOWN_FW'
                })
            ).rejects.toMatchObject({
                status: 404,
                message: 'firmware-resource does not exists'
            });

            expect(databaseCC.executeTransaction).not.toHaveBeenCalled();
        });

        test('should throw 404 when server label does not exist', async () => {
            await expect(
                updateFirmwareResource({
                    'firmware-resource-name': 'FW1',
                    'server-label': 'UNKNOWN_SERVER'
                })
            ).rejects.toMatchObject({
                status: 404,
                message: 'Server label does not exists'
            });

            expect(databaseCC.executeTransaction).not.toHaveBeenCalled();
        });

        test('should throw 422 when firmware already documented', async () => {
            await expect(
                updateFirmwareResource({
                    'firmware-resource-name': 'FW1',
                    'server-label': 'SERVER1',
                    'source-uri': 'uri1',
                    'file-name': 'file1.bin'
                })
            ).rejects.toMatchObject({
                status: 422,
                message:
                    'serverLabel, sourceUri and fileName already documented'
            });

            expect(databaseCC.executeTransaction).not.toHaveBeenCalled();
        });

        test('should throw 462 when transaction validation fails', async () => {
            databaseCC.executeTransaction.mockResolvedValue({
                success: false
            });

            await expect(
                updateFirmwareResource({
                    'firmware-resource-name': 'FW1',
                    'server-label': 'SERVER2',
                    'source-uri': 'new-uri',
                    'file-name': 'new-file.bin'
                })
            ).rejects.toMatchObject({
                status: 462,
                message: 'Validation failed.'
            });

            expect(mockStorage.save).not.toHaveBeenCalled();
        });

        test('should reject when executeTransaction throws error', async () => {
            databaseCC.executeTransaction.mockRejectedValue(
                new Error('DB Error')
            );

            await expect(
                updateFirmwareResource({
                    'firmware-resource-name': 'FW1',
                    'server-label': 'SERVER2',
                    'source-uri': 'new-uri',
                    'file-name': 'new-file.bin'
                })
            ).rejects.toThrow('DB Error');
        });
    });

    describe('partial updates', () => {
        test('should update only provided fields', async () => {
            databaseCC.executeTransaction.mockImplementation(
                async ({ modifyCandidate }) => {
                    const candidateDS = JSON.parse(
                        JSON.stringify(mockRunningData)
                    );

                    await modifyCandidate(candidateDS);

                    expect(
                        candidateDS['firmware-resource'][0]
                    ).toEqual({
                        name: 'FW1',
                        version: '3.0',
                        server: 'SERVER1',
                        'source-uri': 'uri1',
                        'file-name': 'file1.bin'
                    });

                    return { success: true };
                }
            );

            await expect(
                updateFirmwareResource({
                    'firmware-resource-name': 'FW1',
                    'firmware-resource-version': '3.0'
                })
            ).resolves.toBeUndefined();
        });
    });
});
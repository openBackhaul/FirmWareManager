'use strict';

const { updateFirmwareResource } = require('./updateFirmwareResource');
const DomainControllerStore = require('../../../utils/DomainControllerStore');
const { executeTransaction } = require('../../../utils/writeOperations');

jest.mock('../../../utils/DomainControllerStore');
jest.mock('../../../utils/writeOperations', () => ({
    executeTransaction: jest.fn()
}));

describe('updateFirmwareResource', () => {

    beforeEach(() => {
        jest.clearAllMocks();

        DomainControllerStore.save = jest.fn().mockResolvedValue();
    });

    test('should update firmware resource successfully', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    { label: 'server2' }
                ],
                'firmware-resource': [
                    {
                        name: 'FW1',
                        version: '1.0',
                        server: 'server1',
                        'source-uri': 'uri1',
                        'file-name': 'file1'
                    },
                    {
                        name: 'FW2',
                        version: '1.0',
                        server: 'server3',
                        'source-uri': 'uri3',
                        'file-name': 'file3'
                    }
                ]
            }
        });

        executeTransaction.mockImplementation(
            async ({ modifyCandidate }) => {

                const candidateDS = {
                    'firmware-resource': [
                        {
                            name: 'FW1',
                            version: '1.0',
                            server: 'server1',
                            'source-uri': 'uri1',
                            'file-name': 'file1'
                        }
                    ]
                };

                await modifyCandidate(candidateDS);

                expect(candidateDS['firmware-resource'][0]).toEqual({
                    name: 'FW1',
                    version: '2.0',
                    server: 'server2',
                    'source-uri': 'uri2',
                    'file-name': 'file2'
                });

                return { success: true };
            }
        );

        await expect(
            updateFirmwareResource({
                'firmware-resource-name': 'FW1',
                'firmware-resource-version': '2.0',
                'server-label': 'server2',
                'source-uri': 'uri2',
                'file-name': 'file2'
            })
        ).resolves.toBeUndefined();

        expect(executeTransaction).toHaveBeenCalled();
        expect(DomainControllerStore.save).toHaveBeenCalled();
    });

    test('should throw 404 when firmware-resource-name does not exist', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [],
                'firmware-resource': []
            }
        });

        await expect(
            updateFirmwareResource({
                'firmware-resource-name': 'INVALID'
            })
        ).rejects.toMatchObject({
            status: 404,
            message: 'firmware-resource-name does not exists'
        });
    });

    test('should throw 404 when server-label does not exist', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    { label: 'server1' }
                ],
                'firmware-resource': [
                    {
                        name: 'FW1',
                        version: '1.0',
                        server: 'server1',
                        'source-uri': 'uri1',
                        'file-name': 'file1'
                    }
                ]
            }
        });

        await expect(
            updateFirmwareResource({
                'firmware-resource-name': 'FW1',
                'server-label': 'invalidServer'
            })
        ).rejects.toMatchObject({
            status: 404,
            message: 'server-label does not exists'
        });
    });

    test('should throw 422 when duplicate combination already exists', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    { label: 'server1' },
                    { label: 'server2' }
                ],
                'firmware-resource': [
                    {
                        name: 'FW1',
                        version: '1.0',
                        server: 'server1',
                        'source-uri': 'uri1',
                        'file-name': 'file1'
                    },
                    {
                        name: 'FW2',
                        version: '1.0',
                        server: 'server2',
                        'source-uri': 'uri2',
                        'file-name': 'file2'
                    }
                ]
            }
        });

        await expect(
            updateFirmwareResource({
                'firmware-resource-name': 'FW1',
                'server-label': 'server2',
                'source-uri': 'uri2',
                'file-name': 'file2'
            })
        ).rejects.toMatchObject({
            status: 422,
            message: 'server-label, source-uri, file-name combination already documented'
        });
    });

    test('should throw 462 when executeTransaction returns success false', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    { label: 'server2' }
                ],
                'firmware-resource': [
                    {
                        name: 'FW1',
                        version: '1.0',
                        server: 'server1',
                        'source-uri': 'uri1',
                        'file-name': 'file1'
                    },
                    {
                        name: 'FW2',
                        version: '1.0',
                        server: 'server3',
                        'source-uri': 'uri3',
                        'file-name': 'file3'
                    }
                ]
            }
        });

        executeTransaction.mockResolvedValue({
            success: false
        });

        await expect(
            updateFirmwareResource({
                'firmware-resource-name': 'FW1',
                'server-label': 'server2',
                'source-uri': 'uri2',
                'file-name': 'file2'
            })
        ).rejects.toMatchObject({
            status: 462,
            message: 'Validation failed.'
        });
    });

    test('should reject when executeTransaction throws error', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    { label: 'server2' }
                ],
                'firmware-resource': [
                    {
                        name: 'FW1',
                        version: '1.0',
                        server: 'server1',
                        'source-uri': 'uri1',
                        'file-name': 'file1'
                    },
                    {
                        name: 'FW2',
                        version: '1.0',
                        server: 'server3',
                        'source-uri': 'uri3',
                        'file-name': 'file3'
                    }
                ]
            }
        });

        executeTransaction.mockRejectedValue(
            new Error('transaction failed')
        );

        await expect(
            updateFirmwareResource({
                'firmware-resource-name': 'FW1',
                'server-label': 'server2',
                'source-uri': 'uri2',
                'file-name': 'file2'
            })
        ).rejects.toThrow('transaction failed');
    });

    test('should reject when save fails', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    { label: 'server2' }
                ],
                'firmware-resource': [
                    {
                        name: 'FW1',
                        version: '1.0',
                        server: 'server1',
                        'source-uri': 'uri1',
                        'file-name': 'file1'
                    },
                    {
                        name: 'FW2',
                        version: '1.0',
                        server: 'server3',
                        'source-uri': 'uri3',
                        'file-name': 'file3'
                    }
                ]
            }
        });

        executeTransaction.mockResolvedValue({
            success: true
        });

        DomainControllerStore.save.mockRejectedValue(
            new Error('save failed')
        );

        await expect(
            updateFirmwareResource({
                'firmware-resource-name': 'FW1',
                'server-label': 'server2',
                'source-uri': 'uri2',
                'file-name': 'file2'
            })
        ).rejects.toThrow('save failed');
    });

});
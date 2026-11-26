'use strict';

jest.mock('../../../utils/DomainControllerStore');
jest.mock('../../../utils/writeOperations');

const DomainControllerStore = require('../../../utils/DomainControllerStore');
const { executeTransaction } = require('../../../utils/writeOperations');
const { createFirmwareResource } = require('./createFirmwareResource');

describe('createFirmwareResource', () => {
    let mockRunningDS;

    beforeEach(() => {
        jest.clearAllMocks();

        mockRunningDS = {
            server: [
                {
                    label: 'firmware-server'
                }
            ],
            'firmware-resource': []
        };

        DomainControllerStore.getDatastore.mockReturnValue({
            data: mockRunningDS
        });

        DomainControllerStore.save = jest.fn().mockResolvedValue();

        executeTransaction.mockImplementation(
            async ({ modifyCandidate }) => {
                const candidateDS = {
                    server: [...mockRunningDS.server],
                    'firmware-resource': [...mockRunningDS['firmware-resource']]
                };

                await modifyCandidate(candidateDS);

                return {
                    success: true
                };
            }
        );
    });

    test('should create firmware resource successfully', async () => {
        const body = {
            'firmware-resource-name': 'HuaweiFirmware',
            'firmware-resource-version': '1.2.3',
            'server-label': 'firmware-server',
            'source-uri': 'ftp://server/path',
            'file-name': 'firmware.bin'
        };

        await expect(
            createFirmwareResource(body)
        ).resolves.toBeUndefined();

        expect(executeTransaction).toHaveBeenCalled();
        expect(DomainControllerStore.save).toHaveBeenCalled();
    });

    test('should throw 409 when firmwareResourceName already exists', async () => {
        mockRunningDS['firmware-resource'].push({
            name: 'HuaweiFirmware',
            version: '1.0.0',
            server: 'firmware-server',
            'source-uri': 'old-uri',
            'file-name': 'old.bin'
        });

        const body = {
            'firmware-resource-name': 'HuaweiFirmware',
            'firmware-resource-version': '1.2.3',
            'server-label': 'firmware-server',
            'source-uri': 'ftp://server/path',
            'file-name': 'firmware.bin'
        };

        await expect(
            createFirmwareResource(body)
        ).rejects.toMatchObject({
            status: 409,
            message: 'firmwareResourceName already exists'
        });

        expect(executeTransaction).not.toHaveBeenCalled();
    });

    test('should throw 404 when server-label does not exist', async () => {
        const body = {
            'firmware-resource-name': 'HuaweiFirmware',
            'firmware-resource-version': '1.2.3',
            'server-label': 'unknown-server',
            'source-uri': 'ftp://server/path',
            'file-name': 'firmware.bin'
        };

        await expect(
            createFirmwareResource(body)
        ).rejects.toMatchObject({
            status: 404,
            message: 'server-label does not exists'
        });

        expect(executeTransaction).not.toHaveBeenCalled();
    });

    test('should throw 422 when server-label source-uri file-name combination already exists', async () => {
        mockRunningDS['firmware-resource'].push({
            name: 'ExistingFirmware',
            version: '1.0.0',
            server: 'firmware-server',
            'source-uri': 'ftp://server/path',
            'file-name': 'firmware.bin'
        });

        const body = {
            'firmware-resource-name': 'HuaweiFirmware',
            'firmware-resource-version': '1.2.3',
            'server-label': 'firmware-server',
            'source-uri': 'ftp://server/path',
            'file-name': 'firmware.bin'
        };

        await expect(
            createFirmwareResource(body)
        ).rejects.toMatchObject({
            status: 422,
            message:
                'server-label, source-uri, file-name combination already documented'
        });

        expect(executeTransaction).not.toHaveBeenCalled();
    });

    test('should throw 462 when transaction validation fails', async () => {
        executeTransaction.mockResolvedValue({
            success: false
        });

        const body = {
            'firmware-resource-name': 'HuaweiFirmware',
            'firmware-resource-version': '1.2.3',
            'server-label': 'firmware-server',
            'source-uri': 'ftp://server/path',
            'file-name': 'firmware.bin'
        };

        await expect(
            createFirmwareResource(body)
        ).rejects.toMatchObject({
            status: 462,
            message: 'Validation failed.'
        });

        expect(DomainControllerStore.save).not.toHaveBeenCalled();
    });

    test('should add firmware resource to candidate datastore', async () => {
        let candidateDS;

        executeTransaction.mockImplementation(
            async ({ modifyCandidate }) => {
                candidateDS = {
                    server: [...mockRunningDS.server],
                    'firmware-resource': []
                };

                await modifyCandidate(candidateDS);

                return {
                    success: true
                };
            }
        );

        const body = {
            'firmware-resource-name': 'HuaweiFirmware',
            'firmware-resource-version': '1.2.3',
            'server-label': 'firmware-server',
            'source-uri': 'ftp://server/path',
            'file-name': 'firmware.bin'
        };

        await createFirmwareResource(body);

        expect(candidateDS['firmware-resource']).toContainEqual({
            name: 'HuaweiFirmware',
            version: '1.2.3',
            server: 'firmware-server',
            'source-uri': 'ftp://server/path',
            'file-name': 'firmware.bin'
        });
    });
});
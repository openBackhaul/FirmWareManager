'use strict';

jest.mock('../../../utils/DomainControllerStore');
jest.mock('../../../utils/writeOperations');

const DomainControllerStore = require('../../../utils/DomainControllerStore');
const { executeTransaction } = require('../../../utils/writeOperations');
const { updateFirmwareResource } = require('./updateFirmwareResource');

describe('updateFirmwareResource', () => {
    let mockRunningDS;
    let mockCandidateDS;

    beforeEach(() => {
        jest.clearAllMocks();

        mockRunningDS = {
            server: [
                {
                    label: 'firmware-server'
                },
                {
                    label: 'server-2'
                }
            ],
            'firmware-resource': [
                {
                    name: 'HuaweiFirmware',
                    version: '1.0.0',
                    server: 'firmware-server',
                    'source-uri': 'ftp://10.10.10.10',
                    'file-name': 'firmware.bin'
                }
            ]
        };

        mockCandidateDS = JSON.parse(JSON.stringify(mockRunningDS));

        DomainControllerStore.getDatastore.mockReturnValue({
            data: mockRunningDS
        });

        DomainControllerStore.save = jest.fn().mockResolvedValue();

        executeTransaction.mockImplementation(
            async ({ modifyCandidate }) => {
                await modifyCandidate(mockCandidateDS);

                return {
                    success: true
                };
            }
        );
    });

    test('should update firmware resource successfully', async () => {
        const body = {
            'firmware-resource-name': 'HuaweiFirmware',
            'firmware-resource-version': '2.0.0',
            'server-label': 'server-2',
            'source-uri': 'ftp://20.20.20.20',
            'file-name': 'newFirmware.bin'
        };

        await expect(
            updateFirmwareResource(body)
        ).resolves.toBeUndefined();

        expect(executeTransaction).toHaveBeenCalled();

        expect(
            mockCandidateDS['firmware-resource'][0]
        ).toEqual({
            name: 'HuaweiFirmware',
            version: '2.0.0',
            server: 'server-2',
            'source-uri': 'ftp://20.20.20.20',
            'file-name': 'newFirmware.bin'
        });

        expect(DomainControllerStore.save).toHaveBeenCalled();
    });

    test('should return 404 when firmware-resource-name does not exist', async () => {
        const body = {
            'firmware-resource-name': 'UnknownFirmware',
            'firmware-resource-version': '2.0.0'
        };

        await expect(
            updateFirmwareResource(body)
        ).rejects.toMatchObject({
            status: 404,
            message: 'firmware-resource-name does not exists'
        });

        expect(executeTransaction).not.toHaveBeenCalled();
    });

    test('should return 404 when server-label does not exist', async () => {
        const body = {
            'firmware-resource-name': 'HuaweiFirmware',
            'server-label': 'invalid-server'
        };

        await expect(
            updateFirmwareResource(body)
        ).rejects.toMatchObject({
            status: 404,
            message: 'server-label does not exists'
        });

        expect(executeTransaction).not.toHaveBeenCalled();
    });

    test('should return 422 when server-label, source-uri and file-name combination already exists', async () => {
        const body = {
            'firmware-resource-name': 'HuaweiFirmware'
        };

        await expect(
            updateFirmwareResource(body)
        ).rejects.toMatchObject({
            status: 422,
            message: 'server-label, source-uri, file-name combination already documented'
        });

        expect(executeTransaction).not.toHaveBeenCalled();
    });

    test('should update only firmware-resource-version', async () => {
        const body = {
            'firmware-resource-name': 'HuaweiFirmware',
            'firmware-resource-version': '3.0.0',
            'source-uri': 'ftp://30.30.30.30'
        };

        await expect(
            updateFirmwareResource(body)
        ).resolves.toBeUndefined();

        expect(
            mockCandidateDS['firmware-resource'][0].version
        ).toBe('3.0.0');

        expect(
            mockCandidateDS['firmware-resource'][0]['source-uri']
        ).toBe('ftp://30.30.30.30');

        expect(
            mockCandidateDS['firmware-resource'][0].server
        ).toBe('firmware-server');

        expect(DomainControllerStore.save).toHaveBeenCalled();
    });

    test('should return 462 when transaction validation fails', async () => {
        executeTransaction.mockResolvedValue({
            success: false
        });

        const body = {
            'firmware-resource-name': 'HuaweiFirmware',
            'firmware-resource-version': '2.0.0',
            'source-uri': 'ftp://20.20.20.20'
        };

        await expect(
            updateFirmwareResource(body)
        ).rejects.toMatchObject({
            status: 462,
            message: 'Validation failed.'
        });

        expect(DomainControllerStore.save).not.toHaveBeenCalled();
    });

    test('should update only server-label when provided', async () => {
        const body = {
            'firmware-resource-name': 'HuaweiFirmware',
            'server-label': 'server-2',
            'source-uri': 'ftp://99.99.99.99'
        };

        await updateFirmwareResource(body);

        expect(
            mockCandidateDS['firmware-resource'][0].server
        ).toBe('server-2');
    });

    test('should update only file-name when provided', async () => {
        const body = {
            'firmware-resource-name': 'HuaweiFirmware',
            'file-name': 'updated.bin',
            'source-uri': 'ftp://88.88.88.88'
        };

        await updateFirmwareResource(body);

        expect(
            mockCandidateDS['firmware-resource'][0]['file-name']
        ).toBe('updated.bin');
    });

    test('should reject when DomainControllerStore.save throws error', async () => {
        DomainControllerStore.save.mockRejectedValue(
            new Error('save failed')
        );

        const body = {
            'firmware-resource-name': 'HuaweiFirmware',
            'firmware-resource-version': '2.0.0',
            'source-uri': 'ftp://20.20.20.20'
        };

        await expect(
            updateFirmwareResource(body)
        ).rejects.toThrow('save failed');
    });
});
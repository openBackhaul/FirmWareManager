'use strict';

const createHttpError = require('http-errors');

jest.mock('../../../utils/writeOperations', () => ({
    executeTransaction: jest.fn()
}));

jest.mock('../../../utils/DomainControllerStore', () => ({
    getDatastore: jest.fn(),
    save: jest.fn()
}));

const { executeTransaction } = require('../../../utils/writeOperations');
const DomainControllerStore = require('../../../utils/DomainControllerStore');
const { deleteServer } = require('./deleteServer');

describe('deleteServer', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should delete server successfully', async () => {
        const body = {
            'server-label': 'server1'
        };

        const runningDS = {
            server: [
                {
                    label: 'server1'
                }
            ],
            'firmware-resource': []
        };

        const candidateDS = {
            server: [
                {
                    label: 'server1'
                }
            ]
        };

        DomainControllerStore.getDatastore.mockReturnValue({
            data: runningDS
        });

        executeTransaction.mockImplementation(async ({ modifyCandidate }) => {
            await modifyCandidate(candidateDS);

            expect(candidateDS.server).toHaveLength(0);

            return {
                success: true
            };
        });

        await expect(
            deleteServer(body)
        ).resolves.toBeUndefined();

        expect(executeTransaction).toHaveBeenCalled();
        expect(DomainControllerStore.save).toHaveBeenCalled();
    });

    test('should throw 404 when server does not exist in running datastore', async () => {
        const body = {
            'server-label': 'server1'
        };

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [],
                'firmware-resource': []
            }
        });

        await expect(
            deleteServer(body)
        ).rejects.toMatchObject({
            status: 404,
            message: 'Server does not exist'
        });

        expect(executeTransaction).not.toHaveBeenCalled();
        expect(DomainControllerStore.save).not.toHaveBeenCalled();
    });

    test('should throw 463 when server is referenced by firmware-resource', async () => {
        const body = {
            'server-label': 'server1'
        };

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    {
                        label: 'server1'
                    }
                ],
                'firmware-resource': [
                    {
                        name: 'HuaweiFirmware',
                        version: '1.2.3',
                        server: 'server1'
                    }
                ]
            }
        });

        await expect(
            deleteServer(body)
        ).rejects.toMatchObject({
            status: 463
        });

        expect(executeTransaction).not.toHaveBeenCalled();
        expect(DomainControllerStore.save).not.toHaveBeenCalled();
    });

    test('should throw 404 when server does not exist in candidate datastore', async () => {
        const body = {
            'server-label': 'server1'
        };

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    {
                        label: 'server1'
                    }
                ],
                'firmware-resource': []
            }
        });

        const candidateDS = {
            server: []
        };

        executeTransaction.mockImplementation(async ({ modifyCandidate }) => {
            await modifyCandidate(candidateDS);

            return {
                success: true
            };
        });

        await expect(
            deleteServer(body)
        ).rejects.toMatchObject({
            status: 404,
            message: 'Server does not exist in candidate datastore'
        });

        expect(DomainControllerStore.save).not.toHaveBeenCalled();
    });

    test('should throw 462 when transaction validation fails', async () => {
        const body = {
            'server-label': 'server1'
        };

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    {
                        label: 'server1'
                    }
                ],
                'firmware-resource': []
            }
        });

        executeTransaction.mockResolvedValue({
            success: false
        });

        await expect(
            deleteServer(body)
        ).rejects.toMatchObject({
            status: 462,
            message: 'Validation failed.'
        });

        expect(DomainControllerStore.save).not.toHaveBeenCalled();
    });

    test('should reject when executeTransaction throws error', async () => {
        const body = {
            'server-label': 'server1'
        };

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    {
                        label: 'server1'
                    }
                ],
                'firmware-resource': []
            }
        });

        executeTransaction.mockRejectedValue(
            new Error('Transaction failed')
        );

        await expect(
            deleteServer(body)
        ).rejects.toThrow('Transaction failed');

        expect(DomainControllerStore.save).not.toHaveBeenCalled();
    });

    test('should handle missing firmware-resource array', async () => {
        const body = {
            'server-label': 'server1'
        };

        const candidateDS = {
            server: [
                {
                    label: 'server1'
                }
            ]
        };

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    {
                        label: 'server1'
                    }
                ]
            }
        });

        executeTransaction.mockImplementation(async ({ modifyCandidate }) => {
            await modifyCandidate(candidateDS);

            return {
                success: true
            };
        });

        await expect(
            deleteServer(body)
        ).resolves.toBeUndefined();

        expect(DomainControllerStore.save).toHaveBeenCalled();
    });
});
'use strict';

const { updateServer } = require('./updateServer');
const DomainControllerStore = require('../../../utils/DomainControllerStore');
const { executeTransaction } = require('../../../utils/writeOperations');

jest.mock('../../../utils/DomainControllerStore');
jest.mock('../../../utils/writeOperations', () => ({
    executeTransaction: jest.fn()
}));

describe('updateServer', () => {

    beforeEach(() => {
        jest.clearAllMocks();

        DomainControllerStore.save = jest.fn().mockResolvedValue();
    });

    test('should update all server fields successfully', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    {
                        label: 'server1',
                        'user-name': 'user1',
                        password: 'pass1',
                        'ssh-key': 'key1'
                    }
                ]
            }
        });

        executeTransaction.mockImplementation(
            async ({ modifyCandidate }) => {

                const candidateDS = {
                    server: [
                        {
                            label: 'server1',
                            'user-name': 'user1',
                            password: 'pass1',
                            'ssh-key': 'key1'
                        }
                    ]
                };

                await modifyCandidate(candidateDS);

                expect(candidateDS.server[0]).toEqual({
                    label: 'server1',
                    'user-name': 'newUser',
                    password: 'newPassword',
                    'ssh-key': 'newKey'
                });

                return { success: true };
            }
        );

        await expect(
            updateServer({
                'server-label': 'server1',
                'user-name': 'newUser',
                password: 'newPassword',
                'ssh-key': 'newKey'
            })
        ).resolves.toBeUndefined();

        expect(executeTransaction).toHaveBeenCalled();
        expect(DomainControllerStore.save).toHaveBeenCalled();
    });

    test('should update only user-name', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    {
                        label: 'server1',
                        'user-name': 'oldUser',
                        password: 'oldPassword',
                        'ssh-key': 'oldKey'
                    }
                ]
            }
        });

        executeTransaction.mockImplementation(
            async ({ modifyCandidate }) => {

                const candidateDS = {
                    server: [
                        {
                            label: 'server1',
                            'user-name': 'oldUser',
                            password: 'oldPassword',
                            'ssh-key': 'oldKey'
                        }
                    ]
                };

                await modifyCandidate(candidateDS);

                expect(candidateDS.server[0]).toEqual({
                    label: 'server1',
                    'user-name': 'newUser',
                    password: 'oldPassword',
                    'ssh-key': 'oldKey'
                });

                return { success: true };
            }
        );

        await expect(
            updateServer({
                'server-label': 'server1',
                'user-name': 'newUser'
            })
        ).resolves.toBeUndefined();
    });

    test('should update only password', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    {
                        label: 'server1',
                        password: 'oldPassword'
                    }
                ]
            }
        });

        executeTransaction.mockResolvedValue({
            success: true
        });

        await expect(
            updateServer({
                'server-label': 'server1',
                password: 'newPassword'
            })
        ).resolves.toBeUndefined();

        expect(executeTransaction).toHaveBeenCalled();
    });

    test('should update only ssh-key', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    {
                        label: 'server1',
                        'ssh-key': 'oldKey'
                    }
                ]
            }
        });

        executeTransaction.mockResolvedValue({
            success: true
        });

        await expect(
            updateServer({
                'server-label': 'server1',
                'ssh-key': 'newKey'
            })
        ).resolves.toBeUndefined();
    });

    test('should succeed when no optional fields are provided', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    {
                        label: 'server1',
                        'user-name': 'user1'
                    }
                ]
            }
        });

        executeTransaction.mockResolvedValue({
            success: true
        });

        await expect(
            updateServer({
                'server-label': 'server1'
            })
        ).resolves.toBeUndefined();

        expect(executeTransaction).toHaveBeenCalled();
    });

    test('should throw 404 when server does not exist', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: []
            }
        });

        await expect(
            updateServer({
                'server-label': 'unknownServer'
            })
        ).rejects.toMatchObject({
            status: 404,
            message: 'Server does not exists'
        });
    });

    test('should throw 404 when server array is undefined', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {}
        });

        await expect(
            updateServer({
                'server-label': 'server1'
            })
        ).rejects.toMatchObject({
            status: 404,
            message: 'Server does not exists'
        });
    });

    test('should throw 462 when transaction validation fails', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    {
                        label: 'server1'
                    }
                ]
            }
        });

        executeTransaction.mockResolvedValue({
            success: false
        });

        await expect(
            updateServer({
                'server-label': 'server1',
                'user-name': 'newUser'
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
                    {
                        label: 'server1'
                    }
                ]
            }
        });

        executeTransaction.mockRejectedValue(
            new Error('transaction failed')
        );

        await expect(
            updateServer({
                'server-label': 'server1'
            })
        ).rejects.toThrow('transaction failed');
    });

    test('should reject when save fails', async () => {

        DomainControllerStore.getDatastore.mockReturnValue({
            data: {
                server: [
                    {
                        label: 'server1'
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
            updateServer({
                'server-label': 'server1'
            })
        ).rejects.toThrow('save failed');
    });

});
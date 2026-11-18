'use strict';

const { updateServer } = require('./updateServer');
const databaseCC = require('../../../utils/fileOperations');

jest.mock('../../../utils/fileOperations', () => ({
    DomainControllerStore: {
        load: jest.fn()
    },
    executeTransaction: jest.fn()
}));

describe('updateServer', () => {

    let storageMock;
    let runningDS;

    beforeEach(() => {
        jest.clearAllMocks();

        runningDS = {
            server: [
                {
                    label: 'server1',
                    'user-name': 'olduser',
                    password: 'oldpass',
                    'ssh-key': 'oldkey'
                }
            ]
        };

        storageMock = {
            getDatastore: jest.fn().mockReturnValue({
                data: runningDS
            }),
            save: jest.fn().mockResolvedValue()
        };

        databaseCC.DomainControllerStore.load.mockResolvedValue({
            storage: storageMock
        });
    });

    test('should throw 404 when server does not exist', async () => {

        await expect(
            updateServer(
                {
                    'server-label': 'unknownServer'
                }
            )
        ).rejects.toMatchObject({
            status: 404
        });

        expect(databaseCC.executeTransaction).not.toHaveBeenCalled();
    });

    test('should update all server fields successfully', async () => {

        databaseCC.executeTransaction.mockImplementation(
            async ({ modifyCandidate }) => {

                const candidateDS = {
                    server: [
                        {
                            label: 'server1',
                            'user-name': 'olduser',
                            password: 'oldpass',
                            'ssh-key': 'oldkey'
                        }
                    ]
                };

                await modifyCandidate(candidateDS);

                expect(candidateDS.server[0]).toEqual({
                    label: 'server1',
                    'user-name': 'newuser',
                    password: 'newpassword',
                    'ssh-key': 'newkey'
                });

                return { success: true };
            }
        );

        await expect(
            updateServer({
                'server-label': 'server1',
                'user-name': 'newuser',
                password: 'newpassword',
                'ssh-key': 'newkey'
            })
        ).resolves.toBeUndefined();

        expect(storageMock.save).toHaveBeenCalled();
    });

    test('should update only provided fields', async () => {

        databaseCC.executeTransaction.mockImplementation(
            async ({ modifyCandidate }) => {

                const candidateDS = {
                    server: [
                        {
                            label: 'server1',
                            'user-name': 'olduser',
                            password: 'oldpass',
                            'ssh-key': 'oldkey'
                        }
                    ]
                };

                await modifyCandidate(candidateDS);

                expect(candidateDS.server[0]).toEqual({
                    label: 'server1',
                    'user-name': 'newuser',
                    password: 'oldpass',
                    'ssh-key': 'oldkey'
                });

                return {
                    success: true
                };
            }
        );

        await updateServer({
            'server-label': 'server1',
            'user-name': 'newuser'
        });

        expect(storageMock.save).toHaveBeenCalled();
    });

    test('should reject when transaction validation fails', async () => {

        databaseCC.executeTransaction.mockResolvedValue({
            success: false
        });

        await expect(
            updateServer({
                'server-label': 'server1'
            })
        ).rejects.toMatchObject({
            status: 462
        });

        expect(storageMock.save).not.toHaveBeenCalled();
    });

    test('should ignore empty string values', async () => {

        databaseCC.executeTransaction.mockImplementation(
            async ({ modifyCandidate }) => {

                const candidateDS = {
                    server: [
                        {
                            label: 'server1',
                            'user-name': 'olduser',
                            password: 'oldpass',
                            'ssh-key': 'oldkey'
                        }
                    ]
                };

                await modifyCandidate(candidateDS);

                expect(candidateDS.server[0]).toEqual({
                    label: 'server1',
                    'user-name': 'olduser',
                    password: 'oldpass',
                    'ssh-key': 'oldkey'
                });

                return {
                    success: true
                };
            }
        );

        await updateServer({
            'server-label': 'server1',
            'user-name': '',
            password: '',
            'ssh-key': ''
        });

        expect(storageMock.save).toHaveBeenCalled();
    });

});
'use strict';

jest.mock('../../../utils/DomainControllerStore');
jest.mock('../../../utils/writeOperations');

const DomainControllerStore = require('../../../utils/DomainControllerStore');
const { executeTransaction } = require('../../../utils/writeOperations');
const { updateServer } = require('./updateServer');

describe('updateServer', () => {
    let runningData;
    let candidateData;

    beforeEach(() => {
        jest.clearAllMocks();

        runningData = {
            server: [
                {
                    label: 'server1',
                    'user-name': 'oldUser',
                    password: 'oldPassword',
                    'ssh-key': 'oldKey'
                }
            ]
        };

        candidateData = {
            server: [
                {
                    label: 'server1',
                    'user-name': 'oldUser',
                    password: 'oldPassword',
                    'ssh-key': 'oldKey'
                }
            ]
        };

        DomainControllerStore.getDatastore.mockReturnValue({
            data: runningData
        });

        DomainControllerStore.save = jest.fn().mockResolvedValue();
    });

    test('should update all server fields successfully', async () => {
        executeTransaction.mockImplementation(async (config) => {
            await config.modifyCandidate(candidateData);
            return { success: true };
        });

        const body = {
            'server-label': 'server1',
            'user-name': 'newUser',
            password: 'newPassword',
            'ssh-key': 'newKey'
        };

        await expect(
            updateServer(body)
        ).resolves.toBeUndefined();

        expect(candidateData.server[0]).toEqual({
            label: 'server1',
            'user-name': 'newUser',
            password: 'newPassword',
            'ssh-key': 'newKey'
        });

        expect(DomainControllerStore.save).toHaveBeenCalled();
    });

    test('should update only user-name', async () => {
        executeTransaction.mockImplementation(async (config) => {
            await config.modifyCandidate(candidateData);
            return { success: true };
        });

        const body = {
            'server-label': 'server1',
            'user-name': 'newUser'
        };

        await updateServer(body);

        expect(candidateData.server[0]).toEqual({
            label: 'server1',
            'user-name': 'newUser',
            password: 'oldPassword',
            'ssh-key': 'oldKey'
        });

        expect(DomainControllerStore.save).toHaveBeenCalled();
    });

    test('should update only password', async () => {
        executeTransaction.mockImplementation(async (config) => {
            await config.modifyCandidate(candidateData);
            return { success: true };
        });

        const body = {
            'server-label': 'server1',
            password: 'newPassword'
        };

        await updateServer(body);

        expect(candidateData.server[0]).toEqual({
            label: 'server1',
            'user-name': 'oldUser',
            password: 'newPassword',
            'ssh-key': 'oldKey'
        });
    });

    test('should update only ssh-key', async () => {
        executeTransaction.mockImplementation(async (config) => {
            await config.modifyCandidate(candidateData);
            return { success: true };
        });

        const body = {
            'server-label': 'server1',
            'ssh-key': 'newKey'
        };

        await updateServer(body);

        expect(candidateData.server[0]).toEqual({
            label: 'server1',
            'user-name': 'oldUser',
            password: 'oldPassword',
            'ssh-key': 'newKey'
        });
    });

    test('should throw 404 when server does not exist', async () => {
        const body = {
            'server-label': 'unknownServer'
        };

        await expect(
            updateServer(body)
        ).rejects.toMatchObject({
            status: 404,
            message: 'Server does not exists'
        });

        expect(executeTransaction).not.toHaveBeenCalled();
        expect(DomainControllerStore.save).not.toHaveBeenCalled();
    });

    test('should throw 462 when transaction validation fails', async () => {
        executeTransaction.mockResolvedValue({
            success: false
        });

        const body = {
            'server-label': 'server1'
        };

        await expect(
            updateServer(body)
        ).rejects.toMatchObject({
            status: 462,
            message: 'Validation failed.'
        });

        expect(DomainControllerStore.save).not.toHaveBeenCalled();
    });

    test('should reject when save fails', async () => {
        executeTransaction.mockImplementation(async (config) => {
            await config.modifyCandidate(candidateData);
            return { success: true };
        });

        DomainControllerStore.save.mockRejectedValue(
            new Error('save failed')
        );

        const body = {
            'server-label': 'server1',
            'user-name': 'newUser'
        };

        await expect(
            updateServer(body)
        ).rejects.toThrow('save failed');
    });

    test('should keep existing values when optional fields are undefined', async () => {
        executeTransaction.mockImplementation(async (config) => {
            await config.modifyCandidate(candidateData);
            return { success: true };
        });

        const body = {
            'server-label': 'server1'
        };

        await updateServer(body);

        expect(candidateData.server[0]).toEqual({
            label: 'server1',
            'user-name': 'oldUser',
            password: 'oldPassword',
            'ssh-key': 'oldKey'
        });
    });
});
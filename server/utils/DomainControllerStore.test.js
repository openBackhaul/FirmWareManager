const store = require('./DomainControllerStore');

describe('DomainControllerStore', () => {
    let originalDomainController;

    beforeEach(() => {
        originalDomainController = store.domainController;
    });

    afterEach(() => {
        store.domainController = originalDomainController;
    });

    test('returns the running datastore when present', () => {
        const running = { storage: 'running' };
        store.domainController = {
            'domain-controller': { 'network-control-domain': [running] }
        };

        expect(store.getDatastore('running')).toEqual({ success: true, data: running });
        expect(store.getDatastore('candidate')).toEqual({ success: false, data: {} });
    });

    test('returns an error when the running datastore is missing', () => {
        store.domainController = {
            'domain-controller': { 'network-control-domain': [] }
        };

        expect(store.getDatastore('running')).toEqual({
            success: false,
            error: new Error('Running datastore not found')
        });
        expect(store.cloneDatastore('running')).toEqual({
            success: false,
            data: null,
            error: new Error('Running datastore not found')
        });
    });
});
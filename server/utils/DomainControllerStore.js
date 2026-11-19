const fs = require("fs");
const path = require("path");


class DomainControllerStore {
    constructor() {
        this.domainController = null;
        this.jsonFilePath = null;

        this.locks = {
            running: false,
            candidate: false
        };
    }
    initialize(jsonFilePath) {
        this.jsonFilePath = jsonFilePath;

        try {
            const content = fs.readFileSync(jsonFilePath, 'utf8');
            this.domainController = JSON.parse(content);

            console.log(
                `DomainController loaded into memory from ${jsonFilePath}`
            );
        } catch (err) {
            console.error('Failed to load DomainController:', err.message);
            this.domainController = {};
        }
    }
    getStore() {
        return this.domainController;
    }
    getDatastore(storage) {

        const store = this.getStore();

        const datastore =
            store["domain-controller"]
            ["network-control-domain"]
                .find(ds => ds.storage === storage);

        if (!datastore) {
            return { success: false, data: {} }
        }

        return { success: true, data: datastore };
    }

    overwriteDatastore(
        targetStorage,
        sourceData
    ) {

        const domains =
            this.domainController["domain-controller"]
            ["network-control-domain"];

        const index =
            domains.findIndex(
                ds => ds.storage === targetStorage
            );
        const datastore = structuredClone(sourceData);

        datastore.storage = targetStorage;

        if (index === -1) {
            domains.push(datastore);
        } else {
            domains[index] = datastore;
        }
        return { success: true };
    }

    cloneDatastore(storage) {
        const result = this.getDatastore(storage);
        if (!result.success) {
            return { success: false, data: null };
        }
        return { success: true, data: structuredClone(result.data) };
    }

    lock(storage) {

        if (this.locks[storage]) {
            return { success: false, error: new Error(`${storage} datastore locked`) };
        }

        this.locks[storage] = true;
        return { success: true };
    }

    unlock(storage) {
        this.locks[storage] = false;
        return { success: true };
    }

    isLocked(storage) {
        return this.locks[storage];
    }

    async save() {
        if (!this.jsonFilePath) {
            return {
                success: false,
                message: "jsonFilePath not configured"
            };
        }
        try {
            await fs.promises.writeFile(
                this.jsonFilePath,
                JSON.stringify(this.domainController, null, 2),
                "utf8");
            return { success: true };
        } catch (err) {
            return {
                success: false,
                error: err
            };
        }
    }

    async reload() {
        try {
            const content =
                await fs.promises.readFile(
                    this.jsonFilePath,
                    "utf8"
                );
            this.domainController =
                JSON.parse(content);
            return {
                success: true
            };
        } catch (err) {
            return {
                success: false,
                error: err
            };
        }
    }
}

module.exports = new DomainControllerStore();
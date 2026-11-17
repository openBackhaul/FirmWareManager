const fs = require("fs");
const path = require("path");

const filePath = global.databasePath
    ? path.resolve(global.databasePath)
    : path.resolve(__dirname, "../database", "DC.json");

class DomainControllerStore {

    constructor(domainControllerJson, jsonFilePath) {
        this.domainController =
            structuredClone(domainControllerJson);

        this.jsonFilePath = jsonFilePath;

        this.locks = {
            running: false,
            candidate: false
        };
    }

    getDatastore(storage) {

        const datastore =
            this.domainController["domain-controller"]
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
            domains[index] = structuredClone(sourceData);
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
                JSON.stringify(
                    this.domainController,
                    null,
                    2
                ),
                "utf8"
            );

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
    static async load(jsonPath = filePath) {

        try {

            const content =
                await fs.promises.readFile(
                    jsonPath,
                    "utf8"
                );

            const json =
                JSON.parse(content);

            return {
                success: true,
                store: new DomainControllerStore(
                    json,
                    jsonPath
                )
            };

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

async function executeTransaction({
    store,
    modifyCandidate,
    validations = []
}) {

    let runningLocked = false;
    let candidateLocked = false;

    try {
        // Lock Running
        const runningLock =
            store.lock("running");

        if (!runningLock.success) {
            return {
                success: false,
                status: 423,
                error: runningLock
            };
        }

        runningLocked = true;

        // Lock Candidate
        const candidateLock = store.lock("candidate");

        if (!candidateLock.success) {
            store.unlock("running");
            return {
                success: false,
                status: 423,
                error: candidateLock
            };
        }
        candidateLocked = true;

        // Clone Candidate from Running
        const runningCopy = store.cloneDatastore("running");

        if (!runningCopy.success) {
            return runningCopy;
        }

        runningCopy.data.storage = "candidate";

        const overwriteResult =
            store.overwriteDatastore(
                "candidate",
                runningCopy.data
            );
        if (!overwriteResult.success) {
            return overwriteResult;
        }

        // Get CandidateDS
        const candidateResult = store.getDatastore("candidate");

        const candidateDS = candidateResult.data;

        // Apply Service Specific Changes
        const changeResult = await modifyCandidate(candidateDS);

        if (changeResult && changeResult.success === false) {
            return changeResult;
        }
        // Trigger Validations
        for (const validation of validations) {

            const result = await validation(candidateDS);
            if (!result.success) {
                return {
                    success: false,
                    status: 462,
                    error: result
                };
            }
        }

        // Overwrite Running from Candidate
        const candidateCopy = store.cloneDatastore("candidate");

        if (!candidateCopy.success) {
            return candidateCopy;
        }

        candidateCopy.data.storage = "running";

        const commitResult = store.overwriteDatastore("running", candidateCopy.data);

        if (!commitResult.success) {
            return commitResult;
        }

        return {
            success: true,
            status: 204
        };

    } finally {

        if (candidateLocked) {
            store.unlock("candidate");
        }

        if (runningLocked) {
            store.unlock("running");
        }
    }
}

module.exports = {
    DomainControllerStore,
    executeTransaction
};

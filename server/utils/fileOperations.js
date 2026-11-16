const fs = require("fs").promises;
const path = require("path");

const dcFilePath = path.join("../database", "DC.json");

async function loadDCData() {
    try {
        const fileContent = await fs.readFile(dcFilePath, "utf8");
        return JSON.parse(fileContent);
    } catch (err) {
        throw new Error(`Failed to load DC.json: ${err.message}`);
    }
}

async function saveDCData(dcData) {
    try {
        await fs.writeFile(
            dcFilePath,
            JSON.stringify(dcData, null, 4)
        );
    } catch (err) {
        throw new Error(`Failed to save DC.json: ${err.message}`);
    }
}

function getDataStore(dcData, storageName) {

    const storage =
        dcData["domain-controller"]
              ["network-control-domain"]
              .find(item => item.storage === storageName);

    if (!storage) {
        throw new Error(`${storageName} storage not found`);
    }

    return storage;
}

function copyFromRunningDSToCandidateDS(dcData) {

    const runningDS = getDataStore(dcData, "running");

    const candidateCopy =
        JSON.parse(JSON.stringify(runningDS));

    candidateCopy.storage = "candidate";

    return candidateCopy;
}

function overwriteToRunningDS(dcData, candidateDS) {

    const domains =
        dcData["domain-controller"]
              ["network-control-domain"];

    const runningIndex = domains.findIndex(
        item => item.storage === "running"
    );

    if (runningIndex === -1) {
        throw new Error("Running storage not found");
    }

    const runningCopy =
        JSON.parse(JSON.stringify(candidateDS));

    runningCopy.storage = "running";

    domains[runningIndex] = runningCopy;
}

function fetchCollection(dcData, storageName, collectionName) {

    const storage = getDataStore(dcData, storageName);

    return storage[collectionName];
}

module.exports = {
    loadDCData,
    saveDCData,
    getDataStore,
    copyFromRunningDSToCandidateDS,
    overwriteToRunningDS,
    fetchCollection
};

const ds = require("./fileOperations");

async function main() {
    try {
        
        const dcData = await ds.loadDCData();

        const candidateDS = ds.copyFromRunningDSToCandidateDS(dcData);

        ds.overwriteToRunningDS(dcData, candidateDS);

        await ds.saveDCData(dcData);

        const devices =
            ds.fetchCollection(dcData, "running", "device");
        console.log(devices);

        const deviceModel =
            ds.fetchCollection(dcData, "running", "device-model");
        console.log(deviceModel);

        const deviceGroup =
            ds.fetchCollection(dcData, "running", "device-group");
        console.log(deviceGroup);

    } catch (err) {
        console.error(err);
    }
}

main();
'use strict';

const databaseCC = require('../../../utils/fileOperations');
const createHttpError = require("http-errors");

/**
 * updateFirmwareResource: POST /update-firmware-resource
 * Spec: spec/Services/updateFirmwareResource/1.0.0
 *
 * Updates an existing FirmwareResource
 *
 * body Updatefirmwareresource_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/

function updateFirmwareResource(body, user, originator, xCorrelator, traceIndicator, customerJourney) {
    return new Promise(async function (resolve, reject) {
        try {
            //extract input paramters from request body
            const {
                "firmware-resource-name": firmwareResourceName,
                "firmware-resource-version": firmwareResourceVersion,
                "server-label": serverLabel,
                "source-uri": sourceUri,
                "file-name": fileName
            } = body || {};

            const dcStore = await databaseCC.DomainControllerStore.load();
            const storage = dcStore.storage;
            const runningResult = storage.getDatastore('running').data;
            const firmwareResources = runningResult["firmware-resource"] || [];
            
            const indexPos = firmwareResources.findIndex(fw => fw.name === firmwareResourceName);
            if (indexPos == -1) {
                throw new createHttpError(404, 'firmware-resource does not exists');
            }

            //Check server label exists
            runningResult.server = runningResult.server || [];
            const serverExists = runningResult.server.some(server => server.label === serverLabel);
            if (!serverExists) {
                throw new createHttpError(404, 'Server label does not exists');
            }

            // Verify serverLabel, sourceUri and fileName already documented
            const fwExists = firmwareResources.some(firmware =>
                firmware.server === serverLabel &&
                firmware["source-uri"] === sourceUri &&
                firmware["file-name"] === fileName
            );
            if (fwExists) {
                throw new createHttpError(422, 'serverLabel, sourceUri and fileName already documented');
            }

            const transactionResult = await databaseCC.executeTransaction({
                storage,
                modifyCandidate: async (
                    candidateDS
                ) => {
                    candidateDS["firmware-resource"][indexPos]["name"] = firmwareResourceName;

                    if (typeof firmwareResourceVersion !== "string" || firmwareResourceVersion.trim() === "") {
                        console.log("firmwareResourceVersion is empty string");
                    } else {
                        candidateDS["firmware-resource"][indexPos]["version"] = firmwareResourceVersion;
                    }

                    if (serverLabel !== undefined) {
                        if (typeof serverLabel !== "string" || serverLabel.trim() === "") {
                            console.log("server label is empty string");
                        } else {
                            candidateDS["firmware-resource"][indexPos]["server"] = serverLabel;
                        }
                    }

                    if (sourceUri !== undefined) {
                        if (typeof sourceUri !== "string" || sourceUri.trim() === "") {
                            console.log("sourceUri is empty string");
                        } else {
                            candidateDS["firmware-resource"][indexPos]["source-uri"] = sourceUri;
                        }
                    }

                    if (fileName !== undefined) {
                        if (typeof fileName !== "string" || fileName.trim() === "") {
                            console.log("file-name is empty string");
                        } else {
                            candidateDS["firmware-resource"][indexPos]["file-name"] = fileName;
                        }
                    }
                    return {
                        success: true
                    };
                },

                validations: [
                    // validateServerLabels,
                    // validateCredentials
                ]
            })
            if (!transactionResult.success) {
                throw new createHttpError(462, 'Validation failed.');
            }
            await storage.save();
            resolve();
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = { updateFirmwareResource };
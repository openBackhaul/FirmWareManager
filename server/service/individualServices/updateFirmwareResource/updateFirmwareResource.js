'use strict';

const DomainControllerStore = require('../../../utils/DomainControllerStore');
const { executeTransaction } = require('../../../utils/writeOperations');
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

            const runningDS = DomainControllerStore.getDatastore('running').data;
            const firmwareResources = runningDS["firmware-resource"] || [];

            const indexPos = firmwareResources.findIndex(fw => fw.name === firmwareResourceName);
            if (indexPos == -1) {
                throw new createHttpError(404, 'firmware-resource-name does not exists');
            }
   
            //Check input serverLabel exists in runningDS server list
            if (serverLabel !== undefined) {
                runningDS.server = runningDS.server || [];
                const serverExists = runningDS.server.some(server => server.label === serverLabel);
                if (!serverExists) {
                    throw new createHttpError(404, 'server-label does not exists');
                }
            }

            const serverLabelTemp = serverLabel ?? firmwareResources[indexPos]["server"];
            const sourceUriTemp = sourceUri ?? firmwareResources[indexPos]["source-uri"];
            const fileNameTemp   = fileName ?? firmwareResources[indexPos]["file-name"];

            const fwExists = firmwareResources.some(firmware =>
                firmware.server === serverLabelTemp &&
                firmware["source-uri"] === sourceUriTemp &&
                firmware["file-name"] === fileNameTemp
            );
            if (fwExists) {
                throw new createHttpError(422, 'server-label, source-uri, file-name combination already documented');
            }

            const transactionResult = await executeTransaction({
                storage: DomainControllerStore,
                modifyCandidate: async (
                    candidateDS
                ) => {
                    candidateDS["firmware-resource"][indexPos]["name"] = firmwareResourceName;
                    candidateDS["firmware-resource"][indexPos]["version"] = firmwareResourceVersion;
                    candidateDS["firmware-resource"][indexPos]["server"] = serverLabelTemp;
                    candidateDS["firmware-resource"][indexPos]["source-uri"] = sourceUriTemp;
                    candidateDS["firmware-resource"][indexPos]["file-name"] = fileNameTemp;
                    
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
            await DomainControllerStore.save();
            resolve();
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = { updateFirmwareResource };
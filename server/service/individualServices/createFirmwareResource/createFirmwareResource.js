'use strict';

const DomainControllerStore = require('../../../utils/DomainControllerStore');
const { executeTransaction } = require('../../../utils/writeOperations');
const createHttpError = require("http-errors");

/**
 * createFirmwareResource: POST /create-firmware-resource
 * Spec: spec/Services/createFirmwareResource/1.0.0
 *
 * Creates a new FirmwareResource
 *
 * body Createfirmwareresource_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/

function createFirmwareResource(body, user, originator, xCorrelator, traceIndicator, customerJourney) {
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

            // Check firmwareResourceName
            const fwrNameExists = firmwareResources.some(fwr => fwr.name === firmwareResourceName);
            if (fwrNameExists) {
                throw new createHttpError(409, 'firmwareResourceName already exists');
            }

            // Check serverLabel
            runningDS.server = runningDS.server || [];
            const serverExists = runningDS.server.some(server => server.label === serverLabel);
            if (!serverExists) {
                throw new createHttpError(404, 'server-label does not exists');
            }

            // Check server-label, source-uri, file-name combination
            const fwrExists = firmwareResources.some(firmware =>
                firmware.server === serverLabel &&
                firmware["source-uri"] === sourceUri &&
                firmware["file-name"] === fileName
            );
            if (fwrExists) {
                throw new createHttpError(422, 'server-label, source-uri, file-name combination already documented');
            }

            const transactionResult = await executeTransaction({
                storage: DomainControllerStore,
                modifyCandidate: async (
                    candidateDS
                ) => {
                    // Create object in ["firmware-resource"]
                    candidateDS["firmware-resource"].push(
                        {
                            "name": firmwareResourceName,
                            "version": firmwareResourceVersion,
                            "server": serverLabel,
                            "source-uri": sourceUri,
                            "file-name": fileName
                        }
                    );                    
                    
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

module.exports = { createFirmwareResource };
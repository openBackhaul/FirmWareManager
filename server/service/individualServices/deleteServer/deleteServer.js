'use strict';

const createHttpError = require("http-errors");
const { executeTransaction } = require('../../../utils/writeOperations');
const DomainControllerStore = require('../../../utils/DomainControllerStore');

/**
 * deleteServer: POST /delete-server
 * Spec: spec/Services/deleteServer/1.0.0
 *
  * Deletes an existing Server
 *
 * body Deleteserver_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/

function deleteServer(body, user, originator, xCorrelator, traceIndicator, customerJourney) {
    return new Promise(async function (resolve, reject) {
        try {
            //extract input paramters from request body
            const { "server-label": serverLabel } = body;
            
            const runningDS = DomainControllerStore.getDatastore('running').data;
            runningDS.server = runningDS.server || [];
            
            const indexPos = runningDS.server.findIndex(server => server.label === serverLabel);
            if (indexPos === -1) {
                throw new createHttpError(404, 'Server does not exist');
            }

            // Prevent deletion if the server is still referenced by any firmware-resource
            const firmwareResources = runningDS["firmware-resource"] || [];
            const referenceObject = firmwareResources
                .filter(fwResources => fwResources.server === serverLabel)
                .map(fwResources => ({
                    serverLabel,
                    firmwareResourceName: fwResources.name,
                    firmwareResourceVersion: fwResources.version
                }));

            if (referenceObject.length > 0) {
                throw new createHttpError(
                    463,
                    `Server is referenced by firmware-resource: ${JSON.stringify(referenceObject)}`
                );
            }
            
            const transactionResult = await executeTransaction({
                storage: DomainControllerStore,
                modifyCandidate: async (
                    candidateDS
                ) => {
                    //delete serverLabel reference object from [server]
                    const candidateIndex = candidateDS.server.findIndex(
                        server => server.label === serverLabel
                    );                    
                    candidateDS.server.splice(candidateIndex, 1);
                    
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

module.exports = { deleteServer };
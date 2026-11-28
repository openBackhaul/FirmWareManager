'use strict';

const DomainControllerStore = require('../../../utils/DomainControllerStore');
const { executeTransaction } = require('../../../utils/writeOperations');
const createHttpError = require("http-errors");

/**
 * updateServer: POST /update-server
 * Spec: spec/Services/updateServer/1.0.0
 *
 * Updates an existing Server
 *
 * body Updateserver_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/

function updateServer(body, user, originator, xCorrelator, traceIndicator, customerJourney) {
    return new Promise(async function (resolve, reject) {
        try {
            //extract input paramters from request body
            const {
                "server-label": serverLabel,
                "user-name": userName,
                password,
                "ssh-key": sshKey
            } = body || {};
            
            const runningDS = DomainControllerStore.getDatastore('running').data;
            runningDS.server = runningDS.server || [];
            
            const indexPos = runningDS.server.findIndex(server => server.label === serverLabel);
            if (indexPos == -1) {
                throw new createHttpError(404, 'Server does not exists');
            }
            
            const transactionResult = await executeTransaction({
                storage: DomainControllerStore,
                modifyCandidate: async (
                    candidateDS
                ) => {
                    candidateDS.server = candidateDS.server || [];
                    const cdsServerIndex = candidateDS.server.findIndex(
                        server => server.label === serverLabel
                    );
                    candidateDS.server[cdsServerIndex]["label"] = serverLabel;
                    
                    if (userName !== undefined) {
                       candidateDS.server[cdsServerIndex]["user-name"] = userName;
                    }
                    if (password !== undefined) {
                        candidateDS.server[cdsServerIndex]["password"] = password;
                    }
                    if (sshKey !== undefined) {
                        candidateDS.server[cdsServerIndex]["ssh-key"] = sshKey;
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
            await DomainControllerStore.save();
            resolve();
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = { updateServer };
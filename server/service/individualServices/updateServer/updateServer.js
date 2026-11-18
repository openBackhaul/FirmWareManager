'use strict';

const databaseCC = require('../../../utils/fileOperations');
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

            if (!serverLabel) {
                throw new Error("server-label is mandatory");
            }

            const dcStore = await databaseCC.DomainControllerStore.load();
            const storage = dcStore.storage;
            const runningResult = storage.getDatastore('running').data;
            runningResult.server = runningResult.server || [];
            const indexPos = runningResult.server.findIndex(server => server.label === serverLabel);
            if (indexPos == -1) {
                throw new createHttpError(409, 'Server does not exists');
            }
            else {
                await databaseCC.executeTransaction({
                    storage,
                    modifyCandidate: async (
                        candidateDS
                    ) => {
                        if (userName !== undefined) {
                            if (typeof userName !== "string" || userName.trim() === "") {
                                console.log("user-name is empty string");
                            } else {
                                candidateDS.server[indexPos]["user-name"] = userName;
                            }
                        }

                        if (password !== undefined) {
                            if (typeof password !== "string" || password.trim() === "") {
                                console.log("password is empty string");
                            } else {
                                candidateDS.server[indexPos]["password"] = password;
                            }
                        }

                        if (sshKey !== undefined) {
                            if (typeof sshKey !== "string" || sshKey.trim() === "") {
                                console.log("ssh-key is empty string");
                            } else {
                                candidateDS.server[indexPos]["ssh-key"] = sshKey;
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
                await storage.save();
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = { updateServer };
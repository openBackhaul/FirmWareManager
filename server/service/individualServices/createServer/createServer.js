'use strict';

const databaseCC = require('../../../utils/fileOperations');
const createHttpError = require("http-errors");


/**
 * createServer: POST /create-server
 * Spec: spec/Services/createServer/1.0.0
 *
 * Creates a new Server
 *
 * body Createserver_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
function createServer(body, user, originator, xCorrelator, traceIndicator, customerJourney) {
    return new Promise(async function (resolve, reject) {
        try {
            const { "server-label": serverLabel, ...rest } = body;
            const dcStore = await databaseCC.DomainControllerStore.load();
            const storage = dcStore.storage;
            const runningResult = storage.getDatastore('running').data;
            runningResult.server = runningResult.server || [];
            const exists = runningResult.server.some(server => server.label === serverLabel);
            if (exists) {
                throw new createHttpError(409, 'Server already exists');
            }
            const transactionResult = await databaseCC.executeTransaction({
                storage: storage,
                modifyCandidate: async (
                    candidateDS
                ) => {
                    candidateDS.server.push({ "label": serverLabel, ...rest });
                    return {
                        success: true
                    };
                },

                validations: [
                    // validateServerLabels,
                    // validateCredentials
                ]
            });
            if (!transactionResult.success) {
                throw new createHttpError(462, 'Validation failed.');
            }
            await storage.save();
            resolve();
        } catch (error) {
            reject({ code: error.statusCode, message: error.message });
        }
    })
};

module.exports = { createServer };

'use strict';

const createHttpError = require("http-errors");
const { executeTransaction } = require('../../../utils/writeOperations');
const DomainControllerStore = require('../../../utils/DomainControllerStore');

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
            const runningDS = DomainControllerStore.getDatastore('running').data;
            runningDS.server = runningDS.server || [];
            const exists = runningDS.server.some(server => server.label === serverLabel);
            if (exists) {
                throw new createHttpError(409, 'Server already exists');
            }
            const transactionResult = await executeTransaction({
                storage: DomainControllerStore,
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
            await DomainControllerStore.save();
            resolve();
        } catch (error) {
            reject({ code: error.statusCode, message: error.message });
        }
    })
};

module.exports = { createServer };

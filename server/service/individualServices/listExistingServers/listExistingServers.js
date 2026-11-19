`use strict`;

const DomainControllerStore = require('../../../utils/DomainControllerStore');

/**
 * listExistingServers: POST /list-existing-servers
 * Spec: spec/Services/listExistingServers/1.0.0
 * 
 * Provides list of Server definitions
 *
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * returns List
 **/
function listExistingServers(user, originator, xCorrelator, traceIndicator, customerJourney) {
    return new Promise(async function (resolve, reject) {
        try {
            const runningDS = DomainControllerStore.getDatastore('running').data;
            const returnObject = runningDS.server;
            resolve(returnObject);
        } catch (error) {
            reject({ code: error.statusCode, message: error.message });
        }
    });
}

module.exports = { listExistingServers };
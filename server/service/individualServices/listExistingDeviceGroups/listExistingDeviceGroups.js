'use strict';

/**
 * listExistingDeviceGroups: POST /list-existing-device-groups
 * Spec: spec/Services/listExistingDeviceGroups/1.0.0
 *
 * Provides list of DeviceGroups
 *
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]'
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * returns List
 *
 * Generated stub. Replace it with the implementation.
 **/
function listExistingDeviceGroups(user, originator, xCorrelator, traceIndicator, customerJourney) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "device-group-label" : "device-group-label",
  "device-model-name" : "device-model-name"
}, {
  "device-group-label" : "device-group-label",
  "device-model-name" : "device-model-name"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

module.exports = { listExistingDeviceGroups };

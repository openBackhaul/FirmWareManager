'use strict';

// Functions used by embedYourself (see spec/Services/embedYourself/<function>/)
const { run: p1ManageFirmware } = require('mw-sdn-p1-manage-firmware');

/**
 * embedYourself: POST /v1/embed-yourself
 * Spec: spec/Services/embedYourself/1.0.0
 *
 * Embed yourself into the MBH SDN application layer
 *
 * body V1_embedyourself_body
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]'
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 *
 * Generated stub. Replace it with the implementation.
 **/
function embedYourself(body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

module.exports = { embedYourself };

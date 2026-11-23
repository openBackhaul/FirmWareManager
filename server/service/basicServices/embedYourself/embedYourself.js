'use strict';

// Generic part of embedYourself (ApplicationPattern)
const BasicServices = require('onf-core-model-ap-bs/basicServices/BasicServicesService');
// Functions used by embedYourself (see spec/Services/embedYourself/<function>/)
const { run: p1ManageFirmware } = require('mw-sdn-p1-manage-firmware');
const logger = require('../../LoggingService.js').getLogger();

// true from the start of p1ManageFirmware until it stops with an error
let isFirmwareManagementStarted = false;

/**
 * Starts p1ManageFirmware without waiting for it.
 * p1ManageFirmware ends in the cyclic p1Pulser and has no success output (see its interface.yaml),
 * waiting for it would keep the request of the RegistryOffice open.
 * It is started only once, further calls are ignored until it stopped with an error.
 */
function startFirmwareManagement() {
  if (isFirmwareManagementStarted) {
    logger.warn('embedYourself: p1ManageFirmware has already been started, it is not started again');
    return;
  }
  isFirmwareManagementStarted = true;
  Promise.resolve()
    .then(function () {
      return p1ManageFirmware();
    })
    .catch(function (error) {
      isFirmwareManagementStarted = false;
      logger.error(`embedYourself: p1ManageFirmware stopped: ${error}`);
    });
}

/**
 * embedYourself: POST /v1/embed-yourself
 * Spec: spec/Services/embedYourself/1.0.0
 *
 * Embed yourself into the MBH SDN application layer
 * Automatically starts p1ManageFirmware after the embedding succeeded
 *
 * body V1_embedyourself_body
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]'
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * operationServerName String Name of the called operation (req.url)
 * no response value expected for this operation
 **/
async function embedYourself(body, user, originator, xCorrelator, traceIndicator, customerJourney, operationServerName) {
  await BasicServices.embedYourself(body, user, xCorrelator, traceIndicator, customerJourney, operationServerName);
  startFirmwareManagement();
}

module.exports = { embedYourself };

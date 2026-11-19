'use strict';
var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');
const prepareALTForwardingAutomation = require('onf-core-model-ap-bs/basicServices/services/PrepareALTForwardingAutomation');
const ForwardingAutomationService = require('onf-core-model-ap/applicationPattern/onfModel/services/ForwardingConstructAutomationServices');
const operationClientInterface = require('onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/OperationClientInterface');

/**
 * Returns detailed logging configuration.
 *
 * url String
 * returns inline_response_200_56
 **/
exports.getOperationClientDetailedLoggingIsOn = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "operation-client-interface-1-0:detailed-logging-is-on": value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * Returns life cycle state of the operation
 *
 * url String
 * returns inline_response_200_55
 **/
exports.getOperationClientLifeCycleState = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "operation-client-interface-1-0:life-cycle-state": value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * Returns key used for connecting to server.
 *
 * url String
 * returns inline_response_200_53
 **/
exports.getOperationClientOperationKey = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "operation-client-interface-1-0:operation-key": value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * Returns operation name
 *
 * url String
 * returns inline_response_200_52
 **/
exports.getOperationClientOperationName = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "operation-client-interface-1-0:operation-name": value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * Returns operational state of the operation
 *
 * url String
 * returns inline_response_200_54
 **/
exports.getOperationClientOperationalState = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "operation-client-interface-1-0:operational-state": value
      };
      if (Object.keys(response).length > 0) {
        resolve(response[Object.keys(response)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * Configures detailed logging on/off.
 *
 * url String
 * body Operationclientinterfaceconfiguration_detailedloggingison_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putOperationClientDetailedLoggingIsOn = function (url, body, uuid) {
  return new Promise(async function (resolve, reject) {
    try {
      let isUpdated = await fileOperation.writeToDatabaseAsync(url, body, false);
      if (isUpdated) {
        let forwardingAutomationInputList = await prepareALTForwardingAutomation.getALTForwardingAutomationInputForOamRequestAsync(
          uuid
        );
        ForwardingAutomationService.automateForwardingConstructWithoutInputAsync(
          forwardingAutomationInputList
        );
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * Configures key used for connecting to server.
 *
 * body Operationclientinterfaceconfiguration_operationkey_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putOperationClientOperationKey = function (body, uuid) {
  return new Promise(async function (resolve, reject) {
    try {
      let isUpdated = await operationClientInterface.setOperationKeyAsync(uuid, body["operation-client-interface-1-0:operation-key"]);
      if (isUpdated) {
        let forwardingAutomationInputList = await prepareALTForwardingAutomation.getALTForwardingAutomationInputForOamRequestAsync(
          uuid
        );
        ForwardingAutomationService.automateForwardingConstructWithoutInputAsync(
          forwardingAutomationInputList
        );
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * Configures operation name
 *
 * body Operationclientinterfaceconfiguration_operationname_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putOperationClientOperationName = function (body, uuid) {
  return new Promise(async function (resolve, reject) {
    try {
      let isUpdated = await operationClientInterface.setOperationNameAsync(uuid, body["operation-client-interface-1-0:operation-name"]);
      if (isUpdated) {
        let forwardingAutomationInputList = await prepareALTForwardingAutomation.getALTForwardingAutomationInputForOamRequestAsync(
          uuid
        );
        ForwardingAutomationService.automateForwardingConstructWithoutInputAsync(
          forwardingAutomationInputList
        );
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

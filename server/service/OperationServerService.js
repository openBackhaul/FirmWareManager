'use strict';
var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');

/**
 * Returns the configured life cycle state of the operation
 *
 * uuid String
 * returns inline_response_200_39
 **/
exports.getOperationServerLifeCycleState = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "operation-server-interface-1-0:life-cycle-state" : value
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
};

/**
 * Returns key for connecting
 *
 * uuid String
 * returns inline_response_200_40
 **/
exports.getOperationServerOperationKey = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "operation-server-interface-1-0:operation-key" : value
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
};

/**
 * Returns operation name
 *
 * uuid String
 * returns inline_response_200_38
 **/
exports.getOperationServerOperationName = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "operation-server-interface-1-0:operation-name" : value
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
};

/**
 * Configures life cycle state
 *
 * body Operationserverinterfaceconfiguration_lifecyclestate_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putOperationServerLifeCycleState = function(url, body) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = body && body['operation-server-interface-1-0:life-cycle-state'];
      let result = await fileOperation.writeToDatabaseAsync(url, value);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Changes key for connecting
 *
 * body Operationserverinterfaceconfiguration_operationkey_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putOperationServerOperationKey = function(url, body) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = body && body['operation-server-interface-1-0:operation-key'];
      let result = await fileOperation.writeToDatabaseAsync(url, value);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
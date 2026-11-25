'use strict';
var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');

/**
 * Returns name of application to be addressed
 *
 * uuid String
 * returns inline_response_200_62
 **/
exports.getHttpClientApplicationName = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "http-client-interface-1-0:application-name" : value
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
 * Returns release number of application to be addressed
 *
 * uuid String
 * returns inline_response_200_63
 **/
exports.getHttpClientReleaseNumber = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "http-client-interface-1-0:release-number" : value
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
 * Configures name of application to be addressed
 *
 * body Httpclientinterfaceconfiguration_applicationname_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putHttpClientApplicationName = function(url, body) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = body && body['http-client-interface-1-0:application-name'];
      let result = await fileOperation.writeToDatabaseAsync(url, value);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Configures release number of application to be addressed
 *
 * body Httpclientinterfaceconfiguration_releasenumber_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putHttpClientReleaseNumber = function(url, body) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = body && body['http-client-interface-1-0:release-number'];
      let result = await fileOperation.writeToDatabaseAsync(url, value);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
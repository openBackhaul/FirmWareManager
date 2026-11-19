'use strict';
var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');


/**
 * Returns the description of the Function
 *
 * url String
 * returns inline_response_200_34
 **/
exports.getFunctionProfileDescription = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "function-profile-1-0:description": value
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
 * Returns the name of the Function
 *
 * url String
 * returns inline_response_200_33
 **/
exports.getFunctionProfileFunctionName = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "function-profile-1-0:function-name": value
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
 * Returns the configured value of isActive of the Function
 *
 * url String
 * returns inline_response_200_37
 **/
exports.getFunctionProfileIsActive = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "function-profile-1-0:is-active": value
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
 * Returns the ParameterList of the Function
 *
 * url String
 * returns inline_response_200_35
 **/
exports.getFunctionProfileParameterList = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "function-profile-1-0:parameter-list": value
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
 * Returns the SubFunctionList of the Function
 *
 * url String
 * returns inline_response_200_36
 **/
exports.getFunctionProfileSubFunctionList = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "function-profile-1-0:sub-function-list": value
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
 * Configures value of isActive of the Function
 *
 * url String
 * body Functionprofileconfiguration_isactive_body
 * no response value expected for this operation
 **/
exports.putFunctionProfileIsActive = function (url, body) {
  return new Promise(async function (resolve, reject) {
    try {
      await fileOperation.writeToDatabaseAsync(url, body, false);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

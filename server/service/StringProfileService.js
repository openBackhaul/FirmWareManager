// @ts-check
'use strict';

const fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');

/**
 * Reads an attribute of string-profile-capability through its parent object,
 * so an attribute absent from the datastore yields defaultValue instead of an
 * error. An unknown uuid still rejects (the parent lookup fails).
 *
 * @param {string} url  request url ending with /string-profile-capability/<attribute>
 * @param {string} datastoreAttribute  attribute name as stored in the datastore
 * @param {any} [defaultValue]
 * @returns {Promise<any>}
 **/
async function readCapabilityAttribute(url, datastoreAttribute, defaultValue) {
  const capabilityUrl = url.substring(0, url.lastIndexOf('/'));
  const capability = await fileOperation.readFromDatabaseAsync(capabilityUrl);
  return capability?.[datastoreAttribute] ?? defaultValue;
}


/**
 * Returns the enumeration values of the String
 *
 * @param {string} url
 * returns inline_response_200_30
 **/
exports.getStringProfileEnumeration = async function (url) {
  const value = await readCapabilityAttribute(url, 'enumeration', []);
  return {
    "string-profile-1-0:enumeration": value
  };
}


/**
 * Returns the pattern of the String
 *
 * @param {string} url
 * returns inline_response_200_31
 **/
exports.getStringProfilePattern = async function (url) {
  const value = await readCapabilityAttribute(url, 'pattern', "");
  return {
    "string-profile-1-0:pattern": value
  };
}


/**
 * Returns the purpose of the String
 * (the API path ends with "purpose", the datastore attribute is "string-purpose")
 *
 * @param {string} url
 * returns inline_response_200_29
 **/
exports.getStringProfilePurpose = async function (url) {
  const value = await readCapabilityAttribute(url, 'string-purpose');
  return {
    "string-profile-1-0:purpose": value
  };
}


/**
 * Returns the name of the String
 *
 * @param {string} url
 * returns inline_response_200_28
 **/
exports.getStringProfileStringName = async function (url) {
  const value = await fileOperation.readFromDatabaseAsync(url);
  return {
    "string-profile-1-0:string-name": value
  };
}


/**
 * Returns the configured value of the String
 *
 * @param {string} url
 * returns inline_response_200_32
 **/
exports.getStringProfileStringValue = async function (url) {
  const value = await fileOperation.readFromDatabaseAsync(url);
  return {
    "string-profile-1-0:string-value": value
  };
}


/**
 * Configures value of the String
 *
 * @param {string} url
 * @param {any} body Stringprofileconfiguration_stringvalue_body
 * no response value expected for this operation
 **/
exports.putStringProfileStringValue = async function (url, body) {
  await fileOperation.writeToDatabaseAsync(url, body, false);
}

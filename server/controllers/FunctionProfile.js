'use strict';

var utils = require('../utils/writer.js');
var FunctionProfile = require('../service/FunctionProfileService');

module.exports.getFunctionProfileDescription = function getFunctionProfileDescription (req, res, next, uuid) {
  FunctionProfile.getFunctionProfileDescription(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFunctionProfileFunctionName = function getFunctionProfileFunctionName (req, res, next, uuid) {
  FunctionProfile.getFunctionProfileFunctionName(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFunctionProfileIsActive = function getFunctionProfileIsActive (req, res, next, uuid) {
  FunctionProfile.getFunctionProfileIsActive(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFunctionProfileParameterList = function getFunctionProfileParameterList (req, res, next, uuid) {
  FunctionProfile.getFunctionProfileParameterList(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFunctionProfileSubFunctionList = function getFunctionProfileSubFunctionList (req, res, next, uuid) {
  FunctionProfile.getFunctionProfileSubFunctionList(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putFunctionProfileIsActive = function putFunctionProfileIsActive (req, res, next, body, uuid) {
  FunctionProfile.putFunctionProfileIsActive(body, uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

'use strict';

var IndividualOam = require('../service/IndividualOamService');

var responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');

module.exports.listExistingEsAddresses = async function listExistingEsAddresses (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let responseCode = responseCodeEnum.code.OK;

  await IndividualOam.listExistingEsAddresses(req.url, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      responseBuilder.buildResponse(res, responseCode, response);
    })
    .catch(function (response) {
      let sentResp = responseBuilder.buildResponse(res, undefined, response);
      responseCode = sentResp.code;
    });

  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.listExistingPulsers = async function listExistingPulsers (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let responseCode = responseCodeEnum.code.OK;

  await IndividualOam.listExistingPulsers(req.url, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      responseBuilder.buildResponse(res, responseCode, response);
    })
    .catch(function (response) {
      let sentResp = responseBuilder.buildResponse(res, undefined, response);
      responseCode = sentResp.code;
    });

  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.listHistoricalErrors = async function listHistoricalErrors (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let responseCode = responseCodeEnum.code.OK;

  await IndividualOam.listHistoricalErrors(req.url, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      responseBuilder.buildResponse(res, responseCode, response);
    })
    .catch(function (response) {
      let sentResp = responseBuilder.buildResponse(res, undefined, response);
      responseCode = sentResp.code;
    });

  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.updateEsAddress = async function updateEsAddress (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let responseCode = responseCodeEnum.code.OK;

  await IndividualOam.updateEsAddress(body, req.url, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      responseBuilder.buildResponse(res, responseCode, response);
    })
    .catch(function (response) {
      let sentResp = responseBuilder.buildResponse(res, undefined, response);
      responseCode = sentResp.code;
    });

  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.updatePulser = async function updatePulser (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let responseCode = responseCodeEnum.code.OK;

  await IndividualOam.updatePulser(body, req.url, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      responseBuilder.buildResponse(res, responseCode, response);
    })
    .catch(function (response) {
      let sentResp = responseBuilder.buildResponse(res, undefined, response);
      responseCode = sentResp.code;
    });

  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};
'use strict';

var utils = require('../utils/writer.js');
var IndividualOam = require('../service/IndividualOamService');

module.exports.listExistingEsAddresses = function listExistingEsAddresses (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualOam.listExistingEsAddresses(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listExistingPulsers = function listExistingPulsers (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualOam.listExistingPulsers(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listHistoricalErrors = function listHistoricalErrors (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualOam.listHistoricalErrors(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEsAddress = function updateEsAddress (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualOam.updateEsAddress(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePulser = function updatePulser (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualOam.updatePulser(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

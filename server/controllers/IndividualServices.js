'use strict';

var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');
var RestResponseHeader = require('onf-core-model-ap/applicationPattern/rest/server/ResponseHeader');
var RestResponseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var ExecutionAndTraceService = require('onf-core-model-ap/applicationPattern/services/ExecutionAndTraceService');

var IndividualServices = require('../service/IndividualServicesService');

module.exports.addDevicesToDeviceGroup = async function addDevicesToDeviceGroup(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.addDevicesToDeviceGroup(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.addFirmwareApproval = async function addFirmwareApproval(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.addFirmwareApproval(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.addTargetFirmware = async function addTargetFirmware(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.addTargetFirmware(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.bequeathYourDataAndDie = async function bequeathYourDataAndDie(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.bequeathYourDataAndDie(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.createDeviceGroup = async function createDeviceGroup(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.createDeviceGroup(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.createDeviceModel = async function createDeviceModel(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.createDeviceModel(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.createFirmwareResource = async function createFirmwareResource(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.createFirmwareResource(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.createServer = async function createServer(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.createServer(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.deleteDeviceGroup = async function deleteDeviceGroup(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.deleteDeviceGroup(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.deleteDeviceModel = async function deleteDeviceModel(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.deleteDeviceModel(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.deleteFirmwareResource = async function deleteFirmwareResource(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.deleteFirmwareResource(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.deleteServer = async function deleteServer(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.deleteServer(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.deleteTargetFirmware = async function deleteTargetFirmware(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.deleteTargetFirmware(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.listDeviceGroupsWithoutDevices = async function listDeviceGroupsWithoutDevices(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.listDeviceGroupsWithoutDevices(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.listDeviceGroupsWithoutTargetFirmware = async function listDeviceGroupsWithoutTargetFirmware(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.listDeviceGroupsWithoutTargetFirmware(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.listDeviceModelsWithoutApprovals = async function listDeviceModelsWithoutApprovals(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.listDeviceModelsWithoutApprovals(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.listExistingDeviceGroups = async function listExistingDeviceGroups(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.listExistingDeviceGroups(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.listExistingDeviceModels = async function listExistingDeviceModels(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.listExistingDeviceModels(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.listExistingDevices = async function listExistingDevices(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.listExistingDevices(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.listExistingFirmwareApprovals = async function listExistingFirmwareApprovals(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.listExistingFirmwareApprovals(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.listExistingFirmwareResources = async function listExistingFirmwareResources(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.listExistingFirmwareResources(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.listExistingServers = async function listExistingServers(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.listExistingServers(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.listFirmwareExtractionFunctions = async function listFirmwareExtractionFunctions(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.listFirmwareExtractionFunctions(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.listHardwareExtractionFunctions = async function listHardwareExtractionFunctions(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.listHardwareExtractionFunctions(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.listIncompleteServers = async function listIncompleteServers(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.listIncompleteServers(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.listUnknownDeviceModels = async function listUnknownDeviceModels(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.listUnknownDeviceModels(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.provideExistingDevice = async function provideExistingDevice(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.provideExistingDevice(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.provideExistingDeviceGroup = async function provideExistingDeviceGroup(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBodyToDocument = {};
  await IndividualServices.provideExistingDeviceGroup(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.removeDevicesFromDeviceGroup = async function removeDevicesFromDeviceGroup(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.removeDevicesFromDeviceGroup(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.updateDeviceGroup = async function updateDeviceGroup(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.updateDeviceGroup(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.updateDeviceModel = async function updateDeviceModel(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.updateDeviceModel(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.updateFirmwareResource = async function updateFirmwareResource(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.updateFirmwareResource(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.updateServer = async function updateServer(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.updateServer(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.updateTargetFirmware = async function updateTargetFirmware(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.updateTargetFirmware(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

module.exports.withdrawFirmwareApproval = async function withdrawFirmwareApproval(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBodyToDocument = {};
  await IndividualServices.withdrawFirmwareApproval(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (responseBody) {
      responseBodyToDocument = responseBody;
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      RestResponseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (responseBody) {
      let responseHeader = await RestResponseHeader.createResponseHeader(xCorrelator, startTime, req.url, -1);
      let sentResp = RestResponseBuilder.buildResponse(res, undefined, responseBody, responseHeader);
      responseCode = sentResp.code;
      responseBodyToDocument = sentResp.body;
    });
  let execTime = await RestResponseHeader.executionTimeInMilliseconds(startTime);
  if (!execTime) execTime = 0;
  else execTime = Math.round(execTime);
  ExecutionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBodyToDocument, execTime);
};

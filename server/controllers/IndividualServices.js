'use strict';

var utils = require('../utils/writer.js');
var IndividualServices = require('../service/IndividualServicesService');

module.exports.addDevicesToDeviceGroup = function addDevicesToDeviceGroup (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.addDevicesToDeviceGroup(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addFirmwareApproval = function addFirmwareApproval (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.addFirmwareApproval(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addTargetFirmware = function addTargetFirmware (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.addTargetFirmware(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.bequeathYourDataAndDie = function bequeathYourDataAndDie (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.bequeathYourDataAndDie(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createDeviceGroup = function createDeviceGroup (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.createDeviceGroup(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createDeviceModel = function createDeviceModel (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.createDeviceModel(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createFirmwareResource = function createFirmwareResource (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.createFirmwareResource(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createServer = function createServer (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.createServer(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDeviceGroup = function deleteDeviceGroup (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.deleteDeviceGroup(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteDeviceModel = function deleteDeviceModel (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.deleteDeviceModel(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFirmwareResource = function deleteFirmwareResource (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.deleteFirmwareResource(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteServer = function deleteServer (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.deleteServer(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTargetFirmware = function deleteTargetFirmware (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.deleteTargetFirmware(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listDeviceGroupsWithoutDevices = function listDeviceGroupsWithoutDevices (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listDeviceGroupsWithoutDevices(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listDeviceGroupsWithoutTargetFirmware = function listDeviceGroupsWithoutTargetFirmware (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listDeviceGroupsWithoutTargetFirmware(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listDeviceModelsWithoutApprovals = function listDeviceModelsWithoutApprovals (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listDeviceModelsWithoutApprovals(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listExistingDeviceGroups = function listExistingDeviceGroups (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listExistingDeviceGroups(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listExistingDeviceModels = function listExistingDeviceModels (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listExistingDeviceModels(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listExistingDevices = function listExistingDevices (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listExistingDevices(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listExistingFirmwareApprovals = function listExistingFirmwareApprovals (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listExistingFirmwareApprovals(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listExistingFirmwareResources = function listExistingFirmwareResources (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listExistingFirmwareResources(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listExistingServers = function listExistingServers (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listExistingServers(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listFirmwareExtractionFunctions = function listFirmwareExtractionFunctions (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listFirmwareExtractionFunctions(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listHardwareExtractionFunctions = function listHardwareExtractionFunctions (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listHardwareExtractionFunctions(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listIncompleteServers = function listIncompleteServers (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listIncompleteServers(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listUnknownDeviceModels = function listUnknownDeviceModels (req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.listUnknownDeviceModels(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.provideExistingDevice = function provideExistingDevice (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.provideExistingDevice(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.provideExistingDeviceGroup = function provideExistingDeviceGroup (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.provideExistingDeviceGroup(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeDevicesFromDeviceGroup = function removeDevicesFromDeviceGroup (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.removeDevicesFromDeviceGroup(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDeviceGroup = function updateDeviceGroup (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.updateDeviceGroup(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateDeviceModel = function updateDeviceModel (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.updateDeviceModel(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFirmwareResource = function updateFirmwareResource (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.updateFirmwareResource(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateServer = function updateServer (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.updateServer(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTargetFirmware = function updateTargetFirmware (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.updateTargetFirmware(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.withdrawFirmwareApproval = function withdrawFirmwareApproval (req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  IndividualServices.withdrawFirmwareApproval(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

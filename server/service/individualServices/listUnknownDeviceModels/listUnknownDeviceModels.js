`use strict`;

const DomainControllerStore = require('../../../utils/DomainControllerStore');

/**
 * listUnknownDeviceModels: POST /list-unknown-device-models
 * Spec: spec/Services/listUnknownDeviceModels/1.0.0
 * 
 * Provides list of unknown DeviceModels
 *
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * returns List
 **/
function listUnknownDeviceModels(user, originator, xCorrelator, traceIndicator, customerJourney) {
    return new Promise(async function (resolve, reject) {
        try {
            const runningDS = DomainControllerStore.getDatastore('running').data;

            const deviceModels = runningDS["device-model"] || [];
            const devices = runningDS.device || [];

            // req: For each Device, deviceDeviceModel != any of [DeviceModel]
            // it become O(number of devices × number of device-models) if we use
            // loop for each Device and loop for [DeviceModel].
            // so used below approch: O(number of devices + number of device-models)
            const knownDeviceModels = new Set(
                deviceModels.map((deviceModel) => deviceModel.name)
            );

            // used Set, since it contain unique values
            const unknownDeviceModels = new Set();

            devices.forEach((device) => {
                const deviceDeviceModel = device["device-model"];

                if (!knownDeviceModels.has(deviceDeviceModel)) {
                    unknownDeviceModels.add(deviceDeviceModel);
                }
            });

            resolve([...unknownDeviceModels]);
        } catch (error) {
            reject({ code: error.statusCode, message: error.message });
        }
    });
}

module.exports = { listUnknownDeviceModels };        
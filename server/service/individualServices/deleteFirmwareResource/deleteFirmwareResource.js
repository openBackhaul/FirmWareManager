'use strict';

const DomainControllerStore = require('../../../utils/DomainControllerStore');
const { executeTransaction } = require('../../../utils/writeOperations');
const createHttpError = require("http-errors");

/**
 * deleteFirmwareResource: POST /delete-firmware-resource
 * Spec: spec/Services/deleteFirmwareResource/1.0.0
 *
 * Deletes an existing FirmwareResource
 *
 * body Deletefirmwareresource_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/

function deleteFirmwareResource(body, user, originator, xCorrelator, traceIndicator, customerJourney) {
    return new Promise(async function (resolve, reject) {
        try {
            // Extract input parameters from request body
            const {
                "firmware-resource-name": firmwareResourceName,
                "firmware-resource-version": firmwareResourceVersion
            } = body || {};

            const runningDS = DomainControllerStore.getDatastore('running').data;
            const firmwareResources = runningDS["firmware-resource"] || [];

            // Check firmwareResourceName exist in ["firmware-resource-name"]
            const fwrIndex = firmwareResources.findIndex(fw => fw.name === firmwareResourceName);
            if (fwrIndex === -1) {
                throw new createHttpError(404, 'firmware-resource-name does not exist');
            }
   
            // Checks, whether any existing DeviceGroup is referencing the given FirmwareResource
            // IF given combination of firmwareResourceName and firmwareResourceVersion
            // referenced in DeviceGroup targetFirmwareList:
            const combination = `${firmwareResourceName},${firmwareResourceVersion}`;
            const deviceGroups = runningDS["device-group"] || [];

            const referenceObject = deviceGroups.filter(
                (dg) =>
                    (dg["target-firmware-list"] || []).some(
                        (item) => item.resource === combination
                    )
                )
                .map((dg) => ({
                    "device-group-label": dg.label
                }));

            if (referenceObject.length > 0) {
                throw new createHttpError(
                    463,
                    `Firmware resource '${combination}' is referenced by device groups: ${JSON.stringify(referenceObject)}`
                );
            }

            const transactionResult = await executeTransaction({
                storage: DomainControllerStore,
                modifyCandidate: async (
                    candidateDS
                ) => {
                    const cdsFwResources = candidateDS["firmware-resource"] || [];
                    const cdsFwResourcesIndex = cdsFwResources.findIndex(
                        fw => fw.name === firmwareResourceName
                    );
                    
                    // IF combination of firmwareResourceName and firmwareResourceVersion
                    // found in [approval] then delete combination from [approval]
                    if (Array.isArray(candidateDS["device-model"])) {
                        candidateDS["device-model"].forEach((deviceModel) => {
                            if (Array.isArray(deviceModel.approval)) {
                                deviceModel.approval = deviceModel.approval.filter(
                                    (approval) => approval !== combination
                                );
                            }
                        });
                    }
                    
                    // Delete firmwareResourceName reference object from ["firmware-resource"]
                    candidateDS["firmware-resource"].splice(cdsFwResourcesIndex, 1);
                    return {
                        success: true
                    };
                },

                validations: [
                    // validateServerLabels,
                    // validateCredentials
                ]
            })
            if (!transactionResult.success) {
                throw new createHttpError(462, 'Validation failed.');
            }
            await DomainControllerStore.save();
            resolve();
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = { deleteFirmwareResource };
'use strict';
var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');
const prepareALTForwardingAutomation = require('onf-core-model-ap-bs/basicServices/services/PrepareALTForwardingAutomation');
const ForwardingAutomationService = require('onf-core-model-ap/applicationPattern/onfModel/services/ForwardingConstructAutomationServices');
const { elasticsearchService, getApiKeyAsync, getIndexAliasAsync } = require('onf-core-model-ap/applicationPattern/services/ElasticsearchService');


/**
 * Returns API key
 *
 * url String
 * returns inline_response_200_57
 **/
exports.getElasticsearchClientApiKey = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "elasticsearch-client-interface-1-0:api-key": value
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
 * Returns index alias
 *
 * url String
 * returns inline_response_200_58
 **/
exports.getElasticsearchClientIndexAlias = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "elasticsearch-client-interface-1-0:index-alias": value
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
 * Returns life cycle state of the connection towards Elasticsearch
 *
 * url String
 * returns inline_response_200_61
 **/
exports.getElasticsearchClientLifeCycleState = function (url) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "elasticsearch-client-interface-1-0:life-cycle-state": value
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
 * Returns operational state of the connection towards Elasticsearch
 * (computed at runtime by pinging the Elasticsearch instance).
 *
 * uuid String
 * returns inline_response_200_60
 **/
exports.getElasticsearchClientOperationalState = function (uuid) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await elasticsearchService.getElasticsearchClientOperationalStateAsync(uuid);
      let response = {};
      response['application/json'] = {
        "elasticsearch-client-interface-1-0:operational-state": value
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
 * Returns service records policy
 * (read from the Elasticsearch instance, not stored in config.json).
 *
 * uuid String
 * returns inline_response_200_59
 **/
exports.getElasticsearchClientServiceRecordsPolicy = function (uuid) {
  return new Promise(async function (resolve, reject) {
    try {
      let value = await elasticsearchService.getElasticsearchClientServiceRecordsPolicyAsync(uuid);
      let response = {};
      response['application/json'] = {
        "elasticsearch-client-interface-1-0:service-records-policy": value
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
 * Configures API key
 *
 * url String
 * body Auth_apikey_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putElasticsearchClientApiKey = function (url, body, uuid) {
  return new Promise(async function (resolve, reject) {
    try {
      let oldValue = await getApiKeyAsync(uuid);
      let newValue = body["elasticsearch-client-interface-1-0:api-key"];
      if (oldValue === newValue) {
        resolve();
        return;
      }
      let isUpdated = await fileOperation.writeToDatabaseAsync(url, body, false);
      if (isUpdated) {
        // the client must be recreated to use the new API key
        await elasticsearchService.getClient(true, uuid);
        let forwardingAutomationInputList = await prepareALTForwardingAutomation.getALTForwardingAutomationInputForOamRequestAsync(
          uuid
        );
        ForwardingAutomationService.automateForwardingConstructWithoutInputAsync(
          forwardingAutomationInputList
        );
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * Configures index alias
 *
 * url String
 * body Elasticsearchclientinterfaceconfiguration_indexalias_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putElasticsearchClientIndexAlias = function (url, body, uuid) {
  return new Promise(async function (resolve, reject) {
    try {
      // No index/alias/template is created on Elasticsearch: FWM does not own
      // the MWDI index and stores a single document in its own one.
      let oldValue = await getIndexAliasAsync(uuid);
      let newValue = body["elasticsearch-client-interface-1-0:index-alias"];
      if (oldValue === newValue) {
        resolve();
        return;
      }
      let isUpdated = await fileOperation.writeToDatabaseAsync(url, body, false);
      if (isUpdated) {
        let forwardingAutomationInputList = await prepareALTForwardingAutomation.getALTForwardingAutomationInputForOamRequestAsync(
          uuid
        );
        ForwardingAutomationService.automateForwardingConstructWithoutInputAsync(
          forwardingAutomationInputList
        );
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}


/**
 * Configures service records policy
 * (written to the Elasticsearch instance, not stored in config.json).
 *
 * body Elasticsearchclientinterfaceconfiguration_servicerecordspolicy_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putElasticsearchClientServiceRecordsPolicy = function (body, uuid) {
  return new Promise(async function (resolve, reject) {
    try {
      let result = await elasticsearchService.putElasticsearchClientServiceRecordsPolicyAsync(uuid, body);
      if (result && result.body && result.body.acknowledged) {
        let policyName = body["elasticsearch-client-interface-1-0:service-records-policy"]["service-records-policy-name"];
        await elasticsearchService.assignPolicyToIndexTemplate(policyName, uuid);
        let forwardingAutomationInputList = await prepareALTForwardingAutomation.getALTForwardingAutomationInputForOamRequestAsync(
          uuid
        );
        ForwardingAutomationService.automateForwardingConstructWithoutInputAsync(
          forwardingAutomationInputList
        );
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

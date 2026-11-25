'use strict';

/**
 * Provides list of ElasticSearch index definitions
 *
 * reqUrl String
 * user String User identifier from the system starting the system starting the API call
 * originator String 'Identification for the system consuming the API'
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer's journey to which the execution applies
 * returns List
 **/
exports.listExistingEsAddresses = function(reqUrl, user, originator, xCorrelator, traceIndicator, customerJourney) {
  return new Promise(async function(resolve, reject) {
    try {
      var examples = {};
      examples['application/json'] = [ {
    "operational-state" : "operational-state",
    "life-cycle-state" : "life-cycle-state",
    "api-key" : "api-key",
    "index-alias" : "index-alias",
    "es-name" : "es-name",
    "service-records-policy" : "service-records-policy",
    "url" : "url"
  }, {
    "operational-state" : "operational-state",
    "life-cycle-state" : "life-cycle-state",
    "api-key" : "api-key",
    "index-alias" : "index-alias",
    "es-name" : "es-name",
    "service-records-policy" : "service-records-policy",
    "url" : "url"
  } ];
      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Provides list of Pulser definitions
 *
 * reqUrl String
 * user String User identifier from the system starting the API call
 * originator String 'Identification for the system consuming the API'
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer's journey to which the execution applies
 * returns List
 **/
exports.listExistingPulsers = function(reqUrl, user, originator, xCorrelator, traceIndicator, customerJourney) {
  return new Promise(async function(resolve, reject) {
    try {
      var examples = {};
      examples['application/json'] = [ {
    "ending-time" : "ending-time",
    "target-function" : "target-function",
    "period-length" : 0,
    "next-time" : "next-time",
    "is-activated" : true
  }, {
    "ending-time" : "ending-time",
    "target-function" : "target-function",
    "period-length" : 0,
    "next-time" : "next-time",
    "is-activated" : true
  } ];
      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Provides list of historical errors
 *
 * reqUrl String
 * user String User identifier from the system starting the API call
 * originator String 'Identification for the system consuming the API'
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer's journey to which the execution applies
 * returns List
 **/
exports.listHistoricalErrors = function(reqUrl, user, originator, xCorrelator, traceIndicator, customerJourney) {
  return new Promise(async function(resolve, reject) {
    try {
      var examples = {};
      examples['application/json'] = [ {
    "error-message" : "error-message",
    "errored-function" : "errored-function",
    "timestamp" : "timestamp"
  }, {
    "error-message" : "error-message",
    "errored-function" : "errored-function",
    "timestamp" : "timestamp"
  } ];
      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Updates an existing ElasticSearch index definition
 *
 * body Updateesaddress_body
 * reqUrl String
 * user String User identifier from the system starting the API call
 * originator String 'Identification for the system consuming the API'
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer's journey to which the execution applies
 * no response value expected for this operation
 **/
exports.updateEsAddress = function(body, reqUrl, user, originator, xCorrelator, traceIndicator, customerJourney) {
  return new Promise(async function(resolve, reject) {
    try {
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Updates an existing Pulser
 *
 * body Updatepulser_body
 * reqUrl String
 * user String User identifier from the system starting the API call
 * originator String 'Identification for the system consuming the API'
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer's journey to which the execution applies
 * no response value expected for this operation
 **/
exports.updatePulser = function(body, reqUrl, user, originator, xCorrelator, traceIndicator, customerJourney) {
  return new Promise(async function(resolve, reject) {
    try {
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
'use strict';


/**
 * Returns the description of the Function
 *
 * uuid String 
 * returns inline_response_200_34
 **/
exports.getFunctionProfileDescription = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "function-profile-1-0:description" : "Removes invalid data"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the name of the Function
 *
 * uuid String 
 * returns inline_response_200_33
 **/
exports.getFunctionProfileFunctionName = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "function-profile-1-0:function-name" : "p1RemoveInvalidData"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the configured value of isActive of the Function
 *
 * uuid String 
 * returns inline_response_200_37
 **/
exports.getFunctionProfileIsActive = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "function-profile-1-0:is-active" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the ParameterList of the Function
 *
 * uuid String 
 * returns inline_response_200_35
 **/
exports.getFunctionProfileParameterList = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "function-profile-1-0:parameter-list" : [ {
    "parameter" : "xy-15-3-2-string-p-001",
    "owner" : "platform"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the SubFunctionList of the Function
 *
 * uuid String 
 * returns inline_response_200_36
 **/
exports.getFunctionProfileSubFunctionList = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "function-profile-1-0:sub-function-list" : [ "function-profile-1-0:sub-function-list", "function-profile-1-0:sub-function-list" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Configures value of isActive of the Function
 *
 * body Functionprofileconfiguration_isactive_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putFunctionProfileIsActive = function(body,uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


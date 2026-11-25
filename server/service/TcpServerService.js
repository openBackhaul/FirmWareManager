'use strict';
var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');

/**
 * Returns Description of TcpServer
 *
 * uuid String
 * returns inline_response_200_48
 **/
exports.getTcpServerDescription = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "tcp-server-interface-1-0:description" : value
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
};

/**
 * Returns address of the server
 *
 * url String
 * returns inline_response_200_50
 **/
exports.getTcpServerLocalAddress = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      // Usa il path diretto al valore IPv4, evitando il nodo oggetto 'local-address'
      let value = await fileOperation.readFromDatabaseAsync(url + '/ipv-4-address');
      let response = {};
      response['application/json'] = {
        "tcp-server-interface-1-0:local-address" : value
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
};

/**
 * Returns TCP port of the server
 *
 * uuid String
 * returns inline_response_200_51
 **/
exports.getTcpServerLocalPort = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "tcp-server-interface-1-0:local-port" : value
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
};

/**
 * Returns Protocol of TcpServer
 *
 * uuid String
 * returns inline_response_200_49
 **/
exports.getTcpServerLocalProtocol = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        "tcp-server-interface-1-0:local-protocol" : value
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
};

/**
 * Documents Description of TcpServer
 *
 * body Tcpserverinterfaceconfiguration_description_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putTcpServerDescription = function(url, body) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = body && body['tcp-server-interface-1-0:description'];
      let result = await fileOperation.writeToDatabaseAsync(url, value);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Documents address of the server
 *
 * body Tcpserverinterfaceconfiguration_localaddress_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putTcpServerLocalAddress = function(url, body) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = body && body['tcp-server-interface-1-0:local-address'];
      let result = await fileOperation.writeToDatabaseAsync(url, value);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Documents TCP port of the server
 *
 * body Tcpserverinterfaceconfiguration_localport_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putTcpServerLocalPort = function(url, body) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = body && body['tcp-server-interface-1-0:local-port'];
      let result = await fileOperation.writeToDatabaseAsync(url, value);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Documents Protocol of TcpServer
 *
 * body Tcpserverinterfaceconfiguration_localprotocol_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putTcpServerLocalProtocol = function(url, body) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = body && body['tcp-server-interface-1-0:local-protocol'];
      let result = await fileOperation.writeToDatabaseAsync(url, value);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
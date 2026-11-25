'use strict';

var fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');

function buildTcpClientConfigPath(uuid, suffix) {
  return '/core-model-1-4:control-construct/logical-termination-point=' + uuid +
    '/layer-protocol=0/tcp-client-interface-1-0:tcp-client-interface-pac/tcp-client-interface-configuration/' + suffix;
}

/**
 * Returns remote address
 *
 * url String
 * returns inline_response_200_65
 **/
exports.getTcpClientRemoteAddress = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url + '/ip-address/ipv-4-address');
      let response = {};
      response['application/json'] = {
        'tcp-client-interface-1-0:remote-address': value
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
 * Returns target TCP port at server
 *
 * url String
 * returns inline_response_200_66
 **/
exports.getTcpClientRemotePort = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        'tcp-client-interface-1-0:remote-port': value
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
 * Returns protocol for addressing remote side
 *
 * url String
 * returns inline_response_200_64
 **/
exports.getTcpClientRemoteProtocol = function(url) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = await fileOperation.readFromDatabaseAsync(url);
      let response = {};
      response['application/json'] = {
        'tcp-client-interface-1-0:remote-protocol': value
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
 * Configures remote address
 *
 * body Tcpclientinterfaceconfiguration_remoteaddress_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putTcpClientRemoteAddress = function(body, uuid) {
  return new Promise(async function(resolve, reject) {
    try {
      let remoteAddress = body && body['tcp-client-interface-1-0:remote-address'];
      let ipv4 = remoteAddress && remoteAddress['ip-address'] && remoteAddress['ip-address']['ipv-4-address'];
      let path = buildTcpClientConfigPath(uuid, 'remote-address/ip-address/ipv-4-address');
      let result = await fileOperation.writeToDatabaseAsync(path, ipv4);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Configures target TCP port at server
 *
 * body Tcpclientinterfaceconfiguration_remoteport_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putTcpClientRemotePort = function(body, uuid) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = body && body['tcp-client-interface-1-0:remote-port'];
      let path = buildTcpClientConfigPath(uuid, 'remote-port');
      let result = await fileOperation.writeToDatabaseAsync(path, value);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Configures protocol for addressing remote side
 *
 * body Tcpclientinterfaceconfiguration_remoteprotocol_body
 * uuid String
 * no response value expected for this operation
 **/
exports.putTcpClientRemoteProtocol = function(body, uuid) {
  return new Promise(async function(resolve, reject) {
    try {
      let value = body && body['tcp-client-interface-1-0:remote-protocol'];
      let path = buildTcpClientConfigPath(uuid, 'remote-protocol');
      let result = await fileOperation.writeToDatabaseAsync(path, value);
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};
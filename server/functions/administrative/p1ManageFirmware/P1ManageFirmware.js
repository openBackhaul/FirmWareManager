'use strict';

/**
 * p1ManageFirmware 1.0.0
 * Startup of the autonomous firmware management
 *
 * Spec: spec/Functions/Administrative/p1ManageFirmware/1.0.0
 *
 * Input: none
 * Error: Firmware management stopped due to an error
 *   rejects with an Error whose message is one of ERRORS (ErrorsEnum.js)
 * Processing: p1LoadEsAddresses, p1CreateDcFromStartupDS, p1Pulser
 */

const { ERRORS } = require('./ErrorsEnum');

/**
 * @param {object} [input] see Input above
 * @returns {Promise<*>} see the spec
 */
async function run(input) {
  // TODO: implement according to the spec
  throw new Error('p1ManageFirmware is not implemented yet');
}

module.exports = { run };

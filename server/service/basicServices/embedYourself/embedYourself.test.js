'use strict';

jest.mock('onf-core-model-ap-bs/basicServices/BasicServicesService', () => ({
  embedYourself: jest.fn(),
}));
jest.mock('mw-sdn-p1-manage-firmware', () => ({
  run: jest.fn(),
}));
jest.mock('../../LoggingService.js', () => {
  const logger = { info: jest.fn(), warn: jest.fn(), error: jest.fn() };
  return { getLogger: () => logger };
});

const ARGUMENTS = [{ 'registry-office-application': 'RegistryOffice' }, 'user', 'originator', 'xCorrelator', 'traceIndicator', 'customerJourney', '/v1/embed-yourself'];

// lets the not awaited start of p1ManageFirmware happen
const flushPromises = () => new Promise(resolve => setImmediate(resolve));

describe('embedYourself', () => {
  let embedYourself;
  let genericEmbedYourself;
  let p1ManageFirmware;
  let logger;

  beforeEach(() => {
    // fresh module per test, because it remembers whether p1ManageFirmware has been started
    jest.resetModules();
    genericEmbedYourself = require('onf-core-model-ap-bs/basicServices/BasicServicesService').embedYourself;
    p1ManageFirmware = require('mw-sdn-p1-manage-firmware').run;
    logger = require('../../LoggingService.js').getLogger();
    embedYourself = require('./embedYourself').embedYourself;

    genericEmbedYourself.mockResolvedValue(undefined);
    // p1ManageFirmware keeps running, as it does with the cyclic p1Pulser
    p1ManageFirmware.mockReturnValue(new Promise(() => { }));
  });

  test('hands over to the generic embedYourself, without the originator', async () => {
    await embedYourself(...ARGUMENTS);
    expect(genericEmbedYourself).toHaveBeenCalledTimes(1);
    expect(genericEmbedYourself).toHaveBeenCalledWith(ARGUMENTS[0], 'user', 'xCorrelator', 'traceIndicator', 'customerJourney', '/v1/embed-yourself');
  });

  test('starts p1ManageFirmware and answers without waiting for it', async () => {
    await expect(embedYourself(...ARGUMENTS)).resolves.toBeUndefined();
    await flushPromises();
    expect(p1ManageFirmware).toHaveBeenCalledTimes(1);
  });

  test('does not start p1ManageFirmware, if the generic embedYourself fails', async () => {
    const error = new Error('embedding failed');
    genericEmbedYourself.mockRejectedValue(error);
    await expect(embedYourself(...ARGUMENTS)).rejects.toBe(error);
    await flushPromises();
    expect(p1ManageFirmware).not.toHaveBeenCalled();
  });

  test('does not start p1ManageFirmware a second time', async () => {
    await embedYourself(...ARGUMENTS);
    await embedYourself(...ARGUMENTS);
    await flushPromises();
    expect(genericEmbedYourself).toHaveBeenCalledTimes(2);
    expect(p1ManageFirmware).toHaveBeenCalledTimes(1);
    expect(logger.warn).toHaveBeenCalledTimes(1);
  });

  test('logs the error of p1ManageFirmware and allows starting it again', async () => {
    p1ManageFirmware.mockRejectedValueOnce(new Error('Firmware management stopped'));
    await expect(embedYourself(...ARGUMENTS)).resolves.toBeUndefined();
    await flushPromises();
    expect(logger.error).toHaveBeenCalledWith(expect.stringContaining('Firmware management stopped'));

    await embedYourself(...ARGUMENTS);
    await flushPromises();
    expect(p1ManageFirmware).toHaveBeenCalledTimes(2);
  });
});

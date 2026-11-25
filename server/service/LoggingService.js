'use strict';

const pino = require('pino');
// const path = require('path');

// configuration for pino with pretty console output
const transports = pino.transport({
  targets: [
    {
      level: 'info',
      target: 'pino-pretty',
      options: { colorize: true }
    },
    // {
    //   level: 'warn',
    //   target: 'pino-roll',
    //   options: { file: path.join(__dirname, '../logs/FirmWareManager'), extension: '.log', mkdir: true,
    //     frequency: 'daily', dateFormat: 'yyyy-MM-dd', size: "1m", "limit": 50, "limit.count": 10 }
    // }
  ]
});

// create pino logger instance
const logger = pino({ level: 'info' }, transports);

exports.getLogger = function getLogger() {
  return logger;
};

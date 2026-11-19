'use strict';

var path = require('path');
var http = require('http');

global.databasePath = path.join(__dirname, 'database', 'config.json');
global.runtimeConfigPath = path.join(__dirname, 'database', 'runtime.json');

var appCommons = require('onf-core-model-ap/applicationPattern/commons/AppCommons');
var oas3Tools = require('oas3-tools');
const logger = require('./service/LoggingService.js').getLogger();

var serverPort = 4036;

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = expressAppConfig.getApp();
appCommons.setupExpressApp(app);

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    logger.info('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    logger.info('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    appCommons.performApplicationRegistration();
});

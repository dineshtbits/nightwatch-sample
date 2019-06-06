const seleniumServer = require('selenium-server');
const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');

module.exports = (function (settings) {
    settings.selenium.server_path = seleniumServer.path;
    settings.selenium.cli_args['webdriver.chrome.driver'] = chromeDriver.path;
    settings.selenium.cli_args['webdriver.gecko.driver'] = geckoDriver.path;
    return settings;
})(require('./nightwatch.json'));
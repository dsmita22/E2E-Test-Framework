const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const timeStamp = require("date-fns");

// eslint-disable-next-line no-unused-vars
const getConfigurationByFile = (file) => {
  const pathToConfigFile = path.resolve("cypress", "config", `${file}.json`);
  return fs.readJson(pathToConfigFile);
};
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on("before:browser:launch", (browser = {}, launchOptions) => {
    // ensureBrowserFlags(browser, launchOptions);
    if (browser.name === "chrome") {
      launchOptions.args.push("--start-fullscreen");
      launchOptions.args.push("--no-sandbox");
      launchOptions.args.push("--disable-gpu");
      return launchOptions;
    }

    if (browser.name === "electron") {
      launchOptions.args.fullscreen = true;

      return launchOptions;
    }
  });

  const file = config.env.configFile || "test";

  return getConfigurationByFile(file);
};

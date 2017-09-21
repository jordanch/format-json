const configurationSettings = {};

const setupRuntimeConfig = (settings) => {
    return Object.assign(configurationSettings, settings);
}

module.exports.settings = configurationSettings;
module.exports.setupRuntimeConfig = setupRuntimeConfig;
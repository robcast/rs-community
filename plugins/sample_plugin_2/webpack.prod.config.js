const path = require('path');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');

const { FEDERATION_CONFIG, EXTENSION_NAME } = require('./defaults');
const config = require('./webpack.config.js');

config.mode = 'production';
config.output.publicPath = '/assets/' + EXTENSION_NAME + '/';
config.output.filename = '[name]-[contenthash].js';

FEDERATION_CONFIG.remotes['platform'] = 'platform@/assets/no_auth/mf-manifest.json';
FEDERATION_CONFIG.filename = 'remoteEntry-[contenthash].js';

config.plugins.push(
    new ModuleFederationPlugin(FEDERATION_CONFIG),
);


module.exports = config;

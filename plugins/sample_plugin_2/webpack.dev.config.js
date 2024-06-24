const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { TS_CONFIG_FILE, FEDERATION_CONFIG } = require('./defaults');
const config = require('./webpack.config.js');

FEDERATION_CONFIG.remotes['platform'] = 'platform@http://localhost:3000/assets/no_auth/mf-manifest.json';

config.plugins.push(
    new ModuleFederationPlugin(FEDERATION_CONFIG),
);
config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
        typescript: {
            configFile: TS_CONFIG_FILE,
        }
    }),
);

// disable typchecking with 'ts-loader', in dev build it happens in the ForkTsCheckerWebpackPlugin
config.module.rules[0].use[0].options.transpileOnly = true;

module.exports = config;

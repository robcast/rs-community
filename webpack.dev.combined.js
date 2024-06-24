const path = require('path');

const PROJECTS = ['./plugins/sample_plugin', './plugins/sample_plugin_2'];

// Load webpack configurations from specified project folders
const configs =
      PROJECTS.map((projectFolder) => {
          // Construct path to webpack.config.js within the project folder
          const configPath = path.resolve(projectFolder, 'webpack.dev.config.js');
          const config = require(configPath);

          config.mode = 'development';
          config.output.pathinfo = false;

          return config;
});

configs[0].devServer = {
    port: 3010,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },
    client: {
        overlay: {
            errors: true,
            warnings: false,
            runtimeErrors: false,
        },
    },
};

module.exports = configs;

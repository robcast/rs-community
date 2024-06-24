const path = require('path');
const fs = require('fs');

// Read the projects.json file
const projectsFilePath = path.resolve(__dirname, 'projects.json');
const PROJECTS = JSON.parse(fs.readFileSync(projectsFilePath, 'utf8'));

// Load webpack configurations from specified project folders
const configs = PROJECTS.map((projectFolder) => {
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
    devMiddleware: {
        writeToDisk: (filePath) => filePath.endsWith('components.json'),
    }
};

module.exports = configs;

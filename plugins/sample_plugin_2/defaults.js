const path = require('path');
const fs = require('fs');

// Function to convert dash-separated strings to PascalCase
function toPascalCase(str) {
    return str.replace(/(^\w|-\w)/g, match => match.replace('-', '').toUpperCase());
}


const EXTENSION_NAME = 'sample_plugin_2';
const RS_SOURCE_CODE_DIR = '/home/artem/new-work/projects/pharos/github/researchspace';
const ROOT_DIR = path.join(__dirname, './');
const SRC = path.join(ROOT_DIR, 'src/main/web');
const DIST = path.join(ROOT_DIR, 'assets/' + EXTENSION_NAME + '/');
const TS_CONFIG_FILE = path.join(ROOT_DIR, 'tsconfig.json');

// Read and parse the components.json file
const componentsPath = path.join(ROOT_DIR, 'components.json');
const components = JSON.parse(fs.readFileSync(componentsPath, 'utf8'));

const { sharedDependenciesRemote } = require(path.join(RS_SOURCE_CODE_DIR, 'webpack/sharedDependencies'));


// Build the 'exposes' object from the components.json data
const exposes = {};
Object.keys(components).forEach(key => {
    const pascalCaseKey = toPascalCase(key);
    exposes[`./${pascalCaseKey}`] = path.join(ROOT_DIR, components[key]);
});

const FEDERATION_CONFIG = {
    name: EXTENSION_NAME,
    filename: 'remoteEntry.js',
    exposes: exposes,
    shared: sharedDependenciesRemote,
    remotes: {
        // to be specified in dev or prod config
        'platform': null,
    },

    // We don't need to generate any types because currently there is no way to specify dependencies between plugins, we may reconsider this later.
    // We access platform types directly through the file system, as specified in tsconfig.json
    dts: false
};

module.exports = {
    ROOT_DIR, SRC, TS_CONFIG_FILE, FEDERATION_CONFIG, EXTENSION_NAME, RS_SOURCE_CODE_DIR, DIST
};

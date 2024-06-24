const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const { ROOT_DIR, SRC, DIST, TS_CONFIG_FILE, EXTENSION_NAME } = require('./defaults');

module.exports = {
    entry: path.join(SRC, 'index.ts'),
    devtool: 'source-map',
    output: {
        // used for dev
        publicPath: 'http://localhost:3010' + '/' + EXTENSION_NAME + '/',
        clean: true,
        filename: '[name].js',
        path: DIST,
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        // order of rules is important here, because we assume it when modifying the config for production build.
        rules: [
            {
                test: /(\.ts$)|(\.tsx$)/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: TS_CONFIG_FILE
                    }
                }],
                include: [SRC]
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.join(ROOT_DIR, 'components.json'),
                    to: path.join(ROOT_DIR, 'assets/components.json')
                },
            ],
        }),
    ],
};

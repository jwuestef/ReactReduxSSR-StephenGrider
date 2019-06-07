const path = require('path')
const merge = require('webpack-merge')
const webpackNodeExternals = require('webpack-node-externals')

const baseConfig = require('./webpack.base')


// Use the webpack-merge package to join the base config file (that handles babel config) with the server-specific configs


const serverConfig = {
    // Inform webpack that we are building a bundle for node.js - rather than for the browser (which is the default assumption)
    target: 'node',

    // Tell webpack the root file of our server application
    entry: './src/index.js',

    // Tell webpack where to put the output file that gets generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')   // __dirname is the current directory our project is being built in
    },

    // Tell webpack not to bundle any libraries into our output bundle on the server, if it's from node_modules
    // Takes the server bundle.js from like 800kb down to 5kb
    externals: [webpackNodeExternals()]

}


module.exports = merge(baseConfig, serverConfig)

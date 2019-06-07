const path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base')



// Use the webpack-merge package to join the base config file (that handles babel config) with the client-specific configs


const clientConfig = {
    // Tell webpack the root file of our CLIENT application
    entry: './src/client/client.js',

    // Tell webpack where to put the output file that gets generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')   // __dirname is the current directory our project is being built in
    }

}


module.exports = merge(baseConfig, clientConfig)

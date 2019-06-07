module.exports = {
    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [
            {
                test: /\.js?$/,   // only run this on .js files
                loader: 'babel-loader',   // and run these files through this loader
                exclude: /node_modules/,   // don't run babel in certain directories
                options: {   // options to pass along to the babel-loader
                    presets: [
                        'react',   // turn all of our JSX into normal javascript function calls
                        'stage-0',   // handle async code we'll write later on
                        ['env', { targets: { browsers: ['last 2 versions'] } }]   // run all the transform rules necessary to meet all the compatibilty requirements of the last 2 browser versions
                    ]
                }
            }
        ]
    }
}
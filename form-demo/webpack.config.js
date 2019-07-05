module.exports = {
    mode: "development",
    entry: {
        "index": "./example/index.js"
    },
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]

            },
        ]
    },
    resolve: {
        alias: {
            "@public": "./public/"
        }
    }
}
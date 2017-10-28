var webpack = require("webpack");

module.exports = {

    entry: "./src/app.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "es2015"
                    ]
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: [
					"style-loader",
					"css-loader"
				]
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        port: 3000,
        contentBase: [
            './'
        ],
        inline: true,
        publicPath: '/js/'
    }


}
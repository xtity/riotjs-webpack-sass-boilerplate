const webpack = require("webpack");
const merge = require("webpack-merge");

var config = {
    entry: {
        index: "./src/client/script/index.ts"
    },
    output: {
        path: __dirname + "/public/script",
        filename: "[name].js",
        publicPath: "/public/",
    },
    module: {
        rules: [{
                test: /\.tag$/,
                exclude: /node_modules/,
                enforce: "pre",
                loader: "riotjs-loader",
                options: {
                    type: "typescript"
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            }
        ],
    },
    resolve: {
        extensions: ["*", ".ts", ".js", ".tag"]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            riot: "riot"
        })
    ]
}

if (process.env.NODE_ENV === "production") {
    const prodConfig = require("./webpack.config.production.js");
    config = merge(config, prodConfig);
}

module.exports = config;

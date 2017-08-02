const uglifyEsPlugin = require("uglify-es-webpack-plugin");

const config = {
    plugins: [
        new uglifyEsPlugin()
    ]
}

module.exports = config;

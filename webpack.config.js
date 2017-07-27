var webpack = require("webpack");

module.exports = {
  entry: "./src/scripts/index.ts",
  output: {
    path: __dirname + "/app/scripts",
    filename: "bundle.js",
		publicPath: "/app/",
  },
  module: {
    rules: [
      {
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
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ProvidePlugin({
      riot: "riot"
    })
  ]
}

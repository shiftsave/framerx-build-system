/* global __dirname, require, module*/

const path = require("path");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");

const libraryName = require("./package.json").name;
const outputFile = "index" + ".js";

const config = {
  mode: "production",
  entry: __dirname + "/index.ts",
  devtool: "source-map",
  output: {
    path: __dirname + "/lib",
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        options: {
          babelrc: false,
          presets: ["@babel/env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
      {
        test: /(\.tsx|\.ts)$/,
        loader: "awesome-typescript-loader",
        exclude: /(node_modules)/
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              relativeUrls: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve("./node_modules")],
    extensions: [".json", ".js", ".jsx", ".tsx", ".ts"],
    plugins: [
      new TsConfigPathsPlugin({
        configFile: path.resolve(__dirname, "tsconfig.json")
      })
    ]
  }
};

module.exports = config;

/* global __dirname, require, module*/

const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const libraryName = require('./package.json').name;

let outputFile, mode;

if (env === 'build') {
  mode = 'production';
  outputFile = 'index' + '.min.js';
} else {
  mode = 'development';
  outputFile = 'index' + '.js';
}

const dogweb = path.resolve(__dirname, 'dogweb');
// `ln -s ../dogweb .` or put your `dogweb` repo's relative path here.

const DD_UI = path.resolve(dogweb, 'static/javascript/datadog/ui');

console.log('dogweb -------', dogweb);

const config = {
  mode: mode,
  entry: __dirname + '/index.ts',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          babelrc: false,
          presets: ['@babel/env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /(\.tsx|\.ts)$/,
        loader: 'awesome-typescript-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.pegjs$/,
        use: [
          // Transforms pegjs grammar into parsers
          { loader: 'pegjs-loader' }
        ]
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              paths: [
                path.resolve(dogweb, 'static/less'),
                path.resolve(dogweb, 'static/javascript/datadog')
              ],
              relativeUrls: true
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        include: path.resolve('./icons'),
        use: [{ loader: 'svg-sprite-loader' }]
      },
      {
        test: /\.(png|jpg|gif|svg|woff2|woff|ttf|mp4|webm|cur|)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:6].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve(dogweb, 'static/less'),
      path.resolve(dogweb, 'static/javascript/datadog'),
      path.resolve(dogweb, 'static/assets_webpack')
    ],
    extensions: ['.json', '.js', '.jsx', '.tsx', '.ts'],
    alias: {
      dogweb: path.resolve(dogweb, 'static/javascript/datadog'),
      ui: DD_UI,
      'dd-util': path.resolve(
        dogweb,
        'static/javascript/datadog/es6-modules/dd-util'
      )
    },
    plugins: [
      new TsConfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.json')
      })
    ]
  }
};

module.exports = config;

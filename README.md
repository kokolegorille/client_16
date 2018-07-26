# Client 16

Starter kit pour React 16...

$ mkdir client16
$ cd client16

Le répertoire build contient l'application après bundle.

$ mkdir build src
$ touch src/index.js

$ touch README.md
$ vim .gitignore
/build
/node_modules
npm-debug.log
yarn-error.log
.DS_Store

$ git init
$ git add .
$ git commit -m "Initial commit"

$ yarn init -y

## Configuration de node

{
  "name": "client16",
  "version": "1.0.0",
  "main": "src/index.js",
  "scripts": {
    "start": "NODE_ENV=dev webpack-dev-server --inline --content-base build/ --mode development",
    "deploy": "webpack --env.production --mode production",
    "watch": "webpack --env.dev --mode development --watch",
    "lint": "eslint src"
  },
  "author": "koko le gorille",
  "license": "MIT",
  "dependencies": {
    "babel-polyfill": "^6.26.0",
    "bootstrap": "^4.1.3",
    "font-awesome": "^4.7.0",
    "jquery": "^3.3.1",
    "popper.js": "^1.14.3",
    "prop-types": "^15.6.2",
    "react": "^16.4.1",
    "react-dom": "^16.4.1"
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-eslint": "^8.2.6",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "copy-webpack-plugin": "^4.5.2",
    "css-loader": "^1.0.0",
    "eslint": "^5.2.0",
    "eslint-config-google": "^0.9.1",
    "file-loader": "^1.1.11",
    "html-webpack-plugin": "^3.2.0",
    "mini-css-extract-plugin": "^0.4.1",
    "node-sass": "^4.9.2",
    "optimize-css-assets-webpack-plugin": "^5.0.0",
    "sass-loader": "^7.0.3",
    "style-loader": "^0.21.0",
    "uglifyjs-webpack-plugin": "^1.2.7",
    "url-loader": "^1.0.1",
    "webpack": "^4.16.2",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.5"
  }
}

## Eslint

$ yarn global add eslint
$ eslint --init

## Configuration de Webpack

// Webpack 4 config, Updated with peerreynders advice!

// https://github.com/webpack/webpack/releases/tag/v4.0.0-beta.0
// CLI has been move to webpack-cli, you need to install webpack-cli

// Fun with Webpack 4 upgrade
// https://gist.github.com/gricard/e8057f7de1029f9036a990af95c62ba8

const Webpack = require('webpack');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, './build');

// Webpack plugins
// Replace ExtractTextPlugin with MiniCssExtractPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// For dev server
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => ({
  context: __dirname,
  devtool: env && env.dev ? 'inline-sourcemap' : false,
  entry: {
    bundle: SRC_PATH + '/index',
  },
  output: {
    path: BUILD_PATH,
    publicPath: '',
    filename: 'js/[name].js',
    chunkFilename: '[name].bundle.js',
  },

  plugins: [
    // Pass __DEV__ to processed files
    // https://github.com/kriasoft/react-starter-kit/issues/1085
    new Webpack.DefinePlugin({ __DEV__: (env && env.dev) }),

    new Webpack.ProvidePlugin({ // inject ES5 modules as global vars
      $: 'jquery',
      jQuery: 'jquery', 'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),

    // BEWARE OF FILENAME PATH!
    new MiniCssExtractPlugin({ filename: './css/app.css' }),
    new CopyWebpackPlugin([{ from: BUILD_PATH, to: '../' }]),
    
    // Webpack dev server
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.template',
      inject: 'body'
    }),
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      // Load javascripts
      {
        test: /\.jsx?$/,
        include: SRC_PATH,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0'],
        },
      },
      // Load stylesheets

      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ]
      },

      // Load images
      {
        test: /\.(png|svg|jpg|gif)(\?.*$|$)/,
        loader: 'url-loader?limit=10000',
      },
      // Load fonts
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?(\?.*$|$)/,
        use: 'url-loader?&limit=10000&name=/fonts/[name].[ext]',
      },
      {
        test: /\.(eot|ttf|otf)?(\?.*$|$)/,
        loader: 'file-loader?&limit=10000&name=/fonts/[name].[ext]',
      },
    ],
  },
  devServer: {
    historyApiFallback: true
  },
});

## Webpack dev server

Voici les packages requis

    "html-webpack-plugin": "^3.2.0",
    "webpack-dev-server": "^3.1.5"

On ajoute src/index.template

Le script yarn start démarre le serveur à l'adresse localhost:8080

## Ajouter Bootstrap-sass

Voici les packages requis

    "bootstrap": "^4.1.3",
    "font-awesome": "^4.7.0",
    "jquery": "^3.3.1",
    "popper.js": "^1.14.3",

On importe bootstrap depuis app.scss

## Ajouter custom fonts

On ajoute src/fonts
On ajoute des fonts personnels
On ajoute src/fonts.scss
On importe fonts.scss depuis app.scss

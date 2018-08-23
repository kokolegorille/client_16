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

const VENDOR_LIBS = [
  'react', 'react-dom', 'bootstrap', 'jquery', 'popper.js', 'react-router-dom'
]

// Webpack plugins
// Replace ExtractTextPlugin with MiniCssExtractPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// For dev server
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => ({
  context: __dirname,
  devtool: env && env.dev ? 'inline-sourcemap' : false,
  entry: {
    bundle: SRC_PATH + '/index',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: BUILD_PATH,
    publicPath: '',
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].js',
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
    // new CopyWebpackPlugin([{ from: SRC_PATH, to: BUILD_PATH }]),
    
    // Webpack dev server
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.template',
      inject: 'body'
    }),
    new Webpack.HotModuleReplacementPlugin(),
  ],

  optimization: {
    // https://github.com/webpack/webpack/issues/6357
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /react|bootstrap|font-awesome/,
          chunks: "initial",
          name: "vendor",
          enforce: true
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
      new OptimizeCSSAssetsPlugin({})
    ],
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
    historyApiFallback: true,
    compress: true,
    open: true,
    hot: true,
  },
});
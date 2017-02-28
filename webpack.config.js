const { resolve } = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const DefinePlugin = webpack.DefinePlugin

const MODULES = resolve(__dirname, 'node_modules')
const APP_DIR = resolve(__dirname, 'app')
const WEB_DIR = resolve(__dirname, 'public')
const BUILD_DIR = resolve(__dirname, 'public', 'build')

const isDebug = !process.argv.includes('--production')
const enableHMR = !process.argv.includes('--no-hmr')

const config = {
  devtool: isDebug ? 'source-map' : false,

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
    }),
    new AssetsPlugin({
      path: WEB_DIR,
      filename: 'bundle.manifest.json',
      prettyPrint: true,
    }),
  ],

  resolve: {
    extensions: ['.js', '.sass', '.scss'],
    modules: ['node_modules'],
  },

  entry: [
    `${APP_DIR}/index.js`,
  ],

  output: {
    path: WEB_DIR,
    publicPath: '/',
    filename: isDebug ? '[name].js?[hash]' : '[name].[hash].js',
    chunkFilename: isDebug ? '[id].js?[chunkhash]' : '[id].[chunkhash].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [MODULES]
      },
      {
        test: /\.(sass|scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [MODULES],
              },
            },
          ],
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)(\?[a-z0-9\=\.]+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
}

if (isDebug && enableHMR) {
  config.entry.unshift('webpack/hot/only-dev-server')
  config.entry.unshift('webpack-dev-server/client?http://localhost:3000')
  config.entry.unshift('react-hot-loader/patch')
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new webpack.NamedModulesPlugin())
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin())

  config.devServer = {
    host: 'localhost',
    port: 3000,
    contentBase: WEB_DIR,
    historyApiFallback: true,
    hot: true,
  }
}

module.exports = config

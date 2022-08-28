const path = require("path")
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            //options: { minimize: true }
          }
        ]
      },
      { 
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|svg|jpg|gif|doc|docx)$/,
        type: 'asset/resource'
       }
    ]
  },
  plugins: [
    // not used because we want the website's index.html from the other build
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    }),
    new CopyPlugin({
      patterns: [
        {from: './public', to: './public'} //copy the public folder to the .dist/public folder
      ]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    fallback: {
      "stream": false,
      "fs": false,
      "path": false,
      "http": false,
      "string_decoder": false,
      "net": false,
      "crypto": false,
      "zlib": false,
      "async_hooks": false,
      "buffer": require.resolve("buffer/"),
      "util": require.resolve("util/"),
      "os": false
    }
  }
}
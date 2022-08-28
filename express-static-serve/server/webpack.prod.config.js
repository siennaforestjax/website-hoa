const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: './dist/server.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/public',
    filename: '[name].js'
  },
  mode: 'production',
  target: 'web',
  devtool: 'source-map',
  // Webpack 4 does not have a CSS minifier, although
  // Webpack 5 will likely come with one
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        // Loads images into CSS and Javascript files
        test: /\.jpg$/,
        type: 'asset/inline'
      },
      {
        // Loads CSS into a file when you import it via Javascript
        // Rules are set in MiniCssExtractPlugin
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ]
  },
  plugins: [
    // not used because we want the website's index.html from the other build
    // new HtmlWebPackPlugin({
    //   template: "./src/html/index.html",
    //   filename: "./index.html"
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyPlugin({
      patterns: [
        {from: './public', to: './public'} //copy the public folder to the .dist/public folder
      ]
    })
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
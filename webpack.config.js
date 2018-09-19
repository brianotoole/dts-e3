const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
    //vendor: './src/js/vendor.js'
  },
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "./js/[name].js"
  },
  module: {
    rules: [
      {
        // STYE LOADERS
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "postcss-loader", "sass-loader"]
        })
      },
      {
        // JS LOADERS
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        },
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        // FILE LOADER, IMAGES
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./img/",
              publicPath: "../img/"
            }
          }
        ]
      },
      {
        // FILE LOADER, FONTS
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./css/fonts/",
              publicPath: "../"
            }
          }
        ]
      },
      {
        // HTML LOADER
        test: /\.html$/,
        use: [
          "html-loader",
          {
            loader: "posthtml-loader",
            options: {
              plugins: [
                require("posthtml-include")({
                  root: path.resolve(__dirname, "src")
                })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/layouts/index.html")
    }),
    new HtmlWebpackPlugin({
      filename: "org.html",
      template: path.resolve(__dirname, "src/layouts/org.html")
    }),
    new ExtractTextPlugin({
      filename: "css/style.css",
      allChunks: true
    }),
    new BrowserSyncPlugin({
      notify: false, // hide the notification
      host: "localhost",
      port: 3000,
      proxy: "http://localhost/dts-3e",
      files: ["**/*.html"]
    })
  ]
};

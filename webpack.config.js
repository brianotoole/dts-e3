const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src//index.js'
    //vendor: './src/js/vendor.js'
  },
  output: {
    filename: 'app/js/[name].js',
    publicPath: './'
  },
  module: {
    rules: [
      { // STYE LOADERS
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        })
      },
      { // JS LOADERS
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      },
      { // URL LOADER, IMAGE FILES
        test: /\.(jpe?g|png|svg)/,
        loader: 'url-loader?limit=10000&name=dist/img/[name].[ext]', //if < 10 kb, base64 encode img to css
      },
      { // URL LOADER, FONTS
        test: /\.(woff|woff2|eot|ttf)/,
        loader: 'url-loader?limit=10000&name=dist/fonts/[name].[ext]', //font files to './dist/fonts/**.'
      },
      { // HTML LOADER 
        test: /\.html$/,
        use: [
          'html-loader',
          {
            loader: 'posthtml-loader',
            options: {
              plugins: [
                require('posthtml-include')({
                  root: path.resolve(__dirname, 'src')
                })
              ]
            }
          }
        ]
      },
      /*{ // FILE-LOADER
        test: /\.woff|woff2|eot|ttf|svg|jpe?g|png/,
        loader: 'file-loader',
        options: {
          name: 'dist/img/[name].[ext]',
          publicPath: function(url) {
            return url.replace(/dist/, '..')
          },
        },
      },*/
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/layouts/index.html')
    }),
    new ExtractTextPlugin({
      filename: 'app/css/style.css',
      allChunks: true,
    }),
    new BrowserSyncPlugin({
      notify: false, // hide the notification
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost/dts-3e',
      files: [
        '**/*.html'
      ]
    })
  ],
};
var webpack = require('webpack');
var path = require('path');

const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const distPath = path.resolve(__dirname, 'dist');

const commonCssLoaders = [
  isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
  {
    loader: 'css-loader',
    options: { importLoaders: 1 }
  }
];

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/app.js',
    vendors: ['@babel/polyfill', 'vue']
  },
  output: {
    path: distPath,
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: commonCssLoaders
      },
      {
        test: /\.(png|jpg|gif|svg|mp4)$/,
        loader: 'file-loader',
        options: {
          name: 'imgs/[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.vue']
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },

  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    contentBase: ['./'],
    inline: true,
    publicPath: '/',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(distPath),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      title: '腾讯云',
      template: 'src/index.ejs'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      allChunks: true
    })
  ].concat(isProd ? [] : [new webpack.HotModuleReplacementPlugin()])
};

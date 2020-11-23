/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */


const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



const developmentConfig = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
    'custom-element': [ './src/public/custom-element.ts' ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module:{
    rules:[
      {
        test: /\.ts$/,
        exclude:/node_modules/,
        use:'ts-loader',
        include:[path.resolve(__dirname, 'src/public')]
      }
    ]
  },
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname, 'dist'),
		publicPath: '/dist/'
  },
	plugins:[
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      dry: true,
      watch: true
    }),
		new HtmlWebPackPlugin({
			template: './src/public/index.html',
			filename: 'index.html',
      inject:true
    }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: './src/public/assets', 
          to: './assets' 
        }
      ]
    })
	]
}


const productionConfig = {
	mode: 'production',
	entry: {
    'mig-app-root': [ './src/public/custom-element.ts' ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module:{
    rules:[
      {
        test: /\.ts$/,
        exclude:/node_modules/,
        use:'ts-loader',
        include:[path.resolve(__dirname, 'src/public')]
      }
    ]
  },
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname, 'dist'),
		publicPath: '/'
  },
	plugins:[
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      dry: true,
      watch: false
    }),
		new HtmlWebPackPlugin({
			template: './src/public/index.html',
			filename: 'index.html',
      inject:true
    }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: './src/public/assets', 
          to: './assets' 
        }
      ]
    })
	]
}



let config;

if(process.env.NODE_ENV === 'production'){
  config = productionConfig;
}

else if(process.env.NODE_ENV === 'development'){
  config = developmentConfig;
}


module.exports = config;

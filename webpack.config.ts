import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import dotenv from 'dotenv';
dotenv.config();

console.log('Testing env variables: ', process.env.NODE_ENV);

const config: webpack.Configuration = {
  mode: process.env.NODE_ENV as any,
  entry: {
    'custom-element': './src/frontend/custom-element.ts'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  output: {
    filename:'[name].bundle.js',
    path:path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/frontend/index.html',
			filename: 'index.html',
      inject: true
    }),
  ],
};

if( process.env.NODE_ENV === 'development')
  config.devtool = 'inline-source-map'

export default config;

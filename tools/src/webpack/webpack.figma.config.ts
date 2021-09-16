//import HtmlWebpackPlugin from 'html-webpack-plugin';

import { Configuration }  from 'webpack';
import merge from 'webpack-merge';


//const webpack = require('webpack');
//const merge = require('webpack-merge');
//const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');


export const webpackFigmaServer = (config:Partial<Configuration>)  =>  {

  const defaults:Partial<Configuration> = {
    mode: 'development',
    // Webpack tries these extensions for you if you omit the extension like "import './file'"
    resolve: {
      extensions: ['.figma.tsx', '.figma.ts', 'figma.jsx', '.figma.js', '.tsx', '.ts', '.jsx', '.js'],
    },
    module: {
      rules: [
        // Converts TypeScript code to JavaScript
        { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
        //       Enables including CSS by doing "import './file.css'" in your TypeScript code
       //{ test: /\.css$/, loader: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },
  
        // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
        // { test: /\.(png|jpg|gif|webp|zip)$/, loader: [{ loader: 'url-loader' }] },
  
        // { test: /\.svg$/, loader: [{ loader: 'svg-inline-loader' }] },
      ],
    },
    
    
  }; 

  return merge(defaults, config);
}






// const webpack = require('webpack');
// const merge = require('webpack-merge');
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: {
//     ui: './src/ui.tsx', // The entry point for your UI code
//     code: './src/code.tsx', // The entry point for your plugin code
//   },
//   output: {
//     filename: '[name].js',
//     path: path.resolve(process.cwd(), 'dist'), // Compile into a folder called "dist"
//   },
//   // Webpack tries these extensions for you if you omit the extension like "import './file'"
//   resolve: {
//     extensions: ['.figma.tsx', '.figma.ts', 'figma.jsx', '.figma.js', '.tsx', '.ts', '.jsx', '.js']
//   },
//   module: {
//     rules: [
//       // Converts TypeScript code to JavaScript
//       { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
//       //       Enables including CSS by doing "import './file.css'" in your TypeScript code
//      //{ test: /\.css$/, loader: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },

//       // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
//       // { test: /\.(png|jpg|gif|webp|zip)$/, loader: [{ loader: 'url-loader' }] },

//       // { test: /\.svg$/, loader: [{ loader: 'svg-inline-loader' }] },
//     ],
//   },
// };
// import configure from 'react-figma-webpack-config';
// import { Configuration } from 'webpack';
// import { merge } from 'webpack-merge';

// export const webpackFigmaWatchConfig = (config?: Partial<Configuration>): Configuration => {
//   return configure(
//     merge(
//       {
//         resolve: {
//           extensions: ['.tsx', '.ts', '.jsx', '.js'],
//         },
//       },
//       config,
//     ),
//   );
// };

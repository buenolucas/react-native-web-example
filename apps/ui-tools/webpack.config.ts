import { webpackFigmaServer } from '@books/tools';
import * as path from 'path';
import {Configuration} from 'webpack'
const rootDir = path.join(__dirname);

const config: Configuration = webpackFigmaServer({
  mode: 'development',
  entry: {
    ui: path.resolve(rootDir, './src/ui.tsx'), // The entry point for your UI code
    code: path.resolve(rootDir, 'src/code.tsx'), // The entry point for your plugin code
  },
  output: {
    filename: '[name].js',
    path: path.resolve(rootDir, 'dist'), // Compile into a folder called "dist"
  }
 
});

export default config;
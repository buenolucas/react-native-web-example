import { Configuration } from 'webpack';
import * as path from 'path';
import { merge } from 'webpack-merge';
import { stylesConfig } from './config/stylesConfig copy';
import { tsConfig } from './config/tsConfig';
import { fileConfig } from './config/fileConfig';
import { svgConfig } from './config/svgConfig';

const basicWebpackConfig: Configuration = {
  entry: './src/index',
  mode: 'development',
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: 'dist',
    filename: 'bundle.js',
  },
};

export const webpacDevkServerConfig = (config?: Partial<Configuration>): Configuration => {
  return merge(basicWebpackConfig, tsConfig(), stylesConfig(), fileConfig(), svgConfig(), config);
};

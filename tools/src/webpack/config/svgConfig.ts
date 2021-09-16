import { Configuration } from 'webpack';

export const svgConfig = (): Partial<Configuration> => ({
  module: {
    rules: [
      {
        test: /\.(svg)$/i,
        exclude: /node_modules/,
        loader: 'react-native-svg-loader',
      },
    ],
  },
});

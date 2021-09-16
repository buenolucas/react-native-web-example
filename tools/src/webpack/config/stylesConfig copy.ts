import { Configuration } from 'webpack';

export const stylesConfig = (): Partial<Configuration> => ({
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

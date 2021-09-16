import { Configuration } from 'webpack';

export const tsConfig = (): Partial<Configuration> => ({
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js|mjs)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
});

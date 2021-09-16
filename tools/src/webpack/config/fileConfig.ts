import { Configuration } from 'webpack';

export const fileConfig = (): Partial<Configuration> => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|ttf|otf)$/i,
        exclude: /node_modules/,
        use: ['file-loader'],
      },
    ],
  },
});
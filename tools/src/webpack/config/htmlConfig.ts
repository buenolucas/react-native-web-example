import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const htmlOverlay = (options: any): Partial<Configuration> => {
  return {
    plugins: [...(HtmlWebpackPlugin ? [new HtmlWebpackPlugin(options)] : [])],
  };
};
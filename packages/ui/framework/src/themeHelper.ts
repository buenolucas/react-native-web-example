import { ThemeHelper } from './use-styling';
import { Theme, useTheme } from './theme';

export const themeHelper: ThemeHelper<Theme> = {
  useTheme: () => useTheme(),
  getComponentInfo: (theme: Theme, name: string) => {
    const components = theme.components || {};
    return components[name];
  },
};

import * as React from 'react';
import { ThemeReference } from './ThemeReference';
import { ThemeContext } from './context';

export interface ThemeProviderProps {
  /**
   * to set themes into the provider wrap them in a reference
   */
  theme: ThemeReference;
}
export interface ThemeProviderPropsWithChildren extends React.PropsWithChildren<ThemeProviderProps> {
  theme: ThemeReference;
}

export const ThemeProvider: React.FunctionComponent<ThemeProviderPropsWithChildren> = (props) => {
  const { theme: themeRef, children } = props;
  const [theme, setThemeState] = React.useState(() => themeRef.theme);

  React.useEffect(() => {
    const onInvalidate = () => {
      setThemeState(themeRef.theme);
    };

    themeRef.addOnThemeChanged(onInvalidate);
    return () => {
      themeRef.removeOnThemeChanged(onInvalidate);
    };
  }, [themeRef, setThemeState]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

import { defaultTheme } from './defaultTheme';
import { ThemeReference } from './theme';
export const createDefaultTheme = (): ThemeReference => {
  // create the reference
  const themeRef = new ThemeReference(
    // base it on the default fluent theme
    defaultTheme,
    // mix in some constant values to override
    {
      colors: {
        bodyBackground: '#FFFFFF',
      },
    },
    // make some outside calls to get some values
    () => {
      // query a body background from somewhere else
      const bodyBackground = '#FF0000';
      return {
        colors: {
          bodyBackground,
        },
      };
    },
  );
  // register a change handler that invalidates the reference
  // listenForOutsideValueChange(() => {
  //   themeRef.invalidate();
  // });
  return themeRef;
};

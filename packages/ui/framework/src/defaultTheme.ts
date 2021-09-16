import { Theme, Spacing, Typography, ThemeColorDefinition, SystemPalette, ButtonPalette } from './theme';

export function defaultSpacing(): Spacing {
  return { s2: '4px', s1: '8px', m: '16px', l1: '20px', l2: '32px' };
}

function systemPalette(): SystemPalette {
  const defaultDict = {
    grey50: '#fafafa',
    grey100: '#f5f5f5',
    grey200: '#f0f0f0',
    grey300: '#d9d9d9',
    grey400: '#d9d9d9',
    grey500: '#bfbfbf',
    grey600: '#8c8c8c',
    grey700: '#595959',
    grey800: '#434343',
    grey900: '#262626',
    coral: '#FF4785',
    coral50: '#fff0f2',
    coral100: '#ffebef',
    coral200: '#ffc2d0',
    coral300: '#ff99b4',
    coral400: '#ff709b',
    coral500: '#FF4785',
    coral600: '#d9326f',
    coral700: '#b3205b',
    coral800: '#8c1247',
    coral900: '#660c36',
    blue: '#1ea7fd',
    blue50: '#ebfbff',
    blue100: '#c2f0ff',
    blue200: '#99e2ff',
    blue300: '#70d2ff',
    blue400: '#47bfff',
    blue500: '#1ea7fd',
    blue600: '#0f83d6',
    blue700: '#0462b0',
    blue800: '#00478a',
    blue900: '#003063',
    grey: '#DDDDDD',
    green: '#66BF3C',
    red: '#FC521F',
    orange: '#FF4400',
    seafoam: '#37D5D3',
    purpple: '#6F2CAC',
    ultraviolet: '#2A0481',
    black: '#000000',
    white: '#FFFFFF',
  };
  return defaultDict;
}

function componentColors(): ButtonPalette {
  const system = systemPalette();
  const dict = {
    buttonFill: system.coral500,
    buttonBorder: system.black,
    buttonIcon: system.black,
    buttonLabel: system.black,
    //
    buttonDisabledFill: system.grey500,
    buttonDisabledBorder: system.black,
    buttonDisabledIcon: system.black,
    buttonDisabledLabel: system.black,

    buttonHoveredFill: system.coral600,
    buttonHoveredBorder: system.black,
    buttonHoveredIcon: system.coral100,
    buttonHoveredLabel: system.coral100,
    //
    buttonPressedFill: system.coral600,
    buttonPressedBorder: system.black,
    buttonPressedIcon: system.coral200,
    buttonPressedLabel: system.black,
    //
    buttonFocusedFill: system.coral500,
    buttonFocusedBorder: system.black,
    buttonFocusedIcon: system.coral200,
    buttonFocusedLabel: system.black,
  };
  return dict;
}
function defaultColors(): ThemeColorDefinition {
  const defaultDict = {
    ...systemPalette(),
    ...componentColors(),
    bodyFill: '#FFFFFF',
    bodyTextFill: '#000000',
  };
  return defaultDict;
}
function _defaultTypography(): Typography {
  const defaultsDict = {
    sizes: {},
    families: {
      primary: 'Ubuntu Monospace',
    },
  };
  return defaultsDict;
}

const colors = defaultColors();
export const defaultTheme: Theme = {
  colors: colors,
  typography: _defaultTypography(),
  spacing: defaultSpacing(),
  components: {
    Rectangle: {
      colors: {},
    },
    Stack: {
      display: 'flex',
    },
  },
  host: { appearance: 'light' },
};

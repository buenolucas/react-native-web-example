import { ColorValue } from 'react-native';
import { ThemeColorDefinition } from './Color.types';
import { Typography, PartialTypography } from './Typography.types';

type TwoLevelPartial<T> = {
  [K in keyof T]?: Partial<T[K]>;
};

export interface Spacing {
  s2: string;
  s1: string;
  m: string;
  l1: string;
  l2: string;
}

/**
 * Especificação de um Theme
 */
export interface Theme {
  name?: string;
  colors: ThemeColorDefinition;
  typography: Typography;
  components: {
    [key: string]: object; // eslint-disable-line @typescript-eslint/ban-types
  };
  spacing: Spacing;
  host: {
    // appearance of the theme, this corresponds to the react-native Appearance library values, though can be overwritten
    // dynamic refers to a theme that handles it's own appearance switching, such as one that uses the PlatformColor API
    appearance: 'light' | 'dark' | 'dynamic';

    colors?: { [key: string]: ColorValue };
  };
}

export type PartialTheme = Omit<TwoLevelPartial<Theme>, 'typography' | 'host'> & {
  typography?: PartialTypography;
  host?: TwoLevelPartial<Theme['host']>;
};

export type AppearanceOptions = 'light' | 'dark';

export interface ThemeOptions {
  /**
   * Should the baseline colors be light, dark, or use the values from the Appearance API from react-native.
   */
  appearance?: AppearanceOptions | 'dynamic';

  /**
   * Default appearance should the library to request this from native not be available
   */
  defaultAppearance?: AppearanceOptions;

  /**
   * If in a host that supports multiple areas within the app that use different palettes, this specifies the palette name to
   * load.
   */
  paletteName?: string;
}

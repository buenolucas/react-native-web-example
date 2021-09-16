import { ColorValue } from 'react-native';

export type ThemeColorDefinition = Palette & {
  [key: string]: ColorValue;
  bodyTextFill: ColorValue;
  bodyFill: ColorValue;
};

/**
 * Collection of colors
 */

export type SystemPalette = {
  grey50: ColorValue;
  grey100: ColorValue;
  grey200: ColorValue;
  grey300: ColorValue;
  grey400: ColorValue;
  grey500: ColorValue;
  grey600: ColorValue;
  grey700: ColorValue;
  grey800: ColorValue;
  grey900: ColorValue;
  coral50: ColorValue;
  coral100: ColorValue;
  coral200: ColorValue;
  coral300: ColorValue;
  coral400: ColorValue;
  coral500: ColorValue;
  coral600: ColorValue;
  coral700: ColorValue;
  coral800: ColorValue;
  coral900: ColorValue;
  blue50: ColorValue;
  blue100: ColorValue;
  blue200: ColorValue;
  blue300: ColorValue;
  blue400: ColorValue;
  blue500: ColorValue;
  blue600: ColorValue;
  blue700: ColorValue;
  blue800: ColorValue;
  blue900: ColorValue;
  grey: ColorValue;
  green: ColorValue;
  red: ColorValue;
  orange: ColorValue;
  seafoam: ColorValue;
  purpple: ColorValue;
  ultraviolet: ColorValue;
  black: ColorValue;
  white: ColorValue;
};

export type ButtonPalette = {
  buttonFill: ColorValue;
  buttonIcon: ColorValue;
  buttonLabel: ColorValue;
  //
  buttonDisabledFill: ColorValue;
  buttonDisabledIcon: ColorValue;
  buttonDisabledLabel: ColorValue;
  //
  buttonHoveredFill: ColorValue;
  buttonHoveredIcon: ColorValue;
  buttonHoveredLabel: ColorValue;
  //
  buttonPressedFill: ColorValue;
  buttonPressedIcon: ColorValue;
  buttonPressedLabel: ColorValue;
  //
  buttonFocusedFill: ColorValue;
  buttonFocusedIcon: ColorValue;
  buttonFocusedLabel: ColorValue;
};
export type Palette = SystemPalette & ButtonPalette;

export type PartialPalette = Partial<Palette>;

export type Color = keyof Palette | ColorValue;

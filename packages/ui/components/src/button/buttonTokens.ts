import { TokenSettings, Theme } from '@casca/framework';
import { ButtonTokens } from './Button.types';

export const buttonStates: (keyof ButtonTokens)[] = ['fluid', 'primary', 'hovered', 'focused', 'pressed', 'disabled'];

export const defaultButtonTokens: TokenSettings<ButtonTokens> = (t: Theme) => ({
  minHeight: 32,
  minWidth: 80,
  fill: t.colors.grey100,
  labelFill: t.colors.black,
  borderFill: t.colors.black,
  iconFill: t.colors.black,
  outlineFill: t.colors.coral500,
  fluid: {
    width: '100%',
  },
  disabled: {
    fill: t.colors.grey500,
    labelFill: t.colors.black,
    borderFill: t.colors.black,
    iconFill: t.colors.black,
    outlineFill: t.colors.coral500,
  },
  hovered: {
    fill: t.colors.grey300,
    labelFill: t.colors.black,
    borderFill: t.colors.black,
    iconFill: t.colors.black,
    outlineFill: t.colors.coral500,
  },
  pressed: {
    fill: t.colors.grey500,
    labelFill: t.colors.black,
    borderFill: t.colors.black,
    iconFill: t.colors.black,
    outlineFill: t.colors.coral500,
  },
  focused: {
    labelFill: t.colors.black,
    borderFill: t.colors.black,
    iconFill: t.colors.black,
    outlineFill: t.colors.coral500,
  },

  primary: {
    fill: t.colors.coral500,
    disabled: {
      fill: t.colors.grey300,
    },
    hovered: {
      fill: t.colors.coral600,
    },
    pressed: {
      fill: t.colors.coral700,
    },
    focused: {
      fill: t.colors.coral500,
    },
  },
});

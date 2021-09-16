import { ColorValue, PressableProps, TextProps, ViewProps, ViewStyle } from 'react-native';
import { IFocusable, IPressableHooks, IWithPressableOptions } from '@fluentui-react-native/interactive-hooks';

export const buttonName = 'Button';

export interface ButtonTokens {
  fill?: ColorValue;
  labelFill?: ColorValue;
  borderFill?: ColorValue;
  iconFill?: ColorValue;
  outlineFill?: ColorValue;

  width?: ViewStyle['width'];
  minHeight?: ViewStyle['minHeight'];
  minWidth?: ViewStyle['minWidth'];

  /**
   * States that can be applied to a button
   */
  hovered?: ButtonTokens;
  focused?: ButtonTokens;
  pressed?: ButtonTokens;
  disabled?: ButtonTokens;

  primary?: ButtonTokens;
  fluid?: ButtonTokens;
}

export interface ButtonSlotProps {
  root: PressableProps & ButtonTokens;
  label: TextProps;
}

export interface ButtonProps extends Omit<IWithPressableOptions<ViewProps>, 'onPress'> {
  label?: string;
  /**
   * A RefObject to access the IButton interface. Use this to access the public methods and properties of the component.
   */
  componentRef?: React.RefObject<IFocusable>;

  onClick?: () => void;

  disabled?: boolean;

  primary?: boolean;

  fluid?: boolean;
}

export type ButtonState = IPressableHooks<ButtonProps & React.ComponentPropsWithRef<any>>;

export interface ButtonType {
  props: ButtonProps;
  slotProps: ButtonSlotProps;
  tokens: ButtonTokens;
}

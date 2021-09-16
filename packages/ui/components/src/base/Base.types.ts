import { ColorValue, PressableProps, TextProps } from 'react-native';

export const baseName = 'Base';

export interface BaseTokens {
  fill?: ColorValue;
}

export interface BaseSlotProps {
  hitArea: PressableProps & BaseTokens;
  label: TextProps;
}

export interface BaseProps extends BaseTokens, PressableProps {
  disabled?: boolean;
  label?: string;
}

export interface BaseType {
  props: BaseProps;
  slotProps: BaseSlotProps;
  tokens: BaseTokens;
}

/*
interface ButtonTokens {
  backgroundColor?: ColorValue;
  borderWidth?: number;
  borderRadius?: number;
}
*/

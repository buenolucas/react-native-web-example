import React, { FunctionComponent } from 'react';
import { ColorValue, TextProps as ITextProps, Text as RNText } from 'react-native';
import { mergeProps, stagedComponent } from '@casca/framework';

export type TextProps<TBase = ITextProps> = TBase & {
  color?: ColorValue;
  disabled?: boolean;
};

export const Text: FunctionComponent<TextProps> = stagedComponent((props: TextProps) => {
  return (rest: TextProps, ...children) => {
    const color = props.color || '#000000';
    const baseProps: TextProps = {
      color: color,
    };
    const newProps = mergeProps<TextProps>(baseProps, props, rest);
    return <RNText style={{ ...newProps }}>{children}</RNText>;
  };
});

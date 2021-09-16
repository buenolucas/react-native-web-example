import { ButtonProps, ButtonState } from './Button.types';
import * as React from 'react';
import { useOnPressWithFocus, useAsPressable, useKeyCallback, useViewCommandFocus } from '@fluentui-react-native/interactive-hooks';

export const useButton = (props: ButtonProps): ButtonState => {
  const defaultComponentRef = React.useRef(null);

  const { onClick, componentRef = defaultComponentRef, ...rest } = props;
  const onClickWithFocus = useOnPressWithFocus(componentRef, onClick);
  const pressable = useAsPressable({ ...rest, onPress: onClickWithFocus });
  const onKeyUp = useKeyCallback(onClick, ' ', 'Enter');

  return {
    props: {
      ...pressable.props,
      accessible: true,
      accessibilityRole: 'button',
      onAccessibilityTap: props.onAccessibilityTap || props.onClick,
      accessibilityLabel: props.accessibilityLabel || props.label,
      focusable: true,
      ref: useViewCommandFocus(componentRef),
      onKeyUp: onKeyUp,
    },
    state: pressable.state,
  };
};

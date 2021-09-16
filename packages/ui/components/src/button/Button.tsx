/** @jsxRuntime classic */
/** @jsx withSlots */
import * as React from 'react';
import { compose, UseSlots, mergeProps, withSlots } from '@casca/framework';

import { Text, View } from 'react-native';
import { buttonCascaSettings } from './Button.casca';
import { ButtonProps, ButtonType, buttonName } from './Button.types';
import { useButton } from './useButton';

export const Button = compose<ButtonType>({
  displayName: buttonName,
  ...buttonCascaSettings,
  slots: {
    root: View,
    label: Text,
  },
  filters: {
    //icon: filterImageProps,
  },
  render: (userProps: ButtonProps, useSlots: UseSlots<ButtonType>) => {
    const button = useButton(userProps);
    // grab the styled slots
    const Slots = useSlots(userProps, (layer) => button.state[layer] || userProps[layer]);
    return (final: ButtonProps, ...children: React.ReactNode[]) => {
      const { icon, label, ...mergedProps } = mergeProps(button.props, final);
      return (
        <Slots.root {...mergedProps}>
          {/*{icon && <Slots.icon key="icon" source={{ uri: icon }} />}*/}
          {label && <Slots.label key="label">{label}</Slots.label>}
          {children}
        </Slots.root>
      );
    };
  },
});

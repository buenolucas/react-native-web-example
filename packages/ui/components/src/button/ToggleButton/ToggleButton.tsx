/** @jsxRuntime classic */
/** @jsx withSlots */
import * as React from 'react';
import { View } from 'react-native';
import { ToggleButtonProps, toggleButtonName, ToggleButtonType } from './ToggleButton.types';
import { Text } from '../../text';
import { stylingSettings } from './ToggleButton.styling';
import { compose, mergeProps, withSlots, UseSlots } from '@casca/framework';
import { useButton } from '../useButton';
import { useAsToggle } from '@fluentui-react-native/interactive-hooks';

export const ToggleButton = compose<ToggleButtonType>({
  displayName: toggleButtonName,
  ...stylingSettings,
  slots: {
    root: View,
    label: Text,
  },
  filters: {
    //icon: filterImageProps,
  },
  render: (userProps: ToggleButtonProps, useSlots: UseSlots<ToggleButtonType>) => {
    const { label, defaultChecked, checked, onClick, ...rest } = userProps;

    // Warns defaultChecked and checked being mutually exclusive.
    if (defaultChecked != undefined && checked != undefined) {
      console.warn('defaultChecked and checked are mutually exclusive to one another. Use one or the other.');
    }
    const [checkedValue, toggle] = useAsToggle(defaultChecked, checked, onClick);
    const button = useButton({ onClick: toggle, ...rest });

    // grab the styled slots
    const Slots = useSlots(userProps, (layer) => (layer === 'checked' && checkedValue) || button.state[layer] || userProps[layer]);

    // now return the handler for finishing render
    return (final: ToggleButtonProps, ...children: React.ReactNode[]) => {
      const mergedProps = mergeProps(button.props, final);

      return (
        <Slots.root {...mergedProps}>
          {label && <Slots.label key="content">{label}</Slots.label>}
          {children}
        </Slots.root>
      );
    };
  },
});

export default ToggleButton;

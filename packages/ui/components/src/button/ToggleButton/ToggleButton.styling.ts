import { toggleButtonName, ToggleButtonTokens, ToggleButtonSlotProps, ToggleButtonProps } from './ToggleButton.types';
import { Theme, UseStylingOptions, buildProps } from '@casca/framework';

import { buttonStates, defaultButtonTokens } from '../buttonTokens';

export const stylingSettings: UseStylingOptions<ToggleButtonProps, ToggleButtonSlotProps, ToggleButtonTokens> = {
  tokens: [
    defaultButtonTokens,
    (t: Theme) =>
      ({
        checked: {
          //fill: t.colors.buttonCheckedBackground,
          hovered: {
            labelFill: t.colors.buttonCheckedHoveredContent,
            //fill: t.colors.buttonCheckedHoveredBackground,
          },
        },
      } as ToggleButtonTokens),
    toggleButtonName,
  ],
  states: ['checked', ...buttonStates],
  slotProps: {
    root: buildProps(
      (tokens: ToggleButtonTokens, _theme: Theme) => ({
        style: {
          minHeight: tokens.minHeight,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'flex-start',
          justifyContent: 'center',
          width: tokens.width,
          paddingStart: 16,
          paddingEnd: 16,
          backgroundColor: tokens.fill,
          borderColor: tokens.borderFill,
          borderWidth: 2,
        },
      }),
      ['fill'],
    ),
    label: buildProps(
      (tokens: ToggleButtonTokens, _theme: Theme) => ({
        style: {
          color: tokens.labelFill,
        },
      }),
      ['labelFill'],
    ),
  },
};

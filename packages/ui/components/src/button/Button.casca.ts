import { UseStylingOptions, buildProps, buildUseStyling, Theme } from '@casca/framework';
import { buttonName, ButtonProps, ButtonSlotProps, ButtonTokens } from './Button.types';
import { defaultButtonTokens, buttonStates } from './buttonTokens';

export const buttonCascaSettings: UseStylingOptions<ButtonProps, ButtonSlotProps, ButtonTokens> = {
  tokens: [defaultButtonTokens, buttonName],
  states: buttonStates,
  tokensThatAreAlsoProps: ['fill'],
  slotProps: {
    root: buildProps(
      (tokens: ButtonTokens) => ({
        //activityIndicatorColor: tokens.activityIndicatorColor,
        //size: tokens.size,
        //lineThickness: tokens.lineThickness != 'medium' ? tokens.lineThickness : tokens.size,
        //accessibilityLabel: 'progressbar',
        //accessible: true,
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
      (tokens: ButtonTokens, _theme: Theme) => ({
        style: {
          color: tokens.labelFill,
          //...fontStyles.from(tokens, theme),
        },
      }),
      ['labelFill'],
    ),
  },
};
export const useButtonCasca = buildUseStyling(buttonCascaSettings);

import { UseStylingOptions, buildProps, buildUseStyling } from '@casca/framework';
import { baseName, BaseProps, BaseSlotProps, BaseTokens } from './Base.types';

export const baseCascaSettings: UseStylingOptions<BaseProps, BaseSlotProps, BaseTokens> = {
  tokens: [
    () => ({
      fill: '#FFFF00',
    }),
    baseName,
  ],
  tokensThatAreAlsoProps: ['fill'],
  slotProps: {
    hitArea: buildProps(
      (tokens: BaseTokens) => ({
        //activityIndicatorColor: tokens.activityIndicatorColor,
        //size: tokens.size,
        //lineThickness: tokens.lineThickness != 'medium' ? tokens.lineThickness : tokens.size,
        //accessibilityLabel: 'progressbar',
        //accessible: true,
        style: {
          backgroundColor: tokens.fill,
        },
      }),
      ['fill'],
    ),
    label: {
      style: {
        fontSize: 22,
      },
    },
  },
};
export const useBaseCasca = buildUseStyling(baseCascaSettings);

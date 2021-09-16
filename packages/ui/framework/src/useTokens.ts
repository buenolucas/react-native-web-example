import { buildUseTokens as buildUseTokensCore, UseTokens as UseTokensCore } from './use-tokens/index';
import { themeHelper } from './themeHelper';
import { Theme } from './theme';
import { TokenSettings } from './useStyling';

export { applyTokenLayers, applyPropsToTokens, customizable, patchTokens } from './use-tokens';

export type UseTokens<TTokens> = UseTokensCore<TTokens, Theme>;

export function buildUseTokens<TTokens>(...tokens: TokenSettings<TTokens>[]): UseTokens<TTokens> {
  return buildUseTokensCore(themeHelper.getComponentInfo, ...tokens);
}

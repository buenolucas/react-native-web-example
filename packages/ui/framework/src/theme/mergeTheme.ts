import { immutableMerge } from '../imutable-merge';
import { Theme, PartialTheme } from '../theme';

export function mergeTheme<TTheme extends Theme, TPartial extends PartialTheme>(base: TTheme, partial: TPartial): TTheme | undefined {
  return immutableMerge(base, partial as unknown as TTheme);
}

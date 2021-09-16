export type FontFamilyValue = string;

export interface FontFamilies {
  default?: string;
  [key: string]: string;
}

export interface TextStyling {
  families: FontFamilies;
}

export type Typography = TextStyling;

export type PartialTypography = { [P in keyof Typography]?: Partial<Typography[P]> };

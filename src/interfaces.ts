export interface ColorValue {
  shade: number;
  hex: string;
}

export interface IColorPalette {
  name: string;
  colors: ColorValue[];
}

export interface KeyCombination {
  id: string;
  ctrl: boolean;
  alt: boolean;
  shift: boolean;
  prefix: string;
  isMacOS: boolean;
}

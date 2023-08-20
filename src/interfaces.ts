export interface ColorValue {
  shade: number;
  hex: string;
}

export interface ColorPalette {
  name: string;
  colors: ColorValue[];
}

export interface KeyCombination {
  id: string;
  ctrl: boolean;
  alt: boolean;
  shift: boolean;
  prefix: string;
}

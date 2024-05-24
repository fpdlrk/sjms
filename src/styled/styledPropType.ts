export type CommonType = WidthHeightIprops & FlexIprops & FontAttrIProps & PaddingMarginMixinIprops & PositionIprops & EtcIprops & RadiusIprops;

export type InputType = Omit<CommonType, "FlexIprops">;

export type DivType = WidthHeightIprops & FlexIprops & FontAttrIProps & PaddingMarginMixinIprops;

export type WidthHeightIprops = {
  width?: number | string;
  height?: number | string;
};

export type EtcIprops = {
  background?: string;
  $bc?: string;
  $bw?: number;
  $style?: string;
  $bt?: number;
  $br?: number;
  $bb?: number;
  $bl?: number;
  $ba?: number;
};

export type ButtonIprops = CommonType & {
  $size?: "small" | "middle" | "lager" | undefined;
  $primary?: boolean | undefined;
  $second?: boolean | undefined;
  $color?: string;
};

export type RadiusIprops = {
  $radiusTL?: number;
  $radiusTR?: number;
  $radiusBL?: number;
  $radiusBR?: number;
  $radius?: number;
};

export type PositionIprops = {
  position?: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export type FlexIprops = {
  $direction?: string;
  $justify?: string;
  $align?: string;
};

export type FontAttrIProps = {
  $fw?: "bold" | "middle";
  $fs?: number;
  $fc?: string;
};

export type PaddingMarginMixinIprops = {
  $pt?: number;
  $pr?: number;
  $pb?: number;
  $pl?: number;

  $mt?: number;
  $mr?: number;
  $mb?: number;
  $ml?: number;

  $pa?: number;
  $ma?: number;
};

export type InputFieldIprops = InputType & {
  type: "text" | "password" | "number";
  value?: string | number | undefined | null;
  $size?: "small" | "middle" | "lager" | undefined;
  placeholder?: string;
};

export type CheckboxRadioIprops = InputType & {
  value?: string | number | undefined | null;
  $sized?: "small" | "middle" | "lager" | undefined;
};

export type FormGroupIprops = CommonType & {
  $gapT?: number;
  $gapR?: number;
  $gapB?: number;
  $gapL?: number;
  $gapA?: number;
  $display?: "felx";
};

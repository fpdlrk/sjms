export type CommonType = WidthHeightIprops & FlexIprops & FontAttrIProps & PaddingMarginMixinIprops & PositionIprops & EtcIprops & RadiusIprops;

export type InputType = Omit<CommonType, "FlexIprops">;

export type DivType = WidthHeightIprops & FlexIprops & FontAttrIProps & PaddingMarginMixinIprops;

export type WidthHeightIprops = {
  width?: number | string;
  height?: number | string;
};

export type ImageIprops = WidthHeightIprops & PaddingMarginMixinIprops & PositionIprops & {};

export type EtcIprops = FlexIprops & {
  id?: string | number;
  $background?: string; // 배경색
  $bc?: string; // border 색상
  $bw?: number; // border 선 두께
  $style?: string; // border 선 스타일 solid, dashed 등등
  $bt?: number; // border-top 선 두께
  $br?: number; // border-right 선 두께
  $bb?: number; // border-bottom 선 두께
  $bl?: number; // border-left 선 두께
  $ba?: number; // border 선 두께
  $bn?: string;
  $display?: string;
  $lineheight?: number;
  $zindex?: number;
  $cursor?: string;
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
  $position?: string;
  $top?: number;
  $right?: number;
  $bottom?: number;
  $left?: number;
};

export type FlexIprops = {
  $direction?: string;
  $justify?: string;
  $align?: string;
  $flex?: number;
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
  type?: "text" | "password" | "number";
  value?: string | number | undefined;
  $size?: "small" | "middle" | "lager";
  placeholder?: string;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type CheckboxRadioIprops = InputType & {
  // value?: string | number;
  $sized?: "small" | "middle" | "lager";
};

export type FormGroupIprops = CommonType & {
  $gapT?: number;
  $gapR?: number;
  $gapB?: number;
  $gapL?: number;
  $gapA?: number;
  // $display?: "felx";
};

import { css } from "styled-components";

export interface PaddingMarginMixinIprops {
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  pa?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  ma?: number;
}

export const PaddingMarginMixin = css<PaddingMarginMixinIprops>`
  padding-top: ${(props) => {
    if (props.ma) {
    }
    console.log("#########", props);
    return props.pt ? props.pt + "px" : props.pt + "px";
  }};
`;

import { css } from "styled-components";
import {
  ButtonIprops,
  EtcIprops,
  FlexIprops,
  FontAttrIProps,
  PaddingMarginMixinIprops,
  PositionIprops,
  RadiusIprops,
  WidthHeightIprops,
} from "./styledPropType";

export const WidthHeightMixin = css<WidthHeightIprops>`
  width: ${(props) => (props.width && typeof props.width === "string" ? props.width : props.width ? props.width + "px" : "")};
  height: ${(props) => (props.height && typeof props.height === "string" ? props.height : props.height ? props.height + "px" : "")};
`;

export const EtcMixin = css<EtcIprops>`
  background: ${(props) => props.$background && props.$background};
  display: ${(props) => props.$display && props.$display};
`;

export const PositionMixin = css<PositionIprops>`
  position: ${(props) => props.position && props.position};
  top: ${(props) => props.top && props.top + "px"};
  right: ${(props) => props.right && props.right + "px"};
  bottom: ${(props) => props.bottom && props.bottom + "px"};
  left: ${(props) => props.left && props.left + "px"};
`;

export const PaddingMarginMixin = css<PaddingMarginMixinIprops>`
  padding-top: ${(props) => props.$pt && props.$pt + "px"};
  padding-right: ${(props) => props.$pr && props.$pr + "px"};
  padding-bottom: ${(props) => props.$pb && props.$pb + "px"};
  padding-left: ${(props) => props.$pl && props.$pl + "px"};
  padding: ${(props) => {
    return props.$pa && props.$pa + "px";
  }};

  margin-top: ${(props) => props.$mt && props.$mt + "px"};
  margin-right: ${(props) => props.$mr && props.$mr + "px"};
  margin-bottom: ${(props) => props.$mb && props.$mb + "px"};
  margin-left: ${(props) => props.$ml && props.$ml + "px"};
  margin: ${(props) => {
    return props.$ma && props.$ma + "px";
  }};
`;

export const FontWeightMixin = css<FontAttrIProps>`
  font-size: ${(props) => props.$fs && props.$fs + "px"};
  color: ${(props) => props.$fc && props.$fc};
  font-weight: ${(props) => {
    if (props.$fw === "bold") {
      return "700";
    } else if (props.$fw === "middle") {
      return "500";
    } else {
      return;
    }
  }};
`;

export const FlexMixin = {
  flex: (props: FlexIprops) => `
        display:flex;
        flex-direction : ${props?.$direction || "row"};
        justify-content : ${props?.$justify || "start"};
        align-items : ${props?.$align || "start"}
    `,
};

const hexColorToRGB = (hexColor: string) => {
  const rgb = hexColor.startsWith("#") ? hexColor.slice(1) : hexColor;
  const [r, g, b] = [rgb.slice(0, 2), rgb.slice(2, 4), rgb.slice(4, 6)].map((hex) => Number.parseInt(hex, 16));
  return [r, g, b];
};

export const ButtonMixinFn = {
  button: (props: ButtonIprops) => {
    const color = hexColorToRGB(props.$background || "#000");
    const strColor = color.toString();
    // console.log(">>>>>>", color, color.toString());
    return `
    color: ${props.$color && props.$color};
    background-color: ${props.$background && "rgba(" + strColor + ")"};
    border-color:rgba(${strColor});
    &:hover {
      background-color: ${props.$background && "rgba(" + strColor + ", .85)"};
    }
  `;
  },
};

export const ButtonMixin = css<ButtonIprops>`
  background-color: ${(props) => props.$background && props.$background};
`;

export const RadiusMixin = css<RadiusIprops>`
  border-top-left-radius: ${(props) => props.$radiusTL && props.$radiusTL + "px"};
  border-top-right-radius: ${(props) => props.$radiusTR && props.$radiusTR + "px"};
  border-bottom-left-radius: ${(props) => props.$radiusBL && props.$radiusBL + "px"};
  border-bottom-right-radius: ${(props) => props.$radiusBR && props.$radiusBR + "px"};
  border-radius: ${(props) => props.$radius && props.$radius + "px"};
`;

export const BorderMixin = css<EtcIprops>`
  ${(props) => {
    if (props.$bt) {
      return `border-width: ${props.$bt}px 0px 0px 0px;`;
    }

    if (props.$br) {
      return `border-width: 0px ${props.$br}px 0px 0px;`;
    }

    if (props.$bb) {
      return `border-width: 0px 0px ${props.$bb}px 0px;`;
    }

    if (props.$bl) {
      return `border-width: 0px 0px 0px ${props.$bl}px;`;
    }

    if (props.$ba) {
      return `border-width: ${props.$ba}px;`;
    }

    if (props.$bw) {
      return `border-width: ${props.$bw}px;`;
    }
  }}

  border-style: ${(props) => (props.$style ? props.$style : "")};
  border-color: ${(props) => props.$bc && props.$bc};
`;

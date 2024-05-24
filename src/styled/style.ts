import { css, styled } from "styled-components";
import { BackgroundMixin, BorderMixin, ButtonMixinFn, FontWeightMixin, PaddingMarginMixin, RadiusMixin, WidthHeightMixin } from "./mixin";
import { InputFieldIprops, CheckboxRadioIprops, CommonType, FormGroupIprops, ButtonIprops } from "./styledPropType";
import checkOutline from "../assets/img/Check_outline.svg";
import check from "../assets/img/Check.svg";
import radioOutline from "../assets/img/Radio_outline.svg";
import radio from "../assets/img/Radio.svg";

const CommCss = css`
  ${WidthHeightMixin};
  ${PaddingMarginMixin};
  ${FontWeightMixin}
  ${BackgroundMixin}
  ${RadiusMixin}
  ${BorderMixin}
`;

export const FlexBox = styled.div<CommonType>`
  display: flex;
  flex-direction: ${(props) => props?.$direction || "row"};
  justify-content: ${(props) => props?.$justify || "start"};
  align-items: ${(props) => props?.$align || "start"};
  ${CommCss}
`;

export const InputField = styled.input<InputFieldIprops>`
  height: ${(props) =>
    props.$size === "lager"
      ? props.theme.inputSize.lager
      : props.$size === "middle"
      ? props.theme.inputSize.middle
      : props.$size === "small"
      ? props.theme.inputSize.small
      : "32px"};
  ${CommCss};
  border: 1px solid #eee;
  border-radius: 4px;
  &:hover {
  }
  &:focus {
    outline: none;
    border-color: #ddd;
  }
  &:disabled {
  }
`;

export const ChkeckBox = styled.input.attrs<CheckboxRadioIprops>((props) => ({
  type: "checkbox",
  checked: props.checked,
  onChange: props.onChange,
}))`
  height: 16px;
  height: 16px;
  background-image: url(${checkOutline});
  background-size: 100%;
  appearance: none;
  &:checked {
    background-image: url(${check});
  }
  ${CommCss};
`;

export const Radio = styled(ChkeckBox).attrs((props) => {
  return {
    type: "radio",
    checked: props.checked,
    onChange: props.onChange,
  };
})`
  background-image: url(${radioOutline});
  &:checked {
    background-image: url(${radio});
  }
`;

export const LabelText = styled.label<CommonType>`
  ${CommCss}
`;

export const ImageBox = styled.img<{ src: string }>``;

export const FormItem = styled.div<CommonType>`
  position: relative;
  ${CommCss};
`;

export const FormGroup = styled.div<FormGroupIprops>`
  & > div {
    margin-top: ${(props) => props.$gapT && props.$gapT + "px"};
    margin-right: ${(props) => props.$gapR && props.$gapR + "px"};
    margin-bottom: ${(props) => props.$gapB && props.$gapB + "px"};
    margin-left: ${(props) => props.$gapL && props.$gapL + "px"};
    margin: ${(props) => props.$gapA && props.$gapA + "px"};
  }
  ${CommCss};
`;

export const Button = styled.button<ButtonIprops>`
  width: 100%;
  height: ${(props) =>
    props.$size === "lager"
      ? props.theme.inputSize.lager
      : props.$size === "middle"
      ? props.theme.inputSize.middle
      : props.$size === "small"
      ? props.theme.inputSize.small
      : props.theme.inputSize.middle};

  ${(props) => {
    if (props.$second) {
      return ButtonMixinFn.button({ background: props.theme.theme.color.secondary, $color: "#fff" });
    }
  }}

  ${(props) => {
    if (props.$primary) {
      return ButtonMixinFn.button({ background: props.theme.theme.color.primary, $color: "#fff" });
    }
  }}

      ${(props) => {
    if (props.background) {
      return ButtonMixinFn.button({ background: props.background });
    }
  }}
  border-width:1px;
  border-radius: 6px;
  font-weight: 700;
  transition: background 0.3s;
  cursor: pointer;

  ${CommCss};
`;

export const TextButton = styled.button<ButtonIprops>`
  padding: 0;
  border: none;
  cursor: pointer;
  background: none;
  ${CommCss}
`;

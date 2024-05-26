import { css, styled } from "styled-components";
import { theme } from "./../styled/theme";
import { EtcMixin, BorderMixin, ButtonMixinFn, FontWeightMixin, PaddingMarginMixin, RadiusMixin, WidthHeightMixin, PositionMixin } from "./mixin";
import { InputFieldIprops, CheckboxRadioIprops, CommonType, FormGroupIprops, ButtonIprops, ImageIprops } from "./styledPropType";
import checkOutline from "../assets/img/Check_outline.svg";
import check from "../assets/img/Check.svg";
import radioOutline from "../assets/img/Radio_outline.svg";
import radio from "../assets/img/Radio.svg";

const CommCss = css`
  &:focus {
    outline: none;
  }
  ${WidthHeightMixin};
  ${PaddingMarginMixin};
  ${FontWeightMixin}
  ${EtcMixin}
  ${RadiusMixin}
  ${BorderMixin}
  ${PositionMixin}
`;

export const FlexBox = styled.div<CommonType>`
  display: flex;
  flex-direction: ${(props) => props?.$direction || "row"};
  justify-content: ${(props) => props?.$justify || "start"};
  align-items: ${(props) => props?.$align || "start"};
  flex: ${(props) => props?.$flex && props?.$flex};

  ${CommCss};
`;

export const InputField = styled.input.attrs<InputFieldIprops>((props) => ({
  type: props.type,
  checked: props.checked,
  value: props.value,
  onChange: props.onChange,
}))`
  height: ${(props) =>
    props.$size === "lager"
      ? props.theme.inputSize.lager
      : props.$size === "middle"
      ? props.theme.inputSize.middle
      : props.$size === "small"
      ? props.theme.inputSize.small
      : "32px"};

  ${CommCss};
  &:hover {
  }
  &:focus {
    outline: none;
    border-color: #ddd;
  }
  &:disabled {
  }
  border: 1px solid #eee;
  border-radius: 4px;
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

export const LabelText = styled.label<CommonType & { $ess?: boolean }>`
  margin-bottom: 5px;
  color: ${theme.color.fcSecond};
  &:after {
    padding: 0 0 0 3px;
    content: "*";
    font-size: 14px;
    font-weight: 700;
    color: #ff2512;
    display: ${(props) => !props.$ess && "none"};
  }
  ${CommCss}
`;

export const ImageBox = styled.img<ImageIprops & { src: string }>``;

export const BasicTagItem = styled.div<CommonType>`
  position: relative;
  ${CommCss};
`;

export const TextItem = styled.div<CommonType>`
  ${CommCss};
`;

export const Icon = styled.div<CommonType>`
  line-height: 0;
  ${CommCss};
`;

export const FormItem = styled(BasicTagItem)`
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
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    margin: 0 5px 0 0;
    font-size: ${(props) =>
      props.$size === "lager"
        ? "20px"
        : props.$size === "middle"
        ? props.theme.inputSize.middle
        : props.$size === "small"
        ? props.theme.inputSize.small
        : props.theme.inputSize.middle};
  }

  border-width: 1px;
  border-radius: 6px;
  border-style: solid;
  border-color: #000;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;

  ${(props) => {
    if (props.$second) {
      return ButtonMixinFn.button({ $background: props.theme.theme.color.secondary, $color: "#fff" });
    }
  }}

  ${(props) => {
    if (props.$primary) {
      return ButtonMixinFn.button({ $background: props.theme.theme.color.primary, $color: "#fff" });
    }
  }}

      ${(props) => {
    if (props.$background) {
      return ButtonMixinFn.button({ $background: props.$background });
    }
  }}

  &:disabled {
    background-color: ${theme.color.disabled} !important;
    border-color: ${theme.color.disabledLine} !important;
    color: ${theme.color.disabledFont} !important;
    cursor: default;
  }

  ${CommCss};
`;

export const TextButton = styled.button<ButtonIprops>`
  padding: 0;
  border: none;
  cursor: pointer;
  background: none;
  ${CommCss}
`;

export const IconButton = styled(TextButton)<ButtonIprops>`
  font-size: 20px;
  ${CommCss}
`;

export const PopupAndAlertOuter = styled.div<CommonType>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 500;
  background: rgba(0, 0, 0, 0.3);
`;

export const PopupAndAlertWrap = styled.div<CommonType>`
  width: 500px;
  /* height: 500px; */

  border-radius: 10px;
  background-color: #fff;
  position: relative;
  ${IconButton} {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  overflow: hidden;
`;

export const PopupAndAlertTitle = styled.div<CommonType>`
  padding: 30px 30px 10px 30px;
  font-size: 18px;
  font-weight: 700;
`;

export const PopupAndAlertBody = styled.div<CommonType>`
  padding: 5px 30px 30px 30px;
  white-space: pre;
`;

export const PopupAndAlertBottom = styled.div<CommonType>`
  padding: 0px 15px 15px 15px;
  /* background-color: ${theme.color.superLightGray}; */
  ${CommCss}
`;

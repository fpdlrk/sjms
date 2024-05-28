import { css, styled } from "styled-components";
import { theme } from "./../styled/theme";
import {
  EtcMixin,
  BorderMixin,
  ButtonMixinFn,
  FontWeightMixin,
  PaddingMarginMixin,
  RadiusMixin,
  WidthHeightMixin,
  PositionMixin,
  ellipsis,
} from "./mixin";
import { InputFieldIprops, CheckboxRadioIprops, CommonType, FormGroupIprops, ButtonIprops, ImageIprops } from "./styledPropType";
import checkOutline from "../assets/img/Check_outline.svg";
import check from "../assets/img/Check.svg";
import radioOutline from "../assets/img/Radio_outline.svg";
import radio from "../assets/img/Radio.svg";
import calendar from "../assets/img/calendar-07.svg";
import watch from "../assets/img/stopwatch-03.svg";

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

export const InputCommStyle = css<InputFieldIprops>`
  height: ${(props) =>
    props.$size === "lager"
      ? props.theme.inputSize.lager
      : props.$size === "middle"
      ? props.theme.inputSize.middle
      : props.$size === "small"
      ? props.theme.inputSize.small
      : "32px"};
  border: 1px solid #eee;
  border-radius: 4px;
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
  width: 16px;
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

export const SapnItem = styled.span<CommonType>`
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
  & > ${FormItem} {
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
      : "38px"};
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    margin: 0 5px 0 0;
    font-size: ${(props) => (props.$size === "lager" ? "20px" : props.$size === "middle" ? "20px" : props.$size === "small" ? "20px" : "20px")};
  }

  border-width: 1px;
  border-radius: 6px;
  border-style: solid;
  border-color: #000;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;

  ${Icon} {
    margin: 0 5px 0 0;
  }

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
  text-align: left;
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

export const SubLayout = styled.div<CommonType>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  ${CommCss}
`;

export const SecTitle = styled.h2`
  font-size: 12px;
  color: ${theme.color.fcThird};
`;

export const Filter = styled.div`
  padding: 15px;
  background-color: ${theme.color.superLightGray};
`;

export const SubLayoutBody = styled(FlexBox)`
  flex: 1;
`;

export const SubLayoutLeft = styled.div`
  width: 290px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-right: 1px solid ${theme.color.midLightGray};
  ${SecTitle} {
    padding: 25px 15px 10px 15px;
  }
`;

export const SubLayoutRight = styled.div`
  height: 100%;
  flex: 1;
  ${SecTitle} {
    padding: 0 0 10px 0;
  }
`;

export const PopupMenu = styled(FlexBox)`
  min-width: 80px;
  /* height: 100px; */
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.midLightGray};
  z-index: 10;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  > button {
    width: 100%;
    padding: 5px 15px;
    text-align: left;
    font-size: 12px;
    &:hover {
      background-color: ${theme.color.superLightGray};
      color: ${theme.color.primary};
    }
  }
`;

export const DatePickerWrap = styled.div<InputFieldIprops>`
  ${InputCommStyle}
  overflow: hidden;
  .react-datepicker-wrapper {
    position: relative;
    background-image: url(${calendar});
    background-position: calc(100% - 10px) 50%;
    background-repeat: no-repeat;
    background-size: 18px;
  }
  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  input[type="text"] {
    width: 100%;
    height: inherit;
    border: none;
  }

  input[type="text"] {
    height: inherit;
    padding: 0 10px;
    border: none;
    background-color: transparent;
  }
`;

export const TimePickerWrap = styled(DatePickerWrap)<InputFieldIprops>`
  .react-datepicker-wrapper {
    background-image: url(${watch});
  }
`;

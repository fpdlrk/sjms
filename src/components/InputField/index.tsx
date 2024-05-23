import { styled } from "styled-components";
import { PaddingMarginMixin, PaddingMarginMixinIprops } from "../../styled/mixin";

export interface InputFieldIprops extends PaddingMarginMixinIprops {
  type: "text" | "password" | "number";
  value: string | number | undefined | null;
  size?: "small" | "middle" | "lager" | undefined;
}

export const InputField = ({ value, type, size, ...rest }: InputFieldIprops) => {
  console.log("rest", rest);
  return (
    <>
      <StyledInputField type={type} value={value} size={size} pt={rest.pt} pr={rest.pr} pb={rest.pb} pl={rest.pl}></StyledInputField>
    </>
  );
};

console.log(PaddingMarginMixin);

const StyledInputField = styled.input<InputFieldIprops & PaddingMarginMixinIprops>`
  width: 100%;
  height: ${(props) =>
    props.size === "lager"
      ? props.theme.inputSize.lager
      : props.size === "middle"
      ? props.theme.inputSize.middle
      : props.size === "small"
      ? props.theme.inputSize.small
      : "32px"};
  ${PaddingMarginMixin};
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover {
  }
  &:focus {
    outline: none;
    border-color: #333;
  }
  &:disabled {
  }
`;

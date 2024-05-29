import { styled } from "styled-components";
import * as ST from "../../styled/style";
import { CheckboxIprops } from "../../types/type";
import { theme } from "../../styled/theme";

export const Checkbox = ({ id, name, label, value, color, disabled, checked, onChange }: CheckboxIprops) => {
  return (
    <>
      <ST.SapnItem>
        <ST.ChkeckBox id={id} name={name} disabled={disabled} checked={checked} value={value} onChange={onChange} />
        {label && (
          <ST.LabelText htmlFor={id} $pl={4} $fc={color} $fs={12} $fw="middle">
            {label}
          </ST.LabelText>
        )}
      </ST.SapnItem>
    </>
  );
};

export const CheckByTypeBox = ({ id, name, label, value, color, disabled, checked, onChange }: CheckboxIprops) => {
  return (
    <>
      <CheckByBox>
        <ST.ChkeckBox id={id} name={name} disabled={disabled} checked={checked} value={value} onChange={onChange} />
        {label && (
          <ST.LabelText htmlFor={id} $pl={4} $fc={color} $fs={12} $fw="middle">
            {label}
          </ST.LabelText>
        )}
      </CheckByBox>
    </>
  );
};

export const CheckByBox = styled(ST.SapnItem)`
  & + & {
    margin: 0 0 0 4px;
  }
  padding: 0;
  input[type="checkbox"],
  input[type="raido"] {
    width: 0px;
    height: 0px;
    position: absolute;
    opacity: 0;
    &:checked + label {
      color: ${theme.color.white};
      background-color: ${theme.color.third};
      border: 1px solid ${theme.color.third};
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }
  }
  label {
    width: 36px;
    height: 36px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${theme.color.superLightGray};
    border: 1px solid ${theme.color.midLightGray};
    color: ${theme.color.lightGray};
    cursor: pointer;
    border-radius: 4px;
    font-size: 12px;
  }
`;

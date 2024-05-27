import { styled } from "styled-components";
import * as ST from "../../styled/style";
import { CheckboxIprops } from "../../types/type";

const Radio = ({ id, name, label, value, color, disabled, checked, onChange }: CheckboxIprops) => {
  return (
    <>
      <SapnItem>
        <ST.Radio id={id} name={name} disabled={disabled} checked={checked} value={value} onChange={onChange} />
        {label && (
          <ST.LabelText htmlFor={id} $pl={4} $fc={color} $fs={12} $fw="middle">
            {label}
          </ST.LabelText>
        )}
      </SapnItem>
    </>
  );
};

const SapnItem = styled(ST.SapnItem)`
  & + & {
    margin: 0 0 0 10px;
  }
`;

export default Radio;

import * as ST from "../../styled/style";
import { CheckboxIprops } from "../../types/type";

const Checkbox = ({ label, color, disabled }: CheckboxIprops) => {
  return (
    <>
      <ST.SapnItem>
        <ST.ChkeckBox disabled={disabled} />
        {label && <ST.LabelText $fc={color}>{label}</ST.LabelText>}
      </ST.SapnItem>
    </>
  );
};

export default Checkbox;

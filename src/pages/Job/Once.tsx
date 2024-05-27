import * as ST from "../../styled/style";
import { theme } from "../../styled/theme";

const Once = () => {
  const dummyFn = () => {};
  return (
    <>
      <ST.FormItem>
        <ST.FlexBox $justify="space-between">
          <ST.BasicTagItem $flex={1}>
            <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobSdt" $ess={true}>
              시작일
            </ST.LabelText>
            <ST.InputField
              width={"100%"}
              id={"jobSdt"}
              name={"jobSdt"}
              value={""}
              $pa={10}
              type={"text"}
              $size={"middle"}
              placeholder={"placeholder"}
              onChange={dummyFn}
            ></ST.InputField>
          </ST.BasicTagItem>

          <ST.BasicTagItem width={120} $ml={10}>
            <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobSdt" $ess={true}>
              시작 시간
            </ST.LabelText>
            <ST.InputField
              width={"100%"}
              id={"jobSdt"}
              name={"jobSdt"}
              value={""}
              $pa={10}
              type={"text"}
              $size={"middle"}
              placeholder={"placeholder"}
              onChange={dummyFn}
            ></ST.InputField>
          </ST.BasicTagItem>
        </ST.FlexBox>
      </ST.FormItem>
    </>
  );
};

export default Once;

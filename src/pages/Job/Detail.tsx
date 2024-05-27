import * as ST from "../../styled/style";
import { styled } from "styled-components";
import { theme } from "../../styled/theme";
import { ReactComponent as Edit } from "../../assets/img/edit-03.svg";
import { ReactComponent as Xcircle } from "../../assets/img/x-02.svg";
import { ReactComponent as Activity } from "../../assets/img/activity.svg";
import { DetailIprops } from "../../types/type";
import SelectBox from "../../components/Selectbox";

const Detail = ({}: any) => {
  const dummyFn = () => {};
  return (
    <DetailBoxOuter>
      <TitlArea $justify="space-between" className="detail">
        <ST.SecTitle>JOB DETAIL</ST.SecTitle>
      </TitlArea>
      <Body>
        <ST.FormGroup width={"100%"} $gapT={15}>
          <ST.FormItem>
            <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobName" $ess={true}>
              이름
            </ST.LabelText>
            <ST.InputField
              width={"100%"}
              id={"jobName"}
              name={"jobName"}
              value={""}
              $pa={10}
              type={"text"}
              $size={"middle"}
              placeholder={"이름 입력"}
              onChange={dummyFn}
            ></ST.InputField>
          </ST.FormItem>

          <ST.FormItem>
            <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobGroup" $ess={true}>
              그룹
            </ST.LabelText>
            <ST.InputField
              width={"100%"}
              id={"jobGroup"}
              name={"jobGroup"}
              value={""}
              $pa={10}
              type={"text"}
              $size={"middle"}
              placeholder={"그룹명 입력"}
              onChange={dummyFn}
            ></ST.InputField>
          </ST.FormItem>

          <ST.FormItem>
            <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobClass" $ess={true}>
              클래스
            </ST.LabelText>
            <ST.InputField
              width={"100%"}
              id={"jobClass"}
              name={"jobClass"}
              value={""}
              $pa={10}
              type={"text"}
              $size={"middle"}
              placeholder={"클래스명 입력"}
              onChange={dummyFn}
            ></ST.InputField>
          </ST.FormItem>

          <ST.FormItem>
            <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobPattern" $ess={true}>
              반복패턴
            </ST.LabelText>
            <ST.InputField
              width={"100%"}
              id={"jobPattern"}
              name={"jobPattern"}
              value={""}
              $pa={10}
              type={"text"}
              $size={"middle"}
              placeholder={"placeholder"}
              onChange={dummyFn}
            ></ST.InputField>
          </ST.FormItem>

          <ST.FormItem>
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
          </ST.FormItem>

          <ST.FormItem>
            <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobauseYn" $ess={true}>
              사용유무
            </ST.LabelText>
            <ST.InputField
              width={"100%"}
              id={"jobauseYn"}
              name={"jobauseYn"}
              value={""}
              $pa={10}
              type={"text"}
              $size={"middle"}
              placeholder={"placeholder"}
              onChange={dummyFn}
            ></ST.InputField>
            <SelectBox />
          </ST.FormItem>

          <ST.FlexBox $mt={40} className="dfsdfsdf">
            <ST.Button width={"auto"} $fc={theme.color.fcSecond} $background={theme.color.midLightGray} $primary={true} onClick={dummyFn}>
              <Xcircle />
              취소
            </ST.Button>

            <ST.Button width={"auto"} $ml={10} $second={true} onClick={dummyFn}>
              <Edit />
              수정
            </ST.Button>
          </ST.FlexBox>
        </ST.FormGroup>
      </Body>
    </DetailBoxOuter>
  );
};

const Body = styled(ST.FlexBox)`
  width: 100%;
  flex: 1;
  height: inherit;
`;

const DetailBoxOuter = styled(ST.FlexBox)`
  flex: 1;
  flex-direction: column;
  height: inherit;
  padding: 25px;
`;

const TitlArea = styled(ST.FlexBox)`
  width: 100%;
`;

export default Detail;

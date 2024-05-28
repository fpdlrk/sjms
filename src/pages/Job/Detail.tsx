import * as ST from "../../styled/style";
import { styled } from "styled-components";
import { theme } from "../../styled/theme";
import { ReactComponent as Edit } from "../../assets/img/edit-03.svg";
import { ReactComponent as Xcircle } from "../../assets/img/x-02.svg";
import { ReactComponent as Activity } from "../../assets/img/activity.svg";
import { DetailIprops } from "../../types/type";
import SelectBox from "../../components/Selectbox";
import { pattern, useYn } from "../../types/constant";
import Once from "./Once";
import Daily from "./Daily";
import Weekly from "./Weekly";
import Monthly from "./Monthly";
import useInput from "../../hooks/useInput";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { useMessageAlertStore } from "../../store/globalStore";

type Inputs = {
  jobName: string;
  jobGroup: string;
  jobClass: string;
  jobPattern: string;
  jobauseYn: string;
  jobSdt: string;
  jobSTime: string;
};

const defaultValues = {
  jobName: "",
  jobGroup: "",
  jobClass: "",
  jobPattern: "",
  jobauseYn: "",
  jobSdt: "",
  jobSTime: "",
};

const Detail = () => {
  const { setData, setIsShow } = useMessageAlertStore();
  const saveData = useRef<any>(null);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setData({
      type: "alert",
      isShow: true,
      msg: "저장하시겠습니까?",
      okBtn: true, // 확인 버튼 노출/미노출
      callback: saveHandler, // 확인 버튼 클릭 시 실행 함수등록
    });

    saveData.current = data;
    return;
  };

  const cancelHandler = () => {};

  // 데이터 저장함수
  const saveHandler = () => {
    // 저장시 넘어갈 데이터 입니다.
    setIsShow(false);
    console.log("저장시 넘어갈 데이터 입니다 :::::", saveData);
  };

  useEffect(() => {});

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                // defaultValue="test"
                $pa={10}
                type={"text"}
                $size={"middle"}
                placeholder={"이름 입력"}
                {...register("jobName")}
              ></ST.InputField>
            </ST.FormItem>

            <ST.FormItem>
              <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobGroup" $ess={true}>
                그룹
              </ST.LabelText>
              <ST.InputField
                width={"100%"}
                id={"jobGroup"}
                $pa={10}
                type={"text"}
                $size={"middle"}
                placeholder={"그룹명 입력"}
                {...register("jobGroup")}
              ></ST.InputField>
            </ST.FormItem>

            <ST.FormItem>
              <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobClass" $ess={true}>
                클래스
              </ST.LabelText>
              <ST.InputField
                width={"100%"}
                id={"jobClass"}
                $pa={10}
                type={"text"}
                $size={"middle"}
                placeholder={"클래스명 입력"}
                {...register("jobClass")}
              ></ST.InputField>
            </ST.FormItem>

            <ST.FormItem>
              <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobPattern" $ess={true}>
                반복패턴
              </ST.LabelText>
              <Controller
                name="jobPattern"
                control={control}
                render={({ field }) => {
                  const handleSelect = (selectKey: string) => {
                    const selectIndex = pattern.findIndex((name) => name.value === selectKey);
                    field.onChange(pattern[selectIndex].value);
                  };
                  return (
                    <SelectBox
                      id="jobauseYn"
                      name="jobauseYn"
                      optionItem={pattern}
                      selectedValue={field.value}
                      size="middle"
                      handleSelect={handleSelect}
                    />
                  );
                }}
              />
            </ST.FormItem>

            {/* 패턴에 따른 UI변경부분 */}
            <Once controller={Controller} control={control} />
            <Daily />
            <Weekly />
            <Monthly />

            <ST.FormItem>
              <ST.LabelText $fs={12} $fc={theme.color.fcThird} $display="block" htmlFor="jobauseYn" $ess={true}>
                사용유무
              </ST.LabelText>
              <Controller
                name="jobauseYn"
                control={control}
                render={({ field }) => {
                  const handleSelect = (selectKey: string) => {
                    const selectIndex = useYn.findIndex((name) => name.value === selectKey);
                    field.onChange(useYn[selectIndex].value);
                  };
                  return (
                    <SelectBox
                      id="jobauseYn"
                      name="jobauseYn"
                      optionItem={useYn}
                      selectedValue={field.value}
                      size="middle"
                      handleSelect={handleSelect}
                    />
                  );
                }}
              />
            </ST.FormItem>

            <ST.FlexBox $mt={40} className="dfsdfsdf">
              <ST.Button width={"auto"} $fc={theme.color.fcSecond} $background={theme.color.midLightGray} $primary={true} onClick={cancelHandler}>
                <Xcircle />
                취소
              </ST.Button>

              <ST.Button type="submit" width={"auto"} $ml={10} $second={true}>
                <Edit />
                수정
              </ST.Button>

              <ST.Button type="submit" width={"auto"} $ml={10} $primary={true}>
                <Edit />
                등록
              </ST.Button>
            </ST.FlexBox>
          </ST.FormGroup>
        </Body>
      </DetailBoxOuter>
    </form>
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

import React from "react";
import * as ST from "../../styled/style";
import { ReactComponent as PwIcon } from "../../assets/img/password-02.svg";
import { useNavigate } from "react-router-dom";
import { useMessageAlertStore, useLodingStore } from "../../store/globalStore";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  userEmail: string;
  userName: string;
};

const Pwfind = () => {
  const navigate = useNavigate();
  const { setData } = useMessageAlertStore();
  const { setIsLoading } = useLodingStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isSubmitted },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setIsLoading(true); // 로딩
    navigate("/pwFindComplate");
  };

  // const pwFindHandler = () => {
  //   if (isEmpty(inputEmail)) {
  //     setData({
  //       isShow: true,
  //       msg: "이메일을 입력하세요",
  //       okBtn: false, // 확인 버튼 노출/미노출
  //     });
  //     return;
  //   }

  //   if (isEmpty(inputName)) {
  //     setData({
  //       isShow: true,
  //       msg: "이름을 입력하세요",
  //       okBtn: false, // 확인 버튼 노출/미노출
  //     });
  //     return;
  //   }

  //   navigate("../pwFindComplate");
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ST.FlexBox width={"100%"} height="100vh" $justify="center" $align="center">
        <ST.BasicTagItem width={400}>
          <ST.TextItem $fs={48}>비밀번호 찾기</ST.TextItem>
          <ST.FormGroup $gapT={20}>
            <ST.FormItem>
              <ST.LabelText $display="block" htmlFor="userEmail" $ess={true}>
                이메일
              </ST.LabelText>
              <ST.InputField
                width={"100%"}
                id={"userEmail"}
                $pa={10}
                type={"text"}
                $size={"lager"}
                placeholder={"이메일을 입력하세요"}
                {...register("userEmail", {
                  required: true,
                })}
                $invalid={errors.userEmail ? "true" : "false"}
              ></ST.InputField>
              {errors.userEmail && <ST.ErrorMsg>이메일은 필수입력 사항입니다.</ST.ErrorMsg>}
            </ST.FormItem>

            <ST.FormItem>
              <ST.LabelText $display="block" htmlFor="userName">
                이름
              </ST.LabelText>
              <ST.InputField
                width={"100%"}
                id={"userName"}
                $pa={10}
                type={"text"}
                $size={"lager"}
                placeholder={"이름을 입력하세요"}
                {...register("userName", {
                  required: true,
                })}
              ></ST.InputField>
              {errors.userName && <ST.ErrorMsg>이름은 필수입력 사항입니다.</ST.ErrorMsg>}
            </ST.FormItem>

            <ST.Button type="submit" $mt={40} $size={"lager"} $primary={true}>
              <PwIcon />
              비밀번호 찾기
            </ST.Button>
          </ST.FormGroup>
        </ST.BasicTagItem>
      </ST.FlexBox>
    </form>
  );
};

export default Pwfind;

import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import * as ST from "../../styled/style";
import { useLodingStore, useMessageAlertStore } from "../../store/globalStore";
import { theme } from "../../styled/theme";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  userEmail: string;
  userName: string;
  userPw: string;
  pwAgain: string;
};

const Join = () => {
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
    navigate("/joinComplate");
  };

  // const joinHandler = () => {
  //   if (isEmpty(inputEmail)) {
  //     setData({
  //       isShow: true,
  //       msg: "이메일을 입력하세요",
  //       okBtn: true, // 확인 버튼 노출/미노출
  //       callback: callbcakFunc, // 확인 버튼 클릭 시 실행 함수등록
  //     });
  //     return;
  //   }

  //   if (isEmpty(inputName)) {
  //     setData({
  //       isShow: true,
  //       msg: "이름을 입력하세요",
  //       okBtn: false,
  //     });
  //     return;
  //   }

  //   if (isEmpty(inputPw)) {
  //     setData({
  //       isShow: true,
  //       msg: "비밀번호를 입력하세요",
  //       okBtn: false,
  //     });
  //     return;
  //   }

  //   if (isEmpty(inputPwRe)) {
  //     setData({
  //       isShow: true,
  //       msg: "비밀번호를 한번 더 입력하세요",
  //       okBtn: false,
  //     });
  //     return;
  //   }
  //   navigate("../joinComplate");
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ST.FlexBox width={"100%"} height="100vh" $justify="center" $align="center">
        <ST.BasicTagItem width={400}>
          <ST.BasicTagItem $mb={40}>
            <ST.ImageBox src={logo}></ST.ImageBox>
            <ST.TextItem $mt={15} $fc={theme.color.primary} $fw="bold">
              회원가입
            </ST.TextItem>
          </ST.BasicTagItem>
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
                $invalid={errors.userName ? "true" : "false"}
              ></ST.InputField>
              {errors.userName && <ST.ErrorMsg>이름은 필수입력 사항입니다.</ST.ErrorMsg>}
            </ST.FormItem>

            <ST.FormItem>
              <ST.LabelText $display="block" htmlFor="userPw">
                비밀번호
              </ST.LabelText>
              <ST.InputField
                width={"100%"}
                id={"userPw"}
                $pa={10}
                type="password"
                $size={"lager"}
                placeholder={"비밀번호를 입력하세요"}
                {...register("userPw", {
                  required: true,
                })}
                $invalid={errors.userPw ? "true" : "false"}
              ></ST.InputField>
              {errors.userName && <ST.ErrorMsg>비밀번호를 입력하세요.</ST.ErrorMsg>}
            </ST.FormItem>

            <ST.FormItem>
              <ST.LabelText $display="block" htmlFor="pwAgain">
                비밀번호 확인
              </ST.LabelText>
              <ST.InputField
                width={"100%"}
                id={"pwAgain"}
                $pa={10}
                type="password"
                $size={"lager"}
                placeholder={"비밀번호를 한번더 입력하세요"}
                {...register("pwAgain", {
                  required: true,
                })}
                $invalid={errors.userPw ? "true" : "false"}
              ></ST.InputField>
              {errors.pwAgain && <ST.ErrorMsg>비밀번호를 한번더 입력하세요.</ST.ErrorMsg>}
            </ST.FormItem>

            <ST.Button type="submit" $mt={40} $size={"lager"} $primary={true}>
              회원가입
            </ST.Button>
          </ST.FormGroup>
        </ST.BasicTagItem>
      </ST.FlexBox>
    </form>
  );
};

export default Join;

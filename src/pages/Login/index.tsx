import logo from "../../assets/img/logo.svg";
import * as ST from "../../styled/style";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../../styled/theme";
import { useMessageAlertStore, useLodingStore } from "../../store/globalStore";
import { useForm, SubmitHandler, FormSubmitHandler } from "react-hook-form";
import { useShallow } from "zustand/react/shallow";

type Inputs = {
  userId: string;
  userPw: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { setData } = useMessageAlertStore();
  const { setIsLoading } = useLodingStore(useShallow((state) => ({ setIsLoading: state.setIsLoading })));

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting, isSubmitted },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setIsLoading(true); // 로딩
    navigate("/overview");
  };

  const passWordFindHandler = () => {
    navigate("../pwFind");
  };

  const joinHandler = () => {
    navigate("../join");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ST.FlexBox width={"100%"} height="100vh" $justify="center" $align="center" $background="#f8f8f8">
        <ST.BasicTagItem width={300}>
          <ST.BasicTagItem $mb={40}>
            <ST.ImageBox src={logo} />
          </ST.BasicTagItem>
          <ST.FormGroup $gapT={5}>
            <ST.FormItem>
              <ST.InputField
                id={"userId"}
                width={"100%"}
                $pa={10}
                $size={"lager"}
                placeholder={"아이디"}
                {...register("userId", {
                  required: true,
                })}
                $invalid={errors.userId ? "true" : "false"}
              ></ST.InputField>
              {errors.userId && <ST.ErrorMsg>아이디는 필수입력 사항입니다.</ST.ErrorMsg>}
            </ST.FormItem>

            <ST.FormItem>
              <ST.InputField
                type="password"
                id={"userPw"}
                width={"100%"}
                $pa={10}
                $size={"lager"}
                placeholder={"비밀번호"}
                {...register("userPw", {
                  required: true,
                })}
                $invalid={errors.userPw ? "true" : "false"}
              ></ST.InputField>
              {errors.userPw && <ST.ErrorMsg>비밀번호는 필수입력 사항입니다.</ST.ErrorMsg>}
            </ST.FormItem>

            <ST.Button type="submit" $mt={20} $size={"lager"} $primary={true} disabled={isSubmitting}>
              로그인
            </ST.Button>
          </ST.FormGroup>
          <ST.FlexBox $justify="right" $mt={10}>
            <ST.TextButton $mr={10} $fs={12} $fc={theme.color.fcSecond} onClick={passWordFindHandler}>
              비밀번호 찾기
            </ST.TextButton>
            <ST.TextButton $fs={12} $fc={theme.color.fcSecond} onClick={joinHandler} data-tooltip={"asda"}>
              회원가입
            </ST.TextButton>
          </ST.FlexBox>
        </ST.BasicTagItem>
      </ST.FlexBox>
    </form>
  );
};

export default Login;

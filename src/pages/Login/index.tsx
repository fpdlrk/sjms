import logo from "../../assets/img/logo.svg";
import InputField from "../../atom/InputField";
import useInput from "../../hooks/useInput";
import FormItem from "../../morecule/FormItem";
import * as ST from "../../styled/style";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../../styled/theme";
import useValidate from "../../hooks/useValidate";

const Login = () => {
  const navigate = useNavigate();
  const [inputId, changeIdHandler] = useInput("");
  const [inputPw, changePwHandler] = useInput("");
  const [required] = useValidate();

  // const { validateHandler } = useValidate([
  //   { value: inputId, checkType: "", msg: "아이디를 입력하세요" },
  //   { value: inputPw, checkType: "", msg: "비밀번호를 입력하세요" },
  // ]);

  const loginHandler = () => {
    // if (!validateHandler("alert")) return;
    // 메인으로 이동
    navigate("/overview");
  };

  const passWordFindHandler = () => {
    navigate("../pwFind");
  };

  const joinHandler = () => {
    navigate("../join");
  };

  return (
    <ST.FlexBox width={"100%"} height="100vh" $justify="center" $align="center" $background="#f8f8f8">
      <ST.BasicTagItem width={300}>
        <ST.BasicTagItem $mb={40}>
          <ST.ImageBox src={logo} />
        </ST.BasicTagItem>
        <ST.FormGroup $gapT={5}>
          <ST.FormItem>
            <ST.InputField
              id={"userId"}
              name={"ddd"}
              type={"text"}
              width={"100%"}
              value={inputId}
              $pa={10}
              $size={"lager"}
              placeholder={"아이디"}
              onChange={changeIdHandler}
            ></ST.InputField>
          </ST.FormItem>

          <ST.FormItem>
            <ST.InputField
              id={"userPw"}
              name={"ddd"}
              type={"text"}
              width={"100%"}
              value={inputPw}
              $pa={10}
              $size={"lager"}
              placeholder={"비밀번호"}
              onChange={changePwHandler}
            ></ST.InputField>
          </ST.FormItem>

          <ST.Button $mt={20} $size={"lager"} $primary={true} onClick={loginHandler}>
            로그인
          </ST.Button>
        </ST.FormGroup>
        <ST.FlexBox $justify="right" $mt={10}>
          <ST.TextButton $mr={10} $fs={12} $fc={theme.color.fcSecond} onClick={passWordFindHandler}>
            비밀번호 찾기
          </ST.TextButton>
          <ST.TextButton $fs={12} $fc={theme.color.fcSecond} onClick={joinHandler}>
            회원가입
          </ST.TextButton>
        </ST.FlexBox>
      </ST.BasicTagItem>
    </ST.FlexBox>
  );
};

export default Login;

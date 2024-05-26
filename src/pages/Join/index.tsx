import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import * as ST from "../../styled/style";
import useInput from "../../hooks/useInput";
import useValidate from "../../hooks/useValidate";
import { useMessageAlertStore } from "../../store/globalStore";
import { theme } from "../../styled/theme";

const Join = () => {
  const navigate = useNavigate();
  const [inputEmail, inputEmailHandler] = useInput("");
  const [inputName, inputNameHandler] = useInput("");
  const [inputPw, inputPwHandler] = useInput("");
  const [inputPwRe, inputPwAgainHandler] = useInput("");
  const { setIsShow }: any = useMessageAlertStore();
  const [required] = useValidate();

  /**
   * callFunc 함수
   * 기본validate 외에 따로 callback을 정의한다
   * @returns true/false
   */
  const callFunc = () => {
    console.log("callFunccallFunccallFunc");
    return true;
  };

  const joinHandler = () => {
    // validateHandler("alert");
    navigate("../joinComplate");
  };

  const okCallback = () => {
    console.log("확인버튼 클릭");
    setIsShow(false);
    // navigate("../joinComplate");
  };

  const joinConfirmHandler = () => {
    // navigate("../joinComplate");
  };

  return (
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
              name={"userEmail"}
              value={inputEmail}
              $pa={10}
              type={"text"}
              $size={"lager"}
              placeholder={"이메일을 입력하세요"}
              onChange={inputEmailHandler}
            ></ST.InputField>
          </ST.FormItem>

          <ST.FormItem>
            <ST.LabelText $display="block" htmlFor="userName">
              이름
            </ST.LabelText>
            <ST.InputField
              width={"100%"}
              id={"userName"}
              name={"userName"}
              value={inputName}
              $pa={10}
              type={"text"}
              $size={"lager"}
              placeholder={"이름을 입력하세요"}
              onChange={inputNameHandler}
            ></ST.InputField>
          </ST.FormItem>

          <ST.FormItem>
            <ST.LabelText $display="block" htmlFor="userPw">
              비밀번호
            </ST.LabelText>
            <ST.InputField
              width={"100%"}
              id={"userPw"}
              name={"userPw"}
              value={inputPw}
              $pa={10}
              type={"text"}
              $size={"lager"}
              placeholder={"비밀번호를 입력하세요"}
              onChange={inputPwHandler}
            ></ST.InputField>
          </ST.FormItem>

          <ST.FormItem>
            <ST.LabelText $display="block" htmlFor="pwAgain">
              비밀번호 확인
            </ST.LabelText>
            <ST.InputField
              width={"100%"}
              id={"pwAgain"}
              name={"ddd"}
              value={inputPwRe}
              $pa={10}
              type={"text"}
              $size={"lager"}
              placeholder={"비밀번호를 한번더 입력하세요"}
              onChange={inputPwAgainHandler}
            ></ST.InputField>
          </ST.FormItem>

          <ST.Button $mt={40} $size={"lager"} $primary={true} onClick={joinHandler}>
            회원가입
          </ST.Button>

          <ST.Button $mt={10} $size={"lager"} $primary={true} onClick={joinConfirmHandler}>
            회원가입 (컨핌타입)
          </ST.Button>
        </ST.FormGroup>
      </ST.BasicTagItem>
    </ST.FlexBox>
  );
};

export default Join;

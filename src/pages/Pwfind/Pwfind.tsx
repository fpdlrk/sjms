import React from "react";
import * as ST from "../../styled/style";
import { ReactComponent as PwIcon } from "../../assets/img/password-02.svg";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import useValidate from "../../hooks/useValidate";

const Pwfind = () => {
  const navigate = useNavigate();
  const [inputEmail, inputEmailHandler] = useInput("");
  const [inputName, inputNameHandler] = useInput("");
  const [required] = useValidate();

  const pwFindHandler = () => {
    navigate("../pwFindComplate");
  };

  return (
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

          <ST.Button $mt={40} $size={"lager"} $primary={true} onClick={pwFindHandler}>
            <PwIcon />
            비밀번호 찾기
          </ST.Button>
        </ST.FormGroup>
      </ST.BasicTagItem>
    </ST.FlexBox>
  );
};

export default Pwfind;

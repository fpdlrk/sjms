import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import * as ST from "../../styled/style";
import useInput from "../../hooks/useInput";
import useValidate from "../../hooks/useValidate";
import { useMessageAlertStore } from "../../store/globalStore";
import { theme } from "../../styled/theme";
import { useCallback, useEffect, useState } from "react";

const UserInfoModify = () => {
  const navigate = useNavigate();
  /**
   * 기존 비밀번호 확인용 으로 확인이 됐을 시 true
   * 새 비밀번호를 이력할 수 있는 영역이 보여지는 state
   * */
  const [isPassword, setIsPassword] = useState(false);

  const [inputPw, inputPwHandler] = useInput("");
  const [inputNewPassword, newPassword] = useInput("");
  const [passwordConfirm, newPasswordConfirm] = useInput("");
  const { setIsShow, setType }: any = useMessageAlertStore();
  const [required] = useValidate();

  /**
   * callFunc 함수
   * 기본validate 외에 따로 callback을 정의한다
   * @returns true/false
   */

  // 페스워드 체크
  const passwordCheckaProc = useCallback((data: any) => {
    if (data.value.length < 4) {
      return false;
    }

    setIsPassword(true);
    return true;
  }, []);

  // 정보수정 완료 시 로그인 페이지로 보내기
  const reLoginPage = () => {
    // return true;
  };

  const modifyHandler = () => {
    // navigate("../joinComplate");
  };

  const passwordCheck = () => {
    console.log("비밀번호버튼 클릭!!!!!!!!!!");
  };

  useEffect(() => {});

  return (
    <ST.FlexBox width={"100%"} height="100vh" $justify="center" $align="center">
      <ST.BasicTagItem width={400}>
        <ST.BasicTagItem $mb={40}>
          <ST.ImageBox src={logo}></ST.ImageBox>
          <ST.TextItem $mt={15} $fc={theme.color.primary} $fw="bold">
            회원정보 수정
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
              value={"test@gmail.com"}
              $pa={10}
              type={"text"}
              $size={"lager"}
              placeholder={"이메일을 입력하세요"}
              disabled={true}
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
              value={"홍길동"}
              $pa={10}
              type={"text"}
              $size={"lager"}
              placeholder={"이름을 입력하세요"}
              disabled={true}
            ></ST.InputField>
          </ST.FormItem>

          <ST.FormItem>
            <ST.LabelText $display="block" htmlFor="userPw">
              현재 비밀번호
            </ST.LabelText>
            <ST.FlexBox>
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
                disabled={isPassword}
              ></ST.InputField>
              {!isPassword && (
                <ST.Button width={180} $size="lager" $ml={5} $second={true} onClick={passwordCheck}>
                  비밀번호 확인
                </ST.Button>
              )}
            </ST.FlexBox>
          </ST.FormItem>

          {isPassword && (
            <>
              <ST.FormItem>
                <ST.LabelText $display="block" htmlFor="userPw">
                  신규 비밀번호
                </ST.LabelText>
                <ST.InputField
                  width={"100%"}
                  id={"userPw"}
                  name={"userPw"}
                  value={inputNewPassword}
                  $pa={10}
                  type={"text"}
                  $size={"lager"}
                  placeholder={"비밀번호를 입력하세요"}
                  onChange={newPassword}
                ></ST.InputField>
              </ST.FormItem>

              <ST.FormItem>
                <ST.LabelText $display="block" htmlFor="pwAgain">
                  신규 비밀번호 확인
                </ST.LabelText>
                <ST.InputField
                  width={"100%"}
                  id={"pwAgain"}
                  name={"ddd"}
                  value={passwordConfirm}
                  $pa={10}
                  type={"text"}
                  $size={"lager"}
                  placeholder={"비밀번호를 한번더 입력하세요"}
                  onChange={newPasswordConfirm}
                ></ST.InputField>
              </ST.FormItem>
            </>
          )}

          <ST.Button $mt={40} $size={"lager"} $primary={true} disabled={!isPassword} onClick={modifyHandler}>
            정보수정
          </ST.Button>
        </ST.FormGroup>
      </ST.BasicTagItem>
    </ST.FlexBox>
  );
};

export default UserInfoModify;

import React from "react";
import * as ST from "../../styled/style";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/img/user-profile-circle.svg";
import { TbUserCircle } from "react-icons/tb";
import { theme } from "../../styled/theme";

const JoinComplate = () => {
  const navigate = useNavigate();
  const moveLoginPage = () => {
    // alert("로그인 페이지로 이동");
    navigate("/login");
  };
  return (
    <ST.FlexBox width={"100%"} height="100vh" $justify="center" $align="center">
      <ST.FlexBox $direction="column" $align="center">
        {/* <ST.ImageBox src={profile} width={100} /> */}
        <ST.ReactIconItem $fs={100}>
          <TbUserCircle />
        </ST.ReactIconItem>
        <ST.TextItem $fs={32}>회원가입이 완료 되었습니다.</ST.TextItem>
        <ST.TextItem $fs={12} $fc={theme.color.fcThird} $mt={10}>
          SJMS의 서비스를 이용하실 수 있습니다.
        </ST.TextItem>
        <ST.Button $mt={40} $size={"lager"} $primary={true} onClick={moveLoginPage}>
          로그인
        </ST.Button>
      </ST.FlexBox>
    </ST.FlexBox>
  );
};

export default JoinComplate;

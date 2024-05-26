import React from "react";
import * as ST from "../../styled/style";
import { useNavigate } from "react-router-dom";
import { theme } from "../../styled/theme";

const PwfindComplate = () => {
  const navigate = useNavigate();
  const movePage = () => {
    navigate("/login");
  };
  return (
    <ST.FlexBox width={"100%"} height="100vh" $justify="center" $align="center">
      <ST.BasicTagItem width={400}>
        <ST.TextItem $fs={48}>비밀번호 찾기</ST.TextItem>
        <ST.TextItem $fs={16} $fc={theme.color.fcThird} $mt={10}>
          홍길동님의 비밀번호는 <span style={{ fontWeight: "700", color: theme.color.secondary }}>1234qwer!@#</span> 입니다
        </ST.TextItem>
        <ST.Button $mt={40} $size={"lager"} $primary={true} onClick={movePage}>
          로그인
        </ST.Button>
      </ST.BasicTagItem>
    </ST.FlexBox>
  );
};

export default PwfindComplate;

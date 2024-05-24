import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import logo from "../../assets/img/logo.svg";
import { FlexMixin } from "../../styled/mixin";
import * as ST from "../../styled/style";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const changeHandler = () => {};

  return (
    <LoginLayout>
      <LoginForm>
        <Logo>
          <ST.ImageBox src={logo}></ST.ImageBox>
        </Logo>
        <ST.FormGroup $gapT={5}>
          <ST.FormItem>
            <ST.InputField
              width={"100%"}
              id={"dddd"}
              name={"ddd"}
              value={""}
              $pa={10}
              type={"text"}
              $size={"lager"}
              placeholder={"아이디"}
            ></ST.InputField>
          </ST.FormItem>

          <ST.FormItem>
            <ST.InputField
              width={"100%"}
              id={"dddd"}
              name={"ddd"}
              value={""}
              $pa={10}
              type={"text"}
              $size={"lager"}
              placeholder={"비밀번호"}
            ></ST.InputField>
          </ST.FormItem>

          <ST.Button $mt={20} $size={"lager"} $primary={true}>
            로그인
          </ST.Button>
        </ST.FormGroup>
        <ST.FlexBox $justify="right" $mt={10}>
          <ST.TextButton $mr={10} $fs={12} $fc={"#888"}>
            비밀번호 찾기
          </ST.TextButton>
          <ST.TextButton $fs={12} $fc={"#888"}>
            회원가입
          </ST.TextButton>
        </ST.FlexBox>
      </LoginForm>
    </LoginLayout>
  );
};

export default Login;

const LoginLayout = styled.div`
  height: 100vh;
  background-color: #f8f8f8;
  ${FlexMixin.flex({ $justify: "center", $align: "center" })}
`;
const LoginForm = styled.div`
  width: 350px;
`;

const Logo = styled.div`
  margin-bottom: 40px;
`;

// const ImageBox = styled.img<{ src: string }>``;

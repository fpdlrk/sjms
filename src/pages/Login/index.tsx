import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import logo from "../../assets/img/logo.svg";
import { InputField } from "../../components/InputField";

const Login = () => {
  return (
    <LoginLayout>
      <LoginForm>
        <Logo>
          <ImageBox src={logo}></ImageBox>
        </Logo>
        <FormGroup>
          <InputField value={"111"} pt={10} type={"text"} size={"lager"} />
        </FormGroup>
      </LoginForm>
    </LoginLayout>
  );
};

export default Login;

const LoginLayout = styled.div`
  height: 100vh;
  ${(props) => props.theme.mixin.flex({ justify: "center", align: "center" })}
`;
const LoginForm = styled.div`
  width: 350px;
`;

const Logo = styled.div``;

const ImageBox = styled.img<{ src: string }>``;

const FormGroup = styled.div``;

import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import logo from "../../assets/img/logo.svg";
import { InputFieldIprops } from "../../styled/styledUseType";

const Login = () => {
  return (
    <LoginLayout>
      <LoginForm>
        <Logo>
          <ImageBox src={logo}></ImageBox>
        </Logo>
        <FormGroup>
          <InputField type={"text"}></InputField>
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

const InputField = styled.input<InputFieldIprops>`
  width: 100%;
  height: ${(props) =>
    props.size === "lager"
      ? props.theme.inputSize.lager + "px"
      : props.size === "middle"
      ? props.theme.inputSize.middle
      : props.size === "small"
      ? props.theme.inputSize.small
      : "32px"};
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover {
  }
  &:focus {
    outline: none;
    border-color: #333;
  }
  &:disabled {
  }
`;

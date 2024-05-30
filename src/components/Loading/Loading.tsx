import React from "react";
import * as ST from "../../styled/style";
import { styled } from "styled-components";
import { theme } from "../../styled/theme";

const Loading = () => {
  return (
    <LoadingWrap>
      <LoadingBody>Loading...</LoadingBody>
    </LoadingWrap>
  );
};

const LoadingWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
`;

const LoadingBody = styled.div`
  font-size: 12px;
  color: ${theme.color.failed};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default Loading;

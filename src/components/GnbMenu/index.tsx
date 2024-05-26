import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as ST from "../../styled/style";
import { theme } from "../../styled/theme";
import { ReactComponent as Logo } from "../../assets/img/logo_2.svg";
import styled from "styled-components";
import UserInfo from "./UserInfo";

const GnbMenu = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate("../overview");
  };
  return (
    <ST.FlexBox width={"100%"} height={85} $pl={35} $pr={35} $justify="space-between" $align="center" $background={theme.color.primary}>
      <ST.FlexBox $fc={theme.color.white}>
        <Logo onClick={goMain} style={{ cursor: "pointer" }} />
        <MunuList>
          <li>
            <Link to="../overview">overview</Link>
          </li>
          <li>
            <Link to="../job">job</Link>
          </li>
          <li>
            <Link to="../user">user</Link>
          </li>
        </MunuList>
      </ST.FlexBox>
      <UserInfo />
    </ST.FlexBox>
  );
};

export default GnbMenu;

const MunuList = styled.ul`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin-left: 40px;
  a {
    padding: 0 10px;
    color: rgba(255, 255, 255, 0.5) !important;
    cursor: pointer;
  }
`;

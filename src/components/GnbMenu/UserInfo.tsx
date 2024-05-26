import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as ST from "../../styled/style";
import { theme } from "../../styled/theme";
import { ReactComponent as Profile } from "../../assets/img/user-profile-square.svg";
import { ReactComponent as Arrow } from "../../assets/img/arrow_down.svg";
import usePostionInfo from "../../hooks/usePostionInfo";
import styled from "styled-components";
import useValidate from "../../hooks/useValidate";
import { useMessageAlertStore } from "../../store/globalStore";

const UserInfo = () => {
  const navigate = useNavigate();
  const { posLocation, objRemove, pos, randomId } = usePostionInfo();
  const { setData, callback, setIsShow } = useMessageAlertStore();
  const { isEmpty } = useValidate();

  const okCallback = () => {
    setIsShow(false);
    navigate("../login");
  };

  // 로그아웃 처리
  const procLogout = () => {
    setData({
      isShow: true,
      msg: "로그아웃 하시겠습니까?",
      okBtn: true, // 확인 버튼 노출/미노출
      callback: okCallback,
    });
  };

  // 정보수정 이동
  const userInfoModify = () => {
    navigate("../userInfoModify");
  };
  return (
    <>
      <ST.FlexBox $align="center">
        <ST.TextItem $fc={theme.color.white} $mr={5} $fs={18} $lineheight={0}>
          <Profile />
        </ST.TextItem>
        <ST.TextItem $fc={theme.color.white}>박지선님(selles2@mindpro.co.kr)</ST.TextItem>
        <ST.TextItem $fc={theme.color.white} $ml={5} $fs={18} $lineheight={0} onClick={posLocation} $cursor="pointer">
          <Arrow />
        </ST.TextItem>
      </ST.FlexBox>

      {pos.isShow && (
        <UserInfoBox id={randomId} $left={pos.x} $top={pos.y} tabIndex={0} $radius={6} onBlur={objRemove}>
          <ST.TextButton onClick={procLogout}>로그아웃</ST.TextButton>
          <ST.TextButton onClick={userInfoModify}>정보수정</ST.TextButton>
        </UserInfoBox>
      )}
    </>
  );
};

export default UserInfo;

export const UserInfoBox = styled(ST.FlexBox)`
  width: 140px;
  /* height: 100px; */
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${theme.color.white};
  z-index: 10;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  > button {
    width: 100%;
    padding: 5px 15px;
    text-align: left;
    font-size: 12px;
    &:hover {
      background-color: ${theme.color.superLightGray};
      color: ${theme.color.primary};
    }
  }
`;

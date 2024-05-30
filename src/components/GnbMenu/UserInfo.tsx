import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import * as ST from "../../styled/style";
import { theme } from "../../styled/theme";
import { ReactComponent as Profile } from "../../assets/img/user-profile-square.svg";
import { ReactComponent as Arrow } from "../../assets/img/arrow_down.svg";
import usePostionInfo from "../../hooks/usePostionInfo";
import useValidate from "../../hooks/useValidate";
import { useMessageAlertStore } from "../../store/globalStore";
import { useShallow } from "zustand/react/shallow";

const UserInfo = () => {
  const navigate = useNavigate();
  const { posLocation, objRemove, pos, randomId } = usePostionInfo();
  const { setData, callback, setIsShow } = useMessageAlertStore(
    useShallow((state) => ({ setData: state.setData, callback: state.callback, setIsShow: state.setIsShow }))
  );
  const { isEmpty } = useValidate();

  const okCallback = useCallback(() => {
    setIsShow(false);
    navigate("../login");
  }, [randomId]);

  // 로그아웃 처리
  const procLogout = useCallback(() => {
    console.log("로그아웃 처리");
    setData({
      isShow: true,
      msg: "로그아웃 하시겠습니까?",
      okBtn: true, // 확인 버튼 노출/미노출
      callback: okCallback,
    });
  }, [randomId]);

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
        <ST.TextItem $fc={theme.color.white} $ml={5} $fs={18} $lineheight={0} onMouseDown={posLocation} $cursor="pointer">
          <Arrow />
        </ST.TextItem>
      </ST.FlexBox>

      {pos.isShow && (
        <ST.PopupMenu id={randomId} $left={pos.x} $top={pos.y} tabIndex={0} $radius={6} onMouseDown={objRemove} onBlur={objRemove}>
          <ST.TextButton onClick={procLogout}>로그아웃</ST.TextButton>
          <ST.TextButton onClick={userInfoModify}>정보수정</ST.TextButton>
        </ST.PopupMenu>
      )}
    </>
  );
};

export default UserInfo;

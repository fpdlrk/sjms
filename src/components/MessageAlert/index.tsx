import React from "react";
import { useMessageAlertStore } from "../../store/globalStore";
import * as ST from "../../styled/style";
import { TbX } from "react-icons/tb";
import { theme } from "./../../styled/theme";

const MessageAlert = () => {
  const { msg, okBtn, callback, setReset } = useMessageAlertStore();
  const closeHandler = () => {
    setReset();
  };
  return (
    <ST.PopupAndAlertOuter className="PopupAndAlertOuterPopupAndAlertOuterPopupAndAlertOuterPopupAndAlertOuter">
      <ST.PopupAndAlertWrap>
        <ST.PopupAndAlertTitle>안내</ST.PopupAndAlertTitle>
        <ST.PopupAndAlertBody>
          <ST.TextItem $fc={theme.color.fcSecond}>{msg}</ST.TextItem>
        </ST.PopupAndAlertBody>
        <ST.PopupAndAlertBottom>
          <ST.FlexBox $justify="right">
            <ST.Button width={"auto"} $background="#fff" $bc="#fff" $mr={5} $size={"middle"} onClick={closeHandler}>
              닫기
            </ST.Button>
            {okBtn && (
              <ST.Button width={"auto"} $size={"middle"} $primary={true} onClick={callback}>
                확인
              </ST.Button>
            )}
          </ST.FlexBox>
        </ST.PopupAndAlertBottom>
        <ST.IconButton onClick={closeHandler}>
          <TbX />
        </ST.IconButton>
      </ST.PopupAndAlertWrap>
    </ST.PopupAndAlertOuter>
  );
};

export default MessageAlert;

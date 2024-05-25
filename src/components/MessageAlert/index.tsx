import React from "react";
import useMessageAlertStore from "../../store/globalStore";
import * as ST from "../../styled/style";
import { TbX } from "react-icons/tb";
import { theme } from "./../../styled/theme";

const MessageAlert = () => {
  const { isShow, setIsShow, msg } = useMessageAlertStore();
  const closeHandler = () => {
    setIsShow(false);
  };
  return (
    <ST.PopupAndAlertOuter>
      <ST.PopupAndAlertWrap>
        <ST.PopupAndAlertTitle>안내</ST.PopupAndAlertTitle>
        <ST.PopupAndAlertBody>
          <ST.TextItem $fc={theme.color.fcSecond}>{msg}</ST.TextItem>
        </ST.PopupAndAlertBody>
        <ST.IconButton onClick={closeHandler}>
          <TbX />
        </ST.IconButton>
      </ST.PopupAndAlertWrap>
    </ST.PopupAndAlertOuter>
  );
};

export default MessageAlert;

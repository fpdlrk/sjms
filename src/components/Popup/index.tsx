import React from "react";
import { useMessageAlertStore, usePopuptStore } from "../../store/globalStore";
import * as ST from "../../styled/style";
import { TbX } from "react-icons/tb";
import { theme } from "./../../styled/theme";
import { useShallow } from "zustand/react/shallow";

type PopupIpros = {
  children: React.ReactNode;
};

const Popup = ({ children }: PopupIpros) => {
  const { title, setReset, ok, isSubmit, cencel } = usePopuptStore(
    useShallow((state) => ({
      title: state.title,
      cencel: state.cencel,
      ok: state.ok,
      setReset: state.setReset,
      isSubmit: state.isSubmit,
    }))
  );
  const closeHandler = () => {
    setReset();
  };
  return (
    <ST.PopupAndAlertOuter className="PopupAndAlertOuterPopupAndAlertOuterPopupAndAlertOuterPopupAndAlertOuterPopupAndAlertOuter">
      <ST.PopupAndAlertWrap>
        <ST.PopupAndAlertTitle>{title}</ST.PopupAndAlertTitle>
        <ST.PopupAndAlertBody>{children}</ST.PopupAndAlertBody>
        <ST.PopupAndAlertBottom>
          <ST.FlexBox $justify="right">
            <ST.Button
              width={"auto"}
              $background="#fff"
              $bc="#fff"
              $mr={5}
              $size={"middle"}
              onClick={typeof cencel === "function" ? cencel : closeHandler}
            >
              닫기
            </ST.Button>
            <ST.Button type={isSubmit ? "submit" : "button"} width={"auto"} $size={"middle"} $primary={true} onClick={ok}>
              확인
            </ST.Button>
          </ST.FlexBox>
        </ST.PopupAndAlertBottom>
        <ST.IconButton onClick={typeof cencel === "function" ? cencel : closeHandler}>
          <TbX />
        </ST.IconButton>
      </ST.PopupAndAlertWrap>
    </ST.PopupAndAlertOuter>
  );
};

export default Popup;

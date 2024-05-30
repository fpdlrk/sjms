import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./router/Router";
import MessageAlert from "./components/MessageAlert";
import { useMessageAlertStore, useLodingStore, usePopuptStore } from "./store/globalStore";
import CusTomTooltip from "./components/Tooltip";
import GlobalStyled from "./styled/GlobalStyled";
import Loading from "./components/Loading/Loading";
import { useShallow } from "zustand/react/shallow";
import Popup from "./components/Popup";

function App() {
  const { isShow } = useMessageAlertStore(useShallow((state) => ({ isShow: state.isShow })));
  // const { isPopShow } = usePopuptStore(useShallow((state) => ({ isPopShow: state.isPopShow })));
  const { isLoading } = useLodingStore(useShallow((state) => ({ isLoading: state.isLoading })));
  return (
    <>
      <GlobalStyled />
      <Router />

      {isShow && <MessageAlert />}
      {isLoading && <Loading />}
      <CusTomTooltip />
    </>
  );
}

export default App;

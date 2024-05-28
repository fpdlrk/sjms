import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./router/Router";
import MessageAlert from "./components/MessageAlert";
import { useMessageAlertStore, useLodingStore } from "./store/globalStore";
import CusTomTooltip from "./components/Tooltip";
import GlobalStyled from "./styled/GlobalStyled";
import Loading from "./components/Loading/Loading";

function App() {
  const { isShow } = useMessageAlertStore();
  const { isLoading } = useLodingStore();
  return (
    <>
      <GlobalStyled />
      {isShow && <MessageAlert />}
      <Router />
      <CusTomTooltip />
      {isLoading && <Loading />}
    </>
  );
}

export default App;

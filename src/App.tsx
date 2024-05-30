import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./router/Router";
import MessageAlert from "./components/MessageAlert";
import { useMessageAlertStore, useLodingStore } from "./store/globalStore";
import CusTomTooltip from "./components/Tooltip";
import GlobalStyled from "./styled/GlobalStyled";
import Loading from "./components/Loading/Loading";
import { useShallow } from "zustand/react/shallow";

function App() {
  const { isShow } = useMessageAlertStore();
  const { isLoading } = useLodingStore(useShallow((state) => ({ isLoading: state.isLoading })));
  console.log("로그인");
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

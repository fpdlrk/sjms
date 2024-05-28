import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./router/Router";
import MessageAlert from "./components/MessageAlert";
import { useMessageAlertStore } from "./store/globalStore";
import MessageConfirm from "./components/MessageConfirm";
import CusTomTooltip from "./components/Tooltip";

function App() {
  const { isShow } = useMessageAlertStore();
  return (
    <>
      {isShow && <MessageAlert />}
      <Router />
      <CusTomTooltip />
    </>
  );
}

export default App;

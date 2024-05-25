import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./router/Router";
import MessageAlert from "./components/MessageAlert";
import useMessageAlertStore from "./store/globalStore";
import MessageConfirm from "./components/MessageConfirm";

function App() {
  const { isShow, type } = useMessageAlertStore();
  return (
    <>
      {isShow && type === "alert" && <MessageAlert />}
      {isShow && type === "confirm" && <MessageConfirm />}
      <Router />
    </>
  );
}

export default App;

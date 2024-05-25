import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Join from "../pages/Join";
import JoinComplate from "../pages/JoinComplate";
import Dashboard from "../pages/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/joinComplate" element={<JoinComplate />}></Route>
        <Route path="/join" element={<Join />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

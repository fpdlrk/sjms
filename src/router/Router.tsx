import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Join from "../pages/Join";
import JoinComplate from "../pages/Join/Complate";
import Overview from "../pages/Overview";
import Pwfind from "../pages/Pwfind/Pwfind";
import PwfindComplate from "../pages/Pwfind/Complate";
import IndexPage from "../pages/Index/Index";
import Job from "../pages/Job";
import UserList from "../pages/UserList";
import UserInfoModify from "../pages/Join/UserInfoModify";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/joinComplate" element={<JoinComplate />}></Route>
        <Route path="/userInfoModify" element={<UserInfoModify />}></Route>
        <Route path="/pwFind" element={<Pwfind />}></Route>
        <Route path="/pwFindComplate" element={<PwfindComplate />}></Route>
        <Route path="/overview" element={<Overview />}></Route>
        <Route path="/job" element={<Job />}></Route>
        <Route path="/user" element={<UserList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

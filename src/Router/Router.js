import { Route, Routes } from "react-router";
import React from "react";
import Main from "../pages/Main";
import LifeStyle from "../pages/LifeStyle";
import SingleEdit from "../pages/SingleEdit";
import ShowCase from "../pages/ShowCase";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/showcase" element={<ShowCase />} />
      <Route path="/lifestyle" element={<LifeStyle />} />
      <Route path="/single-edit" element={<SingleEdit />} />
      <Route path="/*" element={<Main />} />
    </Routes>
  );
};

export default Router;

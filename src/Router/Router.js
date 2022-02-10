import { Route, Routes } from "react-router";
import React from "react";
import Main from "../pages/Main";
import LifeStyle from "../pages/LifeStyle";

import SingleEdit from "../pages/SingleEdit";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/lifestyle" element={<LifeStyle />} />
      <Route path="/single-edit" element={<SingleEdit />} />
    </Routes>
  );
};

export default Router;

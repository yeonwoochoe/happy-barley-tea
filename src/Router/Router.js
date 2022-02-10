import React from "react";

import Main from "../pages/Main";

import styled from "styled-components";
import SingleEdit from "../pages/SingleEdit";

const MainWrapper = styled.main`
  width: 100%;
`;

const Router = () => {
  return (
    <MainWrapper>
      <SingleEdit />
    </MainWrapper>
  );
};

export default Router;

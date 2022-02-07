import React from "react";
import styled from "styled-components";
import ShowCase from "../components/Main/ShowCase";

const MainWrapper = styled.main`
  width: 100%;
`;

const Router = () => {
  return (
    <MainWrapper>
      <ShowCase />
    </MainWrapper>
  );
};

export default Router;

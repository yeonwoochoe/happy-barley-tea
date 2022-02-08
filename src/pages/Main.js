import React from "react";
import styled from "styled-components";
import LifeStyle from "../components/Main/LifeStyle";
import ShowCase from "../components/Main/ShowCase";

const MainWrapper = styled.main`
  width: 100%;
`;

const Main = () => {
  return (
    <MainWrapper>
      <ShowCase />
      <LifeStyle />
    </MainWrapper>
  );
};

export default Main;

import React from "react";
import styled from "styled-components";
import LifeStyle from "../components/Main/LifeStyle";
import SearchBox from "../components/Main/SearchBox";
import ShowCase from "../components/Main/ShowCase";
import SingleEdit from "../components/Main/SingleEdit";
import YoutubeBox from "../components/Main/YoutubeBox";

const MainWrapper = styled.main`
  width: 100%;
`;

const Main = () => {
  return (
    <MainWrapper>
      <ShowCase />
      <LifeStyle />
      <SearchBox />
      <YoutubeBox />
      <SingleEdit />
    </MainWrapper>
  );
};

export default Main;

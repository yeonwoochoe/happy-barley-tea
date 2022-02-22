import React, { useEffect } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import EmailReceive from "../components/Main/EmailReceive";
import HotIssue from "../components/Main/HotIssue";
import LifeStyle from "../components/Main/LifeStyle";
import SearchBox from "../components/Main/SearchBox";
import ShowCase from "../components/Main/ShowCase";
import SingleEdit from "../components/Main/SingleEdit";
import YoutubeBox from "../components/Main/YoutubeBox";
import getSinglePlus from "../api";
const MainWrapper = styled.main`
  width: 100%;
`;

const Main = () => {
  const { pathname } = useLocation();
  console.log(getSinglePlus);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <MainWrapper>
      <ShowCase />
      <LifeStyle />
      <SearchBox />
      <YoutubeBox />
      <SingleEdit />
      <HotIssue />
      <EmailReceive />
    </MainWrapper>
  );
};

export default Main;

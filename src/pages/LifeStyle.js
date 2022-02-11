import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../components/LifeStyle/Card";
import {
  CardList,
  Container,
  HeaderSecondTitle,
  SectionWrapper,
} from "../components/common/Common";
import { useLocation } from "react-router";

const StyledDiv = styled.section`
  width: 100%;
  height: auto;

  background-color: #fff;
`;

const WrapperTab = styled.div`
  align-self: start;
  ul {
    display: flex;
    margin-top: 16px;
    padding: 0 20px;
    gap: 60px;
    font-size: 22px;
    font-weight: 700;
    color: #9f9f9f;
    text-transform: capitalize;
    li:first-child {
      text-transform: uppercase;
    }
  }
`;

const WrapperContent = styled.div`
  padding-top: 70px;
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const More = styled.div`
  margin: auto;
  margin-top: 50px;
  text-align: center;
  button {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: underline;
  }
`;

const LifeStyle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <StyledDiv>
      <SectionWrapper width="1320px" padding="100px 0 145px">
        <WrapperTab>
          <HeaderSecondTitle fontSize="44px" color="#111">
            lifestyle
          </HeaderSecondTitle>
          <ul>
            <li>all</li>
            <li>trend</li>
            <li>enjoy</li>
            <li>shopping</li>
            <li>relationship</li>
            <li>business</li>
            <li>viewpoint</li>
            <li>culture</li>
          </ul>
        </WrapperTab>
        <WrapperContent>
          <CardList>
            <Card />
          </CardList>
        </WrapperContent>
        <More>
          <button type="button">+ more</button>
        </More>
      </SectionWrapper>
    </StyledDiv>
  );
};

export default LifeStyle;

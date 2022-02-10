import React from 'react';
import styled from 'styled-components';
import StyledH2 from '../components/common/StyledH2';
import Container from '../components/common/Container';
import Card from '../components/LifeStyle/Card';

const StyledDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 100px 0 145px;
  background-color: #fff;
`;

const WrapperTab = styled.div`
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
  return (
    <StyledDiv>
      <Container>
        <WrapperTab>
          <StyledH2>lifestyle</StyledH2>
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
          <ul>
            <Card />
          </ul>
        </WrapperContent>
      </Container>
      <More>
        <button type='button'>+ more</button>
      </More>
    </StyledDiv>
  );
};

export default LifeStyle;

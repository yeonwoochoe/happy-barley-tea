import React from "react";
import styled from "styled-components";
import { HeadTitle, ViewContent, ViewImage, ViewWrapper } from "../UI/Common";

const ShowCaseDiv = styled.section`
  width: 100%;
  color: #ffffff;
  background-color: rgba(51, 51, 51);
`;
const ShowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1460px;
  padding-bottom: 120px;
  margin: auto;
`;

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
`;
const CardList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
`;
const CardImage = styled.div`
  width: 265px;
  height: 290px;
  background-color: #fff;
`;

const CardCaption = styled.dl`
  margin-top: 10px;
  align-self: flex-start;
  text-transform: uppercase;
  font-weight: bold;
  dt {
    margin-bottom: 10px;
    font-size: 14px;
  }
  dd {
    font-size: 22px;
  }
`;
const ShowCase = () => {
  return (
    <ShowCaseDiv>
      <ShowWrapper>
        <ViewWrapper columns={`2fr 1.1fr`}>
          <ViewContent>1</ViewContent>
          <ViewImage>2</ViewImage>
        </ViewWrapper>
        <ShowWrapper>
          <WrapperDiv width={`1280px`}>
            <HeadTitle color={`#ffffff`}>show case</HeadTitle>
            <CardList>
              <li>
                <WrapperDiv>
                  <CardImage>img</CardImage>
                  <CardCaption>
                    <dt>enjoy</dt>
                    <dd>걸어서 겨울 속으로</dd>
                  </CardCaption>
                </WrapperDiv>
              </li>
              <li>
                <WrapperDiv>
                  <CardImage>img</CardImage>
                  <CardCaption>
                    <dt>enjoy</dt>
                    <dd>걸어서 겨울 속으로</dd>
                  </CardCaption>
                </WrapperDiv>
              </li>
              <li>
                <WrapperDiv>
                  <CardImage>img</CardImage>
                  <CardCaption>
                    <dt>enjoy</dt>
                    <dd>걸어서 겨울 속으로</dd>
                  </CardCaption>
                </WrapperDiv>
              </li>
              <li>
                <WrapperDiv>
                  <CardImage>img</CardImage>
                  <CardCaption>
                    <dt>enjoy</dt>
                    <dd>걸어서 겨울 속으로</dd>
                  </CardCaption>
                </WrapperDiv>
              </li>
            </CardList>
          </WrapperDiv>
        </ShowWrapper>
      </ShowWrapper>
    </ShowCaseDiv>
  );
};

export default ShowCase;

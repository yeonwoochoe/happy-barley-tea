import React from "react";
import styled from "styled-components";
import {
  CardCaption,
  CardImage,
  CardLi,
  CardList,
  CardWrapper,
  HeaderSecondTitle,
  SectionWrapper,
  ViewContent,
  ViewImage,
  ViewWrapper,
  WrapperDiv,
} from "./Common";

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
  padding-bottom: 20px;
  margin: auto;
`;

const ShowCase = () => {
  return (
    <ShowCaseDiv>
      <SectionWrapper width={"1460px"} padding={"0 0 120px 0"}>
        <ViewWrapper columns={`2fr 1.1fr`}>
          <ViewContent>1</ViewContent>
          <ViewImage>2</ViewImage>
        </ViewWrapper>
        <ShowWrapper>
          <WrapperDiv width={`1280px`}>
            <HeaderSecondTitle color={`#ffffff`}>show case</HeaderSecondTitle>
            <CardWrapper>
              <CardList>
                <CardLi width={`calc(25% - 40px)`}>
                  <WrapperDiv>
                    <CardImage height={"290px"}>img</CardImage>
                    <CardCaption>
                      <dt>enjoy</dt>
                      <dd>걸어서 겨울 속으로</dd>
                    </CardCaption>
                  </WrapperDiv>
                </CardLi>
                <CardLi width={`calc(25% - 40px)`}>
                  <WrapperDiv>
                    <CardImage height={"290px"}>img</CardImage>
                    <CardCaption>
                      <dt>enjoy</dt>
                      <dd>걸어서 겨울 속으로</dd>
                    </CardCaption>
                  </WrapperDiv>
                </CardLi>
                <CardLi width={`calc(25% - 40px)`}>
                  <WrapperDiv>
                    <CardImage height={"290px"}>img</CardImage>
                    <CardCaption>
                      <dt>enjoy</dt>
                      <dd>걸어서 겨울 속으로</dd>
                    </CardCaption>
                  </WrapperDiv>
                </CardLi>
                <CardLi width={`calc(25% - 40px)`}>
                  <WrapperDiv>
                    <CardImage height={"290px"}>img</CardImage>
                    <CardCaption>
                      <dt>enjoy</dt>
                      <dd>걸어서 겨울 속으로</dd>
                    </CardCaption>
                  </WrapperDiv>
                </CardLi>
              </CardList>
            </CardWrapper>
          </WrapperDiv>
        </ShowWrapper>
      </SectionWrapper>
    </ShowCaseDiv>
  );
};

export default ShowCase;

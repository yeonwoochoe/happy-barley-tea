import React from "react";
import styled from "styled-components";
import {
  CardCaption,
  CardImage,
  CardLi,
  CardList,
  CardWrapper,
  HeadTitle,
  SectionWrapper,
  ViewContent,
  ViewImage,
  ViewWrapper,
  WrapperDiv,
} from "../UI/Common";

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
            <HeadTitle color={`#ffffff`}>show case</HeadTitle>

            <CardWrapper>
              <CardList
                style={{
                  display: "grid",
                  gridAutoFlow: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardLi>
                  <WrapperDiv>
                    <CardImage width={"290px"} height={"290px"}>
                      img
                    </CardImage>
                    <CardCaption>
                      <dt>enjoy</dt>
                      <dd>걸어서 겨울 속으로</dd>
                    </CardCaption>
                  </WrapperDiv>
                </CardLi>
                <CardLi>
                  <WrapperDiv>
                    <CardImage width={"290px"} height={"290px"}>
                      img
                    </CardImage>
                    <CardCaption>
                      <dt>enjoy</dt>
                      <dd>걸어서 겨울 속으로</dd>
                    </CardCaption>
                  </WrapperDiv>
                </CardLi>
                <CardLi>
                  <WrapperDiv>
                    <CardImage width={"290px"} height={"290px"}>
                      img
                    </CardImage>
                    <CardCaption>
                      <dt>enjoy</dt>
                      <dd>걸어서 겨울 속으로</dd>
                    </CardCaption>
                  </WrapperDiv>
                </CardLi>
                <CardLi>
                  <WrapperDiv>
                    <CardImage width={"290px"} height={"290px"}>
                      img
                    </CardImage>
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

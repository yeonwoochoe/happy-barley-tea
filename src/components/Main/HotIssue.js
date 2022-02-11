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
  FaceBook,
  Instargram,
  NaverPost,
  Twitter,
  Youtube,
} from "../common/Common";

const HotIssueDiv = styled.section`
  width: 100%;
  background-color: #ffffff;
`;
const CardMoreLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 42px;
  }
  p {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
  }
  span {
    display: inline-block;
    width: 100%;
    margin: auto;
    word-break: keep-all;
    text-align: center;
  }
`;
const SnsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 20px;
  li {
    width: 60px;
    height: 60px;
    margin: 0 20px 60px 20px;
    span {
      display: none;
    }
  }
`;

const HotIssue = () => {
  return (
    <HotIssueDiv>
      <SectionWrapper width={"1280px"} padding={"80px 0"}>
        <HeaderSecondTitle color={"#111"}>hot issue</HeaderSecondTitle>
        <ViewWrapper columns={"1fr 2fr"}>
          <ViewImage>image</ViewImage>
          <ViewContent>title</ViewContent>
        </ViewWrapper>
        <CardWrapper>
          <CardList>
            <CardLi width={"calc(33.33% - 40px)"}>
              <WrapperDiv>
                <CardImage height={"470px"}>image</CardImage>
                <CardCaption>
                  <dt>trend</dt>
                  <dd>구동경제의 뉴노멀, 구독을 통합하라</dd>
                </CardCaption>
              </WrapperDiv>
            </CardLi>
            <CardLi width={"calc(33.33% - 40px)"}>
              <WrapperDiv>
                <CardMoreLink>
                  <h3>SNS</h3>
                  <p>
                    <span>
                      내 삶은 풍요롭게 해주는 싱글 플러스 소설 네트워크에서
                      소통해요.
                    </span>
                  </p>
                  <WrapperDiv>
                    <SnsList>
                      <Instargram
                        backgroundImage={`/assets/image-instargram.svg`}
                      >
                        <span>instargram</span>
                      </Instargram>
                      <FaceBook backgroundImage={`/assets/image-facebook.svg`}>
                        <span>facebook</span>
                      </FaceBook>
                      <Twitter backgroundImage={`/assets/image-twitter.svg`}>
                        <span>twitter</span>
                      </Twitter>
                      <Youtube backgroundImage={`/assets/image-youtube.svg`}>
                        <span>youtube</span>
                      </Youtube>
                      <NaverPost backgroundImage={`/assets/image-naver.svg`}>
                        <span>naver post</span>
                      </NaverPost>
                    </SnsList>
                  </WrapperDiv>
                </CardMoreLink>
              </WrapperDiv>
            </CardLi>
            <CardLi width={"calc(33.33% - 40px)"}>
              <WrapperDiv>
                <CardImage height={"470px"}>image</CardImage>
                <CardCaption>
                  <dt>trend</dt>
                  <dd>구동경제의 뉴노멀, 구독을 통합하라</dd>
                </CardCaption>
              </WrapperDiv>
            </CardLi>
            <CardLi width={"calc(33.33% - 40px)"}>
              <WrapperDiv>
                <CardImage height={"470px"}>image</CardImage>
                <CardCaption>
                  <dt>trend</dt>
                  <dd>구동경제의 뉴노멀, 구독을 통합하라</dd>
                </CardCaption>
              </WrapperDiv>
            </CardLi>
            <CardLi width={"calc(33.33% - 40px)"}>
              <WrapperDiv>
                <CardImage height={"470px"}>image</CardImage>
                <CardCaption>
                  <dt>trend</dt>
                  <dd>구동경제의 뉴노멀, 구독을 통합하라</dd>
                </CardCaption>
              </WrapperDiv>
            </CardLi>
            <CardLi width={"calc(33.33% - 40px)"}>
              <WrapperDiv>
                <CardImage height={"470px"}>image</CardImage>
                <CardCaption>
                  <dt>trend</dt>
                  <dd>구동경제의 뉴노멀, 구독을 통합하라</dd>
                </CardCaption>
              </WrapperDiv>
            </CardLi>
          </CardList>
        </CardWrapper>
      </SectionWrapper>
    </HotIssueDiv>
  );
};

export default HotIssue;

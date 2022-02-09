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
} from "./Common";

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
    background-color: #ddd;
    span {
      display: none;
    }
  }
`;

const HotIssue = () => {
  return (
    <HotIssueDiv>
      <SectionWrapper width={"1280px"}>
        <HeadTitle color={"#111"}>hot issue</HeadTitle>
        <ViewWrapper columns={"1fr 2fr"}>
          <ViewImage>image</ViewImage>
          <ViewContent>title</ViewContent>
        </ViewWrapper>
        <CardWrapper>
          <CardList
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
                      <li>
                        <span>facebook</span>
                      </li>
                      <li>
                        <span>instargram</span>
                      </li>
                      <li>
                        <span>youtube</span>
                      </li>
                      <li>
                        <span>twitter</span>
                      </li>
                      <li>
                        <span>naver post</span>
                      </li>
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

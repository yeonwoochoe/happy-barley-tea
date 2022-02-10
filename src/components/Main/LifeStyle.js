import React from "react";
import { Link } from "react-router-dom";
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

const LifeStyleDiv = styled.section`
  width: 100%;
  background-color: rgba(255, 255, 255);
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
    text-align: justify;
    text-justify: auto;
  }
`;
const HeaderMoreButton = styled.div`
  margin-top: 40px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
`;
const LifeStyle = () => {
  return (
    <LifeStyleDiv>
      <SectionWrapper width={`1280px`} padding={`120px 0`}>
        <WrapperDiv flexDirection={"row"} justifyContent={"space-between"}>
          <HeaderSecondTitle color={`#111111`}>lifestyle</HeaderSecondTitle>
          <HeaderMoreButton>
            <Link to="/"> + more</Link>
          </HeaderMoreButton>
        </WrapperDiv>
        <WrapperDiv>
          <ViewWrapper columns={`1fr 2fr`}>
            <ViewContent>content</ViewContent>
            <ViewImage>image</ViewImage>
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
                    <h3>Horoscope</h3>
                    <p>
                      <span>2022.02.08</span>
                    </p>
                    <p>
                      <span>
                        완전한 삶이란 애초에 없다. 자잘한 조각을 잘 이어서
                        연결할 때 더 큰 의미가 생긴다. 그 노력이 엉뚱한 곳으로
                        빗나갈 수 있다. 하지만 당황하지 말자. 성실함은 배신하지
                        않으니 결국에는 넓은 바다에 가닿을 수 있다.
                      </span>
                    </p>
                    <p>
                      <span>+ MORE</span>
                    </p>
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
        </WrapperDiv>
      </SectionWrapper>
    </LifeStyleDiv>
  );
};

export default LifeStyle;

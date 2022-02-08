import React from "react";
import styled from "styled-components";
import { HeadTitle, ViewContent, ViewImage, ViewWrapper } from "../UI/Common";

const LifeStyleDiv = styled.section`
  width: 100%;
  background-color: rgba(255, 255, 255);
`;
const LifeStyleWrapper = styled.div`
  width: 1280px;
  margin: auto;
  padding-top: 120px;
`;
const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
`;

const Horoscope = styled.div`
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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  span {
    display: block;
    width: 100%;
    margin: auto;
  }
`;
const CardWrapper = styled.div`
  width: 100%;
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  li {
    width: calc(33.33% - 40px);
    margin-bottom: 40px;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 470px;
  background-color: #ddd;
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
const LifeStyle = () => {
  return (
    <LifeStyleDiv>
      <LifeStyleWrapper>
        <HeadTitle color={`#111111`}>lifestyle</HeadTitle>
        <WrapperDiv>
          <ViewWrapper columns={`1fr 2fr`}>
            <ViewContent>content</ViewContent>
            <ViewImage>image</ViewImage>
          </ViewWrapper>
          <CardWrapper>
            <CardList>
              <li>
                <WrapperDiv>
                  <CardImage></CardImage>
                  <CardCaption>
                    <dt>trend</dt>
                    <dd>구동경제의 뉴노멀, 구독을 통합하라</dd>
                  </CardCaption>
                </WrapperDiv>
              </li>
              <li>
                <WrapperDiv>
                  <Horoscope>
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
                  </Horoscope>
                </WrapperDiv>
              </li>
              <li>
                <WrapperDiv>
                  <CardImage></CardImage>
                  <CardCaption>
                    <dt>trend</dt>
                    <dd>구동경제의 뉴노멀, 구독을 통합하라</dd>
                  </CardCaption>
                </WrapperDiv>
              </li>
              <li>
                <WrapperDiv>
                  <CardImage></CardImage>
                  <CardCaption>
                    <dt>trend</dt>
                    <dd>구동경제의 뉴노멀, 구독을 통합하라</dd>
                  </CardCaption>
                </WrapperDiv>
              </li>
              <li>
                <WrapperDiv>
                  <CardImage></CardImage>
                  <CardCaption>
                    <dt>trend</dt>
                    <dd>구동경제의 뉴노멀, 구독을 통합하라</dd>
                  </CardCaption>
                </WrapperDiv>
              </li>
              <li>
                <WrapperDiv>
                  <CardImage></CardImage>
                  <CardCaption>
                    <dt>trend</dt>
                    <dd>구동경제의 뉴노멀, 구독을 통합하라</dd>
                  </CardCaption>
                </WrapperDiv>
              </li>
            </CardList>
          </CardWrapper>
        </WrapperDiv>
      </LifeStyleWrapper>
    </LifeStyleDiv>
  );
};

export default LifeStyle;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  CardCaption,
  CardImage,
  CardLi,
  CardList,
  CardWrapper,
  HeaderSecondTitle,
  SectionWrapper,
  ViewWrapper,
  WrapperDiv,
} from "../common/Common";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { push } from "firebase/database";

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
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 40,
  },
};
const CarouselBox = styled(Carousel)`
  height: 100%;
`;

const CarouselArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 580px;
`;
const ViewContent = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #aaa;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const ViewImage = styled.div`
  flex: 0.6;
  width: 100%;
  height: 100%;
  background-color: #ddd;
`;

const dummydata = [
  {
    date: "2022-10-29T09:19:14+09:00",
    image: "https://picsum.photos/470",
    category: "shopping",
    title: "너와 나를 위한 선물",
    like: "404",
  },
  {
    date: "2022-10-24T18:08:45+09:00",
    image: "https://picsum.photos/470",
    category: "culture",
    title: "여성 캐릭터가 뒤흔든 사극 판도",
    like: "174",
  },
  {
    date: "2022-04-16T15:56:09+09:00",
    image: "https://picsum.photos/470",
    category: "culture",
    title: "드라마로 간 거장들",
    like: "512",
  },
  {
    date: "2022-04-07T12:13:19+09:00",
    image: "https://picsum.photos/470",
    category: "enjoy",
    title: "스타들이 픽한 인테리어 편집숍",
    like: "384",
  },
  {
    date: "2022-09-04T12:22:26+09:00",
    image: "https://picsum.photos/470",
    category: "trend",
    title: "이커머스가 쏘아 올린 구독",
    like: "653",
  },
];

const ShowCase = () => {
  return (
    <ShowCaseDiv>
      <SectionWrapper width={"1460px"} padding={"0 0 120px 0"}>
        <ViewWrapper columns={`2, 1fr`}>
          <CarouselBox
            itemClass="image-item"
            responsive={responsive}
            // infinite={true}
            swipeable={false}
            draggable={false}
            ssr={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots={true}
            autoPlay={true}
            keyBoardControl={true}
            autoPlaySpeed={3000}
            transitionDuration={500}
            customTransition="all .5"
          >
            {dummydata.map((data, index) => {
              return (
                <CarouselArea key={index}>
                  <ViewContent bgImage={data.image}>{data.title}</ViewContent>
                  <ViewImage>{data.title}</ViewImage>
                </CarouselArea>
              );
            })}
          </CarouselBox>
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

import React, { useState } from "react";
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
} from "../common/Common";
import { singleEdit } from "../../api";
const SingleEditDiv = styled.section`
  width: 100%;
  background-color: #ffffff;
`;
const HeaderMoreButton = styled.div`
  margin-top: 40px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
`;

const SingleEdit = () => {
  const data = [1, 2, 3];

  return (
    <SingleEditDiv>
      <SectionWrapper width={"1280px"}>
        <WrapperDiv flexDirection={"row"} justifyContent={"space-between"}>
          <HeaderSecondTitle color={`#111111`}>single edit</HeaderSecondTitle>
          <HeaderMoreButton>
            <Link to="/"> + more</Link>
          </HeaderMoreButton>
        </WrapperDiv>
        <ViewWrapper columns={"2fr 1fr"}>
          <ViewImage>image</ViewImage>
          <ViewContent>title</ViewContent>
        </ViewWrapper>
        <CardWrapper>
          <CardList
            style={{
              display: "grid",
              gridAutoFlow: "column",
              justifyContent: "space-between",
            }}
          >
            {data.map((index, key) => (
              <CardLi key={key}>
                <WrapperDiv>
                  <CardImage width={"400px"} height={"400px"}>
                    img
                  </CardImage>
                  <CardCaption>
                    <dt>your edit</dt>
                    <dd>텃새 딱새</dd>
                  </CardCaption>
                </WrapperDiv>
              </CardLi>
            ))}
            {/* <CardLi>
              <WrapperDiv>
                <CardImage width={"400px"} height={"400px"}>
                  img
                </CardImage>
                <CardCaption>
                  <dt>your edit</dt>
                  <dd>텃새 딱새</dd>
                </CardCaption>
              </WrapperDiv>
            </CardLi>
            <CardLi>
              <WrapperDiv>
                <CardImage width={"400px"} height={"400px"}>
                  img
                </CardImage>
                <CardCaption>
                  <dt>your edit</dt>
                  <dd>텃새 딱새</dd>
                </CardCaption>
              </WrapperDiv>
            </CardLi>
            <CardLi>
              <WrapperDiv>
                <CardImage width={"400px"} height={"400px"}>
                  img
                </CardImage>
                <CardCaption>
                  <dt>your edit</dt>
                  <dd>텃새 딱새</dd>
                </CardCaption>
              </WrapperDiv>
            </CardLi> */}
          </CardList>
        </CardWrapper>
      </SectionWrapper>
    </SingleEditDiv>
  );
};

export default SingleEdit;

import React, { Fragment } from "react";
import styled from "styled-components";
import { CardCaption, CardImage, WrapperDiv } from "../common/Common";

const StyledLi = styled.li`
  width: calc(33.33% - 40px);
  height: 548px;
  margin-bottom: 40px;

  &:nth-child(5),
  &:nth-child(9) {
    width: calc(66.67% - 40px);
  }
`;

function Card() {
  return (
    <Fragment>
      <StyledLi>
        <WrapperDiv>
          <CardImage height={"470px"}>
            <img src="" alt="" />
          </CardImage>
          <CardCaption>
            <dt>trend</dt>
            <dd>이커머스가 쏘아 올린 구독</dd>
          </CardCaption>
        </WrapperDiv>
      </StyledLi>
      <StyledLi>
        <WrapperDiv>
          <CardImage height={"470px"}>
            <img src="" alt="" />
          </CardImage>
          <CardCaption>
            <dt>trend</dt>
            <dd>이커머스가 쏘아 올린 구독</dd>
          </CardCaption>
        </WrapperDiv>
      </StyledLi>
      <StyledLi>
        <WrapperDiv>
          <CardImage height={"470px"}>
            <img src="" alt="" />
          </CardImage>
          <CardCaption>
            <dt>trend</dt>
            <dd>이커머스가 쏘아 올린 구독</dd>
          </CardCaption>
        </WrapperDiv>
      </StyledLi>
      <StyledLi>
        <WrapperDiv>
          <CardImage height={"470px"}>
            <img src="" alt="" />
          </CardImage>
          <CardCaption>
            <dt>trend</dt>
            <dd>이커머스가 쏘아 올린 구독</dd>
          </CardCaption>
        </WrapperDiv>
      </StyledLi>
      <StyledLi>
        <WrapperDiv>
          <CardImage height={"470px"}>
            <img src="" alt="" />
          </CardImage>
          <CardCaption>
            <dt>trend</dt>
            <dd>이커머스가 쏘아 올린 구독</dd>
          </CardCaption>
        </WrapperDiv>
      </StyledLi>
      <StyledLi>
        <WrapperDiv>
          <CardImage height={"470px"}>
            <img src="" alt="" />
          </CardImage>
          <CardCaption>
            <dt>trend</dt>
            <dd>이커머스가 쏘아 올린 구독</dd>
          </CardCaption>
        </WrapperDiv>
      </StyledLi>
      <StyledLi>
        <WrapperDiv>
          <CardImage height={"470px"}>
            <img src="" alt="" />
          </CardImage>
          <CardCaption>
            <dt>trend</dt>
            <dd>이커머스가 쏘아 올린 구독</dd>
          </CardCaption>
        </WrapperDiv>
      </StyledLi>
      <StyledLi>
        <WrapperDiv>
          <CardImage height={"470px"}>
            <img src="" alt="" />
          </CardImage>
          <CardCaption>
            <dt>trend</dt>
            <dd>이커머스가 쏘아 올린 구독</dd>
          </CardCaption>
        </WrapperDiv>
      </StyledLi>
      <StyledLi>
        <WrapperDiv>
          <CardImage height={"470px"}>
            <img src="" alt="" />
          </CardImage>
          <CardCaption>
            <dt>trend</dt>
            <dd>이커머스가 쏘아 올린 구독</dd>
          </CardCaption>
        </WrapperDiv>
      </StyledLi>
      <StyledLi>
        <WrapperDiv>
          <CardImage height={"470px"}>
            <img src="" alt="" />
          </CardImage>
          <CardCaption>
            <dt>trend</dt>
            <dd>이커머스가 쏘아 올린 구독</dd>
          </CardCaption>
        </WrapperDiv>
      </StyledLi>
    </Fragment>
  );
}

export default Card;

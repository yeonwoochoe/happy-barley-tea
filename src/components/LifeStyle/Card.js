import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
  width: calc(33.33% - 40px);
  height: 548px;
  margin: 0 20px 77px;
  &:nth-child(5),
  &:nth-child(9) {
    width: calc(66.67% - 40px);
  }
  img {
    width: 100%;
    height: 470px;
    background-color: #ddd;
  }
  dl {
    margin-top: 20px;
    color: #191919;
    dt {
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
    }
    dd {
      margin-top: 8px;
      font-size: 24px;
    }
  }
`;

function Card() {
  return (
    <>
      <StyledLi>
        <img src='' alt='' />
        <dl>
          <dt>trend</dt>
          <dd>이커머스가 쏘아 올린 구독</dd>
        </dl>
      </StyledLi>
      <StyledLi>
        <img src='' alt='' />
        <dl>
          <dt>trend</dt>
          <dd>이커머스가 쏘아 올린 구독</dd>
        </dl>
      </StyledLi>
      <StyledLi>
        <img src='' alt='' />
        <dl>
          <dt>trend</dt>
          <dd>이커머스가 쏘아 올린 구독</dd>
        </dl>
      </StyledLi>
      <StyledLi>
        <img src='' alt='' />
        <dl>
          <dt>trend</dt>
          <dd>이커머스가 쏘아 올린 구독</dd>
        </dl>
      </StyledLi>
      <StyledLi>
        <img src='' alt='' />
        <dl>
          <dt>trend</dt>
          <dd>이커머스가 쏘아 올린 구독</dd>
        </dl>
      </StyledLi>
      <StyledLi>
        <img src='' alt='' />
        <dl>
          <dt>trend</dt>
          <dd>이커머스가 쏘아 올린 구독</dd>
        </dl>
      </StyledLi>
      <StyledLi>
        <img src='' alt='' />
        <dl>
          <dt>trend</dt>
          <dd>이커머스가 쏘아 올린 구독</dd>
        </dl>
      </StyledLi>
      <StyledLi>
        <img src='' alt='' />
        <dl>
          <dt>trend</dt>
          <dd>이커머스가 쏘아 올린 구독</dd>
        </dl>
      </StyledLi>
      <StyledLi>
        <img src='' alt='' />
        <dl>
          <dt>trend</dt>
          <dd>이커머스가 쏘아 올린 구독</dd>
        </dl>
      </StyledLi>
      <StyledLi>
        <img src='' alt='' />
        <dl>
          <dt>trend</dt>
          <dd>이커머스가 쏘아 올린 구독</dd>
        </dl>
      </StyledLi>
    </>
  );
}

export default Card;

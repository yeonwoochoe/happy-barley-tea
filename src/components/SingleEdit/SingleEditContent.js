import React from "react";
import styled from "styled-components";
import { WrapperDiv } from "../common/Common";
import SingleEditConList from "./SingleEditConList";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: ${(props) => props.height || "100%"};
  margin-top: 40px;
  margin-bottom: 100px;
  @media screen and (max-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const SoltBtnWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;
  text-align: right;

  span {
    height: 0.8rem;
    border-right: 1px solid #aaa;
    color: #999;
  }
  button {
    font-size: ${(props) => props.size || "14px"};
    font-weight: 700;
    color: ${(props) => props.color || "#333"};
    text-decoration: ${(props) => props.decoration};

    &:last-child {
      color: ${(props) => props.color || "#999"};
    }
  }
`;

const SingleEditContent = (props) => {
  const list = props.data;

  return (
    <WrapperDiv>
      <SoltBtnWrapper justify={`end`}>
        <button>최신순</button>
        <span></span>
        <button>추천순</button>
      </SoltBtnWrapper>
      <CardContainer>
        {list.content.map((card, id) => (
          <SingleEditConList key={id} data={card} />
        ))}
      </CardContainer>
      <SoltBtnWrapper
        justify={`center`}
        size={`18px`}
        color={`#333`}
        decoration={`underline`}
      >
        <button>&#43;MORE</button>
      </SoltBtnWrapper>
    </WrapperDiv>
  );
};

export default SingleEditContent;

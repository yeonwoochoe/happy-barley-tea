import React from "react";
import styled from "styled-components";
import SingleEditConList from "./SingleEditConList";

// import AllList from "./AllList";
// import ExpertsEditList from "./ExpertsEditList";

const WrapperDiv = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  height: 100%;
  padding-bottom: 300px;
`;

const WrapperCard = styled.div`
  width: auto;
  height: auto;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: ${(props) => props.rows};
  grid-template-columns: ${(props) => props.columns};
  grid-auto-flow: row dense;
  justify-content: center;
  width: 100%;
  max-width: 1280px;
  gap: 80px 40px;
  height: ${(props) => props.height || "100%"};
  margin-bottom: 100px;
`;

const SoltBtnWrapper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  gap: 20px;
  width: 980px;
  height: auto;
  margin: auto;
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

const SingleEditContent = ({ data }) => {
  const list = data;

  return (
    <WrapperDiv>
      <h2 className="blind">single edit content</h2>

      <WrapperCard>
        <SoltBtnWrapper justify={`end`}>
          <button>최신순</button>
          <span></span>
          <button>추천순</button>
        </SoltBtnWrapper>

        <CardContainer rows={`360px 360px 360px;`} columns={`0fr 0fr 0fr`}>
          {list.content.map((card, id) => (
            <SingleEditConList key={id} data={card} />
          ))}
        </CardContainer>
        <SoltBtnWrapper justify={`center`} size={`18px`} color={`#333`} decoration={`underline`}>
          <button>&#43;MORE</button>
        </SoltBtnWrapper>
      </WrapperCard>
    </WrapperDiv>
  );
};

export default SingleEditContent;

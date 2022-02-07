import React from "react";
import styled from "styled-components";

const ShowCaseDiv = styled.section`
  width: 100%;
  color: #ffffff;
  background-color: rgba(51, 51, 51);
  h2 {
    align-self: flex-start;
    font-size: 36px;
    font-weight: bold;
  }
`;
const ShowWrapper = styled.div`
  max-width: 1320px;
  margin: auto;
`;
const ViewWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  height: 400px;
`;
const ViewContent = styled.div`
  background-color: #aaa;
`;
const ViewImage = styled.div`
  background-color: #ddd;
`;
const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`;
const CardList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 25%;
  gap: 20px;
  margin-top: 40px;
`;
const CardImage = styled.div`
  width: 265px;
  height: 290px;
  background-color: #fff;
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
const ShowCase = () => {
  return (
    <ShowCaseDiv>
      <ViewWrapper columns={`2fr 1.1fr`}>
        <ViewContent>1</ViewContent>
        <ViewImage>2</ViewImage>
      </ViewWrapper>
      <ShowWrapper>
        <WrapperDiv>
          <h2>ShowCase</h2>
          <CardList>
            <li>
              <WrapperDiv>
                <CardImage>img</CardImage>
                <CardCaption>
                  <dt>enjoy</dt>
                  <dd>걸어서 겨울 속으로</dd>
                </CardCaption>
              </WrapperDiv>
            </li>
            <li>
              <WrapperDiv>
                <CardImage>img</CardImage>
                <CardCaption>
                  <dt>enjoy</dt>
                  <dd>걸어서 겨울 속으로</dd>
                </CardCaption>
              </WrapperDiv>
            </li>
            <li>
              <WrapperDiv>
                <CardImage>img</CardImage>
                <CardCaption>
                  <dt>enjoy</dt>
                  <dd>걸어서 겨울 속으로</dd>
                </CardCaption>
              </WrapperDiv>
            </li>
            <li>
              <WrapperDiv>
                <CardImage>img</CardImage>
                <CardCaption>
                  <dt>enjoy</dt>
                  <dd>걸어서 겨울 속으로</dd>
                </CardCaption>
              </WrapperDiv>
            </li>
          </CardList>
        </WrapperDiv>
      </ShowWrapper>
    </ShowCaseDiv>
  );
};

export default ShowCase;

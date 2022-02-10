import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import SingleEditContent from "../components/SingleEdit/SingleEditContent";

const SingleEditDiv = styled.section`
  width: 100%;
  height: auto;
  padding-top: 50px;
  color: #333;
  background-color: #fff;
`;

const MainTitleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 980px;
  margin: auto;
  height: auto;
  background-color: #fff;
  margin-bottom: 20px;

  div {
    width: 14px;
    height: 30px;
    margin-right: 10px;
    background-color: #333;
  }
  h2 {
    padding-top: 0;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0;
    text-transform: capitalize;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-items: start;
  width: 100%;
  height: auto;
  max-width: 980px;
  margin: auto;
  margin-bottom: 50px;
  @media screen and (max-width: 320px) {
    justify-items: center;
    gap: 10px;
  }

  button {
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    color: #999;
  }
`;

const SingleEdit = () => {
  const [num, setNum] = useState(0);
  const [PdData, setPdData] = useState([]);

  // data 불러오기
  useEffect(() => {
    axios.get("./data/SingleEdit/dummyData.json").then((res) => setPdData(res.data));
  }, []);

  const fnTab = (e, i) => {
    e.preventDefault();
    setNum(i);
  };

  const code = PdData.filter((data, index) => index === num);
  // const buttonVaild = PdData.filter((data, index) => index === 0 && data.tabTitle === "ALL");

  // console.log(buttonVaild);

  return (
    <SingleEditDiv>
      <MainTitleDiv>
        <div></div>
        <h2>single edit</h2>
      </MainTitleDiv>
      <BtnWrapper>
        {PdData.map((data, id) => (
          <button key={data.id} type="button" onClick={(e) => fnTab(e, id)}>
            {data.tabTitle}
          </button>
        ))}
      </BtnWrapper>
      {/* <SoltBtnWrapper>
        <button>최신순</button>
        <span></span>
        <button>추천순</button>
      </SoltBtnWrapper> */}
      {code.map((data, idx) => (
        <SingleEditContent key={idx} data={data} num={num} setNum={setNum} />
      ))}
    </SingleEditDiv>
  );
};

export default SingleEdit;

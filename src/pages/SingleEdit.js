import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import styled from "styled-components";

import SingleEditContent from "../components/SingleEdit/SingleEditContent";
import {
  HeaderSecondTitle,
  SectionWrapper,
  WrapperDiv,
} from "../components/common/Common";

const SingleEditDiv = styled.section`
  width: 100%;
  height: auto;
  background-color: #fff;
`;

const TabMenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  gap: 60px;
  font-size: 22px;
  font-weight: bold;
  color: #9f9f9f;
  text-transform: capitalize;
  li:first-child {
    text-transform: uppercase;
  }
  @media screen and (max-width: 320px) {
    justify-items: center;
    gap: 10px;
  }
`;

const SingleEdit = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [num, setNum] = useState(0);
  const [PdData, setPdData] = useState([]);

  // data 불러오기
  useEffect(() => {
    axios
      .get("./data/SingleEdit/dummyData.json")
      .then((res) => setPdData(res.data));
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
      <SectionWrapper width="1320px" padding="100px 0 145px">
        <WrapperDiv>
          <HeaderSecondTitle fontSize={"44px"} color={`#111`}>
            single edit
          </HeaderSecondTitle>
          <WrapperDiv>
            <TabMenuList>
              {PdData.map((data, id) => (
                <li key={data.id} type="button" onClick={(e) => fnTab(e, id)}>
                  {data.tabTitle}
                </li>
              ))}
            </TabMenuList>
          </WrapperDiv>
        </WrapperDiv>
        {code.map((data, idx) => (
          <SingleEditContent key={idx} data={data} num={num} setNum={setNum} />
        ))}
      </SectionWrapper>
    </SingleEditDiv>
  );
};

export default SingleEdit;

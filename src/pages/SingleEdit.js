import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DummyData from "../components/SingleEdit/DummyData";
import TabBtn from "../components/SingleEdit/TabBtn";
import SingleEditContent from "../components/SingleEdit/SingleEditContent";
import { useLocation } from "react-router";

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

  const [item, setItem] = useState(DummyData);

  const conItems = [...new Set(DummyData.map((data) => data.category))];

  console.log(conItems);
  const filterItem = (curcat) => {
    const newItem = DummyData.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <SingleEditDiv>
      <SectionWrapper width="1320px" padding="100px 0 145px">
        <WrapperDiv>
          <HeaderSecondTitle fontSize={"44px"} color={`#111`}>
            single edit
          </HeaderSecondTitle>
          <WrapperDiv>
            <TabMenuList>
              <TabBtn
                filterItem={filterItem}
                conItems={conItems}
                setItem={setItem}
              />
            </TabMenuList>
          </WrapperDiv>
        </WrapperDiv>
        <SingleEditContent item={item} />
      </SectionWrapper>
    </SingleEditDiv>
  );
};

export default SingleEdit;

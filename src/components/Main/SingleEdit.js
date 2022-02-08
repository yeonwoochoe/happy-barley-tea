import React from "react";
import styled from "styled-components";
import { HeadTitle, SectionWrapper } from "../UI/Common";

const SingleEditDiv = styled.section`
  width: 100%;
  background-color: #ffffff;
`;

const SingleEdit = () => {
  return (
    <SingleEditDiv>
      <SectionWrapper width={"1280px"}>
        <HeadTitle color="#111">single edit</HeadTitle>
      </SectionWrapper>
    </SingleEditDiv>
  );
};

export default SingleEdit;

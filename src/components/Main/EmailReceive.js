import React from "react";
import styled from "styled-components";
import { HeadTitle, SectionWrapper, WrapperDiv } from "../UI/Common";
const EmailReceiveDiv = styled.aside`
  width: 100%;
  background-color: #fcd200;
`;
const EmailForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  input {
    width: 340px;
    height: 55px;
    border: 0;
  }
  button {
    width: 170px;
    height: 55px;
    border: 0;
  }
`;
const EmailReceive = () => {
  return (
    <EmailReceiveDiv>
      <SectionWrapper padding={"20px"}>
        <HeadTitle className="blind">이메일 구독</HeadTitle>
        <WrapperDiv>
          <EmailForm>
            <legend>당신에게 필요한 소식들을 메일로 받아보세요.</legend>
            <fieldset>
              <label></label>
              <input placeholder="이메일 주소를 입력해주세요." />
              <button typeof="submit">구독</button>
            </fieldset>
          </EmailForm>
        </WrapperDiv>
      </SectionWrapper>
    </EmailReceiveDiv>
  );
};

export default EmailReceive;

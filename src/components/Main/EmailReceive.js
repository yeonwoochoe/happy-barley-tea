import React from "react";
import styled from "styled-components";
import { HeaderSecondTitle, SectionWrapper, WrapperDiv } from "./Common";
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
  legend {
    font-size: 28px;
    color: #333333;
    font-weight: bold;
  }
  input {
    width: 340px;
    height: 55px;
    border: 0;
    font-size: 18px;
    padding: 0 20px 0 60px;
  }
  button {
    width: 170px;
    height: 55px;
    border: 0;
    font-size: 22px;
    font-weight: bold;
    color: #ffffff;
    background-color: #333333;
  }
`;
const EmailReceive = () => {
  return (
    <EmailReceiveDiv>
      <SectionWrapper padding={"20px"}>
        <HeaderSecondTitle className="blind">이메일 구독</HeaderSecondTitle>
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

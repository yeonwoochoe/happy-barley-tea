import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "../components/common/Common";

const ModernSignUpDiv = styled.section`
  width: 100%;
  background-color: #fff;
`;

const SignUpForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  legend {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 80px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  label {
    width: 200px;
    font-size: 18px;
    line-height: 40px;
    align-self: flex-start;
  }
  input {
    width: 300px;
    padding: 10px;
    align-self: flex-end;
    border: 1px solid #333;
    height: 50px;
  }
`;

const InputSumbmit = styled.input`
  width: 100%;
  height: 60px;
  margin-top: 40px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
`;

const ModernSignUp = () => {
  return (
    <ModernSignUpDiv>
      <SectionWrapper padding="200px 0">
        <SignUpForm>
          <legend>회원가입</legend>
          <fieldset>
            <InputWrapper>
              <label>이메일</label>
              <input type="email" placeholder="이메일을 입력해주세요." />
            </InputWrapper>
            <InputWrapper>
              <label>닉네임</label>
              <input type="text" placeholder="닉네임을 입력해주세요." />
            </InputWrapper>
            <InputWrapper>
              <label>비밀번호</label>
              <input type="password" placeholder="비밀번호를 입력해주세요." />
            </InputWrapper>
            <InputWrapper>
              <label>비밀번호 재확인</label>
              <input
                type="password"
                placeholder="비밀번호를 다시 한번 입력해주세요."
              />
            </InputWrapper>
          </fieldset>
          <fieldset>
            <InputWrapper>
              <label>이름</label>
              <input type="text" placeholder="이름을 입력해주세요." />
            </InputWrapper>
            <InputWrapper>
              <label>휴대전화</label>
              <input type="text" placeholder="휴대전화 번호를 입력해주세요" />
            </InputWrapper>
          </fieldset>
          <InputSumbmit type="submit" />
        </SignUpForm>
      </SectionWrapper>
    </ModernSignUpDiv>
  );
};

export default ModernSignUp;

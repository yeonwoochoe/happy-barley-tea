import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "../components/common/Common";

const SingUpDiv = styled.section`
  width: 100%;
  background-color: #fff;
`;

const InputWrapper = styled.div`
  width: 400px;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  input {
    width: 100%;
    height: 45px;
    border: 1px solid #333;
  }
`;

const SignUpForm = styled.form`
  width: 100%;
  display: grid;
  justify-content: center;

  fieldset {
    display: grid;
    grid-auto-flow: row;
    align-items: center;
    width: 100%;
  }
`;

const SignUp = () => {
  return (
    <SingUpDiv>
      <SectionWrapper padding="100px">
        <SignUpForm>
          <legend>회원가입</legend>
          <fieldset>
            <InputWrapper>
              <label>아이디</label>
              <input placeholder="한글,영문,숫자,특수문자 입력 가능" />
              <button>중복확인</button>
            </InputWrapper>
            <InputWrapper>
              <label>닉네임</label>
              <input placeholder="영문,한글 10byte 입력 가능" />
              <button>중복확인</button>
            </InputWrapper>
            <InputWrapper>
              <label>비밀번호</label>
              <input placeholder="영문,숫자,특수문자 포함 8자 이상 20자 이하" />
            </InputWrapper>
            <InputWrapper>
              <label>비밀번호 재확인</label>
              <input placeholder="비밀번호 확인" />
            </InputWrapper>
          </fieldset>
          <fieldset>
            <InputWrapper>
              <label>이름</label>
              <input placeholder="이름" />
            </InputWrapper>
            <InputWrapper>
              <label>이메일</label>
              <input placeholder="이메일" />
            </InputWrapper>
            <InputWrapper>
              <label>이메일 직접입력</label>
              <input placeholder="이메일 직접입력" />
            </InputWrapper>
            <InputWrapper>
              <label>생년월일</label>
              <input type="number" placeholder="년도" />
              <input type="number" placeholder="월" />
              <input type="number" placeholder="일" />
            </InputWrapper>
            <InputWrapper>
              <label>성별</label>
              <label>여성</label>
              <label>남성</label>
              <input type="radio" />
            </InputWrapper>
            <InputWrapper>
              <label>주소</label>
              <input />
              <button>우편번호</button>
            </InputWrapper>
            <InputWrapper>
              <label>상세주소</label>
              <input placeholder="상세주소 입력" />
            </InputWrapper>
          </fieldset>
        </SignUpForm>
      </SectionWrapper>
    </SingUpDiv>
  );
};

export default SignUp;

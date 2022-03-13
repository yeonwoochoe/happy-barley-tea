import React, { useRef, useState } from "react";
import styled from "styled-components";
import { SectionWrapper } from "../components/common/Common";
import { useForm } from "react-hook-form";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const password = useRef();
  password.current = watch("password");

  const onSubmit = async data => {
    try {
      setLoading(true);

      const auth = getAuth();
      let createdUser = await createUserWithEmailAndPassword(auth, data.email, data.password);

      set(ref(getDatabase(), `users/${createdUser.user.uid}`), {
        name: createdUser.user.displayName,
      });

      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <ModernSignUpDiv>
      <SectionWrapper padding="200px 0">
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <legend>회원가입</legend>
          <fieldset>
            <InputWrapper>
              <label>이메일</label>
              <input
                name="email"
                type="email"
                placeholder="이메일을 입력해주세요."
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
            </InputWrapper>
            <InputWrapper>
              <label>닉네임</label>
              <input
                name="nickname"
                type="text"
                placeholder="닉네임을 입력해주세요."
                maxLength="10"
                {...register("nickname", { required: true, maxLength: 10 })}
              />
            </InputWrapper>
            <InputWrapper>
              <label>비밀번호</label>
              <input
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                {...register("password", { required: true, minLength: 6 })}
              />
            </InputWrapper>
            <InputWrapper>
              <label>비밀번호 재확인</label>
              <input
                name="password_confirm"
                type="password"
                placeholder="비밀번호를 다시 한번 입력해주세요."
                {...register("password_confirm", {
                  required: true,
                  validate: value => value === password.current,
                })}
              />
              {errors.password_confirm && errors.password_confirm.type === "required" && (
                <p>This password confirm field is required</p>
              )}
              {errors.password_confirm && errors.password_confirm.type === "validate" && (
                <p>The passwords do not match</p>
              )}
            </InputWrapper>
          </fieldset>
          <fieldset>
            <InputWrapper>
              <label>이름</label>
              <input
                name="name"
                type="text"
                placeholder="이름을 입력해주세요."
                maxLength="4"
                {...register("name", { required: true, maxLength: 4 })}
              />
            </InputWrapper>
            <InputWrapper>
              <label>휴대전화</label>
              <input
                name="phone_number"
                type="text"
                placeholder="휴대전화 번호를 입력해주세요"
                maxLength="11"
                {...register("phone_number", { required: true, maxLength: 11 })}
              />
            </InputWrapper>
          </fieldset>
          {errorFromSubmit && <div>{errorFromSubmit}</div>}
          <InputSumbmit type="submit" disabled={loading} />
        </SignUpForm>
      </SectionWrapper>
    </ModernSignUpDiv>
  );
};

export default ModernSignUp;

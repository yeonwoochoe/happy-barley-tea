import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  HeaderSecondTitle,
  SectionWrapper,
  WrapperDiv,
} from "../components/common/Common";

const JoinDiv = styled.section`
  width: 100%;
  background-color: #ffffff;
`;

const JoinList = styled.ul`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  li {
    width: 100%;
    height: 130px;
    padding: 52px 54px;
    border: 1px solid #333;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
    font-size: 18px;
    text-align: center;
    background-color: transparent;
  }
`;

const SnsLogin = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 40px;
  li {
    width: 300px;
    height: 50px;
    padding: 11px 20px;
    border-radius: 10px;
    background-color: #eee;
  }
  button {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`;

const Join = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <JoinDiv>
      <SectionWrapper width="620px" padding="200px 0">
        <WrapperDiv>
          <HeaderSecondTitle
            alignSelf="center"
            fontSize="32px"
            wordSpacing="0"
            style={{
              textAlign: "center",
              wordBreak: "break-all",
              fontWeight: "normal",
            }}
          >
            회원가입 후 싱글플러스의
            <br />
            다양한 콘텐츠와 이벤트를 경험해보세요!
          </HeaderSecondTitle>
        </WrapperDiv>
        <WrapperDiv>
          <JoinList>
            <li>
              <Link to={"/signup"}>일반 회원가입</Link>
            </li>
            <li>
              <Link to={"/emailsignup"}>이메일 계정으로 가입</Link>
            </li>
          </JoinList>
        </WrapperDiv>
        <WrapperDiv>
          <HeaderSecondTitle
            alignSelf="center"
            fontSize="24px"
            wordSpacing="0"
            style={{
              textAlign: "center",
              wordBreak: "break-all",
            }}
          >
            SNS 회원가입
          </HeaderSecondTitle>
        </WrapperDiv>
        <WrapperDiv>
          <SnsLogin>
            <li>
              <button>네이버</button>
            </li>
            <li>
              <button>카카오</button>
            </li>
            <li>
              <button>페이스북</button>
            </li>
          </SnsLogin>
        </WrapperDiv>
      </SectionWrapper>
    </JoinDiv>
  );
};

export default Join;

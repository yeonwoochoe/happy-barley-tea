import React from "react";
import styled from "styled-components";

const FooterDiv = styled.footer`
  width: 100%;
  color: #ffffff;
  background-color: rgba(51, 51, 51);
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 93px 0 96px 0;
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const FooterAddress = styled.div`
  address {
    margin-bottom: 20px;
  }
  h2 {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
  }
  p {
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 5px;

    &:last-child {
      margin-top: 10px;
    }
    span {
      display: inline-block;
      padding: 0 7px;
      transform: translateY(-1px);
    }
  }
  ul {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    li {
      position: relative;
      font-weight: bold;
      &::after {
        position: absolute;
        top: 2px;
        right: -6px;
        content: "";
        display: block;
        border-right: 1px solid #ffffff;
        height: 16px;
      }
      &:last-child::after {
        border: 0;
      }
    }
  }
`;
const FooterSns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SnsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  li {
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    span {
      display: none;
    }
  }
`;

const FooterImage = styled.div`
  width: 220px;
  height: 85px;
  margin-bottom: 10px;
  background-color: #ffffff;
`;
const Footer = () => {
  return (
    <FooterDiv>
      <FooterWrapper>
        <FooterInfo>
          <FooterImage>image</FooterImage>
          <SnsList>
            <li>
              <span>facebook</span>
            </li>
            <li>
              <span>instargram</span>
            </li>
            <li>
              <span>youtube</span>
            </li>
            <li>
              <span>twitter</span>
            </li>
            <li>
              <span>naver post</span>
            </li>
          </SnsList>
        </FooterInfo>
        <FooterAddress>
          <address>
            <h2>(주)더북컴퍼니</h2>
            <p>
              주소: (06135) 서울특별시 강남구 봉은사로 226 (역삼동, 더북컴퍼니)
            </p>
            <p>
              대표이사: 이소영<span>&#124;</span>사업자등록번호: 211-87-45869
              <span>&#124;</span>통신판매업신고번호: 제 2017-서울강남-03220
            </p>
            <p>
              대표번호: 02-3458-7100<span>&#124;</span>팩스: 02-3458-7119
              <span>&#124;</span>이메일: info@thesingle.co.kr<span>&#124;</span>
              사업자등록정보 확인
            </p>
            <p>호스팅 서비스: (주)가비아</p>
            <p>ⓒ 2021 THE BOOK COMPANY. ALL RIGHTS RESERVED.</p>
          </address>
          <ul>
            <li>매체소개</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>청소년보호정책</li>
            <li>이메일무단수집거부</li>
          </ul>
          <ul>
            <li>공지사항</li>
            <li>포인트정책</li>
            <li>광고제휴문의</li>
            <li>문의하기</li>
            <li>언론윤리강령</li>
          </ul>
        </FooterAddress>
        <FooterSns>
          <FooterImage>img</FooterImage>
          <SnsList>
            <li>
              <span>facebook</span>
            </li>
            <li>
              <span>instargram</span>
            </li>
            <li>
              <span>youtube</span>
            </li>
            <li>
              <span>twitter</span>
            </li>
            <li>
              <span>naver post</span>
            </li>
          </SnsList>
        </FooterSns>
      </FooterWrapper>
    </FooterDiv>
  );
};

export default Footer;

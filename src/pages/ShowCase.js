import React, { useEffect } from "react";
import styled from "styled-components";
import Figure from "react-bootstrap/Figure";
import { useLocation } from "react-router";
import { HeaderSecondTitle } from "../components/common/Common";

const ShowCaseDiv = styled.div`
  width: 100%;
  background-color: rgba(51, 51, 20);
`;

const ShowCaseWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0 80px 0 80px;
`;

const ShowCaseTitle = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
`;
const NewInfo = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
  height: 880px;
  margin: 104px 0 100px 0;
`;

const NewInfoImg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fee;
`;
const NewCaption = styled.div`
  position: absolute;
  z-index: 1000;
  left: 110px;
  bottom: 70px;
  width: 100%;
  height: 90px;
  dl {
    width: 100%;
    height: auto;
    color: #fff;
    dt {
      margin-bottom: 20px;
      font-size: 32px;
    }
    dd {
      font-size: 18px;
    }
  }
`;

const WorkInWinter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 580px;
  margin-bottom: 80px;
  background-color: #3c536e;
  figure {
    width: 840px;
    height: 580px;
    background-color: #fff;
  }
  figcaption {
    padding: 0 40px 0 40px;
    font-size: 32px;
    color: #fff;
    line-height: 580px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 382px;
  margin-bottom: 40px;
`;

const ItemDiv = styled.div`
  width: 290px;
  height: 382px;
  figure {
    width: 290px;
    height: 290px;
    margin-bottom: 20px;
    background-color: #111;
  }
  figcaption {
    font-size: 24px;
    color: #fff;
  }
`;

const ListTitle = styled.div`
  width: 100%;
  height: auto;
  padding-top: 90px;
`;

const ShowCaseList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 325px;
  margin-top: 27px;
  margin-bottom: 100px;
`;
const ListDiv = styled.div`
  width: 440px;
  height: 325px;
  figure {
    width: 400px;
    height: 275px;
    margin-bottom: 20px;
    background-color: #fff;
  }
  figcaption {
    font-size: 24px;
    color: #fff;
  }
`;

const ShowCase = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ShowCaseDiv>
      <ShowCaseWapper>
        <ShowCaseTitle>
          <HeaderSecondTitle color="#fff">showcase</HeaderSecondTitle>
        </ShowCaseTitle>
        <NewInfo>
          <NewInfoImg>img</NewInfoImg>
          <NewCaption>
            <dl>
              <dt>서울 신상 맛집 업데이트</dt>
              <dd>
                새로운 한 해만큼 맛집 리스트도 새롭게 재정비할 때. 서울 핫한 신상 맛집만 모았다.
              </dd>
            </dl>
          </NewCaption>
        </NewInfo>
        <WorkInWinter>
          <figure>img</figure>
          <figcaption>만나서 반가워요</figcaption>
        </WorkInWinter>
        <Item>
          <ItemDiv>
            <figure>img</figure>
            <figcaption>나홀로 즐겁게 혼밥</figcaption>
          </ItemDiv>
          <ItemDiv>
            <figure>img</figure>
            <figcaption>스킨케어, 푸드로 하세요</figcaption>
          </ItemDiv>
          <ItemDiv>
            <figure>img</figure>
            <figcaption>방구석을 헬스장으로 만들어 줄 앱4</figcaption>
          </ItemDiv>
          <ItemDiv>
            <figure>img</figure>
            <figcaption>2022 베리 페리 블러셔 모음. zip</figcaption>
          </ItemDiv>
        </Item>
        <ListTitle>
          <HeaderSecondTitle color="#fff">showcase list</HeaderSecondTitle>
        </ListTitle>
        <ShowCaseList>
          <ListDiv>
            <figure>img</figure>
            <figcaption>효소 다이어트 전성시대</figcaption>
          </ListDiv>
          <ListDiv>
            <figure>img</figure>
            <figcaption>한겨울의 미술 산책</figcaption>
          </ListDiv>
          <ListDiv>
            <figure>img</figure>
            <figcaption>호랑이 기운 맛보실래요?</figcaption>
          </ListDiv>
          <ListDiv>
            <figure>img</figure>
            <figcaption>빵순이를 위한 건강 빵집 4</figcaption>
          </ListDiv>
        </ShowCaseList>
      </ShowCaseWapper>
    </ShowCaseDiv>
  );
};

export default ShowCase;

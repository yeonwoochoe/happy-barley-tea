import React, { useEffect } from "react";
import styled from "styled-components";
import Figure from "react-bootstrap/Figure";
import { useLocation } from "react-router";

const ShowCaseDiv = styled.div`
  width: 100%;
  height: 2950px;
  background-color: rgba(51, 51, 20);
`;

const ShowCaseWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

const NewInfo = styled.div`
  width: 1280px;
  height: 880px;
  margin-top: 144px;
  margin-bottom: 100px;
  background-color: #fee;
`;
const NewInfoImg = styled.div``;
const NewCaption = styled.div``;

const WorkInWinter = styled.div`
  width: 1280px;
  height: 580px;
  margin-bottom: 60px;
  background-color: #3c536e;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1280px;
  height: 382px;
  margin-bottom: 100px;
  background-color: #ffffff;
`;

const ShowCaseList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1320px;
  height: 325px;
  margin-bottom: 100px;
  background-color: #ffffff;
`;

const ShowCase = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ShowCaseDiv>
      <ShowCaseWapper>
        <NewInfo>
          <NewInfoImg>img</NewInfoImg>
          <NewCaption>
            <dl>
              <dt>제철 딸기 투어</dt>
              <dd>
                제철을 맞은 딸기는 지금 가장 맛있고 화려하다. 여행하듯 떠날 수
                있는 호텔의 딸기 뷔페 투어 가이드
              </dd>
            </dl>
          </NewCaption>
        </NewInfo>
        <WorkInWinter>
          <Figure>
            <Figure.Image width={840} height={580} />
            <Figure.Caption>걸어서 겨울 속으로</Figure.Caption>
          </Figure>
        </WorkInWinter>
        <Item>
          <Figure>
            <Figure.Image width={290} height={290} />
            <Figure.Caption>맛있는 제주의 낮과 밤</Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image width={290} height={290} />
            <Figure.Caption>인센스 주의보</Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image width={290} height={290} />
            <Figure.Caption>
              번진듯 자연스러운 입술을 위한, 립 키서
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image width={290} height={290} />
            <Figure.Caption>가성비 좋은 벤츠 SUV, EQA</Figure.Caption>
          </Figure>
        </Item>
        <ShowCaseList>
          <Figure>
            <Figure.Image width={400} height={275} />
            <Figure.Caption>호랑이 기운 맛보실래요?</Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image width={400} height={275} />
            <Figure.Caption>호랑이 기운 맛보실래요?</Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image width={400} height={275} />
            <Figure.Caption>호랑이 기운 맛보실래요?</Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image width={400} height={275} />
            <Figure.Caption>호랑이 기운 맛보실래요?</Figure.Caption>
          </Figure>
        </ShowCaseList>
      </ShowCaseWapper>
    </ShowCaseDiv>
  );
};

export default ShowCase;

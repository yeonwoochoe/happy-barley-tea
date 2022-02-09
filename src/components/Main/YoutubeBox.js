import React from "react";
import styled from "styled-components";
import { HeadTitle, SectionWrapper, WrapperDiv } from "../UI/Common";

const YoutubeBoxDiv = styled.section`
  width: 100%;
  background-color: #ffffff;
`;
const YoutubeList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  li {
    width: 1220px;
    padding: 25px;
    background-color: rgba(252, 210, 0);
  }
`;
const YoutubeImage = styled.div`
  width: 1110px;
  height: 580px;
  background-color: #ffffff;
`;
const YoutubeTitle = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  text-transform: uppercase;
  font-weight: bold;
  dt {
    margin-bottom: 10px;
  }
  dd {
    font-size: 22px;
  }
`;
const YoutubeIndicator = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #aaa;
    span {
      display: none;
    }
  }
`;

const YoutubeBox = () => {
  return (
    <YoutubeBoxDiv>
      <SectionWrapper padding={"120px 0"}>
        <HeadTitle className="blind">Youtube</HeadTitle>
        <WrapperDiv>
          <WrapperDiv>
            <YoutubeList>
              <li>
                <WrapperDiv>
                  <YoutubeImage>image</YoutubeImage>
                  <YoutubeTitle>
                    <dt>celeb</dt>
                    <dd>송강의 인생 눈썹 비법 대공개(ft.베네피트 브로우바)</dd>
                  </YoutubeTitle>
                </WrapperDiv>
              </li>
            </YoutubeList>
          </WrapperDiv>
          <WrapperDiv>
            <YoutubeIndicator>
              <li>
                <span>1</span>
              </li>
              <li>
                <span>2</span>
              </li>
              <li>
                <span>3</span>
              </li>
              <li>
                <span>4</span>
              </li>
              <li>
                <span>5</span>
              </li>
            </YoutubeIndicator>
          </WrapperDiv>
        </WrapperDiv>
      </SectionWrapper>
    </YoutubeBoxDiv>
  );
};

export default YoutubeBox;

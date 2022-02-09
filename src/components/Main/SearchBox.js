import React from "react";
import styled from "styled-components";
import { HeadTitle, SectionWrapper, WrapperDiv } from "./Common";

const SearchBoxDiv = styled.section`
  width: 100%;
  background-color: rgba(239, 239, 239);
`;

const SeacrhForm = styled.form`
  width: 100%;
  fieldset {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const SeacrhInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 620px;
  height: 60px;
  padding: 14px 20px 14px 30px;
  border-radius: 30px;
  background-color: #ffffff;
  label {
    width: 30px;
    height: 30px;
    background-color: #aaa;
  }
  input {
    width: 100%;
    margin-left: 20px;
    font-size: 20px;
    border: 0;
  }
`;
const SearchItemList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const SearchImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #fff;
  span {
    display: none;
  }
`;
const SeacrhTitle = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const SearchBox = () => {
  return (
    <SearchBoxDiv>
      <SectionWrapper width={"1280px"} padding={"40px 0 80px 0"}>
        <HeadTitle alignSelf={"center"} wordSpacing={"-2px"} display={"none"}>
          일상에 즐거움을 더하는 이야기를 찾아보세요.
        </HeadTitle>
        <SeacrhForm>
          <legend className="blind">검색기능</legend>
          <fieldset>
            <SeacrhInput>
              <label>img</label>
              <input type={"text"} placeholder="점심메뉴" />
            </SeacrhInput>
          </fieldset>
        </SeacrhForm>
        <WrapperDiv>
          <SearchItemList>
            <li>
              <SearchImage>
                <span>image</span>
              </SearchImage>
              <SeacrhTitle>#title</SeacrhTitle>
            </li>
            <li>
              <SearchImage>
                <span>image</span>
              </SearchImage>
              <SeacrhTitle>#title</SeacrhTitle>
            </li>
            <li>
              <SearchImage>
                <span>image</span>
              </SearchImage>
              <SeacrhTitle>#title</SeacrhTitle>
            </li>
            <li>
              <SearchImage>
                <span>image</span>
              </SearchImage>
              <SeacrhTitle>#title</SeacrhTitle>
            </li>
            <li>
              <SearchImage>
                <span>image</span>
              </SearchImage>
              <SeacrhTitle>#title</SeacrhTitle>
            </li>
          </SearchItemList>
        </WrapperDiv>
      </SectionWrapper>
    </SearchBoxDiv>
  );
};

export default SearchBox;

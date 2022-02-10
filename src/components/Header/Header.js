import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  width: 100%;
  height: 104px;
  background-color: #aaa;
  h1 {
    width: 180px;
    height: 50px;
    background-color: #ddd;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; ;
`;

const MenuNavi = styled.nav`
  order: -1;
  width: 20px;
  height: 20px;
  background-color: #ccc;
`;

const GlobalNavi = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-transform: uppercase;
  }
`;

const UserNavi = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-transform: uppercase;
    word-spacing: -3px;
  }
`;
const Header = () => {
  return (
    <HeaderDiv>
      <HeaderWrapper>
        <WrapperDiv>
          <h1>Logo</h1>
          <MenuNavi>
            <h2 className="blind">Menu Navigation</h2>
          </MenuNavi>
          <GlobalNavi>
            <h2 className="blind">Global Navigation</h2>
            <ul>
              <li>showcase</li>
              <li>lifestyle</li>
              <li>single edit</li>
            </ul>
          </GlobalNavi>
        </WrapperDiv>
        <UserNavi>
          <h2 className="blind">User Navigation</h2>
          <ul>
            <li>log in</li>
            <li>join</li>
            <li>search</li>
          </ul>
        </UserNavi>
      </HeaderWrapper>
    </HeaderDiv>
  );
};

export default Header;

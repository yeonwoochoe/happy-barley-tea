import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.header`
  width: 100%;
  background-color: #eee;
`;

const GlobalNavi = styled.nav``;

const Header = () => {
  return (
    <HeaderDiv>
      <h1>Header</h1>
    </HeaderDiv>
  );
};

export default Header;

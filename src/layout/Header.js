// SA K : header 컴포넌트가 너무 커서 쪼개야 될 것 같음
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderDiv = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: #333;
  h1 {
    width: 180px;
    height: 50px;
    margin-right: 68px;
    background-image: url("/assets/logo.png");
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1760px;
  margin: auto;
  padding: 25px;
  text-transform: capitalize;
`;

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
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
    gap: 40px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    color: #fff;
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
    font-size: 18px;
    text-transform: capitalize;
    word-spacing: -3px;
    color: #fff;
  }
  li:first-of-type {
    position: relative;
    margin-right: 50px;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: -28px;
      bottom: 0;
      width: 1px;
      height: 18px;
      background-color: #fff;
    }
  }
  li:last-of-type {
    width: 30px;
    height: 30px;
    margin-left: 38px;
    button {
      display: block;
      width: 100%;
      height: 100%;
      background-image: url("/assets/search-solid.svg");
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

function Header() {
  return (
    <HeaderDiv>
      <HeaderWrapper>
        <WrapperDiv>
          <h1>
            <Link to="/">
              <span className="blind">single plus</span>
            </Link>
          </h1>
          <MenuNavi>
            <h2 className="blind">Menu Navigation</h2>
          </MenuNavi>
          <GlobalNavi>
            <h2 className="blind">Global Navigation</h2>
            <ul>
              <li>
                <Link to="/showcase">showcase</Link>
              </li>
              <li>
                <Link to="/lifestyle">lifestyle</Link>
              </li>
              <li>
                <Link to="/single-edit">single edit</Link>
              </li>
            </ul>
          </GlobalNavi>
        </WrapperDiv>

        <UserNavi>
          <h2 className="blind">User Navigation</h2>
          <ul>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/join">join</Link>
            </li>
            <li>
              <button>
                <span className="blind">search</span>
              </button>
            </li>
          </ul>
        </UserNavi>
      </HeaderWrapper>
    </HeaderDiv>
  );
}

export default Header;

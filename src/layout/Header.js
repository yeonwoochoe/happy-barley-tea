import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderDiv = styled.header`
  z-index: 2000;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100px;
  background-color: #333;
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

const HeaderFirstTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    width: 180px;
    height: 50px;
    margin-right: 18px;
    background-image: url("/assets/logo.png");
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    @media screen and (max-width: 1024px) {
      margin-right: 10px;
    }
    @media screen and (max-width: 640px) {
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
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
  @media screen and (max-width: 1024px) {
    margin-left: 0;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    color: #fff;
    @media screen and (max-width: 1024px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 0;
    }
  }
  li {
    a {
      &.active {
        color: #fcd200;
      }
    }
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
    @media screen and (max-width: 640px) {
      display: none;
    }
  }
  li {
    color: #fff;
    button {
      font-size: 18px;
      text-transform: capitalize;
      color: #fff;
    }
    &:first-of-type {
      position: relative;
      margin-right: 50px;
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 4px;
        right: -28px;
        bottom: 0;
        width: 1px;
        height: 18px;
        background-color: #fff;
      }
    }
  }
`;
const SearchBox = styled.div`
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
`;

function Header() {
  const user = useSelector(state => state.user.currentUser);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch(error => {});
  };

  return (
    <HeaderDiv>
      <HeaderWrapper>
        <WrapperDiv>
          <HeaderFirstTitle>
            <h1>
              <Link to="/">
                <span className="blind">single plus</span>
              </Link>
            </h1>
          </HeaderFirstTitle>
          <MenuNavi>
            <h2 className="blind">Menu Navigation</h2>
          </MenuNavi>
          <GlobalNavi>
            <h2 className="blind">Global Navigation</h2>
            <WrapperDiv>
              <ul>
                <li>
                  <NavLink to="/showcase">showcase</NavLink>
                </li>
                <li>
                  <NavLink to="/lifestyle">lifestyle</NavLink>
                </li>
                <li>
                  <NavLink to="/single-edit">single&nbsp;edit</NavLink>
                </li>
              </ul>
            </WrapperDiv>
          </GlobalNavi>
        </WrapperDiv>

        <UserNavi>
          <h2 className="blind">User Navigation</h2>
          <ul>
            <li>
              {user ? (
                <button onClick={handleLogout}>로그아웃</button>
              ) : (
                <Link to="/login">login</Link>
              )}
            </li>
            <li>{user ? <Link to="/mypage">마이페이지</Link> : <Link to="/join">join</Link>}</li>
          </ul>
          <SearchBox>
            <button>
              <span className="blind">search</span>
            </button>
          </SearchBox>
        </UserNavi>
      </HeaderWrapper>
    </HeaderDiv>
  );
}

export default Header;

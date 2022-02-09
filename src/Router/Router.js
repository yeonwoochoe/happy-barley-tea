import { Route, Routes } from 'react-router';
import React from 'react';
import styled from 'styled-components';
import ShowCase from '../components/Main/ShowCase';
import LifeStyle from '../pages/LifeStyle';

const MainWrapper = styled.main`
  width: 100%;
`;

const Router = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route path='/' element={<ShowCase />} />
        <Route path='/lifestyle' element={<LifeStyle />} />
      </Routes>
    </MainWrapper>
  );
};

export default Router;

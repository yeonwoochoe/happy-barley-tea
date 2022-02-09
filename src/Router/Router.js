import { Route, Routes } from 'react-router';
import React from 'react';
import Main from '../pages/Main';
import LifeStyle from '../pages/LifeStyle';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/lifestyle' element={<LifeStyle />} />
    </Routes>
  );
};

export default Router;

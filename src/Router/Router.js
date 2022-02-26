import { Route, Routes } from 'react-router';
import React from 'react';
import Main from '../pages/Main';
import LifeStyle from '../pages/LifeStyle';
import SingleEdit from '../pages/SingleEdit';
import ShowCase from '../pages/ShowCase';
import Login from '../pages/Login';
import Join from '../pages/Join';
import MyPage from '../pages/MyPage';
import LifeStyleDetail from '../components/LifeStyle/LifeStyleDetail';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/showcase' element={<ShowCase />} />
      <Route path='/lifestyle' element={<LifeStyle />}>
        <Route path=':id' element={<LifeStyleDetail />} />
      </Route>
      <Route path='/single-edit' element={<SingleEdit />} />
      <Route path='/login' element={<Login />} />
      <Route path='/join' element={<Join />} />
      <Route path='/mypage' element={<MyPage />} />
      <Route path='/*' element={<Main />} />
    </Routes>
  );
};

export default Router;

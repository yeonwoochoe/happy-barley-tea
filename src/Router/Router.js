import { Navigate, Outlet, Route, Routes } from "react-router";
import React from "react";
import Main from "../pages/Main";
import LifeStyle from "../pages/LifeStyle";
import LifeStyleDetail from "../components/LifeStyle/LifeStyleDetail";
import SingleEdit from "../pages/SingleEdit";
import ShowCase from "../pages/ShowCase";
import Login from "../pages/Login";
import Join from "../pages/Join";
import MyPage from "../pages/MyPage";
import EmailSignUp from "../pages/EmailSignUp";
import ModernSignUp from "../pages/ModernSignUp";
import LifeStyleCardList from "../components/LifeStyle/LifeStyleCardList";
import firebaseApp from "../firebase-config";
import { getAuth } from "firebase/auth";
const PrivateRoute = () => {
  const auth = getAuth(firebaseApp);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/showcase" element={<ShowCase />} />
      <Route path="/lifestyle" element={<LifeStyle />}>
        <Route path="name" element={<LifeStyleCardList />} />
      </Route>
      {/* <Route path='/lifestyle/:contentId' element={<LifeStyleDetail />} /> */}
      <Route path="/single-edit" element={<SingleEdit />} />

      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />

      <Route path="/signup" element={<ModernSignUp />} />
      <Route path="/emailsignup" element={<EmailSignUp />} />
      <Route
        path="/mypage"
        element={
          <PrivateRoute>
            <MyPage />
          </PrivateRoute>
        }
      />
      <Route path="/*" element={<Main />} />
    </Routes>
  );
};

export default Router;

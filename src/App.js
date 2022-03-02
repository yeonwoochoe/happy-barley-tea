import Router from "./Router/Router";
import Layout from "./layout/Layout";
import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "./firebase-config";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { claerUser, setUser } from "./redux/actions/user_action";

const App = () => {
  // 주석처리 로그인이 안되었을때 로그인 화면으로 이동이나, 아직 사용할 의미가 없어보임
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, user => {
      if (user) {
        navigate("/");
        dispatch(setUser(user));
      } else {
        navigate("/");
        dispatch(claerUser());
      }
    });
  }, []);

  return (
    <Layout>
      <Router />
    </Layout>
  );
};

export default App;

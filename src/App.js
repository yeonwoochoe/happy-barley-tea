import React, { useEffect } from 'react';
import Router from './Router/Router';
import Layout from './layout/Layout';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from './firebase-config';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { claerUser, setUser } from './redux/actions/user_action';

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, user => {
      if (user) {
        navigate('/');
        dispatch(setUser(user));
      } else {
        navigate('/login');
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

import React from 'react';
import Router from './Router/Router';
import Layout from './layout/Layout';

const App = () => {
  return (
    <div>
      <Layout>
        <Router />
      </Layout>
    </div>
  );
};

export default App;

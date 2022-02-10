import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Router from "./Router/Router";

const App = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;

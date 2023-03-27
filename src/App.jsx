import React from "react";
import { Direct } from "./components/Footer/Direct";
import ScrollBtn from "./components/Header/Item-2/ScrollBtn";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";

const App = () => {
  return (
    <div>
      <ScrollBtn />
      <Header />
      <Main />
      <Footer />
      <Direct />
    </div>
  );
};

export default App;

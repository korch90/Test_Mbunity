import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
// import { Nav } from "rsuite";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

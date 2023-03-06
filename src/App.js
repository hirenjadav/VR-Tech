import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Common/Footer/footer";
import Header from "./Components/Common/Header/header";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;

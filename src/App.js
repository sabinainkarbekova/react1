import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Nachalo from "./Nachalo";
import Info from "./Info";
import Products from "./Products";
import Subscribe from "./Subscribe";
import Specialty from "./Specialty";
import Footer from "./Footer";
import Form from "./Form"; 
import Timer from "./Timer";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Nachalo />
 
            <Info />
            <Products />
            <Subscribe />
            <Specialty />
            <Footer />
          </>} />
          <Route path="/form" element={<Form />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

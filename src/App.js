import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

function App() {
  return (
   <>
   <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
   <Footer/>
   </>
  );
}

export default App;

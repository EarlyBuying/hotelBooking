import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import CustomerAdd from "./components/CustomerAdd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/add" element={<CustomerAdd />}/>
    </Routes>
    <Routes>
      <Route path="/about" element={<About />}/>
    </Routes>
    <Routes>
      {/* <Route path="/add" element={<Home />}/> */}
    </Routes>

  </BrowserRouter>
  );
}

export default App;

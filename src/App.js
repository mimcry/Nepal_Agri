import "./App.css";
import React from "react";
import Navbar from "./components/header/Navbar";
import HomePage from "./components/homepage/HomePage";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Category from "./components/category_of_items/Category";
import Footer from "./components/homepage/Footer";
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={ <Category/>} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;

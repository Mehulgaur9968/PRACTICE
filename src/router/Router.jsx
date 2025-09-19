import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import StudentLogin from "../Pages/StudentLogin";
import Footer from "../components/footer/Footer";

function Router() {
  return (
    <>
      <Header />  

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/Student-login" element={<StudentLogin />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default Router;

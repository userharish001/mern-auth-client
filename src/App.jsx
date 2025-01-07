import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPass from "./pages/ResetPass";
import VerifyEmail from "./pages/VerifyEmail";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <><ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPass />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
      </Routes>
    </>
  );
};

export default App;

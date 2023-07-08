import React, {useEffect} from "react";
import Auth from "./components/Auth";
import {Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
    const navigate = useNavigate();

    const isAuth = localStorage.getItem('user');

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        } else {
            navigate('/');
        }
    }, [localStorage]);

  return (
      <div>
          <Routes>
            <Route path="/register" element={<Auth form={"register"} />} />
            <Route path="/login" element={<Auth form={"login"} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
  );
}

export default App;
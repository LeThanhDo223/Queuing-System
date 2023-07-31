import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginHome from "./login/LoginHome";
import Forgot from "./login/Forgot";
import NewPassword from "./login/NewPassword";
import MenuSider from "./component/MenuSider";
import Information from "./information/Information";
import MenuHeader from "./component/MenuHeader";

function App() {
  return (
    <BrowserRouter>
    {/* Demo */}
    <Routes>
        <Route path="/sider" element={<MenuSider />} />
      </Routes>
      <Routes>
        <Route path="/header" element={<MenuHeader />} />
      </Routes>
    
    {/* Demo */}



    {/* Main */}
      <Routes>
        <Route path="/" element={<LoginHome />} />
      </Routes>
      <Routes>
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
      <Routes>
        <Route path="/newPassword" element={<NewPassword />} />
      </Routes>
      <Routes>
        <Route path="/menu" element={<Information />} />
      </Routes>
      {/* Main */}
    </BrowserRouter>
  );
}

export default App;

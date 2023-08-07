import React from "react";
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginHome from "./login/LoginHome";
import Forgot from "./login/Forgot";
import NewPassword from "./login/NewPassword";
import MenuSider from "./component/MenuSider";
import Information from "./information/Information";
import MenuHeader from "./component/MenuHeader";
import Equipment from './equipment/Equipment';
import TableEquipment from './equipment/TableEquipment';
import ReadE from './equipment/ReadE';
import CreateE from './equipment/CreateE';
import Service from "./service/Service";
import TableService from "./service/TableService";
import ReadS from "./service/ReadS";
import MenuDoiSoat from "./service/Demo";
import TableDoiSoat from "./equipment/demo";
import UpdateS from "./service/UpdateS";
import NumberLevel from "./number_level/NumberLevel";
import CreateNL from "./number_level/CreateNL";
import DataForm from "./equipment/FormE";


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    {/* Demo */}
    <Routes>
        <Route path="/sider" element={<MenuSider />} />
      </Routes>
      <Routes>
        <Route path="/header" element={<MenuHeader />} />
      </Routes>
      <Routes>
        <Route path="/tableE" element={<TableEquipment />} />
      </Routes>
      <Routes>
        <Route path="/redE" element={<ReadE />} />
      </Routes>
      <Routes>
        <Route path="/createE" element={<CreateE />} />
      </Routes>
      <Routes>
        <Route path="/tableS" element={<TableService />} />
      </Routes>
      <Routes>
        <Route path="/redS" element={<ReadS />} />
      </Routes>
      <Routes>
        <Route path="/demo" element={<MenuDoiSoat />} />
      </Routes>
      <Routes>
        <Route path="/demotb" element={<TableDoiSoat />} />
      </Routes>
      <Routes>
        <Route path="/updateS" element={<UpdateS />} />
      </Routes>
      <Routes>
        <Route path="/createNL" element={<CreateNL />} />
      </Routes>
      <Routes>
        <Route path="/form" element={<DataForm />} />
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
      <Routes>
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
      <Routes>
        <Route path="/service" element={<Service />} />
      </Routes>
      <Routes>
        <Route path="/NumberLevel" element={<NumberLevel />} />
      </Routes>
      {/* Main */}
    </BrowserRouter>
    </Provider>
  );
}

export default App;

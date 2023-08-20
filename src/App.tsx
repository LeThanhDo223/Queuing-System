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
import ReadE from './equipment/ReadE';
import CreateE from './equipment/CreateE';
import Service from "./service/Service";
import TableService from "./service/TableService";
import ReadS from "./service/ReadS";
import MenuDoiSoat from "./service/Demo";
import UpdateS from "./service/UpdateS";
import NumberLevel from "./number_level/NumberLevel";
import CreateNL from "./number_level/CreateNL";
import Tags from "./equipment/Tags";
import CreateS from "./service/CreateS";
import TableR from "./Report/TableRport"
import Report from './Report/Report';
import UpdateE from "./equipment/UpdateE";
import Account from "./System/Account/Account";
import Role from "./System/Role/Role";
import UserLogs from "./System/UserLogs/UserLogs";
import Dashboard from "./dashboard/Dashboard";
import ChartD from "./dashboard/ChartD";
import PieChartE from "./dashboard/PieChartE";
import ReadNL from "./number_level/ReadNL";


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
        <Route path="/readE/:id" element={<ReadE />} />
      </Routes>
      <Routes>
        <Route path="/updateE/:id" element={<UpdateE />} />
      </Routes>
      <Routes>
        <Route path="/createE" element={<CreateE />} />
      </Routes>
      <Routes>
        <Route path="/tableS" element={<TableService />} />
      </Routes>
      <Routes>
        <Route path="/readS/:id" element={<ReadS />} />
      </Routes>
      <Routes>
        <Route path="/readNL/:id" element={<ReadNL />} />
      </Routes>
      <Routes>
        <Route path="/demo" element={<MenuDoiSoat />} />
      </Routes>
      <Routes>
        <Route path="/updateS/:id" element={<UpdateS />} />
      </Routes>
      <Routes>
        <Route path="/createNL" element={<CreateNL />} />
      </Routes>
      <Routes>
        <Route path="/tags" element={<Tags />} />
      </Routes>
      <Routes>
        <Route path="/createS" element={<CreateS />} />
      </Routes>
      <Routes>
        <Route path="/tableR" element={<TableR />} />
      </Routes>
      <Routes>
        <Route path="/chartD" element={<ChartD />} />
      </Routes>
      <Routes>
        <Route path="/pieChart" element={<PieChartE />} />
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
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path="/information" element={<Information />} />
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
      <Routes>
        <Route path="/report" element={<Report />} />
      </Routes>
      <Routes>
        <Route path="/account" element={<Account />} />
      </Routes>
      <Routes>
        <Route path="/role" element={<Role />} />
      </Routes>
      <Routes>
        <Route path="/userLogs" element={<UserLogs />} />
      </Routes>
      
      {/* Main */}
    </BrowserRouter>
    </Provider>
  );
}

export default App;

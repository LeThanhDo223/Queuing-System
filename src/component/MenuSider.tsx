import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "../css/MenuHome.css";
import {
  AppstoreOutlined,
  DesktopOutlined,
  CommentOutlined,
  HddOutlined,
  FundProjectionScreenOutlined,
  SettingOutlined,
  ExportOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const MenuSider: React.FC = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState<string[]>([location.pathname]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handleMenuClick = (key: string) => {
    setSelectedKeys([key]);
  };

  const handleSubMenuOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };
  return (
    <Layout className="Menu_sider" style={{ background: "none" }}>
      <div className="layout-container">
        <div className="logo-container">
          <img className="col_img3" src="/images/Logoalta.png" alt="" />
        </div>
        <div className="menu-container">
          <Menu
            className="menu_text"
            mode="vertical"
            selectedKeys={selectedKeys}
            onClick={({ key }) => handleMenuClick(key)}
            openKeys={openKeys}
            onOpenChange={handleSubMenuOpenChange}
            style={{ borderRight: "none" }}
          >
            <Menu.Item key="/dashboard" icon={<AppstoreOutlined />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="/equipment" icon={<DesktopOutlined />}>
              <Link to="/equipment">Thiết bị</Link>
            </Menu.Item>
            <Menu.Item key="/service" icon={<CommentOutlined />}>
              <Link to="/service">Dịch vụ</Link>
            </Menu.Item>
            <Menu.Item key="/NumberLevel" icon={<HddOutlined />}>
              <Link to="/NumberLevel">Cấp số</Link>
            </Menu.Item>
            <Menu.Item key="/report" icon={<FundProjectionScreenOutlined />}>
              <Link to="/report">Báo cáo</Link>
            </Menu.Item>
            <SubMenu key="settings" icon={<SettingOutlined />} title="Cài đặt hệ thống">
              <Menu.Item key="/role">
                <Link to="/role">Quản lý vai trò</Link>
              </Menu.Item>
              <Menu.Item key="/account">
                <Link to="/account">Quản lý tài khoản</Link>
              </Menu.Item>
              <Menu.Item key="/userLogs">
                <Link to="/userLogs">Nhật ký người dùng</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="menu_DX">
          <Button className="col_buttonDX" icon={<ExportOutlined />}>
            Đăng xuất
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default MenuSider;

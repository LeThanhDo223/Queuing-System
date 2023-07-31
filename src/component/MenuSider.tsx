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
            <Menu.Item key="/Dashboard" icon={<AppstoreOutlined />}>
              <Link to="/Dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="/thietBi" icon={<DesktopOutlined />}>
              <Link to="/thietBi">Thiết bị</Link>
            </Menu.Item>
            <Menu.Item key="/dichVu" icon={<CommentOutlined />}>
              <Link to="/dichVu">Dịch vụ</Link>
            </Menu.Item>
            <Menu.Item key="/capSo" icon={<HddOutlined />}>
              <Link to="/capSo">Cấp số</Link>
            </Menu.Item>
            <Menu.Item key="/baoCao" icon={<FundProjectionScreenOutlined />}>
              <Link to="/baoCao">Báo cáo</Link>
            </Menu.Item>
            <SubMenu key="settings" icon={<SettingOutlined />} title="Cài đặt hệ thống">
              <Menu.Item key="/qlVaiTro">
                <Link to="/qlVaiTro">Gói dịch vụ</Link>
              </Menu.Item>
              <Menu.Item key="/qlTaiKhoan">
                <Link to="/qlTaiKhoan">Quản lý tài khoản</Link>
              </Menu.Item>
              <Menu.Item key="/nkNguoiDung">
                <Link to="/nkNguoiDung">Nhật ký người dùng</Link>
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

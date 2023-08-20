import {  Breadcrumb, Col, Layout, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import MenuSider from "../../component/MenuSider";
import { Content, Header } from "antd/es/layout/layout";
import "../../css/Style.css";
import MenuHeader from "../../component/MenuHeader";
import TableRole from "./TableRole";
import { Link } from "react-router-dom";


const Role: React.FC = () => {
  const breadcrumbItems = [
    { title: "Cài đặt hệ thống", link: "" },
    { title: "Quản lý vai trò", link: "/role" },
  ];
  return (
    <Layout>
      <Sider>
        <MenuSider />
      </Sider>
      <Layout>
      <Header style={{ background: "none", marginTop:'10px' }}>
          <Row>
            <Col span={19}>
            <Breadcrumb  className="text-t1">
            {breadcrumbItems.map((item, index) => (
              <Breadcrumb.Item key={index}>
                <Link to={item.link}>{item.title}</Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
            </Col>
            <Col span={5}>
              <MenuHeader/>
            </Col>
          </Row>
          
        </Header>
       
          <Row>
            <Col style={{ marginTop: "20px" }} span={24}>
              <TableRole />
            </Col>
            
          </Row>
       
      </Layout>
    </Layout>
  );
};

export default Role;

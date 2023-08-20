import {  Breadcrumb, Col, Layout, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import MenuSider from "../component/MenuSider";
import {  Header } from "antd/es/layout/layout";
import "../css/Style.css";
import MenuHeader from "../component/MenuHeader";
import TableR from "./TableRport";
import { Link } from "react-router-dom";


const Report: React.FC = () => {
  const breadcrumbItems = [
    { title: "Báo cáo", link: "" },
    { title: "Lập báo cáo", link: "/report" },
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
              <TableR />
            </Col>
            
          </Row>
       
      </Layout>
    </Layout>
  );
};

export default Report;

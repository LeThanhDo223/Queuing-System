import { Breadcrumb, Col, Layout, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import MenuSider from "../component/MenuSider";
import { Content, Header } from "antd/es/layout/layout";
import "../css/Style.css";
import MenuHeader from "../component/MenuHeader";

import TableEquipment from './TableEquipment';
import { Link } from "react-router-dom";


const Equipment: React.FC = () => {
  const breadcrumbItems = [
    { title: "Thiết bị", link: "" },
    { title: "Danh sách thiết bị", link: "/equipment" },
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
        <Content className="content">
          <Row>
            <Col style={{marginTop:'20px'}} span={24}>
            <TableEquipment />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Equipment;

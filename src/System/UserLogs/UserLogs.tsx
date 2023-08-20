import {  Col, Layout, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import MenuSider from "../../component/MenuSider";
import { Header } from "antd/es/layout/layout";
import "../../css/Style.css";
import MenuHeader from "../../component/MenuHeader";
import TableUL from "./TableUserLogs";


const UserLogs: React.FC = () => {
  return (
    <Layout>
      <Sider>
        <MenuSider />
      </Sider>
      <Layout>
        <Header style={{ background: "none" }}>
          <MenuHeader />
        </Header>
       
          <Row>
            <Col style={{ marginTop: "20px" }} span={24}>
              <TableUL />
            </Col>
            
          </Row>
       
      </Layout>
    </Layout>
  );
};

export default UserLogs;

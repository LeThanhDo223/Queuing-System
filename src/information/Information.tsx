import { Avatar, Col, Input, Layout, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import MenuSider from "../component/MenuSider";
import { Content, Header } from "antd/es/layout/layout";
import "../css/MenuHome.css";
import MenuHeader from "../component/MenuHeader";
import { AntDesignOutlined } from "@ant-design/icons";

const Information: React.FC = () => {
  return (
    <Layout>
      <Sider>
        <MenuSider />
      </Sider>
      <Layout>
        <Header style={{ background: "none" }}>
          <MenuHeader />
        </Header>
        <Content className="col_info">
            <Row>
          <Col style={{ textAlign: "center", marginTop: 100 }} span={6}>
            <Avatar size={300} icon={<AntDesignOutlined />} />
            <h1>Lê Quỳnh Ái Vân</h1>
          </Col>
          <Col  style={{marginTop: 100 }} span={18}>
            <Row>
                <Col span={12}>
                    <p className="col-p">Tên người dùng</p>
                    <Input className="col-input" disabled  />
                </Col>
                <Col span={12}>
                    <p className="col-p" >Tên đăng nhập</p>
                    <Input className="col-input" disabled  />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <p className="col-p">Số điện thoại</p>
                    <Input className="col-input" disabled  />
                </Col>
                <Col span={12}>
                    <p className="col-p">Mật khẩu</p>
                    <Input className="col-input" disabled  />
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <p className="col-p">Email:</p>
                    <Input className="col-input" disabled  />
                </Col>
                <Col span={12}>
                    <p className="col-p">Vai trò:</p>
                    <Input className="col-input" disabled  />
                </Col>
            </Row>
          </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Information;

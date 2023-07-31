import { BellFilled, UserOutlined } from "@ant-design/icons";
import { Col, Row, Avatar, Space } from "antd";
import React from "react";
import "../css/Style.css";
const MenuHeader: React.FC = () => {
  return (
    <Row>
      <Col span={19}>
        <p className="col-header">Thông tin cá nhân</p>
      </Col>
      
      <Col span={5}>
        <div style={{display:"inline-block"}}>
        <Space direction="vertical" size={16}>
          <Space wrap size={16}>
            <Avatar className="col-icon1" size={56} icon={<BellFilled />} />
            <Avatar size={64} icon={<UserOutlined />} />
          </Space>
        </Space>
        </div>
        <div style={{display:"inline-block", margin: 4}}>
            <p className="col-p1">Xin chào</p>
            <p className="col-p2" >Lê Quỳnh Ái Vân</p>
        </div>
      </Col>
    </Row>
  );
};
export default MenuHeader;

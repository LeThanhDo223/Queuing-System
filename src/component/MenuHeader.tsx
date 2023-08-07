import { BellFilled, UserOutlined } from "@ant-design/icons";
import { Col, Row, Avatar, Space, Button } from "antd";
import React, { useState } from "react";
import "../css/Style.css";

const MenuHeader: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  // Cập nhật className của nút dựa trên trạng thái showNotification
  const buttonClassName = showNotification ? "col-icon1 active" : "col-icon1";

  return (
    <Row>
      <Col span={19}>
        <p className="col-header">Thông tin cá nhân</p>
      </Col>

      <Col span={5}>
        <div style={{ display: "inline-block" }}>
          <Space direction="vertical" size={16}>
            <Space wrap size={16}>
              <Button
                className={buttonClassName} // Sử dụng biến buttonClassName
                icon={<BellFilled />}
                onClick={handleNotificationClick}
              />
              <Avatar size={64} icon={<UserOutlined />} />
            </Space>
          </Space>
        </div>
        <div style={{ display: "inline-block", margin: 4 }}>
          <p className="col-p1">Xin chào</p>
          <p className="col-p2">Lê Quỳnh Ái Vân</p>
        </div>
        {showNotification && (
          <div className="notification-container">
            <p title="text" className="col-title1">
              Thông báo
            </p>
            <div className="col-notification">
              <p>New notification 2</p>
              <p>New notification 2</p>
              <p>New notification 2</p>
              <p>New notification 2</p>
              <p>New notification 2</p>
              <p>New notification 2</p>
              <p>New notification 2</p>
              <p>New notification 2</p>
            </div>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default MenuHeader;

import { useDispatch, useSelector } from "react-redux";
import { BellFilled, UserOutlined } from "@ant-design/icons";
import { Col, Row, Avatar, Space, Button } from "antd";
import React, { useState, useEffect } from "react";
import "../css/Style.css";
import { fetchPageNo } from "../redux/Notification";
import { RootState } from "../redux/Store"; // Update the path to your RootState type

const MenuHeader: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const notificationData = useSelector((state: RootState) => state.notificationData.data);
  const dispatch = useDispatch();

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  // Cập nhật className của nút dựa trên trạng thái showNotification
  const buttonClassName = showNotification ? "col-icon1 active" : "col-icon1";

  useEffect(() => {
    dispatch(fetchPageNo() as any);
  }, [dispatch]);

  return (
    <Row>
      <Col span={24}>
        <div style={{ display: "inline-block" }}>
          <Space direction="vertical" size={16}>
            <Space wrap size={16}>
              <Button
                className={buttonClassName}
                icon={<BellFilled />}
                onClick={handleNotificationClick}
              />
              <Avatar size={64} icon={<UserOutlined />} />
            </Space>
          </Space>
        </div>
        <div style={{ display: "inline-block", margin: 4 }}>
          <p className="col-p1">Xin chào</p>
          <p className="col-p2">do</p>
        </div>
        {showNotification && (
          <div className="notification-container">
            <p title="text" className="col-title1">
              Thông báo
            </p>
            <div className="col-notification">
              {notificationData.map((notification, index) => (
                <Row key={index}>
                  <Col className="text-In" span={24}>
                    Người dùng: {notification.ngd}
                  </Col>
                  <Col className="text-In1" span={24}>
                    Thời gian nhận số: {notification.thoigian}
                  </Col>
                  <hr />
                </Row>
              ))}
            </div>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default MenuHeader;

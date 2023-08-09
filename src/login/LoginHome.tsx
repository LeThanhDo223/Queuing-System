import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Space } from 'antd';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../css/Login.css';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const LoginHome: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (values: any) => {
    const { username, password } = values;
    try {
      const authInstance = getAuth();
      await signInWithEmailAndPassword(authInstance, username, password);

      // Đăng nhập thành công, thay đổi địa chỉ URL
      window.location.href = '/menu'; // Thay thế thành đường dẫn bạn muốn chuyển hướng đến
    } catch (error: any) {
      setError("Sai mật khẩu hoặc tên đăng nhập");
    }
  };

  return (
    <>
      <Row>
        <Col className="col_bg1" span={10}>
          <div className="col_img1">
            <img src="/images/Logoalta.png" alt="" />
          </div>

          <div className="col_login">
            <Form
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
              onFinish={handleLogin}
            >
              <Form.Item
                name="username"
                className="form_item"
                rules={[{ required: true, message: "Vui lòng nhập email" }]}
              >
                <div className="col_text">
                  <label>Tên đăng nhập <Space style={{color:'red'}}>*</Space></label>
                  <Input className="col_input" />
                </div>
              </Form.Item>

              <Form.Item
                name="password"
                className="form_item"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
              >
                <div className="col_text">
                  <label>Mật khẩu <Space style={{color:'red'}}>*</Space></label>
                  <Input.Password className="col_input" />
                </div>
              </Form.Item>
              <Form.Item name="remember" className="form_item">
                <div className="col_text">
                  <Button className="col_qmk" type="link">
                    Quên mật khẩu?
                  </Button>
                </div>
              </Form.Item>

              <Form.Item className="col_dn">
                <Space>
                  <Button className="col_button" htmlType="submit">
                    Đăng nhập
                  </Button>
                </Space>
              </Form.Item>
            </Form>
            {error && (
              <div style={{ color: 'red' }} className="error-message">
                <ExclamationCircleOutlined  /> {error}
              </div>
            )}
          </div>
        </Col>
        <Col className="col_bg2" span={14}>
          <div className="col_img2">
            <img src="/images/Logo2.png" alt="" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default LoginHome;

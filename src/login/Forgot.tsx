import React from "react";
import { Col, Row } from "antd";
import { Button, Form, Input, Space } from "antd";
import "../css/Forgot.css";

const Forgot: React.FC = () => {
  return (
    <>
      <Row>
        <Col className="col_bg1" span={10}>
          <div className="col_img1">
            <img src="/images/Logoalta.png" alt="" />
          </div>

          <div className="col_login">
            <Form name="validateOnly" layout="vertical" autoComplete="off">
              <Form.Item name="username" className="form_item">
                <div className="col_text">
                  <div className="col_text2">
                    <h3>Đặt lại mật khẩu</h3>
                  </div>
                  <label>
                    Vui lòng nhập email để đặt lại mật khẩu của bạn *
                  </label>
                  <Input className="col_input" />
                </div>
              </Form.Item>

              <Form.Item className="col_dn">
                <Space>
                  <Button className="col_button1" htmlType="submit">
                    Hủy
                  </Button>
                  <Button className="col_button" htmlType="submit">
                    Tiếp tục
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col className="col_bg2" span={14}>
          <div className="col_img2">
            <img src="/images/Logo3.png" alt="" />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Forgot;

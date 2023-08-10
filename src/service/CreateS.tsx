import { Col, Row } from "antd";
import { Button, Form, Input, Space } from "antd";
import "../css/Login.css";

const CreateS: React.FC = () => {
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
                  <label>Tên đăng nhập *</label>
                  <Input className="col_input" />
                </div>
              </Form.Item>

              <Form.Item name="password" className="form_item">
                <div className="col_text">
                  <label>Mật khẩu *</label>
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

export default CreateS;
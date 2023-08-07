import { Col, Input, Layout, Row, Form, Checkbox, Button, Space } from "antd";
import React from "react";
import { Content } from "antd/es/layout/layout";
import "../css/Style.css";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log("checked = ", checkedValues);
};
const UpdateS: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Layout>
      <Content>
        <h1 className="col-titleReadE">Quản lý thiết bị</h1>
        <div style={{ paddingLeft: 20 }} className="col_ReadE">
          <Row>
            <Col className="text-titleRead" span={24}>
              Thông tin dịch vụ
            </Col>
          </Row>
          <Form
            form={form}
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
          >
            <Row>
              <Col span={12}>
                <Row>
                  <Col span={24}>
                    <Form.Item
                      label="Mã dịch vụ:"
                      name="madv"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập mã dịch vụ!",
                        },
                      ]}
                    >
                      <Input className="input-create" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item
                      label="Tên dịch vụ:"
                      name="tendv"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập tên dịch vụ!",
                        },
                      ]}
                    >
                      <Input className="input-create" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Form.Item label="Mô tả:" name="mota">
                  <Input.TextArea
                    style={{ height: 120 }}
                    placeholder="Mô tả dịch vụ"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <Row>
            <Col className="text-titleRead" span={24}>
              Quy tắc cấp số
            </Col>
          </Row>
          <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
            
            <Row>
              <Col span={4}>
                <Checkbox value="A">Tăng tự động từ:</Checkbox>
              </Col>
              <Col span={20}>
                <Space>
                <Space className="text-readS2">0001</Space>
                đến
                <Space className="text-readS2">9999</Space>
                </Space>
              </Col>
              
              <Col span={4}><br />
                <Checkbox value="B">Prefix:</Checkbox>
              </Col>
              <Col span={20}><br />
                
                <Space className="text-readS2">0001</Space>
              </Col>
              <Col span={4}><br />
                <Checkbox value="C">Surfix:</Checkbox>
              </Col>
              <Col span={20}><br />
                
                <Space className="text-readS2">0001</Space>
              </Col>
              <Col span={4}><br />
                <Checkbox value="D">Reset mỗi ngày</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
          <p>
            <span style={{ color: "red" }}>*</span> Là trường thông tin bắt buộc
          </p>
        </div>
        <Row>
          <Col style={{ textAlign: "center", marginTop: 30 }} span={24}>
            <Button className="button-create">Hủy bỏ</Button>
            <Button className="button-create0">Cập nhật</Button>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default UpdateS;

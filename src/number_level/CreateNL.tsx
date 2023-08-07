import { Col, Layout, Row, Select, Button, Modal, Space } from "antd";
import React, { useState } from "react";
import { Content } from "antd/es/layout/layout";
import "../css/Style.css";
const { Option } = Select;

const CreateNL: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout>
      <Content>
        <h1 className="col-titleReadE">Quản lý thiết bị</h1>
        <div style={{ textAlign: "center" }} className="col_ReadE">
          <Row>
            <Col className="nl-titleRead" span={24}>
              CẤP SỐ MỚI
            </Col>
            <Col className="nl-textRead" span={24}>
              Dịch vụ khách hàng lựa chọn
            </Col>
            <Col span={24}>
              <Select className="nl-select" placeholder="Chọn dịch vụ">
                <Option value="option1">Khám tim mạch</Option>
                <Option value="option2">Khám sản - Phụ khoa</Option>
                <Option value="option3">Khám răng hàm mặt</Option>
                <Option value="option4">Khám tai mũi họng</Option>
              </Select>
            </Col>
            <Col style={{ marginTop: 100 }} span={24}>
              <Button className="nl-button">Hủy bỏ</Button>
              <Button type="primary" onClick={showModal} className="nl-button0">
                In số
              </Button>
            </Col>
          </Row>

          <Row>
            <Modal
              visible={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
              style={{ textAlign: "center" }}
            >
              <Row>
                <Col span={24}>
                  <p className="text-createnl">Số thứ tự được cấp</p>
                  <p className="text-createnl1">2001201</p>
                  <p className="text-createnl2">
                    DV: Khám răng hàm mặt{" "}
                    <Space className="text-createnl3">(tại quầy số 1)</Space>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col span={24}>Thời gian cấp:</Col>
              </Row>
            </Modal>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};
export default CreateNL;

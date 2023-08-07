import {  Col, Layout, Row } from "antd";
import React from "react";
import { Content } from "antd/es/layout/layout";
import "../css/Style.css";

const ReadE: React.FC = () => {
  return (
  
      <Layout >
        <Content >
        <h1 className="col-titleReadE">Quản lý thiết bị</h1>
          <div className="col_ReadE">
            <Row>
          <Col className="text-titleRead" span={24}>
            Thông tin thiết bị
          </Col>
          </Row>
          <Row>
            <Col className="text-read" span={2}>
              Mã thiết bị:
            </Col>
            <Col className="text-read1" span={10}>
              Mã
            </Col>
            <Col className="text-read" span={2}>
              Loại thiết bị:
            </Col>
            <Col className="text-read1" span={10}>
              Loại
            </Col>
          </Row>
          <Row>
            <Col className="text-read" span={2}>
              Tên thiết bị:
            </Col>
            <Col className="text-read1" span={10}>
              tên
            </Col>
            <Col className="text-read" span={2}>
              Tên đăng nhập:
            </Col>
            <Col className="text-read1" span={10}>
              tên đăng nhập
            </Col>
          </Row>
          <Row>
            <Col className="text-read" span={2}>
              Địa chỉ IP:
            </Col>
            <Col className="text-read1" span={10}>
              123ip
            </Col>
            <Col className="text-read" span={2}>
              Mật khẩu:
            </Col>
            <Col className="text-read1" span={10}>
              CMS
            </Col>
          </Row>
          <Row>
            <Col className="text-read" span={24}>
              Dịch vụ sử dụng
            </Col>
            <Col className="text-read1" span={24}>
            Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.
            </Col>
          </Row>
          </div>
        </Content>
       
      </Layout>
  );
};

export default ReadE;

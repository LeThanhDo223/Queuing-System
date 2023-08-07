import React, { useState } from "react";
import { Layout, Row, Col, Button, Radio, Space, DatePicker } from "antd";

import "../css/Style.css";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";

const MenuDoiSoat: React.FC = () => {
 
  return (
    <Layout className="menu">

      <Layout >
        <Content className="col-bg1">
          <Layout>
            <Content style={{ margin: "24px 16px 0", background:'white' }}>
              <div
                className="col_content2"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Row>
                  <Col span={24}>
                    <h2 className="col_texth2">Đổi soát vé</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button>
                      Gói gia đình
                    </Button>
                  </Col>
                  <Col>
                    <Button
                     >
                      Gói Sự kiện
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
             sfFDSGD
                  </Col>
                </Row>
              </div>
            </Content>

            {/* sider right */}
            <Sider style={{ margin: "24px 16px 0", background:'white'}}>
        <div className="col_sider" style={{ padding: 24, minHeight: 360 }}>
          <h2>Lọc vé</h2>
          <Row>
            <Col span={12}>
              <p>Tình trạng đổi soát</p>
            </Col>
            <Col span={12}>
              <Radio.Group >
                <Space direction="vertical">
                  <Radio value={null}>Tất cả</Radio>
                  <Radio value="Đã đổi soát">Đã đổi soát</Radio>
                  <Radio value="Chưa đổi soát">Chưa đổi soát</Radio>
                </Space>
              </Radio.Group>
            </Col>
          </Row>
                <Row>
                  <Col span={12}>
                    <p>Loại vé</p>
                  </Col>
                  <Col span={12}>
                    <p>Vé cổng</p>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <p>Từ ngày</p>
                  </Col>
                  <Col span={12}>
                    <DatePicker
                    
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <p>Đến ngày</p>
                  </Col>
                  <Col span={12}>
                    <DatePicker />
                  </Col>
                </Row>

                <div style={{ marginLeft: "170px", marginTop: "50px", }}>
            <Button className="col_t3" >
              Lọc
            </Button>
          </div>
              </div>
            </Sider>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MenuDoiSoat;

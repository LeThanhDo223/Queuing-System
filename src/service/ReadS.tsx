import { Col, Layout, Row, Select, Space, DatePicker, Input, Button } from "antd";
import React from "react";
import { Content } from "antd/es/layout/layout";
import "../css/Style.css";
import { SearchOutlined } from "@ant-design/icons";
const { Option } = Select;
const { RangePicker } = DatePicker;
const Edit= () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Edit Square">
  <path id="Edit Square_2" fill-rule="evenodd" clip-rule="evenodd" d="M17.443 0.552097C19.1213 0.447205 20.7762 1.02994 22.0233 2.17209C23.1655 3.41913 23.7482 5.07409 23.655 6.764V17.6494C23.7599 19.3393 23.1655 20.9943 22.035 22.2413C20.7879 23.3835 19.1213 23.9662 17.443 23.8613H6.55751C4.86758 23.9662 3.21261 23.3835 1.96556 22.2413C0.823397 20.9943 0.240662 19.3393 0.345554 17.6494V6.764C0.240662 5.07409 0.823397 3.41913 1.96556 2.17209C3.21261 1.02994 4.86758 0.447205 6.55751 0.552097H17.443ZM10.8115 17.8592L18.6551 9.99233C19.366 9.26974 19.366 8.10428 18.6551 7.39335L17.14 5.87825C16.4174 5.15567 15.2519 5.15567 14.5293 5.87825L13.7485 6.67077C13.6319 6.78731 13.6319 6.98544 13.7485 7.10199C13.7485 7.10199 15.6016 8.94341 15.6365 8.99003C15.7647 9.12989 15.8463 9.31636 15.8463 9.52614C15.8463 9.94571 15.5083 10.2953 15.0771 10.2953C14.879 10.2953 14.6925 10.2138 14.5643 10.0856L12.618 8.1509C12.5247 8.05766 12.3616 8.05766 12.2683 8.1509L6.70902 13.7101C6.32442 14.0948 6.10298 14.6076 6.09132 15.1553L6.02139 17.9175C6.02139 18.069 6.06801 18.2088 6.17291 18.3137C6.2778 18.4186 6.41765 18.4769 6.56917 18.4769H9.30802C9.86745 18.4769 10.4036 18.2554 10.8115 17.8592Z" fill="#FF7506"/>
  </g>
  </svg>
  
);
const Back= () => (
  <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="vuesax/bulk/back-square">
  <g id="back-square">
  <path id="Vector" d="M18.8885 2.54004H9.1235C4.86516 2.54004 2.3335 5.07171 2.3335 9.31837V19.0834C2.3335 23.33 4.86516 25.8617 9.11183 25.8617H18.8768C23.1235 25.8617 25.6552 23.33 25.6552 19.0834V9.31837C25.6668 5.07171 23.1352 2.54004 18.8885 2.54004Z" fill="#FF7506"/>
  <path id="Vector_2" d="M16.2398 10.1H10.2315L10.6165 9.71503C10.9548 9.37669 10.9548 8.81669 10.6165 8.47836C10.2782 8.14003 9.71818 8.14003 9.37985 8.47836L7.54818 10.31C7.20985 10.6484 7.20985 11.2084 7.54818 11.5467L9.37985 13.3784C9.55485 13.5534 9.77652 13.635 9.99818 13.635C10.2198 13.635 10.4415 13.5534 10.6165 13.3784C10.9548 13.04 10.9548 12.48 10.6165 12.1417L10.3132 11.8384H16.2398C17.7332 11.8384 18.9582 13.0517 18.9582 14.5567C18.9582 16.0617 17.7448 17.275 16.2398 17.275H10.4998C10.0215 17.275 9.62485 17.6717 9.62485 18.15C9.62485 18.6284 10.0215 19.025 10.4998 19.025H16.2398C18.7015 19.025 20.7082 17.0184 20.7082 14.5567C20.7082 12.095 18.7015 10.1 16.2398 10.1Z" fill="#FFF2E7"/>
  </g>
  </g>
  </svg>
  
  
);
const ReadS: React.FC = () => {
  return (
    <>
      <Layout>
        <Content>
          <h1 className="col-titleReadE">Quản lý dịch vụ</h1>
          <Row>
            <Col span={6}>
              <Row className="col_ReadS1">
                <Col span={24}>
                  <Row>
                    <Col className="title-readS" span={24}>
                      Thông tin dịch vụ
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-readS" span={7}>
                      Mã dịch vụ:
                    </Col>
                    <Col className="text-readS1" span={17}>
                      1
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-readS" span={7}>
                      Tên dịch vụ:
                    </Col>
                    <Col className="text-readS1" span={17}>
                      Khám tim mạch
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-readS" span={7}>
                      Mô tả:
                    </Col>
                    <Col className="text-readS1" span={17}>
                      Chuyên các bệnh lý về tim
                    </Col>
                  </Row>
                  <Col className="title-readS" span={24}>
                    Quy tắc cấp số
                  </Col>
                  <Row>
                    <Col className="text-readS" span={7}>
                      Tăng tự động:
                    </Col>
                    <Col className="text-readS1" span={17}>
                      <Space className="text-readS2">0001</Space>
                      đến
                      <Space className="text-readS2">9999</Space>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 10 }}>
                    <Col className="text-readS" span={7}>
                      Prefix:
                    </Col>
                    <Col className="text-readS1" span={17}>
                      <Space className="text-readS2">0001</Space>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col span={18}>
              <Row className="col_ReadS">
                <Col span={24}>
                  <Row>
                    <Col className="col-text" span={8}>
                      Trạng thái hoạt động
                    </Col>
                    <Col className="col-text" span={8}>
                      Chọn thời gian
                    </Col>
                    <Col className="col-text" span={8}>
                      Từ khoá
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8}>
                      <Select className="reads-input1" defaultValue="option1">
                        <Option value="option1">Tất cả</Option>
                        <Option value="option2">Hoạt động</Option>
                        <Option value="option3">Ngưng hoạt động</Option>
                      </Select>
                    </Col>
                    <Col span={8}>
                      <Space direction="vertical" size={12}>
                        <RangePicker />
                      </Space>
                    </Col>
                    <Col span={8}>
                      <Input
                        placeholder="Nhập từ khóa"
                        className="reads-input1"
                        suffix={<SearchOutlined />}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
            <Col style={{marginTop:'20px'}} span={22}>
            ádfdsfasdf
            </Col>
            <Col span={2}>
              <Row>
                <Col style={{marginTop:'20px', textAlign:'end',}} span={24}>
              <Button className="equipment-button">
              <Edit />
              <Space style={{ display: 'block'}}>Cập nhật <br /> danh sách</Space>
              </Button>
            </Col>
            <Col style={{ textAlign:'end'}} span={24}>
              <Button className="equipment-button">
              <Back />
              <Space style={{ display: 'block', width: 60 }}>Quay lại</Space>
              </Button>
            </Col>
              </Row>
            </Col>
          </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export default ReadS;

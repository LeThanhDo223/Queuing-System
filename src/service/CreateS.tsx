import { Col, Input, Layout, Row, Form, Checkbox, Button, Space, Breadcrumb } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Content, Header } from "antd/es/layout/layout";
import "../css/Style.css";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { tableService, addPageData } from "../redux/ServiceSlice";
import { firestore } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import Sider from "antd/es/layout/Sider";
import MenuSider from "../component/MenuSider";
import { Link } from "react-router-dom";
import MenuHeader from "../component/MenuHeader";
const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log("checked = ", checkedValues);
};

const CreateS: React.FC = () => {
  const dispatch = useDispatch();
  const [newData, setNewData] = useState<tableService>({
    id: "",
    madv: "",
    tendv: "",
    mota: "",
    tthd: "Hoạt động",
    ngay: "",
    capso: "", 
  });
  const handleAddData = async () => {
    try {
      await addDoc(collection(firestore, "data"), {
        ...newData,
      });

      // Gửi dữ liệu đến Redux
      dispatch(addPageData(newData) as any);

      // Xóa các trường trong form
      setNewData({
        id: "",
        madv: "",
        tendv: "",
        mota: "",
        tthd: "Hoạt động",
        ngay: "",
        capso: "", 
      });
      window.location.reload();
    } catch (error) {
      console.error("Lỗi khi thêm dữ liệu:", error);
    }
  };
  const breadcrumbItems = [
    { title: "Dịch vụ", link: "" },
    { title: "Danh sách dịch vụ", link: "/service" },
    { title: "Thêm dịch vụ", link: `/createS` },
  ];
  const [form] = Form.useForm();
  return (
    <Layout>
      <Sider>
        <MenuSider />
      </Sider>
      <Layout>
      <Header style={{ background: "none" }}>
          <Row>
            <Col span={19}>
              <Breadcrumb className="text-t1">
                {breadcrumbItems.map((item, index) => (
                  <Breadcrumb.Item key={index}>
                    <Link to={item.link}>{item.title}</Link>
                  </Breadcrumb.Item>
                ))}
              </Breadcrumb>
            </Col>
            <Col span={5}>
              <MenuHeader />
            </Col>
          </Row>
        </Header>
      <Content>
        <h1 className="col-titleReadE">Quản lý thiết bị</h1>
        <Row>
          <Col span={1}></Col>
          <Col span={22}><div style={{ paddingLeft: 20 }} className="col_ReadE">
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
                      <Input className="input-create"
                       placeholder="Nhập mã dịch vụ"
                       type="text"
                       value={newData.madv}
                       onChange={(e) =>
                         setNewData({ ...newData, madv: e.target.value })
                       } />
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
                      <Input className="input-create"
                       placeholder="Nhập tên dịch vụ"
                       type="text"
                       value={newData.tendv}
                       onChange={(e) =>
                         setNewData({ ...newData, tendv: e.target.value })
                       }
                       />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Form.Item label="Mô tả:" name="mota">
                  <Input.TextArea
                    style={{ height: 120 }}
                    placeholder="Mô tả dịch vụ"
                       value={newData.mota}
                       onChange={(e) =>
                         setNewData({ ...newData, mota: e.target.value })
                       }
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
                  <Input className="input_cs"/> đến <Input className="input_cs"/>
                </Space>
              </Col>
              
              <Col span={4}><br />
                <Checkbox value="B">Prefix:</Checkbox>
              </Col>
              <Col span={20}><br />
                
              <Input className="input_cs"/>
              </Col>
              <Col span={4}><br />
                <Checkbox value="C">Surfix:</Checkbox>
              </Col>
              <Col span={20}><br />
                
              <Input className="input_cs"/>
              </Col>
              <Col span={4}><br />
                <Checkbox value="D">Reset mỗi ngày</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
          <p>
            <span style={{ color: "red" }}>*</span> Là trường thông tin bắt buộc
          </p>
        </div></Col>
          <Col span={1}></Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center", marginTop: 30 }} span={24}>
            <Button className="button-create">Hủy bỏ</Button>
            <Button onClick={handleAddData} className="button-create0" htmlType="submit">
              Thêm thiết bị
            </Button>
          </Col>
        </Row>
      </Content>
      </Layout>
    </Layout>
  );
};
export default CreateS;
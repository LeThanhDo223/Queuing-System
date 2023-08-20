import { Col, Input, Layout, Row, Form, Checkbox, Button, Space, Breadcrumb } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Content, Header } from "antd/es/layout/layout";
import "../css/Style.css";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { RootState } from "../redux/Store";
import { tableService } from "../redux/ServiceSlice";
import { updatePageData } from "../redux/ServiceSlice";
import Sider from "antd/es/layout/Sider";
import MenuSider from "../component/MenuSider";
import MenuHeader from "../component/MenuHeader";


const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log("checked = ", checkedValues);
};
const UpdateS: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.service.data);
  const [updatedData, setUpdatedData] = useState<tableService | undefined>(
    undefined
  );

  useEffect(() => {
    const item = data.find((item) => item.id === id);
    if (item) {
      setUpdatedData(item);
    }
  }, [data, id]);

  const handleSubmit = () => {
    if (updatedData) {
      dispatch(updatePageData(updatedData) as any); // Explicitly type the dispatch
    }
  };
  

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (updatedData) {
      setUpdatedData({
        ...updatedData,
        [name]: value,
      });
    }
  };
  if (!updatedData) {
    return <div>Loading...</div>;
  }
  const breadcrumbItems = [
    { title: "Dịch vụ", link: "" },
    { title: "Danh sách dịch vụ", link: "/service" },
    { title: "Chi tiết", link: `/readS/${id}` },
    { title: "Cập nhật", link: `/updateS/${id}` },
  ];
  return (
   <>
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
              <Col span={22}>
              <div style={{ paddingLeft: 20 }} className="col_ReadE">
          <Row>
            <Col className="text-titleRead" span={24}>
              Thông tin dịch vụ
            </Col>
          </Row>
          <Form
          onFinish={handleSubmit}
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
                      name="madv"
                      value={updatedData.madv}
                      onChange={handleInputChange} />
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
                      <Input className="input-create" name="tendv"
                      value={updatedData.tendv}
                      onChange={handleInputChange} />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <Form.Item label="Mô tả:" name="mota">
                  <Input.TextArea
                    style={{ height: 120 }}
                    
                    name="mota"
                      value={updatedData.mota}
                      onChange={handleInputChange}
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
              </Col>
              <Col span={1}></Col>
            </Row>
           <Row>
          <Col style={{ textAlign: "center", marginTop: 30 }} span={24}>
            <Button className="button-create">Hủy bỏ</Button>
            <Button className="button-create0" htmlType="submit">Cập nhật</Button>
          </Col>
        </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default UpdateS;

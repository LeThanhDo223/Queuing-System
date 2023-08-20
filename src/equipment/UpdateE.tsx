import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { updatePageData } from "../redux/EquipmentSlice";
import { RootState } from "../redux/Store";
import { tableEquipment } from "../redux/EquipmentSlice";
import {
  Breadcrumb,
  Button,
  Col,
  Form,
  Input,
  Layout,
  Row,
  Select,
} from "antd";
import { Content, Header } from "antd/es/layout/layout";
import "../css/Style.css";
import Sider from "antd/es/layout/Sider";
import MenuSider from "../component/MenuSider";
import MenuHeader from "../component/MenuHeader";
const { Option } = Select;
const UpdateE: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.equipment.data);
  const [updatedData, setUpdatedData] = useState<tableEquipment | undefined>(
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
    { title: "Thiết bị", link: "" },
    { title: "Danh sách thiết bị", link: "/equipment" },
    { title: "Cập nhật thiết bị", link: `/updateE/${id}` },
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
                      Thông tin thiết bị
                    </Col>
                  </Row>
                  <Form onFinish={handleSubmit}>
                    <Row>
                      <Col span={12}>
                        <Form.Item>
                          <p>Mã thiết bị:</p>
                          <Input
                            className="input-create"
                            name="matb"
                            value={updatedData.matb}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item>
                          <p>Loại thiết bị:</p>
                          <Select
                            placeholder="Kiosk"
                            style={{ width: "700px" }}
                            className="input-create"
                          >
                            <Option value="kiosk">Kiosk</Option>
                            <Option value="display">Display counter</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item>
                          <p>Tên thiết bị:</p>
                          <Input
                            className="input-create"
                            name="tentb"
                            value={updatedData.tentb}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item>
                          <p>Tên đăng nhập:</p>
                          <Input
                            className="input-create"
                            name="tendn"
                            value={updatedData.tendn}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={12}>
                        <Form.Item>
                          <p>Địa chỉ IP:</p>
                          <Input
                            className="input-create"
                            name="diachi"
                            value={updatedData.diachi}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item>
                          <p>Mật khẩu:</p>
                          <Input
                            className="input-create"
                            name="mk"
                            value={updatedData.mk}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={23}>
                        <Form.Item>
                          <p>Dịch vụ sử dụng:</p>
                          <Input
                            name="dichvu"
                            value={updatedData.dichvu}
                            onChange={handleInputChange}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                   
                  </Form>
                </div>
              </Col>
              <Col span={1}></Col>
            </Row>
            <Row>
                      <Col
                        style={{ textAlign: "center", marginTop: 30 }}
                        span={24}
                      >
                        <Form.Item>
                          <Button className="button-create">Hủy bỏ</Button>
                          <Button
                            className="button-create0"
                            htmlType="submit"
                            type="primary"
                          >
                            Cập nhật
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default UpdateE;

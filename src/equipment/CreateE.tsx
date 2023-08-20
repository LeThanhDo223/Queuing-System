import { Col, Input, Layout, Row, Form, Select, Button, Breadcrumb } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Content, Header } from "antd/es/layout/layout";
import "../css/Style.css";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import { tableEquipment, addPageData } from "../redux/EquipmentSlice";
import Sider from "antd/es/layout/Sider";
import MenuSider from "../component/MenuSider";
import { Link } from "react-router-dom";
import MenuHeader from "../component/MenuHeader";

const { Option } = Select;

const CreateE: React.FC = () => {
  const dispatch = useDispatch();

  const [newData, setNewData] = useState<tableEquipment>({
    id: "",
    matb: "",
    tentb: "",
    diachi: "",
    tthd: " Hoạt động",
    ttkn: " Kết nối",
    dichvu: "", 
    tendn: "",
    mk: "",
    loaitb: "",
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
        matb: "",
        tentb: "",
        diachi: "",
        tthd: " Hoạt động",
        ttkn: " Kết nối",
        dichvu: "",
        tendn: "",
        mk: "",
        loaitb: "",
      });
      window.location.reload();
    } catch (error) {
      console.error("Lỗi khi thêm dữ liệu:", error);
    }
  };
  // Add a state variable for the selected "Loại thiết bị"
  const [selectedLoaiTB, setSelectedLoaiTB] = useState<string | undefined>(undefined);

  // Function to handle the change when an option is selected
  const handleLoaiTBChange = (value: string) => {
    setSelectedLoaiTB(value);
    setNewData({ ...newData, loaitb: value }); // Update the state with the selected value
  };
  const [form] = Form.useForm();
  const breadcrumbItems = [
    { title: "Thiết bị", link: "" },
    { title: "Danh sách thiết bị", link: "/equipment" },
    { title: "Thêm thiết bị", link: `/createE` },
  ];
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
          <Col span={22}>
          <div style={{ paddingLeft: 20 }} className="col_ReadE">
          <Row>
            <Col className="text-titleRead" span={24}>
              Thông tin thiết bị
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
                <Form.Item
                  label="Mã thiết bị:"
                  name="matb"
                  rules={[
                    { required: true, message: "Vui lòng nhập mã thiết bị!" },
                  ]}
                >
                  <Input
                    placeholder="Nhập mã thiết bị"
                    className="input-create"
                    type="text"
                    value={newData.matb}
                    onChange={(e) =>
                      setNewData({ ...newData, matb: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
          <Form.Item
            label="Loại thiết bị"
            name="loaitb"
            rules={[
              { required: true, message: "Vui lòng chọn loại thiết bị!" },
            ]}
          >
            <Select
              style={{ width: "700px" }}
              placeholder="Chọn loại thiết bị"
              allowClear
              // Set the value of the Select based on the selectedLoaiTB state
              value={selectedLoaiTB}
              // Handle the change event
              onChange={handleLoaiTBChange}
            >
              {/* Add Option elements */}
              <Option value="kiosk">Kiosk</Option>
              <Option value="display">Display counter</Option>
            </Select>
          </Form.Item>
        </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item
                  label="Tên thiết bị:"
                  name="tentb"
                  rules={[
                    { required: true, message: "Vui lòng nhập tên thiết bị!" },
                  ]}
                >
                  <Input
                    placeholder="Nhập tên thiết bị"
                    className="input-create"
                    type="text"
                    value={newData.tentb}
                    onChange={(e) =>
                      setNewData({ ...newData, tentb: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Tên đăng nhập:"
                  name="tendn"
                  rules={[
                    { required: true, message: "Vui lòng nhập tên đăng nhập!" },
                  ]}
                >
                  <Input
                    placeholder="Nhập tài khoản"
                    className="input-create"
                    type="text"
                    value={newData.tendn}
                    onChange={(e) =>
                      setNewData({ ...newData, tendn: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item
                  label="Địa chỉ IP:"
                  name="diachi"
                  rules={[
                    { required: true, message: "Vui lòng nhập địa chỉ IP!" },
                  ]}
                >
                  <Input
                    placeholder="Nhập địa chỉ IP"
                    className="input-create"
                    type="text"
                    value={newData.diachi}
                    onChange={(e) =>
                      setNewData({ ...newData, diachi: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Mật khẩu:"
                  name="mk"
                  rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu!" },
                  ]}
                >
                  <Input placeholder="Nhập mật khẩu" className="input-create" 
                  type="text"
                  value={newData.mk}
                  onChange={(e) =>
                    setNewData({ ...newData, mk: e.target.value })
                  }/>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item
                  label="Dịch vụ sử dụng:"
                  name="dichvu"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập dịch vụ sử dụng!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Nhập dịch vụ sử dụng"
                    className="input-create0"
                    type="text"
                    value={newData.dichvu}
                    onChange={(e) =>
                      setNewData({ ...newData, dichvu: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
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

export default CreateE;

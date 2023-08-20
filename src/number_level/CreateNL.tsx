import React, { useState } from "react";
import { Col, Layout, Row, Select, Button, Modal, Space, Breadcrumb } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import "../css/Style.css";
import { collection, addDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { addPageData } from "../redux/NumberLevelSlice";
import { firestore } from "../firebase/firebase";
import Sider from "antd/es/layout/Sider";
import MenuSider from "../component/MenuSider";
import { Link } from "react-router-dom";
import MenuHeader from "../component/MenuHeader";

const { Option } = Select;

const CreateNL: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState(0);
  const [currentSequenceNumber, setCurrentSequenceNumber] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();

  const generateSequentialNumber = (currentNumber: number) => {
    const newNumber = (currentNumber + 1).toString().padStart(3, "0");
    return newNumber;
  };

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
  };

  const handlePrintNumber = async () => {
    const newSequenceNumber = generateSequentialNumber(currentSequenceNumber);
    const newOrderNumber = parseInt(`2001${newSequenceNumber}`);
    const newCurrentTime = new Date();

    try {
      // Include the selected service, date, and time in the newData object
      const newData = {
        id: "",
        stt: `2001${newSequenceNumber}`,
        tenkh: "Nguyễn Thị Dung",
        tendv: selectedService,
        ngay: newCurrentTime.toLocaleDateString(),
        gio: newCurrentTime.toLocaleTimeString(),
        hsd: `${expirationTime.toLocaleDateString()} ${expirationTime.toLocaleTimeString()}`,
        tt: "Đang chờ",
        nguonc: "Kiosk",
        sodt: "0948523623",
        mail: "nguyendung@gmail.com",
      };

      await addDoc(collection(firestore, "data"), newData);

      // Update state
      dispatch(addPageData(newData) as any);
      setCurrentSequenceNumber(parseInt(newSequenceNumber));
      setOrderNumber(newOrderNumber);
      setCurrentTime(newCurrentTime);

      // Show the modal
      showModal();
    } catch (error) {
      console.error("Lỗi khi thêm dữ liệu:", error);
    }
  };

  // Calculate expiration time (9 hours from current time)
  const expirationTime = new Date(currentTime);
  expirationTime.setHours(expirationTime.getHours() + 9);

  // Format date in "HH:mm DD-MM-YYYY" format
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };
  const breadcrumbItems = [
    { title: "Cấp số", link: "" },
    { title: "Danh sách cấp số", link: "/NumberLevel" },
    { title: "Cấp số mới", link: `/createNL` },
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
          <Col span={22}><div style={{ textAlign: "center" }} className="col_ReadE">
          <Row>
            <Col className="nl-titleRead" span={24}>
              CẤP SỐ MỚI
            </Col>
            <Col className="nl-textRead" span={24}>
              Dịch vụ khách hàng lựa chọn
            </Col>
            <Col span={24}>
              <Select
                className="nl-select"
                placeholder="Chọn dịch vụ"
                onChange={handleServiceChange}
              >
                <Option value="Khám tim mạch">Khám tim mạch</Option>
                <Option value="Khám sản - Phụ khoa">Khám sản - Phụ khoa</Option>
                <Option value="Khám răng hàm mặt">Khám răng hàm mặt</Option>
                <Option value="Khám tai mũi họng">Khám tai mũi họng</Option>
              </Select>
            </Col>
            <Col style={{ marginTop: 100 }} span={24}>
              <Button
                type="primary"
                onClick={handlePrintNumber}
                className="nl-button0"
              >
                In số
              </Button>
            </Col>
          </Row>
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
                <p className="text-createnl1">{orderNumber}</p>
                <p className="text-createnl2">
                  DV: {selectedService}{" "}
                  <Space className="text-createnl3">(tại quầy số 1)</Space>
                </p>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                Thời gian cấp: {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                Hạn sử dụng: {formatDate(expirationTime)}
              </Col>
            </Row>
          </Modal>
        </div></Col>
          <Col span={1}></Col>
        </Row>
      </Content>
      </Layout>
    </Layout>
  );
};

export default CreateNL;

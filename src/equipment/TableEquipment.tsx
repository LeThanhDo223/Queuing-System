import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Input, Layout, Row, Select, Table } from 'antd';
import { RootState } from "../redux/Store";
import { fetchPageE } from "../redux/EquipmentSlice";
import { SearchOutlined } from "@ant-design/icons";
import { Content } from 'antd/es/layout/layout';
const { Option } = Select;
const Checkred= () => (
    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle id="Ellipse 1" cx="4" cy="4.5" r="4" fill="#EC3740"/>
    </svg>
  );
  const Checkgreen = () => (
    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle id="Ellipse 1" cx="4" cy="4.5" r="4" fill="#34CD26"/>
</svg>

  );
  
  const columnsE = [
    {
      title: "Mã thiết bị",
      dataIndex: 'matb',
      key: 'matb',
    },
    {
      title: "Tên thiết bị",
      dataIndex: 'tentb',
      key: 'tentb',
    },
    {
      title: "Địa chỉ IP",
      dataIndex: 'diachi',
      key: 'diachi',
    },
    {
      title: 'Trạng thái hoạt động',
      dataIndex: 'tthd',
      key: 'tthd',
      render: (tt: string) => (
        <>
           <span style={{ marginRight: '4px' }}>
            {tt.length > 10 ? <Checkred /> : <Checkgreen />}
            </span>
            {tt}
        </>
      ),
    },
    {
        title: 'Trạng thái kết nối',
        dataIndex: 'ttkn',
        key: 'ttkn',
        render: (tt: string) => (
          <>
          <span style={{ marginRight: '4px' }}>
            {tt.length > 10 ? <Checkred /> : <Checkgreen />}
            </span>
            {tt}
          </>
        ),
      },
      {
        title: "Dịch vụ sử dụng",
        dataIndex: 'dichvu',
        key: 'dichvu',
      },
      {
        title: "",
        dataIndex: 'read',
        key: 'read',
      },
      {
        title: "",
        dataIndex: 'update',
        key: 'update',
      },
  ];
  


const TableEquipment: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.equipment.data);
  const loading = useSelector((state: RootState) => state.equipment.loading);
  const error = useSelector((state: RootState) => state.equipment.error);
  // filter
  const [operatingStatusFilter, setOperatingStatusFilter] = useState("Tất cả"); // State for operating status filter
  const [connectionStatusFilter, setConnectionStatusFilter] = useState("Tất cả"); // State for connection status filter
  useEffect(() => {
    dispatch(fetchPageE() as any);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
      <Content>
      <Row>
            <Col>
              <h1 className="col-titleEquipment">Danh sách thiết bị</h1>
            </Col>
          </Row>
          <Row>
            <Col className="col-text" span={6}>
              Trạng thái hoạt động
            </Col>
            <Col className="col-text" span={10}>
              Trạng thái kết nối
            </Col>
            <Col className="col-text" span={8}>
              Từ khoá
            </Col>
          </Row>
          <Row>
          <Col span={6}>
            <Select
              className="col-input1"
              value={operatingStatusFilter} // Set the value of the Select based on state
              onChange={(value) => setOperatingStatusFilter(value)} // Update state when filter changes
            >
              <Option value="Tất cả">Tất cả</Option>
              <Option value="Hoạt động">Hoạt động</Option>
              <Option value="Ngưng hoạt động">Ngưng hoạt động</Option>
            </Select>
          </Col>
          <Col span={10}>
            <Select
              className="col-input1"
              value={connectionStatusFilter}
              onChange={(value) => setConnectionStatusFilter(value)}
            >
              <Option value="Tất cả">Tất cả</Option>
              <Option value="Kết nối">Kết nối</Option>
              <Option value="Mất kết nối">Mất kết nối</Option>
            </Select>
          </Col>
            <Col  span={8}>
              <Input placeholder="Nhập từ khóa" className="col-input1" suffix={<SearchOutlined />} />
            </Col>
          </Row>
          </Content>
          <br />
          
      <Row>
      <Col span={24}>
            <Table
              className="table-E"
              columns={columnsE}
              dataSource={data
                .filter((item) =>
                  (operatingStatusFilter === "Tất cả" || item.tthd === operatingStatusFilter) &&
                  (connectionStatusFilter === "Tất cả" || item.ttkn === connectionStatusFilter)
                )
                .map((item, index) => ({
                  ...item,
                  key: index,
                }))
              }
              rowClassName={(record, index) =>
                index === 0
                  ? "custom-row-first"
                  : index % 2 === 0
                  ? "custom-row-even"
                  : "custom-row-odd"
              }
            />
          </Col>
      </Row>
    </Layout>
  );
};

export default TableEquipment;
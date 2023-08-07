import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Layout, Row, Table } from 'antd';
import { RootState } from "../redux/Store";
import { fetchPageE } from "../redux/EquipmentSlice";

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
          {tt.length > 10 ? <Checkred /> : <Checkgreen />}
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
            {tt.length > 10 ? <Checkred /> : <Checkgreen />}
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
      <Row>
        <Col span={24}>
        <Table
  className='table-E'
    columns={columnsE}
    dataSource={data.map((item, index) => ({
      ...item,
      key: index ,
    }))}
    rowClassName={(record, index) =>
      index === 0 ? 'custom-row-first' : index % 2 === 0 ? 'custom-row-even' : 'custom-row-odd'
    }
  />
        </Col>
      </Row>
    </Layout>
  );
};

export default TableEquipment;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Layout, Row, Table } from 'antd';
import { RootState } from "../redux/Store";
import { fetchPageS } from "../redux/ServiceSlice";

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
  
  const columnsS = [
    {
      title: "Mã dịch vụ",
      dataIndex: 'madv',
      key: 'madv',
    },
    {
      title: "Tên dịch vụ ",
      dataIndex: 'tendv',
      key: 'tendv',
    },
    {
      title: 'Mô tả',
      dataIndex: 'mota',
      key: 'mota',
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
  
  


const TableService: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.service.data);
  const loading = useSelector((state: RootState) => state.service.loading);
  const error = useSelector((state: RootState) => state.service.error);

  useEffect(() => {
    dispatch(fetchPageS() as any);
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
    columns={columnsS}
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

export default TableService;
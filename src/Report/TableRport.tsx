import React, { useEffect } from "react";
import { Col, Layout, Row, Table } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { fetchPageR } from "../redux/ReportSlice";


const Checkblue= () => (
  <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle id="Ellipse 1" cx="4" cy="4.5" r="4" fill="#4277FF"/>
  </svg>
  );
  const Checkblack = () => (
    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle id="Ellipse 1" cx="4" cy="4.5" r="4" fill="#7E7D88"/>
    </svg>
  );
   const Checkred = () => (
    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle id="Ellipse 1" cx="4" cy="4.5" r="4" fill="#EC3740"/>
</svg>

  );
  
  const columnsR = [
    {
      title: "Số thứ tự",
      dataIndex: 'stt',
      key: 'stt',
    },
    {
      title: "Tên dịch vụ",
      dataIndex: 'tendv',
      key: 'tendv',
    },
    {
      title: "Thời gian cấp",
      dataIndex: 'tgc',
      key: 'tgc',
    },
    {
      title: 'Tình trạng',
      dataIndex: 'tt',
      key: 'tt',
      render: (tt: string) => (
        <>
          <span style={{ marginRight: '4px' }}>
            {tt === 'Bỏ qua' ? <Checkred /> : (tt.length > 8 ? <Checkblack /> : <Checkblue />)}
          </span>
          {tt}
        </>
      ),
    },
      {
        title: "Nguồn cấp",
        dataIndex: 'nguonc',
        key: 'nguonc',
      },
     
      
  ];
  


const TableR: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.report.data);
  const loading = useSelector((state: RootState) => state.report.loading);
  const error = useSelector((state: RootState) => state.report.error);

  useEffect(() => {
    dispatch(fetchPageR() as any);
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
    columns={columnsR}
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
export default TableR;

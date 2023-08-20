import React, { useState, useEffect } from "react";
import { Button, Col, Layout, Row, Space, Table,DatePicker } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { fetchPageR, tableReport } from "../../redux/ReportSlice";
import { Content } from 'antd/es/layout/layout';
import dayjs from "dayjs"; // Import Dayjs library
import advancedFormat from "dayjs/plugin/advancedFormat"; // Import plugin for custom formatting
dayjs.extend(advancedFormat); // Extend Dayjs with the plugin
const Dowloand = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="vuesax/bold/document-download">
  <g id="document-download">
  <path id="Vector" d="M23.9166 11.888H20.545C17.78 11.888 15.5283 9.63634 15.5283 6.87134V3.49967C15.5283 2.85801 15.0033 2.33301 14.3616 2.33301H9.41496C5.82163 2.33301 2.91663 4.66634 2.91663 8.83134V19.168C2.91663 23.333 5.82163 25.6663 9.41496 25.6663H18.585C22.1783 25.6663 25.0833 23.333 25.0833 19.168V13.0547C25.0833 12.413 24.5583 11.888 23.9166 11.888ZM14.3266 18.4097L11.9933 20.743C11.9116 20.8247 11.8066 20.8947 11.7016 20.9297C11.5966 20.9763 11.4916 20.9997 11.375 20.9997C11.2583 20.9997 11.1533 20.9763 11.0483 20.9297C10.955 20.8947 10.8616 20.8247 10.7916 20.7547C10.78 20.743 10.7683 20.743 10.7683 20.7313L8.43496 18.398C8.09663 18.0597 8.09663 17.4997 8.43496 17.1613C8.77329 16.823 9.33329 16.823 9.67163 17.1613L10.5 18.013V13.1247C10.5 12.6463 10.8966 12.2497 11.375 12.2497C11.8533 12.2497 12.25 12.6463 12.25 13.1247V18.013L13.09 17.173C13.4283 16.8347 13.9883 16.8347 14.3266 17.173C14.665 17.5113 14.665 18.0713 14.3266 18.4097Z" fill="#FF7506"/>
  <path id="Vector_2" d="M20.335 10.2779C21.4434 10.2896 22.9834 10.2896 24.3017 10.2896C24.9667 10.2896 25.3167 9.50792 24.85 9.04125C23.17 7.34958 20.16 4.30458 18.4334 2.57792C17.955 2.09958 17.1267 2.42625 17.1267 3.09125V7.16292C17.1267 8.86625 18.5734 10.2779 20.335 10.2779Z" fill="#FF7506"/>
  </g>
  </g>
  </svg>
  
);  

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
      dataIndex: "ngay",
      key: "ngay",
      render: (ngay: string, record: tableReport) => (
        <div>
          <span>{record.gio} </span>
          <span>- {ngay} </span>
        </div>
      ),
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
  
const TableUL: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.report.data);
  const loading = useSelector((state: RootState) => state.report.loading);
  const error = useSelector((state: RootState) => state.report.error);
//dayjs
const [selectedFromDate, setSelectedFromDate] = useState<dayjs.Dayjs | null>(null);
  const [selectedToDate, setSelectedToDate] = useState<dayjs.Dayjs | null>(null);

  const handleFromDateChange = (date: any) => {
    setSelectedFromDate(date ? dayjs(date) : null); // Set to null if date is cleared
  };

  const handleToDateChange = (date: any) => {
    setSelectedToDate(date ? dayjs(date) : null); // Set to null if date is cleared
  };


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
        <Col span={22}>
        <Content className="content">
          <Row>
          </Row>
          <Row>
            <Col className="col-text" span={6}>
              Chọn thời gian
            </Col>
          </Row>
          <Row>
            <Col span={6}>
            <Space>
                <DatePicker
                placeholder="Từ ngày"
                value={selectedFromDate }
                onChange={handleFromDateChange}
              />
              <DatePicker
                placeholder="Đến ngày"
                value={selectedToDate}
                onChange={handleToDateChange}
              />
            </Space>
            </Col>
          </Row>
          <br />
          <Row>
        <Col span={24}>
        <Table
  className='table-E'
    columns={columnsR}
    dataSource={data.filter((item) =>
      !selectedFromDate ||
      !selectedToDate ||
      (item.ngay &&
        (dayjs(item.ngay).startOf('day').isAfter(selectedFromDate.startOf('day')) || 
        dayjs(item.ngay).startOf('day').isSame(selectedFromDate.startOf('day'))) &&
        (dayjs(item.ngay).endOf('day').isBefore(selectedToDate.endOf('day')) || 
        dayjs(item.ngay).endOf('day').isSame(selectedToDate.endOf('day')))
        
      )
      
    ).map((item, index) => ({
      ...item,
      key: index ,
    }))}
    rowClassName={(record, index) =>
      index === 0 ? 'custom-row-first' : index % 2 === 0 ? 'custom-row-even' : 'custom-row-odd'
    }
  />
        </Col>
      </Row>
          </Content>

          
         
        </Col>
        
        <Col style={{  marginTop: "20px", textAlign: "end", paddingTop:'50px'}} span={2}>
              <Button className="equipment-button">
                <Dowloand />
                <span style={{ display: "block", width:'80px' }}>Tải về</span>
              </Button>
            </Col>
      </Row>
      
    </Layout>
  );
};
export default TableUL;

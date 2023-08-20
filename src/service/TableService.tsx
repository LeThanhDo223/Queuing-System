import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Layout, Row, Select, Space, Table,DatePicker, Button } from 'antd';
import { RootState } from "../redux/Store";
import { fetchPageS, tableService } from "../redux/ServiceSlice";
import { Content } from 'antd/es/layout/layout';
import Input from "antd/es/input/Input";
import { SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs"; // Import Dayjs library
import advancedFormat from "dayjs/plugin/advancedFormat"; // Import plugin for custom formatting
import { Link } from "react-router-dom";
dayjs.extend(advancedFormat); // Extend Dayjs with the plugin
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
  const Add = () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/bold/add-square">
        <g id="add-square">
          <path
            id="Vector"
            d="M18.8884 2.33301H9.11171C4.86504 2.33301 2.33337 4.86467 2.33337 9.11134V18.8763C2.33337 23.1347 4.86504 25.6663 9.11171 25.6663H18.8767C23.1234 25.6663 25.655 23.1347 25.655 18.888V9.11134C25.6667 4.86467 23.135 2.33301 18.8884 2.33301ZM18.6667 14.8747H14.875V18.6663C14.875 19.1447 14.4784 19.5413 14 19.5413C13.5217 19.5413 13.125 19.1447 13.125 18.6663V14.8747H9.33337C8.85504 14.8747 8.45837 14.478 8.45837 13.9997C8.45837 13.5213 8.85504 13.1247 9.33337 13.1247H13.125V9.33301C13.125 8.85467 13.5217 8.45801 14 8.45801C14.4784 8.45801 14.875 8.85467 14.875 9.33301V13.1247H18.6667C19.145 13.1247 19.5417 13.5213 19.5417 13.9997C19.5417 14.478 19.145 14.8747 18.6667 14.8747Z"
            fill="#FF9138"
          />
        </g>
      </g>
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
        title: '',
        dataIndex: 'read',
        key: 'read',
        render: (_text: string, equipment: tableService) => (
          <Link to={`/readS/${equipment.id}`}>
            <Button type="link">Chi tiết</Button>
          </Link>
        ),
      },
      {
        title: '',
        dataIndex: 'update',
        key: 'update',
        render: (_text: string, record: tableService) => (
          <Link to={`/updateS/${record.id}`}>
            <Button type="link">Cập nhật</Button>
          </Link>
        ),
      }
  ];
const TableService: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.service.data);
  const loading = useSelector((state: RootState) => state.service.loading);
  const error = useSelector((state: RootState) => state.service.error);
// filter
const [operatingStatusFilter, setOperatingStatusFilter] = useState("Tất cả");
  //Search
  const [equipmentCodeSearch, setEquipmentCodeSearch] = useState("");
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
          <Col span={22}>
          <Content>
      <Row>
            <Col>
              <h1 className="col-titleEquipment">Quản lý dịch vụ</h1>
            </Col>
          </Row>
          <Row>
            <Col className="col-text" span={6}>
              Trạng thái hoạt động
            </Col>
            <Col className="col-text" span={10}>
              Chọn thời gian
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
            <Space>
              <DatePicker
                placeholder="Từ ngày"
                value={selectedFromDate}
                onChange={handleFromDateChange}
              />
              <DatePicker
                placeholder="Đến ngày"
                value={selectedToDate}
                onChange={handleToDateChange}
              />
            </Space>
          </Col>
            <Col span={8}>
             <Input
    placeholder="Nhập từ khóa"
    className="col-input1"
    suffix={<SearchOutlined />}
    value={equipmentCodeSearch}
    onChange={(e) => setEquipmentCodeSearch(e.target.value)}
  />
            </Col>
          </Row>
      </Content>
      <br />
      <Row>
        <Col span={24}>
        <Table
            className='table-E'
            columns={columnsS}
            dataSource={data
              .filter((item) =>
                (operatingStatusFilter === "Tất cả" ? true : item.tthd === operatingStatusFilter) &&
                 (item.madv.toLowerCase().includes(equipmentCodeSearch.toLowerCase()))
              )
              
              .filter((item) =>
                !selectedFromDate ||
                !selectedToDate ||
                (item.ngay &&
                  (dayjs(item.ngay).startOf('day').isAfter(selectedFromDate.startOf('day')) || 
                  dayjs(item.ngay).startOf('day').isSame(selectedFromDate.startOf('day'))) &&
                  (dayjs(item.ngay).endOf('day').isBefore(selectedToDate.endOf('day')) || 
                  dayjs(item.ngay).endOf('day').isSame(selectedToDate.endOf('day')))
                  
                )
                
              )
              .map((item, index) => ({
                ...item,
                key: index,
              }))
            }
            rowClassName={(record, index) =>
              index === 0 ? 'custom-row-first' : index % 2 === 0 ? 'custom-row-even' : 'custom-row-odd'
            }
          />

        </Col>
      </Row>
          </Col>
          <Col style={{ marginTop: "20px", textAlign: "end", paddingTop:'170px' }} span={2}>
          <Link to="/createS">
    <Button className="equipment-button">
      <Add />
      <span style={{ display: 'block' }}>Thêm dịch vụ</span>
    </Button>
  </Link>
            </Col>
        </Row>
        
    </Layout>
  );
};

export default TableService;
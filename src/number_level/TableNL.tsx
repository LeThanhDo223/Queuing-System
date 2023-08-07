import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    matb: string;
    tentb: string;
    diachi: string;
    tthd: string;
    ttkn: string;
    dichvu: string;
    read: string;
    update: string;
}
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
  


const TableNL: React.FC = () => (
  <Table
  className='table-E'
    columns={columnsE}
    rowClassName={(record, index) =>
      index === 0 ? 'custom-row-first' : index % 2 === 0 ? 'custom-row-even' : 'custom-row-odd'
    }
  />
);
export default TableNL;

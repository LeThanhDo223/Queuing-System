import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    madv: string;
    tendv: string;
    mota: string;
    tthd: string;
    read: string;
    update: string;
}

//svg
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
  
  const columns: ColumnsType<DataType> = [
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
            {tt.length > 10 ? <Checkred /> : <Checkgreen />}
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
  

const data: DataType[] = [
  {
    madv: '1',
    tendv: 'John Brown',
    mota: '32',
    tthd: ' New York',
    read:'read',
    update: 'update',
  },
  {
    madv: '2',
    tendv: 'Jim Green',
    mota: '42',
    tthd: ' London No. 1 Lake Park',
    read:'read',
    update: 'update',
  },
  {
    madv: '3',
    tendv: 'Joe Black',
    mota: '32',
    tthd: ' Sydney No. 1 Lake Park',
    read:'read',
    update: 'update',
  },
  {
    madv: '4',
    tendv: 'Joe Black',
    mota: '32',
    tthd: ' Sydney',
    read:'read',
    update: 'update',
  },
];

const TableService: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    rowClassName={(record, index) =>
      index === 0 ? 'custom-row-first' : index % 2 === 0 ? 'custom-row-even' : 'custom-row-odd'
    }
  />
);
export default TableService;

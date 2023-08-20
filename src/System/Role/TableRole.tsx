import React, {  useEffect } from "react";
import { Button, Col, Layout, Row, Table, Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { Content } from 'antd/es/layout/layout';
import { fetchPageRM } from "../../redux/System/RoleSlice";
import { SearchOutlined } from "@ant-design/icons";

const Add= () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="vuesax/bold/add-square">
<g id="add-square">
<path id="Vector" d="M18.8884 2.33301H9.11171C4.86504 2.33301 2.33337 4.86467 2.33337 9.11134V18.8763C2.33337 23.1347 4.86504 25.6663 9.11171 25.6663H18.8767C23.1234 25.6663 25.655 23.1347 25.655 18.888V9.11134C25.6667 4.86467 23.135 2.33301 18.8884 2.33301ZM18.6667 14.8747H14.875V18.6663C14.875 19.1447 14.4784 19.5413 14 19.5413C13.5217 19.5413 13.125 19.1447 13.125 18.6663V14.8747H9.33337C8.85504 14.8747 8.45837 14.478 8.45837 13.9997C8.45837 13.5213 8.85504 13.1247 9.33337 13.1247H13.125V9.33301C13.125 8.85467 13.5217 8.45801 14 8.45801C14.4784 8.45801 14.875 8.85467 14.875 9.33301V13.1247H18.6667C19.145 13.1247 19.5417 13.5213 19.5417 13.9997C19.5417 14.478 19.145 14.8747 18.6667 14.8747Z" fill="#FF9138"/>
</g>
</g>
</svg>
); 



  
  const columnsR = [
    {
      title: "Tên vai trò",
      dataIndex: 'tenvt',
      key: 'tenvt',
    },
    {
      title: "Số người dùng",
      dataIndex: 'sond',
      key: 'sond',
    },
      {
        title: "Mô tả",
        dataIndex: 'mota',
        key: 'mota',
      },
     
      
  ];
  
const TableRole: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.role.data);
  const loading = useSelector((state: RootState) => state.role.loading);
  const error = useSelector((state: RootState) => state.role.error);



  useEffect(() => {
    dispatch(fetchPageRM() as any);
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
        <Col>
              <h1 className="col-titleEquipment">Danh sách vai trò</h1>
            </Col>
          <Row>
          </Row>
          <Row>
            <Col style={{textAlign:'end', marginLeft:'-290px'}} className="col-text" span={24}>
            Từ khoá
            </Col>
          </Row>
          <Row>
            <Col style={{textAlign:'end'}} span={24}>
            <Input 
    placeholder="Nhập từ khóa"
    className="col-input1"
    suffix={<SearchOutlined />}
   
  />
            </Col>
          </Row>
          <br />
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
          </Content>

          
         
        </Col>
        
        <Col style={{  marginTop: "20px", textAlign: "end", paddingTop:'150px'}} span={2}>
              <Button className="equipment-button">
                <Add />
                <span style={{ display: "block", width:'80px' }}>Thêm <br /> vai trò</span>
              </Button>
            </Col>
      </Row>
      
    </Layout>
  );
};
export default TableRole;

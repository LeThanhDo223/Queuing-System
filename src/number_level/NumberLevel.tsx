import { Button, Col, Input, Layout, Row, Select,Space,DatePicker, Breadcrumb } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import MenuSider from "../component/MenuSider";
import { Content, Header } from "antd/es/layout/layout";
import "../css/Style.css";
import MenuHeader from "../component/MenuHeader";
import TableEquipment from "./TableNL";
import { Link } from "react-router-dom";
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
const NumberLevel: React.FC = () => {
  const breadcrumbItems = [
    { title: "Cấp số", link: "" },
    { title: "Danh sách cấp số", link: "/NumberLevel" },
  ];
  return (
    <Layout>
      <Sider>
        <MenuSider />
      </Sider>
      <Layout>
        <Header style={{ background: "none", marginTop:'10px' }}>
          <Row>
            <Col span={19}>
            <Breadcrumb  className="text-t1">
            {breadcrumbItems.map((item, index) => (
              <Breadcrumb.Item key={index}>
                <Link to={item.link}>{item.title}</Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
            </Col>
            <Col span={5}>
              <MenuHeader/>
            </Col>
          </Row>
          
        </Header>
        <Content className="content">
         
          <Row>
            <Col style={{ marginTop: "20px" }} span={24}>
              <TableEquipment />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default NumberLevel;

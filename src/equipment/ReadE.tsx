import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPageE, tableEquipment } from "../redux/EquipmentSlice";
import { Col, Layout, Row, Breadcrumb, Button } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import MenuSider from "../component/MenuSider";
import MenuHeader from "../component/MenuHeader";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
const Edit = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Edit Square">
      <path
        id="Edit Square_2"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.443 0.552097C19.1213 0.447205 20.7762 1.02994 22.0233 2.17209C23.1655 3.41913 23.7482 5.07409 23.655 6.764V17.6494C23.7599 19.3393 23.1655 20.9943 22.035 22.2413C20.7879 23.3835 19.1213 23.9662 17.443 23.8613H6.55751C4.86758 23.9662 3.21261 23.3835 1.96556 22.2413C0.823397 20.9943 0.240662 19.3393 0.345554 17.6494V6.764C0.240662 5.07409 0.823397 3.41913 1.96556 2.17209C3.21261 1.02994 4.86758 0.447205 6.55751 0.552097H17.443ZM10.8115 17.8592L18.6551 9.99233C19.366 9.26974 19.366 8.10428 18.6551 7.39335L17.14 5.87825C16.4174 5.15567 15.2519 5.15567 14.5293 5.87825L13.7485 6.67077C13.6319 6.78731 13.6319 6.98544 13.7485 7.10199C13.7485 7.10199 15.6016 8.94341 15.6365 8.99003C15.7647 9.12989 15.8463 9.31636 15.8463 9.52614C15.8463 9.94571 15.5083 10.2953 15.0771 10.2953C14.879 10.2953 14.6925 10.2138 14.5643 10.0856L12.618 8.1509C12.5247 8.05766 12.3616 8.05766 12.2683 8.1509L6.70902 13.7101C6.32442 14.0948 6.10298 14.6076 6.09132 15.1553L6.02139 17.9175C6.02139 18.069 6.06801 18.2088 6.17291 18.3137C6.2778 18.4186 6.41765 18.4769 6.56917 18.4769H9.30802C9.86745 18.4769 10.4036 18.2554 10.8115 17.8592Z"
        fill="#FF7506"
      />
    </g>
  </svg>
);
const ReadE: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const dispatch = useDispatch();
  const equipment = useSelector(
    (state: { equipment: { data: tableEquipment[] } }) =>
      state.equipment.data.find((item) => item.id === id)
  );

  useEffect(() => {
    dispatch(fetchPageE() as any); // Sử dụng action creator fetchPageE
  }, [dispatch]);

  const breadcrumbItems = [
    { title: "Thiết bị", link: "" },
    { title: "Danh sách thiết bị", link: "/equipment" },
    { title: "Chi tiết thiết bị", link: `/readE/${id}` },
  ];

  return (
    <Layout>
      <Sider>
        <MenuSider />
      </Sider>
      <Layout>
        <Header style={{ background: "none" }}>
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
              <MenuHeader />
            </Col>
          </Row>
        </Header>
        <Content>
          <h1 className="col-titleReadE">Quản lý thiết bị</h1>

          <Row>
            <Col span={1}></Col>
            <Col className="col_ReadE" span={20}>
              <Row>
                <Col className="text-titleRead" span={24}>
                  Thông tin thiết bị
                </Col>
              </Row>
              <Row>
                <Col className="text-read" span={2}>
                  Mã thiết bị:
                </Col>
                <Col className="text-read1" span={10}>
                  {equipment?.matb}
                </Col>
                <Col className="text-read" span={2}>
                  Loại thiết bị:
                </Col>
                <Col className="text-read1" span={10}>
                  {equipment?.loaitb}
                </Col>
              </Row>
              <Row>
                <Col className="text-read" span={2}>
                  Tên thiết bị:
                </Col>
                <Col className="text-read1" span={10}>
                  {equipment?.tentb}
                </Col>
                <Col className="text-read" span={2}>
                  Tên đăng nhập:
                </Col>
                <Col className="text-read1" span={10}>
                  {equipment?.tendn}
                </Col>
              </Row>
              <Row>
                <Col className="text-read" span={2}>
                  Địa chỉ IP:
                </Col>
                <Col className="text-read1" span={10}>
                  {equipment?.diachi}
                </Col>
                <Col className="text-read" span={2}>
                  Mật khẩu:
                </Col>
                <Col className="text-read1" span={10}>
                  {equipment?.mk}
                </Col>
              </Row>
              <Row>
                <Col className="text-read" span={24}>
                  Dịch vụ sử dụng:
                </Col>
                <Col className="text-read1" span={24}>
                  {equipment?.dichvu}
                </Col>
              </Row>
            </Col>
            <Col style={{ textAlign: "end" }} span={3}>
            <Link to={`/updateE/${id}`}>
            <Button className="equipment-button">
              <Edit />
              <span style={{ display: "block" }}>Cập nhật</span>
            </Button>
          </Link>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ReadE;

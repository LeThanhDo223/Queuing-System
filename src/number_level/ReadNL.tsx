import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPageNL, tableNumberLevel } from "../redux/NumberLevelSlice";
import { Breadcrumb, Col, Layout, Row } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import MenuSider from "../component/MenuSider";
import MenuHeader from "../component/MenuHeader";

const ReadNL: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id)
  const dispatch = useDispatch();
  const numberlevel = useSelector((state: { numberlevel: { data: tableNumberLevel[] } }) =>
    state.numberlevel.data.find((item) => item.id === id)
  );

  useEffect(() => {
    dispatch(fetchPageNL()as any); // Sử dụng action creator fetchPageE
  }, [dispatch]);


  const breadcrumbItems = [
    { title: "Thiết bị", link: "" },
    { title: "Danh sách cấp số", link: "/NumberLevel" },
    { title: "Chi tiết", link: `/readNL/${id}` },
  ];
  return (
    <> <Layout >
      <Sider>
          <MenuSider />
        </Sider>
        <Layout>
        <Header style={{ background: "none" }}>
            <Row>
              <Col span={19}>
                <Breadcrumb className="text-t1">
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
    <Content >
    <h1 className="col-titleReadE">Quản lý thiết bị</h1>
      <Row>
        <Col span={1}></Col>
        <Col span={22}>
        <div className="col_ReadE">
        <Row>
      <Col className="text-titleRead" span={24}>
        Thông tin cấp số
      </Col>
      </Row>
      <Row>
        <Col className="text-read" span={2}>
        Họ tên:
        </Col>
        <Col className="text-read1" span={10}>
        {numberlevel?.tenkh}
        </Col>
        <Col className="text-read" span={2}>
        Nguồn cấp:
        </Col>
        <Col className="text-read1" span={10}>
          {numberlevel?.nguonc}
        </Col>
      </Row>
      <Row>
        <Col className="text-read" span={2}>
        Tên dịch vụ:
        </Col>
        <Col className="text-read1" span={10}>
        {numberlevel?.tendv}
        </Col>
        <Col className="text-read" span={2}>
        Trạng thái:
        </Col>
        <Col className="text-read1" span={10}>
          {numberlevel?.tt}
        </Col>
      </Row>
      <Row>
        <Col className="text-read" span={2}>
        Số thứ tự:
        </Col>
        <Col className="text-read1" span={10}>
        {numberlevel?.stt}
        </Col>
        <Col className="text-read" span={2}>
        Số điện thoại:
        </Col>
        <Col className="text-read1" span={10}>
          {numberlevel?.sodt}
        </Col>
      </Row>
      <Row>
        <Col className="text-read" span={2}>
        Thời gian cấp:
        </Col>
        <Col className="text-read1" span={10}>
        {numberlevel?.gio} - {numberlevel?.ngay}
        </Col>
        <Col className="text-read" span={2}>
        Địa chỉ Email:
        </Col>
        <Col className="text-read1" span={10}>
          {numberlevel?.mail}
        </Col>
      </Row>
      <Row>
        <Col className="text-read" span={2}>
        Hạn sử dụng:
        </Col>
        <Col className="text-read1" span={10}>
        {numberlevel?.hsd}
        </Col>
      </Row>
      </div>
        </Col>
        <Col span={1}></Col>
      </Row>
    </Content>
  </Layout>
  </Layout>
   
    </>
  );
};

export default ReadNL;

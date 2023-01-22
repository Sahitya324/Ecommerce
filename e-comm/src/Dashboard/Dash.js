import React from "react";
import Chart from "../Components/Chart/chart";
import { Col, Layout, Menu, Row, Card, Tooltip, Carousel } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { subMenu } = Menu;

const contentStyle = {
  // width: '80%',
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Dash() {
  return (
    <>
      <Content
        style={{
          // margin: '0 16px',
          width: "100wh",
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            // minHeight: 360,
          }}
        >
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={6}>
                <Card hoverable bordered={false} style={{ height: "180px" }}>
                  <h1>
                    Card Details
                    <Tooltip title={"Info"}>
                      <InfoCircleOutlined
                        style={{ float: "right", marginTop: "6px" }}
                      />
                    </Tooltip>
                  </h1>
                  Information
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  title="Card Details"
                  bordered={false}
                  style={{ height: "180px" }}
                >
                  Card Details
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  title="Card Details"
                  bordered={false}
                  style={{ height: "180px" }}
                >
                  Card Details
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  title="Card Details"
                  bordered={false}
                  style={{ height: "180px" }}
                >
                  Card Details
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 260,
          }}
        >
          <Card>
            <Carousel autoplay className="carousel">
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </Card>
        </div>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 260,
          }}
        >
          <Card
            style={{
              display: "flex",
              padding: 24,
              // width: '100%',
              minHeight: 380,
            }}
          >
            <h1>Main Content</h1>
            <div style={{ display: "flex", height: "300px" }}>
              <Chart />
            </div>
          </Card>
        </div>
      </Content>
    </>
  );
}

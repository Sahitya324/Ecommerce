import React, { useRef } from "react";
import Chart from "../Components/Chart/chart";
import {
  Col,
  Layout,
  Menu,
  Row,
  Card,
  Tooltip,
  Carousel,
  Image,
  Button,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { subMenu } = Menu;

const contentStyle = {
  // width: '80%',
  height: "260px",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  lineHeight: "260px",
  textAlign: "center",
  background: "#364d79",
};

export default function Dash() {
  const ref = useRef();

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
                  style={{ height: "280px" }}
                >
                  Card Details
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  title="Card Details"
                  bordered={false}
                  style={{ height: "280px" }}
                >
                  <div
                  style={{
                    display: "flex",
                    height: "100%",
                    flexDirection: "row"
                  }}
                  >
                    <img
                      width={"full"}
                      height={"175px"}
                      alt="image0"
                      src="/assets/image_0.png"
                    />
                    <div>
                    <h1>Apple Pod</h1>
                    <h2>Price</h2>
                    <p>Details</p>
                    <Button>Buy</Button>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div
          // className="site-layout-background"
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 24,
            minHeight: 260,
            justifyContent: "center",
            alignItems: "center",
            // width: "100%"
          }}
        >
          <Button
            onClick={() => {
              ref.current.prev();
            }}
          >
            Prev
          </Button>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              height: "100%",
            }}
          >
            <Carousel ref={ref} autoplay={false} className="carousel">
              <div>
                {/* <h3 style={contentStyle}>1</h3> */}
                <Image src="/assets/image_9.png" />
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
          </div>
          <Button
            onClick={() => {
              ref.current.next();
            }}
          >
            Next
          </Button>
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

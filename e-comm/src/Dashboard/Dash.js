import React, { useRef } from "react";
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
import { InfoCircleOutlined, 
  RightOutlined, LeftOutlined, ShoppingCartOutlined
 } from "@ant-design/icons";
import Header from "../Layout/Header/Headers";
import Sidebar from "../Layout/Sidebar/Sidebar";

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
      <Header />
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sidebar />
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
                  <Card hoverable title={"Card Details"} bordered={false} style={{ height: "280px" }}>
                    {/* <h1>
                      Card Details
                      <Tooltip title={"Info"}>
                        <InfoCircleOutlined
                          style={{ float: "right", marginTop: "6px" }}
                        />
                      </Tooltip>
                    </h1> */}
                    <div
                      style={{
                        display: "flex",
                        height: "100%",
                        flexDirection: "row",
                      }}
                    >
                      <img
                        width={"full"}
                        height={"175px"}
                        alt="image0"
                        src="/assets/image_1.png"
                      />
                      <div>
                        <h1>Apple Watch 4</h1>
                        <h2>Price</h2>
                        <p>Details</p>
                        <Button>Buy</Button>
                      </div>
                    </div>
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
                        flexDirection: "row",
                      }}
                    >
                      <img
                        width={"full"}
                        height={"175px"}
                        alt="image0"
                        src="/assets/image_3.png"
                      />
                      <div>
                        <h1>Apple Airpods Pro</h1>
                        <h2>Price</h2>
                        <p>Details</p>
                        <Button>Buy</Button>
                      </div>
                    </div>
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
                        flexDirection: "row",
                      }}
                    >
                      <img
                        width={"full"}
                        height={"175px"}
                        alt="image0"
                        src="/assets/image_2.png"
                      />
                      <div>
                        <h1>Robot-tozalagich</h1>
                        <h2>Price</h2>
                        <p>Details</p>
                        <Button
                        style={{
                          color: "#FFFFFF",
                          borderRadius: "6px",
                          background: "#0D63F3",
                          fontWeight: 500,
                        }}
                        >Buy</Button>
                        <ShoppingCartOutlined />
                      </div>
                    </div>
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
                        flexDirection: "row",
                      }}
                    >
                      <img
                        width={"full"}
                        height={"175px"}
                        alt="image0"
                        src="/assets/image_0.png"
                      />
                      <div>
                        <h1>Apple Macbook Pro</h1>
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
            style={{
              borderRadius: "100px",
              height: "54px",
              width: "54px",
              marginRight: "20px",
              color: "#FFFFFF",
              fontFamily: 600,
              fontSize: "20px",
              alignItems: "center",
              background: "linear-gradient(270deg, rgba(77, 94, 246, 0.2) 0%, rgba(246, 77, 77, 0.2) 100%)",
            }}
              onClick={() => {
                ref.current.prev();
              }}
            >
              <LeftOutlined/>
            </Button>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "85%",
                height: "100%",
                borderRadius: "20px"
              }}
            >
              <Carousel ref={ref} autoplay={false} className="carousel" style={{ borderRadius: "20px" }}>
                <div>
                  {/* <h3 style={contentStyle}>1</h3> */}
                  <Image style={{ borderRadius: "20px" }} src="/assets/image_9.png" />
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
            style={{
              borderRadius: "100px",
              height: "54px",
              width: "54px",
              color: "#FFFFFF",
              fontFamily: 600,
              fontSize: "20px",
              alignItems: "center",
              marginLeft: "20px",
              background: "linear-gradient(270deg, #4D5EF6 0%, #F64D4D 100%)",
            }}
              onClick={() => {
                ref.current.next();
              }}
            >
              <RightOutlined />
            </Button>
          </div>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 260,
            }}
          >
          </div>
        </Content>
      </Layout>
    </>
  );
}

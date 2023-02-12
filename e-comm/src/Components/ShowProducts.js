import React, { useEffect, useRef, useState } from "react";
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
import {
  InfoCircleOutlined,
  RightOutlined,
  LeftOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Header from "../Layout/Header/Headers";
import Sidebar from "../Layout/Sidebar/Sidebar";
import { useUser } from "../Context/userContext";

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

const ShowProduct = () => {
  const ref = useRef();
  const [data, setData] = useState();

  const getProduct = async () => {
    let result = await fetch("http://localhost:5000/products", {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem('user')).auth}`,
      },
    });
    result = await result.json();
    setData(result);

  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(data)

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
              <Row gutter={16} style={{gap: "20px"}}>
                {/* <Col span={6}> */}
                  {data?.map((product, index) => (
                    <Card
                      key={product._id}
                      hoverable
                      title={"Card Details"}
                      bordered={false}
                      style={{ height: "280px" }}
                    >
                      {/* <h1>
                      Card Details
                      <Tooltip title={"Info"}>
                        <InfoCircleOutlined
                          style={{ float: "right", marginTop: "6px" }}
                        />
                      </Tooltip>
                    </h1> */}
                      <div
                        // key={product._id}
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
                          src={product?.store}
                        />
                        <div>
                          <h1>{product.name}</h1>
                          <h2>{product.price}</h2>
                          <p>{product.detail}</p>
                          <Button>Buy</Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                {/* </Col> */}
              </Row>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default ShowProduct;

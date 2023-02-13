import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    Col,
    Layout,
    Menu,
    Row,
    Card,
    Tooltip,
    Image,
    Button,
} from "antd";
import Header from "../Layout/Header/Headers";
import Sidebar from "../Layout/Sidebar/Sidebar";
import axios from "axios";

const { Content } = Layout;

const ProductDetails = () => {
  const productId = useParams();
  const [productData, setProductData] = useState();

  const navigate = useNavigate();


  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/product/${productId.id}`, {
      headers: {
        authorization: `bearer ${
          JSON.parse(localStorage.getItem("user")).auth
        }`,
      },
    });
    result = await result.json();
    setProductData(result);
  };

//   const deleteProduct = async () => {
//     let result = await fetch(`http://localhost:5000/product/${productId.id}`, {
//         headers: {
//             method:"delete",
//             authorization: `bearer ${
//                 JSON.parse(localStorage.getItem("user")).auth
//             }`,
//         }
//     });
//     result = await result.json();
//     if(result){
//         navigate("/showProduct")
//     }
//   }

  const deleteProduct = async () => {
    await axios.delete(`http://localhost:5000/product/${productId.id}`, {
        headers: {
            method:"delete",
            authorization: `bearer ${
                JSON.parse(localStorage.getItem("user")).auth
            }`,
        }
    })
    .then((resp) => {
        console.log(resp);
    })
    // result = await result.json();
    // if(result){
    //     navigate("/showProduct")
    // }
  }

  useEffect(() => {
    getProductDetails();
  }, []);

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
              <Row gutter={16} style={{ gap: "20px" }}>
                {/* <Col span={6}> */}
                    <Card
                      key={productData?._id}
                      hoverable
                      title={"Card Details"}
                      bordered={false}
                      style={{ minHeight: "580px" }}
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
                        // key={productData?._id}
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
                          src={productData?.store}
                        />
                        <div>
                          <h1>{productData?.name}</h1>
                          <h2>{productData?.price}</h2>
                          <p>{productData?.detail}</p>
                          <Button>Buy</Button>
                          <Button onClick={deleteProduct}>Delete</Button>
                          <Link to={`/updateProduct/${productData?._id}`}>
                          <Button>Update Product</Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                {/* </Col> */}
              </Row>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default ProductDetails;

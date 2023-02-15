import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Col,
  Layout,
  Menu,
  Row,
  Card,
  Tooltip,
  Input,
  Image,
  Button,
} from "antd";
import Header from "../Layout/Header/Headers";
import Sidebar from "../Layout/Sidebar/Sidebar";
import axios from "axios";
import { useUser } from "../Context/userContext";

const { Content } = Layout;

const ProductDetails = () => {
  const productId = useParams();
  const [productData, setProductData] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [store, setStore] = useState("");

  const [ cart, setCart ] = useState([]);

  const navigate = useNavigate();

  const { user } = useUser();

  const cartId = productId?.id;
  const userId = user?.user._id;

  const getProductDetails = async () => {
    await axios
      .get(`http://localhost:5000/product/${productId?.id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${
            JSON.parse(localStorage.getItem("user")).auth
          }`,
        },
      })
      .then((resp) => {
        // console.log(resp);
        setName(resp?.data.name);
        setStore(resp?.data.store);
        setPrice(resp?.data.price);
        setDetail(resp?.data.detail);
        setCategory(resp?.data.category);
        setCompany(resp?.data.company);
        setProductData(resp?.data);
      });
  };

  const deleteProduct = async () => {
    await axios
      .delete(`http://localhost:5000/product/${productId.id}`, {
        headers: {
          method: "delete",
          authorization: `bearer ${
            JSON.parse(localStorage.getItem("user")).auth
          }`,
        },
      })
      .then((resp) => {
        navigate("/showProduct");
      });
  };

  const addCart = async () => {
    let result = await fetch("http://localhost:5000/addCart", {
      method: "post",
      body: JSON.stringify({
        name,
        store,
        price,
        detail,
        category,
        userId,
        company,
        cartId,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${
          JSON.parse(localStorage.getItem("user")).auth
        }`,
      },
    });
    result = await result.json();
  };

  const getCart = async () => {
    let result = await fetch(`http://localhost:5000/cart`, {
      headers: {
        authorization: `bearer ${
          JSON.parse(localStorage.getItem("user")).auth
        }`,
      },
    });
    result = await result.json();
    const filterCart = result?.filter((cartProductId) => {
      if(cartProductId?.cartId === cartId){
        return true;
      }
      return false;
    })
    console.log(filterCart);
    setCart(filterCart);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  useEffect(() => {
    getCart();
  }, [cart]);

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
              {/* <Row gutter={16} style={{ gap: "20px" }}> */}
              {/* <Col span={6}> */}
              <Card
                key={productData?._id}
                hoverable
                // title={"Card Details"}
                bordered={false}
                style={{
                  minHeight: "580px",
                  background: "#bed4ff ",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "20px",
                }}
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
                    // alignItems: "center"
                  }}
                >
                  <img
                    width={"full"}
                    height={"240px"}
                    alt="image0"
                    src={productData?.store}
                    style={{
                      marginTop: "20px",
                      marginRight: "60px",
                      borderRadius: "20px",
                    }}
                  />
                  <div>
                    <h1 style={{ fontSize: "28px", fontWeight: 600 }}>
                      {productData?.name}
                    </h1>
                    <h2
                      style={{ marginTop: "24px" }}
                    >{`Rs. ${productData?.price}`}</h2>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        marginTop: "24px",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {productData?.detail}
                    </p>
                    {user?.user?._id !== productData?.userId && (
                      <Button
                        type="primary"
                        style={{
                          height: "40px",
                          borderRadius: "6px",
                          width: "144px",
                          marginTop: 0,
                          background: "#E1E1E5",
                          color: "#000000",
                          border: "1px solid #F6F8FA",
                          fontSize: "18px",
                          fontWeight: 600,
                        }}
                      >
                        Buy
                      </Button>
                    )}
                    {user?.user?._id === productData?.userId && (
                      <>
                        <Link to={`/updateProduct/${productData?._id}`}>
                          <Button
                            type="primary"
                            style={{
                              height: "40px",
                              borderRadius: "6px",
                              width: "184px",
                              marginTop: 0,
                              marginLeft: "20px",
                              fontSize: "18px",
                              fontWeight: 600,
                            }}
                          >
                            Update Product
                          </Button>
                        </Link>
                        <Button
                          type="primary"
                          style={{
                            height: "40px",
                            borderRadius: "6px",
                            width: "184px",
                            marginTop: 0,
                            marginLeft: "20px",
                            fontSize: "18px",
                            fontWeight: 600,
                          }}
                          onClick={deleteProduct}
                        >
                          Remove
                        </Button>
                        <Button
                          type="primary"
                          style={{
                            height: "40px",
                            borderRadius: "6px",
                            width: "184px",
                            marginTop: 0,
                            marginLeft: "20px",
                            fontSize: "18px",
                            fontWeight: 600,
                          }}
                          disabled={cart?.length !== 0 ? true : false}
                          onClick={addCart}
                        >
                          Add to Cart
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </Card>
              {/* </Col> */}
              {/* </Row> */}
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default ProductDetails;

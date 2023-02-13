import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Layout/Header/Headers";
import Sidebar from "../Layout/Sidebar/Sidebar";
import { Layout } from "antd";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import { useUser } from "../Context/userContext";
import axios from "axios";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [store, setStore] = useState("");
  const navigate = useNavigate();

  const productId = useParams();

  const { user } = useUser();

  const userId = user?.user._id;

  const uploadFile = (content) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + content.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, content);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setStore(downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    file && uploadFile(file);
  }, [file]);

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
        console.log(resp);
        setName(resp?.data.name);
        setStore(resp?.data.store);
        setPrice(resp?.data.price);
        setDetail(resp?.data.detail);
        setCategory(resp?.data.category);
        setCompany(resp?.data.company);
      });
  };

  const formData = {
    name,
    store,
    price,
    detail,
    category,
    userId,
    company,
  };

  const handleUpdateProduct = async () => {
    await axios
      .put(`http://localhost:5000/product/${productId?.id}`, formData, {
        // body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${
            JSON.parse(localStorage.getItem("user")).auth
          }`,
        },
      })
      .then((resp) => {
        console.log(resp);
        navigate("/showProduct");
      });
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  console.log(productId);

  return (
    <>
      <Header />
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sidebar />
        <div className="login">
          <h1>Add Product</h1>
          <input
            type={"text"}
            value={name}
            className="inputBox"
            placeholder="enter name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            // style={{ display: "none" }}
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type={"text"}
            value={price}
            className="inputBox"
            placeholder="enter price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type={"text"}
            value={detail}
            className="inputBox"
            placeholder="enter detail"
            onChange={(e) => setDetail(e.target.value)}
          />
          <input
            type={"text"}
            value={category}
            className="inputBox"
            placeholder="enter category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type={"text"}
            value={company}
            className="inputBox"
            placeholder="enter company"
            onChange={(e) => setCompany(e.target.value)}
          />
          <button className="appButton" onClick={handleUpdateProduct}>
            Update Product
          </button>
        </div>
      </Layout>
    </>
  );
};

export default UpdateProduct;

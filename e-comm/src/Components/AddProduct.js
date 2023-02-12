import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [detail, setDetail] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [store, setStore] = useState("");

  const navigate = useNavigate();

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

  const handleAddProduct = async () => {
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, detail, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    // if (result) {
    //   localStorage.setItem("user", JSON.stringify(result));
    //   navigate("/");
    // } else {
    //   alert("Please enter correct details");
    // }
  };

  console.log(store);


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
            className="inputBox"
            placeholder="enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
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
            className="inputBox"
            placeholder="enter price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <input
            type={"text"}
            className="inputBox"
            placeholder="enter detail"
            onChange={(e) => setDetail(e.target.value)}
            value={detail}
          />
          <input
            type={"text"}
            className="inputBox"
            placeholder="enter category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          <input
            type={"text"}
            className="inputBox"
            placeholder="enter company"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
          <button className="appButton" onClick={() => handleAddProduct()}>
            Add Product
          </button>
        </div>
      </Layout>
    </>
  );
};

export default AddProduct;

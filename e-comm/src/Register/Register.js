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
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const desc = useRef();
  const [file, setFile] = useState(null);
  const [store, setStore] = useState("");

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const newPost = {
  //     userId: user._id,
  //     desc: desc.current.value,
  //     img: store,
  //   };
  //   try {
  //     await axios.post("/posts", newPost);
  //     window.location.reload();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

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

  const handleRegister = async () => {
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, store, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please enter correct details");
    }
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
        <div className="register">
          <h1>Register</h1>
          <div>
          <input
            // style={{ display: "none" }}
            type="file"
            id="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          </div>
          <input
            type={"text"}
            className="inputBox"
            placeholder="enter name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type={"text"}
            className="inputBox"
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type={"password"}
            className="inputBox"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="appButton" onClick={() => handleRegister()}>
            Register
          </button>
        </div>
      </Layout>
    </>
  );
};

export default Register;

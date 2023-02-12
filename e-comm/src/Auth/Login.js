import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Sidebar from "./Layout/Sidebar/Sidebar";
// import Header from "./Layout/Header/Headers";
import Header from "../Layout/Header/Headers";
import Sidebar from "../Layout/Sidebar/Sidebar";
import { useUser } from "../Context/userContext";
import { Layout } from "antd";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { saveUser } = useUser();

  const navigate = useNavigate();

  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result)
    saveUser(result);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please enter correct details");
    }
  };

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
        <h1>Login</h1>
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
      <button className="appButton" onClick={() => handleLogin()}>
        Login
      </button>
    </div>
    </Layout>
    </>
  );
};

export default Login;

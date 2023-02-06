import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.name) {
      localStorage.set("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please enter correct details");
    }
  };

  return (
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
  );
};

export default Login;

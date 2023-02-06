import React from "react";
import Dash from "./Dashboard/Dash";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Header from "./Layout/Header/Headers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateComponent from "./PrivateComponent";
import Login from "./Auth/Login";
import Register from "./Register/Register";
import "./App.css";

import { Layout } from "antd";

function App() {
  return (
    <Layout className="site-layout">
      <BrowserRouter>
        {/* <Header />
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Sidebar /> */}
          <Routes>
            <Route element={<PrivateComponent />}>
              <Route path="/" element={<Dash />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
        </Footer> */}
        {/* </Layout> */}
      </BrowserRouter>
    </Layout>
  );
}

export default App;

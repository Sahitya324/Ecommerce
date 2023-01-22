import React from "react";
import Dash from "./Dashboard/Dash";
import Sidebar from "./Layout/Sidebar/Sidebar";
import Header from "./Layout/Header/Headers";
import "./App.css";

import { Layout } from "antd";

function App() {
  return (
    <Layout className="site-layout">
      <Header />
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sidebar />
        <Dash />
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
        </Footer> */}
      </Layout>
    </Layout>
  );
}

export default App;

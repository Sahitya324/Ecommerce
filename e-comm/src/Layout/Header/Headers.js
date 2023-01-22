import React, { useState } from "react";
import "./Headers.css";
import { Layout, Menu, Dropdown, Space, Input, Image } from "antd";
import {
  UserOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  CloseOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { subMenu } = Menu;

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Profile
          </a>
        ),
        icon: <UserOutlined />,
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            Setting
          </a>
        ),
        icon: <SettingOutlined />,
        // disabled: true,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            Logout
          </a>
        ),
        icon: <LogoutOutlined />,
      },
    ]}
  />
);

function Headers() {
  const [hideFilter, setHideFilter] = useState(false);
  const [showFilter, SetShowFilter] = useState(true);

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        height: "48px",
        lineHeight: "48px",
      }}
    >
      <div
        className="ant-pro-global-header ant-pro-global-header-layout-mix"
        style={{ display: "flex", height: "100%", alignItems: "center" }}
      >
        <div
          className="ant-pro-global-header-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <a
            style={{
              display: "flex",
              height: "100%",
              alignItems: "center",
              gap: "10px",
              marginLeft: "15px",
            }}
          >
            <img
              style={{ height: "28px" }}
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            <h1 style={{ fontSize: "18px", color: "#fff", marginTop: "9px" }}>
              Ant Design Pro
            </h1>
          </a>
          <div
            style={{
              display: "flex",
              color: "#fff",
              // position: 'absolute',
              float: "left",
              marginLeft: "auto",
              marginRight: "35px",
              gap: "25px",
            }}
          >
            <div className="hh" style={{ display: "flex", gap: "10px" }}>
              {showFilter && (
                <div
                  onClick={() => {
                    setHideFilter(true);
                  }}
                >
                  <SearchOutlined />
                </div>
              )}
              {hideFilter && (
                // <div  className='sssds' style={hideFilter ? { display: 'block', visibility: 'visible', opacity: 1} : { visibility: 'hidden', opacity: 0}}>
                <div>
                  <Input
                    addonAfter={
                      <CloseOutlined
                        onClick={() => {
                          setHideFilter(false);
                        }}
                      />
                    }
                    style={{ height: "22px", marginTop: "8px" }}
                  ></Input>
                </div>
              )}
            </div>
            <div>
              <QuestionCircleOutlined />
            </div>
            <div>
              <BellOutlined />
            </div>
            <Dropdown overlay={menu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Image
                    width={24}
                    height={24}
                    src="/assets/user_profile.png"
                    style={{ borderRadius: "30px", marginTop: "-2px" }}
                  />
                  Profile
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default Headers;

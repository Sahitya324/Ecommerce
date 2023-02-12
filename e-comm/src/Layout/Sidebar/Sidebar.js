import React, {useState} from 'react';
import { Layout, Menu} from 'antd';
import {
    DashboardOutlined,
    ProfileOutlined,
    FormOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const items = [
    getItem('Dashboard', 'sub1', <DashboardOutlined />, [
      getItem('Analysis', '1'),
      getItem('Monitor', '2'),
      getItem('Workplace', '3'),
    ]),
    getItem('Form', 'sub2', <FormOutlined />, [
      getItem('Basic Form', '4'),
      getItem('Step Form', '5'),
      getItem('Advanced Form', '6'),
    ]),
    getItem('List', 'sub3', <UnorderedListOutlined />
    , [getItem('Search List', 'sub4' ,'' ,[
      getItem('Search List(articles)', '7'),
      getItem('Search List(projects', '8'),
      getItem('Search List(application)', '9'),
    ]),
     getItem('Add Product', '11', <Link to={"/addProduct"}></Link>)]),
    getItem('Profile', 'sub5', <ProfileOutlined />, [getItem('Basic Profile', '12'), getItem('Advanced Profile', '13')]),
    // getItem('Files', '9', <FileOutlined />),
  ];

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

 function Sidebar() {

  const[collapsed , setCollapsed] = useState(false);

  return (
    <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" />
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items}/>
    </Sider>
  )
}

export default Sidebar;

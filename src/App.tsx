import React, { FC, useState } from 'react';
import { Layout, Menu, theme   } from 'antd';
import './App.css';
import { 
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  TableOutlined,
 } from '@ant-design/icons';
 import CompaniesPage from './components/companies';
 import ProductsPage from './components/products';
import UserPage from './components/user';
import HomePage from './components/home';

const { Header, Sider, Content } = Layout;

const App: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [selectedMenuItem, setSelectedMenuItem]= useState('1');

  function componentSwitch(key: string) {
    switch (key) {
      case '/home':
        return (<HomePage />);
      case '/companies':
        return (<CompaniesPage />);
      case '/products':
        return (<ProductsPage />);
      default:
        break;
    }
  };
 
  return (
    <Layout className="page-wrapper">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
        > 
          <Menu.Item key="/home" icon={<UserOutlined />} onClick={(e) => setSelectedMenuItem(e.key)}>
            Home
          </Menu.Item>
          <Menu.Item key="/companies" icon={<TableOutlined />} onClick={(e) => setSelectedMenuItem(e.key)}>
            Companies
          </Menu.Item>
          <Menu.Item key="/products" icon={<TableOutlined />} onClick={(e) => setSelectedMenuItem(e.key)}>
            Products
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content>
          { 
            componentSwitch(selectedMenuItem)
          }   
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
'use client';
import React, { useState } from 'react';
import { FaChartPie, FaList } from "react-icons/fa";
import { MdNetworkCheck } from "react-icons/md";
import { GiProcessor } from "react-icons/gi";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import "./globals.css";
import Dashboard from './dashboard';
import Lists from './lists';
import Network from './network';
import Process from './process';

const { Header, Sider, Content } = Layout;

export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard'); // Initially set to 'dashboard'

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body >
        <Layout >
          <Sider trigger={null} collapsible collapsed={collapsed} >
            <div style={{ color: 'white', textAlign: "center", fontFamily: 'sans-serif', fontWeight: 'bold', marginTop: '30px' }}>
              ADVIN
            </div>
            <Menu
              style={{ marginTop: '40px' }}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['dashboard']}
              selectedKeys={[currentPage]}
            // style={{ position: 'fixed', maxWidth: '200px' }}
            >
              <Menu.Item key="dashboard" icon={<FaChartPie size={25} />} onClick={() => handleMenuClick('dashboard')} style={{ marginBottom: '20px' }}>
                Dashboard
              </Menu.Item>

              <Menu.Item key="list" icon={<FaList size={25} />} onClick={() => handleMenuClick('list')} style={{ marginBottom: '20px' }}>
                Lists
              </Menu.Item>
              <Menu.Item key="network" icon={<MdNetworkCheck size={25} />} onClick={() => handleMenuClick('network')} style={{ marginBottom: '20px' }}>
                Network
              </Menu.Item>
              <Menu.Item key="process" icon={<GiProcessor size={25} />} onClick={() => handleMenuClick('process')} style={{ marginBottom: '20px' }}>
                Processes
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <div style={{ minHeight: '80vh' }}>
                {currentPage === 'dashboard' && <Dashboard />}
                {currentPage === 'list' && <Lists />}
                {currentPage === 'network' && <Network />}
                {currentPage === 'process' && <Process />}
              </div>
            </Content>
          </Layout>
        </Layout>
      </body>
    </html>
  );
}


import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import { DOCTOR_LIST, ANALYSE } from '../../constants/menu'
import Router from '../../route/router';
import './App.css'
const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <Link to="/list">{DOCTOR_LIST}</Link>
              {/* <span>{DOCTOR_LIST}</span> */}
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <Link to="/analyse">{ANALYSE}</Link>
              {/* <span>{ANALYSE}</span> */}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            className="content"
            // style={{
            //   margin: '24px 16px',
            //   padding: 24,
            //   background: '#fff',
            //   minHeight: 280,
            // }}
          >
            <Router/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;

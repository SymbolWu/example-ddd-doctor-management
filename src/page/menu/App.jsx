import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import { DOCTOR_LIST, ANALYSE, LOGO } from '../../constants/menu'
import Router from '../../route/router';
import './App.less'
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
          <div className="logo"><span>{LOGO}</span></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/list">
                <Icon type="user" />
                {DOCTOR_LIST}
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/analyse">
                <Icon type="video-camera" />
                {ANALYSE}
              </Link>
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
          <Content className="content" >
            <Router />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;

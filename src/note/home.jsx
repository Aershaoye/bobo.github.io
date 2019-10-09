import React, { Component } from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import './style/index.scss';

const { Header, Sider, Content } = Layout;

const data = [
  { iconType: 'pie-chart', id: 'Summary', label: '常用知识技巧总结' },
  { iconType: 'box-plot', id: 'Knowledge', label: '知识点汇总' },
  { iconType: 'fund', id: 'Jssenior', label: 'js' },
  { iconType: 'dot-chart', id: 'Es6grammar', label: 'ES6语法' },
  { iconType: 'sliders', id: 'Vueframe', label: 'VUE框架' },
  { iconType: 'bar-chart', id: 'Pramise', label: 'pramise' }
];
class Home extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          className="ant-layout-sider-children "
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['key']}>
            {data.map((item, index) => {
              return (
                <Menu.Item
                  key={item.id || index}
                  onClick={() => this.props.onchange(item.id)}
                >
                  <Icon type={item.iconType} />
                  <span>{item.label}</span>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: 'blue', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Button type="primary" onClick={() => this.props.getdata('Login')}>
              Primary
            </Button>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Home;

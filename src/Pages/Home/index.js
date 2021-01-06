import React, { Component } from 'react';
import logo from './../../Assets/logo.svg';
import './home.css';
import { List, Typography, Tabs } from 'antd';
import 'antd/dist/antd.css';

const user = 'admin';

const { TabPane } = Tabs;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
]

const PagesOne = () => {
  return (
    <List
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item actions={[<a key="list-loadmore-edit">完成</a>, <a key="list-loadmore-more">删除</a>]}>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
  )
}

const PagesTwo = () => {
  return (
    <List
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item actions={[<a key="list-loadmore-edit">回退</a>]}>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
  )
}

function callback(key) {
  console.log(key);
}

const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="待处理事项" key="1">
      <PagesOne />
    </TabPane>
    <TabPane tab="已完成事项" key="2">
      <PagesTwo />
    </TabPane>
  </Tabs>
);

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <span>欢迎 {user}！你的待办事项是：</span>
          </p>
          <div>
            <Demo />
          </div>
        </header>
      </div>
    )
  }
}

export default Home;
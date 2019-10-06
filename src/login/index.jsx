import React, { Component } from 'react';
//登陆注册组件
import Login from './login';
import Register from './register';

//相关笔记页面
import Home from '../note/home';
import Summary from '../note/summary';
import Knowledge from '../note/knowledge';
import Jssenior from '../note/Js-senior';
import Es6grammar from '../note/Es6grammar';
import Vueframe from '../note/Vueframe';
import Pramise from '../note/pramise';

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      isCom: window.location.hash.slice(1) || 'Register'
    };

    window.onhashchange = () => {
      this.setState({
        isCom: window.location.hash.slice(1)
      });
    };
  }
  onchange = label => {
    window.location.hash = label;
    this.setState({
      isCom: label
    });
  };
  //返回的页面数据
  getdata = data => {
    window.location.hash = data;
  };
  render() {
    let Dom = '';
    switch (this.state.isCom) {
      case 'Register':
        Dom = <Register getdata={this.getdata} />;
        break;
      case 'Login':
        Dom = <Login getdata={this.getdata} />;
        break;
      case 'Summary':
        Dom = <Summary />;
        break;
      case 'Knowledge':
        Dom = <Knowledge />;
        break;
      case 'Jssenior':
        Dom = <Jssenior />;
        break;
      case 'Es6grammar':
        Dom = <Es6grammar />;
        break;
      case 'Vueframe':
        Dom = <Vueframe />;
        break;
      case 'Pramise':
        Dom = <Pramise />;
        break;
    }
    return (
      <div>
        {this.state.isCom == 'Register' ? (
          <Register getdata={this.getdata} />
        ) : this.state.isCom == 'Login' ? (
          <Login getdata={this.getdata} />
        ) : (
          <Home onchange={this.onchange}>{Dom}</Home>
        )}
      </div>
    );
  }
}

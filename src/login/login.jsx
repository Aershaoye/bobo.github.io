import React, { Component } from 'react';
import './index.scss';
import { Button } from 'antd';

export default class Login extends Component {
  constructor() {
    super();
    let users = JSON.parse(sessionStorage.getItem('user')) || '';
    this.state = {
      user: users.user,
      pass: '',
      usfo: users.user,
      pwfo: users.pass
    };
  }
  setchange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };
  componentDidMount() {
    if (!sessionStorage.getItem('user')) {
      alert('您并没有注册记录，请返回注册,(2秒后自动返回)');
      setTimeout(() => {
        this.props.getdata('Register');
      }, 2000);

      return false;
    }
  }
  render() {
    const { user, pass } = this.state;
    return (
      <div className="zrb-max-login">
        <label>
          <h1>Login...</h1>
        </label>
        <form className="" autoComplete="off">
          <label>
            账号：
            <input
              type="text"
              name="user"
              value={user}
              onChange={this.setchange}
            />
          </label>
          <label>
            密码：
            <input
              type="text"
              name="password"
              value={pass}
              onChange={this.setchange}
            />
          </label>
          <label>
            <Button
              type="primary"
              className="ant-btn-primary"
              onClick={this.onlogin}
            >
              登陆
            </Button>
            <Button
              className="ant-btn"
              onClick={() => this.props.getdata('Register')}
            >
              注册
            </Button>
          </label>
        </form>
      </div>
    );
  }
  login = () => {
    const { usfo, pwfo } = this.state;
    if (this.state.user !== usfo) {
      alert('用户名错误');
      return false;
    } else if (this.state.pass !== pwfo) {
      alert('密码错误');
      return false;
    } else {
      return true;
    }
  };
  onlogin = () => {
    if (this.login()) {
      this.props.getdata('Summary');
    }
  };
}

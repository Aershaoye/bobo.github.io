import React, { Component } from 'react';
import { Button } from 'antd';
import './index.scss';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      pass: '',
      ispa: '',
      email: ''
    };
  }
  //改变input值
  setchange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };
  render() {
    const { user, pass, ispa, email } = this.state;
    return (
      <div className="zrb-max-register">
        <form autoComplete="off">
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
              type="password"
              name="pass"
              value={pass}
              onChange={this.setchange}
            />
          </label>
          <label>
            密码：
            <input
              type="password"
              name="ispa"
              value={ispa}
              onChange={this.setchange}
            />
          </label>
          <label>
            邮箱：
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.setchange}
            />
          </label>
          <label>
            <Button type="primary" onClick={this.onregister}>
              注册
            </Button>
            <Button type="primary" onClick={() => this.props.getdata('Login')}>
              登陆
            </Button>
          </label>
        </form>
      </div>
    );
  }
  //验证
  register = () => {
    const { user, pass, ispa, email } = this.state;
    if (!user.trim() || user.length < 6) {
      alert('用户名不能为空,且长度不小于6位');
      return false;
    } else if (!pass.trim() || !/^(\w){6,20}$/.test(pass)) {
      alert('密码不能为空,且必须是6-20个字母、数字、下划线');
      return false;
    } else if (!(pass === ispa)) {
      alert('两次密码不一致，请检查密码');
      return false;
    } else if (
      !email.trim() ||
      !/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(email)
    ) {
      alert('邮箱格式不正确');
      return false;
    } else {
      return true;
    }
  };
  //如果判断成功后进入登陆页面
  onregister = () => {
    if (this.register()) {
      let obj = {};
      obj.user = this.state.user;
      obj.pass = this.state.pass;
      sessionStorage.setItem('user', JSON.stringify(obj));
      this.props.getdata('Login');
    }
  };
}

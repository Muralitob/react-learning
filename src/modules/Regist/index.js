import React, { Component } from 'react'
import { Link } from 'react-router'
// import { Form } from 'antd';
class Regist extends Component {
  render() {
    // const { getFieldDecorator } = this.props.form;
    return (
      <div>
        点击开始注册
        <Link to='/login'>立刻登录</Link>
      </div>
    )
  }
}
// const RegistForm = Form.create()(Regist);
export default {
  path: '/regist',
  component: Regist
}
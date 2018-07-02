import React, { Component } from 'react';
import {Link, browserHistory } from 'react-router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.css'
const FormItem = Form.Item;
class Login extends Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields( (err, values)=> {
      if(!err){
        const { userName, password, remember } = values
        console.log('userName, password, remember', userName, password, remember)
        //调用登录api
        //这里模仿一下
        if(userName==='sdh'&& password==='123456') {
          localStorage.setItem('test',Math.random())
          browserHistory.replace('/')
        }
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <h2>登录</h2>
        <Form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
          </FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <Link to='/regist'>register now!</Link>
        </Form>
      </div>
    );
  }
}
const LoginForm = Form.create()(Login);

export default {
  path: '/login',
  component: LoginForm
}

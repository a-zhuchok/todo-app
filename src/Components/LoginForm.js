import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage()
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'User does not exist!',
    });
  };
  const onFinish = async (values) => {
    try {
      const response = await fetch('https://todo-redev.herokuapp.com/api/auth/login', {
        method: "POST",
        headers: {
          Authorization: "Bearer token",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
      const userData = await response.json()
      if (response.ok===true) {
        const userToken = userData.token
        localStorage.setItem('user', userToken)
        navigate('/TodoList')}
      else {error()}
    } catch (error) {
      console.log("error: ", error)
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div class='loginForm'>
      <Form
        colon={false}
        style={{
          maxWidth: '60%',
          paddingTop: '40px',
          margin: 'auto',
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >

        <Form.Item
          label={<text style={{ color: 'white', fontSize: '30px'}}>email</text>}
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<text style={{ color: 'white', fontSize: '30px'}}>password</text>}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        {contextHolder}
        <Button type="primary" htmlType="submit" style={{ height: '50px', backgroundColor: '#be6fff', fontSize: '20px' }} >Login In</Button>
      </Form>
      <div class="pageLink">Don't have an account?<Link to="/*">Sign Up!</Link></div>
    </div>
  );
}
export default Login;
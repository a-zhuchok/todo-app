import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginUser } from '../redux/loginFormSlice';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector(state => state.user);
  const onFinish = (user) => {
    dispatch(fetchLoginUser(user))
     if(status === 'failed') { error() }
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'User does not exist!',
    })
  };
  const [messageApi, contextHolder] = message.useMessage();
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div class='loginForm'>
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'succeeded' && navigate('/TodoList')}
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
          label={<text style={{ color: 'white', fontSize: '30px' }}>email</text>}
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
          label={<text style={{ color: 'white', fontSize: '30px' }}>password</text>}
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
export default LoginForm;
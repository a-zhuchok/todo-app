import React, { useState } from 'react';
import { Button, Form, Input, Radio,  message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAddUser} from '../redux/SignFormSlice';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';


  const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage()
    const success = () => {
      messageApi.open({
        type: 'success',
        content: 'User is registered!',
      })
    }
    const error = () => {
      messageApi.open({
        type: 'error',
        content: 'This user already exists!',
      })
    }
    const onFinish =  (newUser) => {
      try {
        dispatch(fetchAddUser(newUser))
        success()
        navigate('/LoginForm')
      }
       catch {
        error()
       } 
    }
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
    }
    const [value, setValue] = useState(1)
    const onChange = (e) => {
      setValue(e.target.value)
    }
  
    return (
      <div class='signForm'>
        <Form
          colon={false}
          style={{
            maxWidth: '70%',
            paddingTop: '40px',
            margin: 'auto',
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label={<text style={{ color: 'white', fontSize: '30px' }}>username</text>}
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input style={{ fontSize: '20px' }} />
          </Form.Item>
  
          <Form.Item
            label={<text style={{ color: 'white', fontSize: '30px' }}>email</text>}
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: "email",
                message: "Incorrect email!"
              },
            ]}
          >
            <Input style={{ fontSize: '20px' }} />
          </Form.Item>
  
          <Form.Item
            label={<text style={{ color: 'white', fontSize: '30px' }}>password</text>}
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                message: 'Incorrect password! Password must be at least 8 characters long and include capital letters and symbols.',
              },
            ]}
          >
            <Input.Password style={{ fontSize: '20px' }} />
          </Form.Item>
  
          <Form.Item
            label={<text style={{ color: 'white', fontSize: '30px' }}>gender</text>}
            name="gender"
            rules={[
              {
                required: true,
                message: 'Please input your gender!',
              },
            ]}>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={'male'}>{<text style={{ color: 'white', fontSize: '30px' }}>Male</text>}</Radio>
              <Radio value={'female'}>{<text style={{ color: 'white', fontSize: '30px' }}>Female</text>}</Radio>
            </Radio.Group>
          </Form.Item>
  
          <Form.Item
            label={<text style={{ color: 'white', fontSize: '30px' }}>age</text>}
            name="age"
            rules={[
              {
                required: true,
                message: 'Please input your age!',
              },
              {
                pattern: /^\d{2}$|100$/,
                message: 'Please input the correct age!',
              },
  
            ]}
          >
            <Input style={{ fontSize: '20px' }} />
          </Form.Item>
          {contextHolder}
          <Button type="primary" htmlType="submit" style={{ height: '50px', backgroundColor: '#be6fff', fontSize: '20px' }} >Sign Up</Button>
        </Form>
        <div class="pageLink">Already have an account?<Link to="/LoginForm">Login!</Link></div>
      </div>
    );
  }
  export default SignUp;
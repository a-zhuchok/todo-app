import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      const response = await fetch('https://todo-redev.herokuapp.com/api/users/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
      const userData = await response.json()
      if (response.ok !== true) { alert(userData.message) }
      else { navigate('/LoginForm')}
      alert("User is registered")
    } catch (error) {
      console.log("error: ", error.message)
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
              message: "This email does not exist!"
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
              message: 'Please input the correct password!',
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

        <Button type="primary" htmlType="submit" style={{ height: '50px', backgroundColor: '#be6fff', fontSize: '20px' }} >Sign Up</Button>

      </Form>
      <div class="pageLink">Already have an account?<Link to="/LoginForm">Login!</Link></div>
    </div>
  );
}
export default SignUp;
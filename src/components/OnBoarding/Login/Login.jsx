import React from 'react';
import { LockOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Space } from 'antd';
import "./Login.css"


const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}
            >
                <Input prefix={<SettingOutlined className="site-form-item-icon" />} placeholder="username: admin or user" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="password: ant.design"
                />
            </Form.Item>
            <Form.Item>


                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Space style={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Button type="primary" htmlType="submit" className="login-form-button-1">
                        Sign in
                    </Button>

                </Space>

            </Form.Item>
        </Form>
    );
};
export default Login;
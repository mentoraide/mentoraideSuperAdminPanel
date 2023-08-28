import React from 'react';
import { LockOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import "./SignUp.css"


const SignUp = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Form
            name="normal_signup"
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
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input type='email' prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email: mentoraide@gmail" />
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
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox >Remember me</Checkbox>
                </Form.Item>


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
export default SignUp;
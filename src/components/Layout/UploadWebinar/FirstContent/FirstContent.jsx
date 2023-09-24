import { Button, DatePicker, Form, Input, InputNumber, Space, Typography } from 'antd'
import React from 'react'
import './FirstContent.css'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};


/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};

const FirstContent = () => {
    return (
        <>
            <div className="first-content-container">
                <Typography.Title level={3}>Enter Detaile of the Webinar</Typography.Title>
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                >
                    <div className="form-upper">
                        <Form.Item
                            label="Title :"
                            rules={[
                                {
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Name of Host : "
                            rules={[
                                {
                                    type: 'email',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                    <Space direction='horizontal' >
                        <Form.Item label="Start Date">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="End Date">
                            <DatePicker />
                        </Form.Item>
                    </Space>
                    <div className="form-bottom">
                        <Form.Item
                            label="Duration : "
                            rules={[
                                {
                                    type: 'email',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'website']} label="Website">
                            <Input />
                        </Form.Item>
                        <Form.Item name={['user', 'introduction']} label="Introduction">
                            <Input.TextArea />
                        </Form.Item>
                    </div>
                </Form>
            </div >


        </>
    )
}

export default FirstContent
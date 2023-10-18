import React from 'react'
import { Typography, Upload } from 'antd';
import './SecondContent.css'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';


const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};


const SecondContent = () => {
    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };
    return (
        <div className="second-content-container">
            <Typography.Title level={3}>Enter Detaile of the Webinar</Typography.Title>

            <Form
            >
                <Typography.Title level={5}>Add Media For the Webinar</Typography.Title>
                <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
            </Form>
        </div>
    );
}

export default SecondContent
import { DatePicker, Form, Input, Space, Switch, Typography } from 'antd'
import React, { useState } from 'react'
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './FirstContent.css'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
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
    const [title, setTitle] = useState('XYZ Company');
    const [companyWebsite, setWebsite] = useState('https://mentoraide.com');
    const [active, setActive] = useState(false);

    return (
        <>
            <div className="first-content-container">
                <Typography.Title level={3}>Basic Details</Typography.Title>
                <div className="custom-form-conatiner">
                    <Form action="">
                        <div className="input-title-box  input-element-holder">
                            <div className="input-item">
                                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                            </div>
                            <div className="input-label"><label htmlFor="">Name of the Company</label></div>
                        </div>
                        <div className="input-host-box input-element-holder">
                            <div className="upload-company-logo">
                                <Typography.Title level={5}>Add Company Logo</Typography.Title>
                                <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
                                    <Upload action="/upload.do" listType="picture-card">
                                        <div>
                                            <PlusOutlined />

                                        </div>
                                    </Upload>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="input-host-box input-element-holder">
                            <div className="input-item">
                                <input type="text" value={companyWebsite} onChange={(e) => { setWebsite(e.target.value) }} />
                            </div>
                            <div className="input-label"><label htmlFor="">Company Website</label></div>
                        </div>
                        <div className="input-desc-box input-element-holder">
                            <div className="input-item">
                                <div className="input-label switch-label-div"><label htmlFor="Description">Active</label>
                                    <div className="active-switch-button">
                                        <Switch onChange={(e) => setActive(!active)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div >


        </>
    )
}

export default FirstContent
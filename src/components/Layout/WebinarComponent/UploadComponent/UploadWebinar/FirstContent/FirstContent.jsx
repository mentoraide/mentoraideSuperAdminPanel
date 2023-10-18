import { DatePicker, Form, Input, Space, Typography } from 'antd'
import React, { useState } from 'react'
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
    const [title, setTitle] = useState('XYZ Webinar');
    const [host, setHost] = useState('MentorAide');
    const [duration, setDuration] = useState('4 Hours');
    const [description, setDescription] = useState(' Lorem Lorem ');

    return (
        <>
            <div className="first-content-container">
                <Typography.Title level={3}>Enter Details of the Webinar</Typography.Title>
                <div className="custom-form-conatiner">
                    <Form action="">
                        <div className="input-title-box  input-element-holder">
                            <div className="input-item">
                                <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                            </div>
                            <div className="input-label"><label htmlFor="">Title of the Webinar</label></div>
                        </div>
                        <div className="input-host-box input-element-holder">
                            <div className="input-item">
                                <input type="text" value={host} onChange={(e) => { setHost(e.target.value) }} />
                            </div>
                            <div className="input-label"><label htmlFor="">Name of Host</label></div>
                        </div>
                        <div className="input-Date-box input-element-holder">
                            <div className="start-date-box">
                                <div className="input-item">
                                    <DatePicker placeholder='Start Date' />
                                </div>
                            </div>
                            <div className="end-date-box">
                                <div className="input-item">
                                    <DatePicker placeholder='End Date' />
                                </div>
                            </div>
                        </div>
                        <div className="input-host-box input-element-holder">
                            <div className="input-item">
                                <input type="text" value={duration} onChange={(e) => { setDuration(e.target.value) }} />
                            </div>
                            <div className="input-label"><label htmlFor="">Duration</label></div>
                        </div>
                        <div className="input-desc-box input-element-holder">
                            <div className="input-item">
                                <textarea name="" id="" cols="30" rows="2" value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                            </div>
                            <div className="input-label"><label htmlFor="Description">Description</label></div>
                        </div>
                    </Form>
                </div>
            </div >


        </>
    )
}

export default FirstContent
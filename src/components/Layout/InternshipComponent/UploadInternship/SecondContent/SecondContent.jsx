import React, { useState } from 'react'
import { Typography, Upload, Select, DatePicker } from 'antd';
import './SecondContent.css'
import { PlusOutlined } from '@ant-design/icons';
import { Form } from 'antd';
const { RangePicker } = DatePicker;



const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};


const SecondContent = () => {

    const [title, setTitle] = useState('Software Developer Intern');
    const [discription, setDescription] = useState('Software Developer Intern Description');
    const [responsibilities, setResponsibilities] = useState('Software Developer Intern Responsibilities');
    const [deadline, setDeadline] = useState(null);
    const [schedule, setSchedule] = useState('Flexible hours');
    const [duration, setDuration] = useState([null, null]);


    return (
        <div className="second-internship-content-container">
            <Typography.Title level={3}>Details of the Internship</Typography.Title>

            <div className="custom-form-conatiner">
                <Form action="">
                    <div className="input-title-box  input-element-holder">
                        <div className="input-label"><label htmlFor="">Job Title</label></div>
                        <div className="input-item">
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                        </div>
                    </div>
                    <div className="input-title-box  input-element-holder">
                        <div className="input-label"><label htmlFor="">Description</label></div>
                        <div className="input-item">
                            <textarea name="" id="" cols="30" value={discription} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                        </div>
                    </div>
                    <div className="input-title-box  input-element-holder">
                        <div className="input-label"><label htmlFor="">Eligibility</label></div>
                        <div className="input-item">
                            <Select className='select-input'>
                                <Select.Option value="demo">Lorem, ipsum dolor.</Select.Option>
                                <Select.Option value="demo">Lorem, ipsum dolor.</Select.Option>
                            </Select>
                        </div>
                    </div>
                    <div className="input-title-box  input-element-holder">
                        <div className="input-label"><label htmlFor="">Responsibility of Intern</label></div>
                        <div className="input-item">
                            <textarea name="" id="" cols="30" value={responsibilities} onChange={(e) => { setResponsibilities(e.target.value) }}></textarea>
                        </div>
                    </div>
                    <div className="input-title-box  input-element-holder">
                        <div className="input-label"><label htmlFor="">Category of Internship</label></div>
                        <div className="input-item">
                            <Select className='select-input' >
                                <Select.Option value="demo">Lorem, ipsum dolor.</Select.Option>
                                <Select.Option value="demo">Lorem, ipsum dolor.</Select.Option>
                            </Select>
                        </div>
                    </div>
                    <div className="input-desc-box input-element-holder">
                        <div className="input-item">
                            <div className="input-label switch-label-div"><label htmlFor="Description">Deadline</label>
                                <div className="active-switch-button">
                                    <DatePicker value={deadline} onChange={(e) => setDeadline(e)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-desc-box input-element-holder">
                        <div className="input-item">
                            <div className="input-label switch-label-div"><label htmlFor="Description">Duration</label>
                                <div className="range-picker-button">
                                    <RangePicker value={duration} onChange={(e) => setDuration(e)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input-title-box  input-element-holder">
                        <div className="input-label"><label htmlFor="">Schedule</label></div>
                        <div className="input-item">
                            <Select className='select-input' value={schedule} onChange={(e) => setSchedule(e)} >
                                <Select.Option value="Flexible hours">Flexible hours</Select.Option>
                                <Select.Option value="Morning hours">Morning hours</Select.Option>
                                <Select.Option value="Evening hours">Evening hours</Select.Option>
                                <Select.Option value="Night hours">Night hours</Select.Option>
                            </Select>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default SecondContent
import React, { useState } from 'react'
import { Typography, Select, DatePicker, Radio, Checkbox } from 'antd';
import './ThirdContent.css'
import { Button, Form, Input } from 'antd';
const { RangePicker } = DatePicker;


const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};



const ThirdContent = () => {
    const [contractType, setContractType] = useState('Full-time');
    const [amount, setAmount] = useState('0000');
    const [paidRadio, setPaidRadio] = useState(null);
    const [loacationType, setLocationType] = useState(null);
    const [location, setLocation] = useState('XYZ street, ABC city, 123 country');
    const [numberOfOpenings, setNumberOfOpenings] = useState('1');
    const [perks, setPerks] = useState(null);

    console.log(perks);


    return (
        <>
            <div className="third-internship-content-content-container">
                <Typography.Title level={3}>Stipend Details</Typography.Title>

                <div className="custom-form-conatiner">
                    <Form action="">
                        <div className="input-title-box  input-element-holder">
                            <div className="input-label"><label htmlFor="">Contract Type</label></div>
                            <div className="input-item">
                                <Select className='select-input' value={contractType} onChange={(e) => setContractType(e)}>
                                    <Select.Option value="Full-time">Full-time</Select.Option>
                                    <Select.Option value="Part-time">Part-time</Select.Option>
                                </Select>
                            </div>
                        </div>
                        <div className="input-title-box  input-element-holder">
                            <div className="input-item">
                                <Radio.Group onChange={(e) => setPaidRadio(e.target.value)}>
                                    <Radio value="paid"> Paid </Radio>
                                    <Radio value="unpaid"> Unpaid </Radio>
                                </Radio.Group>
                            </div>
                        </div>
                        {paidRadio === 'paid' ?
                            <div className="input-title-box  input-element-holder">
                                <div className="input-label"><label htmlFor="">Stipend Amount</label></div>
                                <div className="input-item">
                                    <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} />
                                </div>
                            </div> : null}
                        <div className="input-title-box  input-element-holder">
                            <div className="input-label"><label htmlFor="">Location Type</label></div>
                            <div className="input-item">
                                <Select className='select-input' onChange={(e) => setLocationType(e)}>
                                    <Select.Option value="on-site">On-site</Select.Option>
                                    <Select.Option value="Work from home">Work from home</Select.Option>
                                    <Select.Option value="Hybrid">Hybrid</Select.Option>
                                    <Select.Option value="Field Job">Field Job</Select.Option>
                                </Select>
                            </div>
                        </div>
                        {loacationType === 'on-site' ?
                            <div className="input-title-box  input-element-holder">
                                <div className="input-label"><label htmlFor="">Location</label></div>
                                <div className="input-item">
                                    <input type="text" value={location} onChange={(e) => { setLocation(e.target.value) }} />
                                </div>
                            </div> : null}
                        <div className="input-title-box  input-element-holder">
                            <div className="input-label"><label htmlFor="">Perks</label></div>
                            <div className="input-item perk-div">
                                <Checkbox.Group onChange={(e) => setPerks(e)}>
                                    <Checkbox value="Certificate">Certificate</Checkbox>
                                    <Checkbox value="Letter of Recommendation">Letter of Recommendation</Checkbox>
                                    <Checkbox value="Transport">Transport</Checkbox>
                                    <Checkbox value="Medical Insurance">Medical Insurance</Checkbox>
                                    <Checkbox value="Other">Other</Checkbox>
                                </Checkbox.Group>
                            </div>
                        </div>
                        <div className="input-title-box  input-element-holder">
                            <div className="input-label"><label htmlFor="">Number of Openings</label></div>
                            <div className="input-item">
                                <input type="number" value={numberOfOpenings} onChange={(e) => { setNumberOfOpenings(e.target.value) }} />
                            </div>
                        </div>
                    </Form>
                </div>

            </div >


        </>
    )
}

export default ThirdContent
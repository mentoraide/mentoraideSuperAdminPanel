import React, { useState } from 'react'
import "./SlideCard.css"
import { Avatar, Rate, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons';

const SlideCard = () => {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [value, setValue] = useState(3);
    return (
        <>
            <div className="slide-card-section">
                <div className="slide-cards-conatiner">
                    <div className="slide-card-col card-1">
                        <div className='slide-card-col-img'>

                        </div>
                        <div className="slide-card-col-content">
                            <Typography.Text className="slide-card-col-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam vulputate augue, eget lacinia nisl nunc quis nunc. </Typography.Text>
                            <Typography.Text className="slide-card-col-content-name">- John Doe</Typography.Text>
                            <Typography.Text className="slide-card-col-content-location">New York, NY</Typography.Text>
                            <div  >
                                <Rate tooltips={desc} className='rating-box' value={value} count={4} />
                            </div>

                        </div>
                    </div>
                    <div className="slide-card-col card-2">
                        <div className='slide-card-col-img'>

                        </div>
                        <div className="slide-card-col-content">
                            <Typography.Text className="slide-card-col-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam vulputate augue, eget lacinia nisl nunc quis nunc. </Typography.Text>
                            <Typography.Text className="slide-card-col-content-name">- John Doe</Typography.Text>
                            <Typography.Text className="slide-card-col-content-location">New York, NY</Typography.Text>
                            <div  >
                                <Rate tooltips={desc} className='rating-box' value={value} count={4} />
                            </div>
                        </div>
                    </div>
                    <div className="slide-card-row card-3">
                        <div className='slide-card-row-img'>
                            <Avatar size={64} icon={<UserOutlined />} />
                        </div>
                        <div className="slide-card-row-content">
                            <h5 >Lorem, ipsum.</h5>
                            <div  >
                                <Rate tooltips={desc} className='rating-box' value={value} count={4} />
                            </div>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam vulputate augue, eget lacinia nisl nunc quis nunc. </p>
                        </div>
                    </div>
                    <div className="slide-card-row card-4">
                        <div className='slide-card-row-img'>
                            <Avatar size={64} icon={<UserOutlined />} />

                        </div>
                        <div className="slide-card-row-content">
                            <h5 >Lorem, ipsum.</h5>
                            <div  >
                                <Rate tooltips={desc} className='rating-box' value={value} count={4} />
                            </div>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam vulputate augue, eget lacinia nisl nunc quis nunc. </p>
                        </div>
                    </div>
                    <div className="slide-card-row card-5">
                        <div className='slide-card-row-img'>
                            <Avatar size={64} icon={<UserOutlined />} />

                        </div>
                        <div className="slide-card-row-content">
                            <h5 >Lorem, ipsum.</h5>
                            <div  >
                                <Rate tooltips={desc} className='rating-box' value={value} count={4} />
                            </div>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam vulputate augue, eget lacinia nisl nunc quis nunc. </p>
                        </div>
                    </div>
                    <div className="slide-card-row card-6">
                        <div className='slide-card-row-img'>
                            <Avatar size={64} icon={<UserOutlined />} />

                        </div>
                        <div className="slide-card-row-content">
                            <h5 >Lorem, ipsum.</h5>
                            <div  >
                                <Rate tooltips={desc} className='rating-box' value={value} count={4} />
                            </div>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam vulputate augue, eget lacinia nisl nunc quis nunc. </p>
                        </div>
                    </div>
                    <div className="slide-card-row card-7">
                        <div className='slide-card-row-img'>
                            <Avatar size={64} icon={<UserOutlined />} />

                        </div>
                        <div className="slide-card-row-content">
                            <h5 >Lorem, ipsum.</h5>
                            <div  >
                                <Rate tooltips={desc} className='rating-box' value={value} count={4} />
                            </div>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam vulputate augue, eget lacinia nisl nunc quis nunc. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SlideCard
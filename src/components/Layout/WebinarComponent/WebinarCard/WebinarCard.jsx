import React from 'react'
import './WebinarCard.css'
import { BookOutlined, PlayCircleOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { Typography } from 'antd'

const WebinarCard = () => {
    return (
        <>
            <div className="webinar-card-container">
                <div className="webinar-card-box">

                    <div className="card-box-up card-time">
                        <div className="card-category-title">A Technology Webinar</div>
                    </div>

                    <div className="card-title-box card-box-up">
                        <Typography.Title level={4}>Innovative Ideas From Entrepreneurs</Typography.Title>
                    </div>
                    <div className="card-mentor-name-box card-box-up">
                        <Typography.Text className='card-time' >Get inspired by success stories of entrepreneurs in technology!</Typography.Text>

                    </div>
                    <div className="card-mentor-info-box">
                        <div className="mentor-avatars-box">
                            <div className="mentor-avatars-sub-box">
                                <div className="mentor-avatar"></div>
                                <div className="mentor-name">abcdefgh</div>
                            </div>
                            <div className="mentor-avatars-sub-box">
                                <div className="mentor-avatar"></div>
                                <div className="mentor-name">abcdefgh</div>
                            </div>
                            <div className="mentor-avatars-sub-box">
                                <div className="mentor-avatar"></div>
                                <div className="mentor-name">abcdefgh</div>
                            </div>

                        </div>
                        <div className="webinar-car-buttons">
                            <button className="webinar-card-button">Register</button>
                            <button className="webinar-card-button">Details</button>
                            <button className="webinar-card-button">Details</button>
                            <button className="webinar-card-button">Details</button>
                        </div>
                    </div>
                </div>
                <div className="webinar-card-box">
                    <div className="card-tag-box  card-box">
                        <div className="card-tag">Business</div>
                        <BookOutlined />
                    </div>
                    <div className="card-title-box  card-box">
                        <Typography.Title level={5}>Online Webinar - Business Plan</Typography.Title>
                    </div>
                    <div className="card-mentor-name-box  card-box">
                        <Typography.Text >Mentor Name : Pablo Stanley</Typography.Text>

                    </div>
                    <div className="card-timing-box  card-box">
                        <Typography.Text className='card-time' ><PlayCircleOutlined /> 12:00 PM</Typography.Text>
                        <Typography.Text className='card-time' > <ClockCircleOutlined />2 hours</Typography.Text>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebinarCard
import React from 'react'
import './WebinarCard.css'
import { BookOutlined, PlayCircleOutlined, ClockCircleOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import webinarImg from "../../../../assets/WebinarCard.png"

const WebinarCard = () => {
    return (
        <>
            <div className="webinar-card-container">
                <div className="webinar-card-box">
                    <div className="webinar-img-container"></div>
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
import React from 'react'
import "./ScreenTwo.css"
import ellipse from "../../../assets/ellipse.png"
import iphone from "../../../assets/iPhone_11.png"
import screen from "../../../assets/Screen.png"
import { Typography } from 'antd'
import { CodepenOutlined } from '@ant-design/icons'

const ScreenTwo = () => {
    return (
        <>
            <div className="frame">
                <div className="overlap-group">
                    <div className="content-screen-two">
                        <Typography.Title level={1} className="what-is-mentoraide">
                            <span className="text-wrapper">What is </span>
                            <span className="span">MentorAide </span>
                            <span className="text-wrapper">?</span>
                        </Typography.Title>
                        <Typography.Text className="welcome-to">
                            Welcome to Mentoraide where we bridges the gap between college and career by offering a holistic platform that
                            provides industry awareness, practical learning, and real-world exposure. We aspire to empower students,
                            transforming them into skilled and confident professionals prepared for the workforce&#39;s challenges.
                        </Typography.Text>
                        <Typography.Title level={4} className="screen-two-bullets"> <CodepenOutlined />  Practical approach</Typography.Title>
                        <Typography.Title level={4} className="screen-two-bullets"> <CodepenOutlined />   In-campus social media</Typography.Title>
                        <Typography.Title level={4} className="screen-two-bullets"> <CodepenOutlined />   Community building</Typography.Title>

                    </div>

                    <img className="ellipse" alt="Ellipse" src={ellipse} />
                    <img className="devices-apple-iphone" alt="Devices apple iphone" src={iphone} />
                    <img className="img" alt="Devices apple iphone" src={iphone} />
                    <img className=" screen" alt="Devices apple iphone " src={screen} />
                </div>
            </div>
        </>
    )
}

export default ScreenTwo
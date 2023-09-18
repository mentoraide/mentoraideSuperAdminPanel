import React from 'react'
import "./ScreenThree.css"
import { Typography } from 'antd'

const ScreenThree = () => {
    return (
        <>
            <div className="screen-three-frame">
                <Typography.Title level={2} className="screen-three-title">
                    Here is What You Get Out Of
                    <span className="span"> MentorAide </span>
                    <span className="text-wrapper">?</span>
                </Typography.Title>
                <div className="rectagnle-div">
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                </div>
            </div>
        </>
    )
}

export default ScreenThree
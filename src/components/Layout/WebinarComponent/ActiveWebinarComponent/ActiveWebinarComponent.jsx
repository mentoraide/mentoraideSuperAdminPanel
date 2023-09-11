import { Typography } from 'antd'
import React from 'react'
import './ActiveWebinarComponent.css'
import WebinarCard from '../WebinarCard/WebinarCard'

const ActiveWebinarComponent = () => {
    return (
        <>
            <div className="active-webinar-container">
                <Typography.Title className='active-wbinar-heading' level={4}>Active Webinars</Typography.Title>
                <div className="active-webinar-cards-container">
                    <WebinarCard />
                    <WebinarCard />
                    <WebinarCard />
                    <WebinarCard />
                    <WebinarCard />
                    <WebinarCard />
                    <WebinarCard />
                </div>
            </div>
        </>
    )
}

export default ActiveWebinarComponent
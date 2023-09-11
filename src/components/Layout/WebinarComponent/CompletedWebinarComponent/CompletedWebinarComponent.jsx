import React from 'react'
import WebinarCard from '../WebinarCard/WebinarCard'
import { Typography } from 'antd'
import './CompletedWebinarComponent.css'

const CompletedWebinarComponent = () => {
    return (
        <>
            <div className="active-webinar-container">
                <Typography.Title className='active-wbinar-heading' level={4}>Completed Webinars</Typography.Title>
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

export default CompletedWebinarComponent
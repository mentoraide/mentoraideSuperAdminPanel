import React from 'react'
import './ScreenFour.css'
import Typography from 'antd/es/typography/Typography'
import CompanyCard from './CompanyCard'

const ScreenFour = () => {
    return (
        <div className="screen-four-frame">
            <div className="overlap">

                <Typography.Title className="title" level={2}>Top Tech Companies <span>Hire Our Students</span></Typography.Title>
                <div className="screen-four-scroll-div">
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />
                    <CompanyCard />

                </div>
            </div>
        </div>
    )
}

export default ScreenFour
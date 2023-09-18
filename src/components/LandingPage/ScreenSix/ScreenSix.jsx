import React from 'react'
import './ScreenSix.css'
import CompanyCard from '../ScreenFour/CompanyCard'
import { Typography } from 'antd'


const ScreenSix = () => {
    return (
        <div className="screen-six-frame">
            <div className="overlap">

                <Typography.Title className="title" level={2}>We Are <span>Backed</span> By</Typography.Title>
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

export default ScreenSix
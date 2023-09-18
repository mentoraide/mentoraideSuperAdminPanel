import React from 'react'
import "./ScreenFive.css"
import SlideCard from './SlideCard'
import { Typography } from 'antd';

const ScreenFive = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <>
            <div className="screen-five-section">
                <Typography.Title level={2} className="slide-card-title">Raving Reviews from Our <span>Delighted Students</span></Typography.Title>
                <SlideCard />

            </div>
        </>
    )
}

export default ScreenFive
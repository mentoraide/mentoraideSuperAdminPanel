import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import './UploadWebinar.css'
import FirstContet from './FirstContent/FirstContent';
import SecondContent from './SecondContent/SecondContent';
import ThirdContent from './ThirdContent/ThirdContent';
import { useNavigate } from 'react-router-dom';
const steps = [
    {
        title: 'First',
        content: <FirstContet />,
    },
    {
        title: 'Second',
        content: <SecondContent />,
    },
    {
        title: 'Last',
        content: <ThirdContent />,
    },
];




const UploadWebinar = (modalCloseProp) => {
    const { token } = theme.useToken();
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    const handleDoneButton = () => {
        message.success('Processing complete!')
        modalCloseProp.modalCloseProp(false)
        navigate("/webinar")
    }

    return (
        <>
            <div className="steps-conatiner">
                <Steps current={current} items={items}>
                </Steps>
                <div className='steps-content-box' >
                    {steps[current].content}
                </div>
                <div
                    style={{
                    }}
                >
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={handleDoneButton}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={() => prev()}
                        >
                            Previous
                        </Button>
                    )}
                </div>

            </div>
        </>
    );
};
export default UploadWebinar;
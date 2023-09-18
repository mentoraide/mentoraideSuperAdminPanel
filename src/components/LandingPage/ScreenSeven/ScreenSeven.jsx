import React from 'react'
import './ScreenSeven.css'
import { Collapse, Typography } from 'antd'

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel dignissimos quaerat sint ea atque perferendis sunt soluta labore numquam natus autem voluptate iure velit explicabo veniam suscipit, est repudiandae."

const items = [
    {
        key: '1',
        label: 'This is panel header 1',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: 'This is panel header 2',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
    },
];

const ScreenSeven = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <div className="screen-seven-section">
                <Typography.Title level={1} className="screen-seven-title">Frequently Asked
                    Questions</Typography.Title>
                <div className="screen-seven-questions-box">
                    <div className="dropdown-collapse">
                        <Collapse className='collapse' items={items} defaultActiveKey={['1']} onChange={onChange} />
                    </div>
                    <div className="dropdown-collapse">
                        <Collapse className='collapse' items={items} defaultActiveKey={['1']} onChange={onChange} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default ScreenSeven
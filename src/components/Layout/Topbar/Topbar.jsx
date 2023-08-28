import React from 'react'
import './Topbar.css'
import { Badge, Space, Typography } from 'antd'
import banner from '../../../assets/banner.png'
import logo from '../../../assets/logo.png'
import { QuestionCircleOutlined, SearchOutlined, BellOutlined, UserOutlined, TranslationOutlined } from '@ant-design/icons'

const Topbar = () => {
    return (
        <>
            <div className="top-bar">
                <div className='top-images'>
                    <img className='top-images-1' src={logo} alt="logo" />
                    <img className='top-images-2' src={banner} alt="logo" />
                </div>
                {/* <div className='top-text'> */}
                <Space className='top-end-box' >
                    <SearchOutlined />
                    <QuestionCircleOutlined />
                    <Badge dot>
                        <BellOutlined />
                    </Badge>
                    <UserOutlined />
                    <span>English</span>
                    <TranslationOutlined style={{ marginRight: '10px' }} />
                </Space>
                {/* </div> */}
            </div>
        </>
    )
}

export default Topbar
import React from 'react'
import "./Home.css"
import { Card, Space } from 'antd';
import LoginSignUp from './LoginSignUp';
import banner from '../../assets/banner.png'
import logo from '../../assets/logo.png'
import { Footer } from 'antd/es/layout/layout';
import { GithubOutlined, QuestionOutlined } from '@ant-design/icons';

const Home = () => {
    return (
        <div className='home-container'>

            <Space direction='vertical' >
                <div className='banner'>
                    <img className='logo-img' src={logo} alt="MentorAide-Logo" />
                    <img className='banner-img' src={banner} alt="MentorAide image" />
                </div>
                <Card
                    title=""
                    bordered={false}
                    className='login-card'
                >
                    <LoginSignUp />
                </Card>

                <QuestionOutlined style={{ position: "fixed", bottom: "3%", right: "3%", backgroundColor: "white", borderRadius: "50%", border: "5px solid white" }} />


                <Footer className='footer'>
                    <div className="footer-line-1">
                        <p>© 2021 MentorAide</p>
                        <p><GithubOutlined /></p>
                        <p>Terms of Service</p>
                    </div>
                    <div className="footer-line-2">
                        Copyright ©2020 Produced by Ant Finance Experience Technology Department
                    </div>
                </Footer>
            </Space>

        </div>
    )
}

export default Home
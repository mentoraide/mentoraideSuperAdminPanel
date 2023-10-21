import React from 'react'
import "./InternshipComponent.css"
import { Breadcrumb, Layout, Typography, theme } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import { EyeOutlined, UserOutlined } from '@ant-design/icons';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Input, QRCode, Space } from 'antd';
import ApplicantsTableComponent from './ApplicantsTableComponent/ApplicantsTableComponent';

ChartJS.register(ArcElement, Tooltip, Legend);

const breadItems = [
    {
        key: 'home',
        href: '/',
        title: 'Home',
    },
    {
        key: 'internship',
        href: '/internship-dashboard',
        title: 'Internship Dashboard',
    },
];

const data = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
        {
            data: [40, 50, 10], // Sample data, replace with your actual data
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        },
    ],
};

const InternshipDashBoard = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [text, setText] = React.useState('https://ant.design/');

    return (


        <Layout>

            <Content
                style={{
                    margin: '0 16px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}

                    items={breadItems}
                />

                <Typography.Text><h4>Internships Dashboard</h4></Typography.Text>
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                    }}
                >
                    <div className="internship-stats-container">
                        <div className="numeric-status-container">
                            <div className="numeric-staus-subcontainer">
                                <div className="total-aplications-container">
                                    <Typography.Title level={4}><UserOutlined /> Total Applications </Typography.Title>
                                    <div className='total-application-subcontiner' >
                                        <Typography.Title level={3}>100+</Typography.Title>
                                    </div>
                                </div>
                                <div className="total-views-container">
                                    <Typography.Title level={4}><EyeOutlined /> Total Views </Typography.Title>
                                    <div className='total-views-subcontiner' >
                                        <Typography.Title level={3}>1000+</Typography.Title>
                                    </div>
                                </div>
                            </div>
                            <div className="copy-link-container">
                                <Space direction="vertical" align="center">
                                    <QRCode value={text || '-'} />
                                    <Input
                                        placeholder="-"
                                        maxLength={60}
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                    />
                                </Space>
                            </div>
                        </div>
                        <div className="gender-ratio-container ">
                            <Typography.Title level={4}>Gender Ratio </Typography.Title>
                            <div className='pie-chart-container' >
                                <Pie data={data} />
                            </div>
                        </div>
                    </div>
                    <ApplicantsTableComponent />
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    )
}

export default InternshipDashBoard
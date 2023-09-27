import React from 'react';
import { Breadcrumb, Layout, Modal, Typography, theme } from 'antd';
const { Content, Footer } = Layout;
import UploadComponent from './UploadComponent/UploadComponent';
import ActiveWebinarComponent from './ActiveWebinarComponent/ActiveWebinarComponent';
import CompletedWebinarComponent from './CompletedWebinarComponent/CompletedWebinarComponent';


const breadItems = [
    {
        key: 'home',
        href: '/',
        title: 'Home',
    },
    {
        key: 'webinars',
        href: '/webinar',
        title: 'Webinars',
    },
];

const WebinarComponent = () => {


    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>

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

                    <Typography.Text><h4>Webinars Manager</h4></Typography.Text>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <UploadComponent />


                        <ActiveWebinarComponent />
                        <CompletedWebinarComponent />
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

        </>
    )
}

export default WebinarComponent
import React from 'react';
import { Breadcrumb, Layout, Typography, theme } from 'antd';
import StatsTable from './StatsTable/StatsTable';
const { Content, Footer } = Layout;


const breadItems = [
    {
        key: 'home',
        href: '/',
        title: 'Home',
    },
    {
        key: 'stats',
        href: '/stats',
        title: 'Stats',
    },
];

const StatsComponent = () => {

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

                    <Typography.Text><h4>Search Stats</h4></Typography.Text>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <StatsTable />
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

export default StatsComponent
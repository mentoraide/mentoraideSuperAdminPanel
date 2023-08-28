import React, { useState } from 'react';
import "./SideBarAndNavbar.css"
import {
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Typography, theme } from 'antd';
import UserTable from '../UserTable/UserTable';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [

    getItem('Dashboard', 'sub1', <UserOutlined />, [
        getItem('Tom', '1'),
        getItem('Bill', '2'),
        getItem('Alex', '3'),
    ]),
    getItem('User', 'sub2', <UserOutlined />, [
        getItem('Tom', '33'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Stats', 'sub3', <UserOutlined />, [
        getItem('Team 1', '6'),
        getItem('Team 2', '7')
    ]),
    getItem('Social Media', 'sub4', <UserOutlined />, [
        getItem('Team 1', '8'),
        getItem('Team 2', '9')
    ]),
    getItem('Trainer', 'sub5', <UserOutlined />, [
        getItem('Team 1', '10'),
        getItem('Team 2', '11')
    ]),
    getItem('Webinars', 'sub6', <UserOutlined />, [
        getItem('Team 1', '12'),
        getItem('Team 2', '13')
    ]),
    getItem('Workshop', 'sub7', <UserOutlined />, [
        getItem('Team 1', '14'),
        getItem('Team 2', '15')
    ]),
    getItem('Campus', 'sub8', <UserOutlined />, [
        getItem('Team 1', '16'),
        getItem('Team 2', '17')
    ]),

];

const breadItems = [
    {
        key: 'home',
        href: '/',
        title: 'Home',
    },
    {
        key: 'user',
        href: '/user',
        title: 'User',
    },
];
const SideBarAndNavbar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}>
                <div className="demo-logo-vertical" />
                <Menu mode="inline" items={items} />
            </Sider>
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

                    <Typography.Text><h4>Search Users</h4></Typography.Text>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        {/* <UserTable /> */}
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
        </Layout>
    );
};
export default SideBarAndNavbar;
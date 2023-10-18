import React, { useState } from 'react';
import "./SideBar.css"
import {
    AppstoreOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function getItem(label, key, icon) {
    return {
        key,
        icon,
        label,
    };
}
const items = [

    getItem(<Link to={"/"} >Dashboard</Link>, 'sub1', <AppstoreOutlined />),
    getItem(<Link to={"/users"} >Users</Link>, 'sub2', <UserOutlined />),
    getItem(<Link to={"/stats"} >Stats</Link>, 'sub3', <UserOutlined />),
    getItem(<Link to={"/socialmedia"} >Social Media</Link>, 'sub4', <UserOutlined />),
    getItem(<Link to={"/trainer"} >Trainer</Link>, 'sub5', <UserOutlined />),
    getItem(<Link to={"/webinar"} >Webinars</Link>, 'sub6', <UserOutlined />),
    getItem(<Link to={"/internship"}>Internships</Link>, 'sub7', <UserOutlined />),
    getItem(<Link to={"/workshop"} >Workshop</Link>, 'sub8', <UserOutlined />),
    getItem(<Link to={"/campus"} >Campus</Link>, 'sub9', <UserOutlined />),

];

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>

            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}>

                <Menu mode="inline" items={items} expandIcon={<MenuFoldOutlined />} />


            </Sider>

        </>
    )
}

export default SideBar
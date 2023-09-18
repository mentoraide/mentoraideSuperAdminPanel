import React from 'react'
import "./ScreenOne.css"
import { Button, Typography } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
import { Avatar, Tooltip } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";


const SreenOne = () => {
    return (
        <>
            <div className="screen-one">
                <div className="box-1">
                    <div className="content">
                        <Typography.Title level={1} className="title">
                            Discover a World of Community <AppstoreOutlined /> with MentorAide
                        </Typography.Title>

                        <Button type="primary" size="large" className="download-button">Download the app</Button>

                        <div className="people-avatars">
                            <Avatar.Group>
                                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                <a href="https://ant.design">
                                    <Avatar
                                        style={{
                                            backgroundColor: "#f56a00"
                                        }}
                                    >
                                        K
                                    </Avatar>
                                </a>
                                <Tooltip title="Ant User" placement="top">
                                    <Avatar
                                        style={{
                                            backgroundColor: "#87d068"
                                        }}
                                        icon={<UserOutlined />}
                                    />
                                </Tooltip>
                                <Avatar
                                    style={{
                                        backgroundColor: "#1677ff"
                                    }}
                                    icon={<AntDesignOutlined />}
                                />
                            </Avatar.Group>
                            <Typography.Text className="people-avatars-text">
                                100+ <br />
                                users nationwide
                            </Typography.Text>
                        </div>

                    </div>
                </div>
                <div className="box-2">
                    <div className="hand-image-box">
                    </div>
                </div>
            </div>
        </>
    )
}

export default SreenOne
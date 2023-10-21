import { Avatar, Drawer, List } from 'antd'
import React, { useState } from 'react'
import "./InfoCard.css"

const InfoCard = ({ name, college, email }) => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <List
                dataSource={[
                    {
                        id: 1,
                        name: name,
                    },
                ]}
                renderItem={(item) => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <a onClick={showDrawer} key={`a-${item.id}`}>
                                View Profile
                            </a>,
                        ]}
                    >
                        <List.Item.Meta
                            avatar={
                                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                            }
                            title={item.name}
                            description={<div className="info-card-college">{college} <br /> <span className='info-card-email'>{email}</span></div>}
                        />

                    </List.Item>
                )}
            />

            <Drawer width={'60vw'} placement="right" closable={false} onClose={onClose} open={open}>
                {/* Things required inside drawer component 
- Name, Gender, Educational background(eg. engineering), course, year and resume in an iframe format */}

                <div className="info-card-drawer">
                    <h1 className="info-card-drawer-name"> <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" className='avatar-info-container' size={64} />  {name}</h1>
                    <div className="info-card-drawer-educational-background">
                        <div className="info-card-drawer-college">{college}</div>
                        <div className="info-card-drawer-educational-background-course">B.Tech</div>
                        <div className="info-card-drawer-educational-background-year">2019-2023</div>
                        <div className="info-card-drawer-email">{email}</div>
                    </div>
                    <div className="info-card-drawer-resume">
                        <iframe src="https://drive.google.com/file/d/1f7qXc6jZK4uQl5n6J5s5f9h5dXwQ9Y9m/preview" width="100%" height="100%"></iframe>
                    </div>
                </div>



            </Drawer>

        </>
    )
}

export default InfoCard
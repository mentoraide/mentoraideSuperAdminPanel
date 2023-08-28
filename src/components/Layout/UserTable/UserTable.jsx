import { Button, Input, Space, Typography, Dropdown } from 'antd'
import Search from 'antd/es/input/Search'
import React from 'react'
import './UserTable.css'
import { QuestionCircleOutlined, SettingOutlined, RedoOutlined, FullscreenOutlined, ColumnHeightOutlined, DownOutlined, PlusOutlined } from '@ant-design/icons'
import Link from 'antd/es/typography/Link'
import TableComponent from './TableComponent'

const onSearch = (value) => console.log(value);

const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
    }
];


const UserTable = () => {
    return (
        <>
            <Space direction="horizontal" className='search-box'>

                <Space>
                    <label style={{ fontSize: "small" }} >User Name : <QuestionCircleOutlined /> </label>
                    <Input placeholder="Basic usage" size='medium' />
                </Space>


                <Space>
                    <label style={{ fontSize: "small" }}>College :</label>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="medium"
                        onSearch={onSearch}
                    />

                    <Button type="primary" size='medium'>Filter</Button>

                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Expand
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </Space>
            </Space>
            <Space direction="horizontal" className='tools-box'>
                <Space>
                    <Typography.Text type="secondary">Search User</Typography.Text>
                </Space>


                <Space>

                    <Button type="primary" size='medium'>View Log</Button>
                    <Button type="primary" size='medium'><PlusOutlined />ADD</Button>




                    <Link><RedoOutlined /></Link>
                    <Link><ColumnHeightOutlined />  </Link>
                    <Link><SettingOutlined />  </Link>
                    <Link><FullscreenOutlined />  </Link>

                </Space>
            </Space>

            <TableComponent />

        </>
    )
}

export default UserTable
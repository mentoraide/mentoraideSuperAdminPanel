import React from 'react';
import { Breadcrumb, Layout, Typography, theme } from 'antd';
import UserTable from './UserTable/UserTable';
const { Content, Footer } = Layout;


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

const DashboardComponent = () => {

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

          <Typography.Text><h4>Search Users</h4></Typography.Text>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <UserTable />
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

export default DashboardComponent
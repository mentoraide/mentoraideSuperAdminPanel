import React from 'react';
import { Tabs } from 'antd';
import './LoginSignUp.css'
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Login',
        children: <div> <Login /> </div>,
    },
    {
        key: '2',
        label: 'SignUp',
        children: <div> <SignUp /> </div>,
    }
];
const LoginSignUp = () => <Tabs defaultActiveKey="1" items={items} style={{ maxWidth: "100%" }} onChange={onChange} />;
export default LoginSignUp;
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import logo from '../../../assets/Social_Media_Icons.png'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <div className="logo-img"><img src={logo} alt="" /></div>
                    <div className="logo-text">MentorAide</div>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link>Overview</Link></li>
                    <li><Link>Features</Link></li>
                    <li><Link>Contact Us</Link></li>
                    <li><Link>About Us</Link></li>
                    <li><Button>Login</Button></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
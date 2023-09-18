import React from 'react'
import "./ScreenNine.css"
import { YoutubeOutlined, InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

const ScreenNine = () => {
    return (
        <>
            <div className="screen-section-nine">
                <div className="div">
                    <div className="footer-log-wrapper">
                        <div className="footer-log" >
                        </div>
                    </div>
                    <div className="div-2">
                        <div className="text-wrapper">Company</div>
                        <div className="text-wrapper-2">About Us</div>
                        <div className="text-wrapper-2">Contact Us</div>
                    </div>
                    <div className="div-2">
                        <div className="text-wrapper">Services</div>
                        <div className="text-wrapper-2">Webinars</div>
                        <div className="text-wrapper-2">Workshops</div>
                        <div className="text-wrapper-2">Internships</div>
                        <div className="text-wrapper-2">Social Media</div>
                    </div>
                    <div className="div-2">
                        <div className="text-wrapper">Legal</div>
                        <div className="text-wrapper-2">Privacy Policies</div>
                        <div className="text-wrapper-2">Terms &amp; Conditions</div>
                        <div className="text-wrapper-2">Licenses</div>
                        <div className="text-wrapper-2">Cookies</div>
                    </div>
                    <div className="div-3">
                        <div className="text-wrapper">Addresses</div>
                        <p className="amity-university">
                            <span className="span">
                                Amity University
                                <br />
                            </span>
                            <span className="text-wrapper-3">
                                G8VM+H69, Amity Rd, Sector 125,
                                <br />
                                Noida, Uttar Pradesh 201301
                            </span>
                        </p>
                        <p className="siddharth-university">
                            <span className="span">
                                Siddharth University
                                <br />
                            </span>
                            <span className="text-wrapper-3">
                                C4MF+R94, Kapilvastu, Kapilavastu Rd, <br />
                                Berdpur No.9, Uttar Pradesh 272202
                            </span>
                        </p>
                        <p className="registered-address">
                            <span className="span">
                                Registered Address
                                <br />
                            </span>
                            <span className="text-wrapper-3">
                                UG-2, DS Homes, Sector 70, Noida,
                                <br />
                                Uttar Pradesh 201301
                            </span>
                        </p>
                    </div>
                </div>
                <div className="copyright-social">
                    <p className="p">SPARKLING MINDS TECHNOLOGIES PVT. LTD.© 2023. All rights reserved.</p>
                    <div className="social-links">
                        <YoutubeOutlined />
                        <InstagramOutlined />
                        <FacebookOutlined />
                        <TwitterOutlined />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScreenNine
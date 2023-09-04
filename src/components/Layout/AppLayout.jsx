import React from 'react'
import Topbar from './Topbar/Topbar'
import SideBar from './SideBar/SideBar'
import DashboardComponent from "./DashboardComponent/DashboardComponent"
import UserComponent from "./UserComponent/UserComponent"
import StatsComponent from "./StatsComponent/StatsComponent"
import SocialMediaComponent from "./SocialMediaComponent/SocialMediaComponent"
import TrainerComponent from "./TrainerComponent/TrainerComponent"
import WorkshopComponent from "./WorkshopComponent/WorkshopComponent"
import WebinarComponent from "./WebinarComponent/WebinarComponent"
import CampusComponent from "./CampusComponent/CampusComponent"
import { Layout } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';


const AppLayout = () => {
    return (
        <>
            <Topbar />
            <Router>
                <Layout style={{ minHeight: '100vh' }} >

                    <SideBar />
                    <Routes>
                        <Route path="/" element={<DashboardComponent />} />
                        <Route path="/users" element={<UserComponent />} />
                        <Route path="/stats" element={<StatsComponent />} />
                        <Route path="/socialmedia" element={<SocialMediaComponent />} />
                        <Route path="/trainer" element={<TrainerComponent />} />
                        <Route path="/workshop" element={<WorkshopComponent />} />
                        <Route path="/webinar" element={<WebinarComponent />} />
                        <Route path="/campus" element={<CampusComponent />} />
                    </Routes>
                </Layout>
            </Router>
        </>
    )
}

export default AppLayout
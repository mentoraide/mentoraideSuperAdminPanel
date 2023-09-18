import React from 'react'
import Navbar from './Navbar/Navbar'
import SreenOne from './ScreenOne/SreenOne'
import ScreenTwo from './ScreenTwo/ScreenTwo'
import ScreenSix from './ScreenSix/ScreenSix'
import ScreenThree from './ScreenThree/ScreenThree'
import "./LandingPage.css"
import ScreenFour from './ScreenFour/ScreenFour'
import ScreenFive from './ScreenFive/ScreenFive'
import ScreenSeven from './ScreenSeven/ScreenSeven'
import ScreenEight from './ScreenEight/ScreenEight'
import ScreenNine from './ScreenNine/ScreenNine.jsx'


const LandingPage = () => {
    return (
        <>
            <section className='section-1'>
                <Navbar />
                <SreenOne />
                <ScreenTwo />
                <ScreenThree />
                <ScreenFour />
                <ScreenFive />
                <ScreenSix />
                <ScreenSeven />
                <ScreenEight />
                <ScreenNine />
            </section>

        </>
    )
}

export default LandingPage
import React from 'react'
import TopNavbar from '../components/TopNavbar'
import banner from '../assets/nvabar/banner.jpg'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import HostingPlan from '../components/HostingPlan'
import WeAre from '../components/WeAre'



const HomePage = () => {
    return (
        <section>
            <TopNavbar />
            <div style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div>
                    <Navbar />
                </div>
                <div className='block py-20'>
                    <HeroSection />
                </div>
            </div>
            <HostingPlan />
            <WeAre />


        </section>
    )
}

export default HomePage
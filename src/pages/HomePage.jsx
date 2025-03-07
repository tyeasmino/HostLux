import React from 'react'
import TopNavbar from '../components/TopNavbar'
import banner from '../assets/nvabar/banner.jpg'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import HostingPlan from '../components/HostingPlan'
import WeAre from '../components/WeAre'
import AppIntegrations from '../components/AppIntegrations'
import ScrollToTop from '../components/ScrollToTop'
import Features from '../components/Features'
import CriteriaCard from '../components/CriteriaCard'
import MigratingHosting from '../components/MigratingHosting'



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
            <div className='relative'>
                <CriteriaCard /> 
                <HostingPlan />
            </div>
            <WeAre />
            <AppIntegrations />
            <Features />
            <MigratingHosting />



            <ScrollToTop />
        </section>
    )
}

export default HomePage
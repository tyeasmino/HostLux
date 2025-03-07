import React from 'react'
import TopNavbar from '../components/TopNavbar'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import banner from '../assets/nvabar/banner.jpg'
import RegistrationBanner from '../components/RegistrationBanner'
import RegistrationForm from '../components/RegistrationForm'



const RegisterPage = () => {
    return (
        <section>
            <TopNavbar />
            <div style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div>
                    <Navbar />
                </div>
                <div className='bg-[#00149D] py-10'>
                    <RegistrationBanner />
                </div>
            </div>
          
            <RegistrationForm />


            <ScrollToTop />
        </section>
    )
}

export default RegisterPage
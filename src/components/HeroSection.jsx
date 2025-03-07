import React from 'react'
import correct from '../assets/herosection/hero-icon.png'
import heroimg from '../assets/herosection/truspilot-logo.png'
import herothumb from '../assets/herosection/hero-thumb.png'


const HeroSection = () => {
    return (
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row mb-30 px-5 md:px-0 gap-20 items-center justify-between'>
            <div className='text-white  md:w-1/2 flex flex-col gap-7'>
                <button className='w-fit flex items-center rounded gap-3   px-3 py-2' style={{ backgroundImage: 'linear-gradient(to right, #0125C1, transparent)' }} >
                    <img src={correct} alt="" />
                    <span>Best Perfomance Gauranted!</span>
                </button>

                <h1 className='text-3xl md:text-6xl font-semibold'>
                    Easy and Managed
                    Application Website
                    Hosting Service
                </h1>

                <p className='text-gray-300'>
                    Conveniently grow superior architectures without magnetic e-markets web host Uniquely whiteboard low high-yield opportunities done.
                </p>

                <div className='flex flex-col md:flex-row gap-5 md:gap-10 items-start md:items-center'>
                    <button className='px-12 py-5 font-semibold rounded-md' style={{ backgroundImage: 'linear-gradient(113deg, #0f58ff 0%, #1387ff 100%)' }}>
                        Get Started
                    </button>

                    <div className='flex flex-col md:flex-row gap-3 md:gap-5 items-start md:items-center'>
                        <img src={heroimg} alt="" />
                        <span className='hidden md:block text-gray-500'>|</span>
                        <span className='font-semibold text-xl'>4.7 Out of 5</span>
                    </div>
                </div>
            </div>

            <div className='md:w-1/2'>
                <img src={herothumb} alt="" />
            </div>
        </div>
    )
}

export default HeroSection
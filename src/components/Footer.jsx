import React from 'react'
import banner from '../assets/nvabar/banner.jpg'
import logo from '../assets/nvabar/logo.png'


import logo1 from '../assets/footer/pyment-logo1.png'
import logo2 from '../assets/footer/pyment-logo2.png'
import logo3 from '../assets/footer/pyment-logo3.png'

import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <section style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <section className='max-w-screen-xl mx-auto py-30 px-5'>
        <div className='text-white flex flex-col gap-10 md:flex-row md:gap-20'>

          <div className='md:w-1/3 flex flex-col gap-8'>
            <img className='w-fit' src={logo} alt="" />
            <p className='font-semibold'>
              Collaboratively formulate principle-centered users capital. Progressively evolve domain and hosting cultivate revolutionary
            </p>

            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-3'>
                <TfiLayoutLineSolid className='text-[#116AFF]' /> <span className='font-semibold'>Follow Us On</span>
              </div>

              <div className='flex items-center gap-3'>
                <div className='p-2 rounded-full bg-[#116AFF]'>
                  <FaFacebookF />
                </div>
                <div className='p-2 rounded-full bg-[#116AFF]'>
                  <FaXTwitter />
                </div>
                <div className='p-2 rounded-full bg-[#116AFF]'>
                  <FaLinkedinIn />
                </div>
                <div className='p-2 rounded-full bg-[#116AFF]'>
                  <FaInstagram />
                </div>
              </div>

            </div>

          </div>

          <div className='md:w-1/3 flex flex-col md:flex-row gap-5'>
            <div className='md:w-1/2 flex flex-col gap-10'>
              <h1 className='font-semibold text-2xl'>Quick Links</h1>

              <ul className='flex flex-col gap-3'>
                <li className='flex items-center gap-3'> <FaAnglesRight className='text-sm text-[#116AFF]' /> About Us </li>
                <li className='flex items-center gap-3'> <FaAnglesRight className='text-sm text-[#116AFF]' /> Support Center </li>
                <li className='flex items-center gap-3'> <FaAnglesRight className='text-sm text-[#116AFF]' /> Domain Search </li>
                <li className='flex items-center gap-3'> <FaAnglesRight className='text-sm text-[#116AFF]' /> My Account </li>
                <li className='flex items-center gap-3'> <FaAnglesRight className='text-sm text-[#116AFF]' /> Contact Us </li>
              </ul>
            </div>
            <div className='md:w-1/2 flex flex-col gap-10'>
              <h1 className='font-semibold text-2xl'>Quick Links</h1>
              <ul className='flex flex-col gap-3'>
                <li className='flex items-center gap-3'> <FaAnglesRight className='text-sm text-[#116AFF]' /> Cloud Hosting </li>
                <li className='flex items-center gap-3'> <FaAnglesRight className='text-sm text-[#116AFF]' /> VPS Hosting </li>
                <li className='flex items-center gap-3'> <FaAnglesRight className='text-sm text-[#116AFF]' /> Shared Hosting </li>
                <li className='flex items-center gap-3'> <FaAnglesRight className='text-sm text-[#116AFF]' /> WP Hosting </li>
                <li className='flex items-center gap-3'> <FaAnglesRight className='text-sm text-[#116AFF]' /> Web Hosting </li>
              </ul>
            </div>
          </div>

          <div className='md:w-1/3 flex flex-col gap-8'>
            <h1 className='font-semibold text-2xl'>Latest Blog</h1>

            <div className='flex flex-col gap-3'>
              <p className='text-gray-400 font-semibold'>Subscribe Our Newsletter</p>
              <form action="" className='relative'>
                <input className='border pl-3 pr-40 w-full py-5 rounded' type="email" placeholder='Enter Your Email' />
                <button className='absolute right-2 bottom-[10px] bg-[#116AFF] rounded px-5 py-3 '>SUBSCRIBE</button>
              </form>
            </div>

            <div className='flex flex-col gap-3'>
              <h1 className='font-semibold text-xl'>Payment Gateway</h1>
              <div className='flex gap-3 items-center'>
                <div className='border border-gray-600 rounded px-5 py-3'><img className='h-3' src={logo1} alt="" /></div>
                <div className='border border-gray-600 rounded px-5 py-3'><img className='h-3' src={logo2} alt="" /></div>
                <div className='border border-gray-600 rounded px-5 py-3'><img className='h-3' src={logo3} alt="" /></div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-[1px] mt-20 bg-gray-600'>  </div>
        <div className='text-center  mt-10 text-white'>
          Copyright 2025 Host LuxAll Rights Reserved
        </div>
      </section>
    </section>
  )
}

export default Footer
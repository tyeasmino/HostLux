import React from 'react'
import topbg from '../assets/top_navbar/top_bg-home.jpg'
import topleftstar from '../assets/top_navbar/top-left-star.png'
import toprightstar from '../assets/top_navbar/top-right-star.png'
import { FaArrowRightLong } from "react-icons/fa6";


const TopNavbar = () => {
  return (        
    <div className='hidden text-white font-semibold md:flex items-center justify-center gap-6' 
    style={{ backgroundImage: `url(${topbg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '50px' }}>
        <img src={topleftstar} alt="" />
        <span>Hostlux Flash Discount: Starting at $3.49/mo for a Limited time</span>
        <span className='relative flex items-center gap-2'>View details <FaArrowRightLong /> <span className='bottom-0 absolute w-full h-[1px] bg-yellow-400'></span> </span>
        <img src={toprightstar} alt="" />
    </div>     
  )
}

export default TopNavbar
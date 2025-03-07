import React from 'react'
import icon1 from '../assets/Criteria/feature-icon_01.png'
import icon2 from '../assets/Criteria/feature-icon_02.png'
import icon3 from '../assets/Criteria/feature-icon_03.png'
import icon4 from '../assets/Criteria/feature-icon_04.png'



const CriteriaCard = () => {
  return (
    <>
      <style>
        {`
          @keyframes bounceTwice {
            0%, 100% { transform: translateY(0); }  
            25% { transform: translateY(-10px); }   
            50% { transform: translateY(0); }  
            75% { transform: translateY(-5px); }  
          }
        `}
      </style>

        <section className='max-w-screen-xl mx-auto'>
          <section className='absolute -top-10 flex flex-col md:flex-row gap-6 justify-between items-center'>
            <div className='md:w-[300px] bg-white p-10 rounded-md group border-b-4 border-white group hover:border-[#1387FF] flex flex-col gap-5 items-start'>
              <img className="group-hover:animate-[bounceTwice_0.6s_ease-in-out]" src={icon1} alt="" />
              <h1 className='font-semibold text-xl'>Safe and Secured</h1>
            </div>
            <div className='md:w-[300px] bg-white p-10 rounded-md group border-b-4 border-white group hover:border-[#1387FF] flex flex-col gap-5 items-start'>
              <img className="group-hover:animate-[bounceTwice_0.6s_ease-in-out]" src={icon2} alt="" />
              <h1 className='font-semibold text-xl'>99.90% Uptime</h1>
            </div>
            <div className='md:w-[300px] bg-white p-10 rounded-md group border-b-4 border-white group hover:border-[#1387FF] flex flex-col gap-5 items-start'>
              <img className="group-hover:animate-[bounceTwice_0.6s_ease-in-out]" src={icon3} alt="" />
              <h1 className='font-semibold text-xl'>Autometic Update</h1>
            </div>
            <div className='md:w-[300px] bg-white p-10 rounded-md group border-b-4 border-white group hover:border-[#1387FF] flex flex-col gap-5 items-start'>
              <img className="group-hover:animate-[bounceTwice_0.6s_ease-in-out]" src={icon4} alt="" />
              <h1 className='font-semibold text-xl'>Speed Gauranty</h1>
            </div>
          </section>
        </section>
    </>
  )
}

export default CriteriaCard
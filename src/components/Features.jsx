import React from 'react'
import feature_bg from '../assets/Features/feature_bg.jpg'
import ficon1 from '../assets/Features/feature-icon01.jpg'
import ficon2 from '../assets/Features/feature-icon02.jpg'
import ficon3 from '../assets/Features/feature-icon03.jpg'
import ficon4 from '../assets/Features/feature-icon04.jpg'
import ficon5 from '../assets/Features/feature-icon05.jpg'
import ficon6 from '../assets/Features/feature-icon06.jpg'

const Features = () => {
    return (
        <>
            <style>
                {`
                    @keyframes bounceTwice {
                        0%, 100% { transform: translateY(0); }  
                        25% { transform: translateY(-10px); }  /* First bounce */
                        50% { transform: translateY(0); }  
                        75% { transform: translateY(-5px); }  /* Second bounce */
                    }
                `}
            </style>


            <section style={{ backgroundImage: `url(${feature_bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <section className='max-w-screen-xl mx-auto py-40'>

                    <div className='max-w-screen-sm mx-auto mb-20 flex flex-col gap-5 text-center' >
                        <h1 className='md:text-4xl font-bold'>Hostlux Powerful Features</h1>
                        <p>Collaboratively formulate principle-centered users and revolutionary human capital. Progressively evolve domain and hosting</p>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <div className='flex flex-col md:flex-row px-5 md:px-0 gap-8'>
                            <div className='md:w-1/3 border-b-4 border-white group hover:border-[#1387FF] flex flex-col gap-5 items-center px-2 md:px-10 py-5 md:py-14 rounded-lg bg-white'>
                                <img className="group-hover:animate-[bounceTwice_0.6s_ease-in-out]" src={ficon1} alt="" />
                                <h1 className='font-semibold text-[18px] md:text-2xl'>Maximum Performance</h1>
                                <p className='text-gray-500 text-[16px] text-center'>Collaboratively formulate principle-centered capital. Progressively evolve users and it’s revolutionary human</p>
                            </div>
                            <div className='md:w-1/3 border-b-4 border-white group hover:border-[#1387FF] flex flex-col gap-5 items-center px-2 md:px-10 py-5 md:py-14 rounded-lg bg-white'>
                                <img className="group-hover:animate-[bounceTwice_0.6s_ease-in-out]" src={ficon2} alt="" />
                                <h1 className='font-semibold text-[18px] md:text-2xl'>Powerful Security</h1>
                                <p className='text-gray-500 text-[16px] text-center'>Collaboratively formulate principle-centered capital. Progressively evolve users and it’s revolutionary human</p>
                            </div>
                            <div className='md:w-1/3 border-b-4 border-white group hover:border-[#1387FF] flex flex-col gap-5 items-center px-2 md:px-10 py-5 md:py-14 rounded-lg bg-white'>
                                <img className="group-hover:animate-[bounceTwice_0.6s_ease-in-out]" src={ficon3} alt="" />
                                <h1 className='font-semibold text-[18px] md:text-2xl'>Moneyback Gauranty</h1>
                                <p className='text-gray-500 text-[16px] text-center'>Collaboratively formulate principle-centered capital. Progressively evolve users and it’s revolutionary human</p>
                            </div>    
                        </div>
                        <div className='flex flex-col md:flex-row px-5 md:px-0 gap-8'>
                            <div className='md:w-1/3 border-b-4 border-white group hover:border-[#1387FF] flex flex-col gap-5 items-center px-2 md:px-10 py-5 md:py-14 rounded-lg bg-white'>
                                <img className="group-hover:animate-[bounceTwice_0.6s_ease-in-out]" src={ficon4} alt="" />
                                <h1 className='font-semibold text-[18px] md:text-2xl'>Speed Optimization</h1>
                                <p className='text-gray-500 text-[16px] text-center'>Collaboratively formulate principle-centered capital. Progressively evolve users and it’s revolutionary human</p>
                            </div>
                            <div className='md:w-1/3 border-b-4 border-white group hover:border-[#1387FF] flex flex-col gap-5 items-center px-2 md:px-10 py-5 md:py-14 rounded-lg bg-white'>
                                <img className="group-hover:animate-[bounceTwice_0.6s_ease-in-out]" src={ficon5} alt="" />
                                <h1 className='font-semibold text-[18px] md:text-2xl'>FTP Supported</h1>
                                <p className='text-gray-500 text-[16px] text-center'>Collaboratively formulate principle-centered capital. Progressively evolve users and it’s revolutionary human</p>
                            </div>
                            <div className='md:w-1/3 border-b-4 border-white group hover:border-[#1387FF] flex flex-col gap-5 items-center px-2 md:px-10 py-5 md:py-14 rounded-lg bg-white'>
                                <img className="group-hover:animate-[bounceTwice_0.6s_ease-in-out]" src={ficon6} alt="" />
                                <h1 className='font-semibold text-[18px] md:text-2xl'>Free Supports 24/7</h1>
                                <p className='text-gray-500 text-[16px] text-center'>Collaboratively formulate principle-centered capital. Progressively evolve users and it’s revolutionary human</p>
                            </div>    
                        </div>

                         
                    </div>
                </section>
            </section>
        </>
    )
}

export default Features
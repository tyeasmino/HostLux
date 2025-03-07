import React from 'react'
import register from '../assets/shared-hosting.png'


const RegistrationBanner = () => {
  return (
    <section className='text-white max-w-screen-xl mx-auto flex items-center justify-between gap-20'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-5xl font-bold'>REGISTION</h1>
            <div className='flex gap-3 font-semibold'>
                <span>HOME</span>
                <span>/</span>
                <span>REGISTION</span>
            </div>
        </div>

        <div>
            <img src={register} alt="" />
        </div>
    </section>
  )
}

export default RegistrationBanner
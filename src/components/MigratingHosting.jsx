import React from 'react'
import bg from '../assets/migrating/proved-bg.jpg'
import shape1 from '../assets/100Apps/pricin-shape2.png'
import shape2 from '../assets/100Apps/category_shape3.png'
import blog from '../assets/migrating/blog_thumb03.png'

const MigratingHosting = () => {
    return (
        <>
            <style>
                {`
                    @keyframes floatAnimation {
                        0% { transform: translate(0, 0); }
                        25% { transform: translate(20px, -20px); } 
                        50% { transform: translate(0, -40px); }
                        75% { transform: translate(-20px, -20px); }
                        100% { transform: translate(0, 0); }
                    }

                    @keyframes zoomInOut {
                        0%, 100% { transform: scale(0.6); }  /* Normal size */
                        50% { transform: scale(1.2); }    /* Zoom in */
                    }
                `}
            </style>
            <section style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <section className='px-5 md:px-0 relative md:flex-row justify-between items-center max-w-screen-xl mx-auto py-10 flex flex-col gap-10 md:gap-60'>
                    <div className='md:w-1/2 text-white flex flex-col gap-10'>
                        <h1 className='md:text-4xl text-white font-bold'>Migrating Hosting Another
                            Hosting Server’s</h1>
                        <p>Collaboratively formulate principle-centered users and revolutionary human capital. Progressively evolve domain and hosting pursue parallel platforms with inexpensive expertise completely</p>

                        <button className='px-6 md:px-12 py-3 md:py-5 w-fit font-semibold rounded-md' style={{ backgroundImage: 'linear-gradient(113deg, #0f58ff 0%, #1387ff 100%)' }}>
                            Contact with Us
                        </button>

                        <img className="absolute top-100 md:left-150 md:top-50 animate-[floatAnimation_5s_infinite_linear]"
                            src={shape2} alt=""
                        />

                        <img className='absolute left-50 top-83 md:left-70 md:top-94 animate-[zoomInOut_3s_infinite_alternate]' src={shape1} alt="" />
                    </div>
                    <div className='md:w-1/2'>
                        <img src={blog} alt="" />
                    </div>
                </section>
            </section>
        </>
    )
}

export default MigratingHosting
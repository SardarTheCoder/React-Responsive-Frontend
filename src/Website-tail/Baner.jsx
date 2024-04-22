import React from 'react'
import { ReactTyped } from 'react-typed'

const Baner = () => {
  return (
    <>
       <div className="bg-blue-500 py-[20px] md:py-[70px] flex flex-col justify-center  items-center">
        <div className="text-center font-bold mx-auto py-[120px] ">
            <div className="text-3xl  md: mt-4">
                Learn with us
            </div>
        <h2 className='text-3xl md:text-5xl text-white mt-4 font-serif'>
            Grow with us.....
        </h2>
        <div className="text-2xl md:text-4xl text-fuchsia-700 mt-4 font-mono">
            Learn <ReactTyped
          loop={true}
          strings={["Full Stack Web Development & m.more"]}
          typeSpeed={50}
          backSpeed={50}
        />
        </div>
         </div>
        <button className='bg-black w-[40%]  rounded-lg text-white font-xl font-bold'>Get Started</button>
       </div>

    </>
  )
}

export default Baner
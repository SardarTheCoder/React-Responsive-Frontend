import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
    const [toggle,setToggle]=useState(false)
  return (
    <>
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-5 flex justify-between">
        <div className="text-wrap  text-3xl font-bold font-serif ">
            WScube Tech
        </div>
        {
            toggle ?< RxCross1 onClick={()=>setToggle(!toggle)}  className='md:hidden block cursor-pointer text-white text-xl mt-2 '/>
            :
        
            <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='md:hidden block cursor-pointer text-white text-xl mt-2 '  />
        }
       


        
        <ul className='text-white text-xl font-bold gap-5  mx-[20px]
        font-sans hidden md:flex cursor-pointer'>
            <li className='hover:text-blue-950' >Home</li>
            <li  className='hover:text-blue-950' >Company </li>
            <li  className='hover:text-blue-950'>Resources</li>
            <li  className='hover:text-blue-950 transition-all' >About us</li>
        </ul>
              



          {/* RESPONSIVENESS */}
          <ul className={`duration-500 text-white text-xl font-bold  text-center  
        font-sans md:hidden bg-black w-screen h-screen top-[75px] fixed
        ${toggle ? 'left-[0]' : 'left-[-105%]'} `}>
            <li className='hover:text-blue-950 mt-5 ' >Home</li>
            <li  className='hover:text-blue-950  mt-5' >Company </li>
            <li  className='hover:text-blue-950  mt-5'>Resources</li>
            <li  className='hover:text-blue-950   mt-5 transition-all' >About us</li>
        </ul>

    </div>
    </>
  )
}

export default Header
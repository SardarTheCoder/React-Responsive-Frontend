import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='bg-slate-950 relative p-14 md:flex sm:gap-3 justify-between'>
      <div className="links text-white flex gap-4 font-bold text-2xl">
        <div className="link 1  hover:text-3xl hover:text-purple-600 transition-all">
        <FaWhatsapp />
        </div>
        <div className="link 2  hover:text-3xl hover:text-purple-600 transition-all">
        <FaFacebookSquare />
        </div>
        <div className="link 3 hover:text-3xl hover:textxt-purple-600 transition-all ">
        <FaXTwitter />
        </div>
        <div className="link  hover:text-3xl hover:text-purple-600 transition-all">
        <CiYoutube />
        </div>
      </div>
      <div className="copy  font-serif text-slate-600 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  )
}

export default Footer
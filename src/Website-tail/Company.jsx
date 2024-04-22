import React from 'react'

const Company = () => {
  return (
    <>
    <h1 className='text-4xl border-black bg-blue-400 text-purple-700 font-extrabold text-center 
       font-serif text-[50px] p-4 capitalize '>
        Contact us:
        </h1>
    <div className="bg-blue-400 p-8 md:w-[100%] md:flex items-center justify-between
     rounded-lg md:h-40">
    
      <div className="p-8 items-start md:items-center">
     
      <h2 className='text-purple-800 font-bold font-serif text-[20px] md:text-[30px]'>Whatsapp:<a className='p-3 text-slate-300 cursor-pointer'>
      000-0000-999</a></h2>
      <h2 className='text-purple-800 font-bold  text-[20px] md:text-[30px]'>Facebook:<a href='https://www.facebook.com/' className='p-3 text-slate-300 cursor-pointer'>
      https://www.facebook.com/ </a> </h2>
      
     
        
      
        </div>
        <div className="text-2xl p-7 gap-5">
          <h1 className='text-purple-800  font-bold p-8 text-[30px]'>Email:
          <input  type='email' className='placeholder-stone-400 text-[20px]
           rounded-md custom- shadow gap-5' placeholder='email..'/></h1>
           <p className='text-slate-500 font-serif p-5'>Lorem ipsum dolor sit amet consectetur</p>
          </div>
    </div>
    <hr className='h-[10px] mt-4 bg-purple-700 w-[100%]'/>
    </>
  )
}

export default Company
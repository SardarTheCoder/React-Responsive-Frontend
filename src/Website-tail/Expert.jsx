import React from 'react'

const Expert = () => {
  return (
    <>
    <div className="text-5xl capitalize mt-14 text-center font-extrabold font-serif 
     text-purple-700 decoration-double">About us:  <hr className='h-[10px] mt-2 rounded-3xl w-full bg-purple-700 '/></div>
    <div className=" row flex justify-center shadow  gap-7 p-[150px]">
        <div className="img shadow-xl mt-4 col-6 md:col-8">
            <img  src="https://st4.depositphotos.com/12981370/24312/i/450/depositphotos_243120806-stock-photo-programmer-working-software-development-coding.jpg"/>
        </div>
        <div className="font text-xl text-wrap indent-8 gap-20 md:hover:text-5xl transition-all text-left col-start-8 text-gray-900 self-stretch mx-auto">
         <h1 className='text-4xl text-center  text-blue-600 font-serif font-extrabold'> 
         LEARN FROM EXPERTS:</h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/> Itaque labore expedita magni officiis dolorem facere earum distinctio illo,<br/> suscipit asperiores adipisci rerum, eligendi consequuntur, consectetur molestias cum.<br/> Rerum, repellat deserunt.<br/>
            <button className='bg-black w-[80%] mt-[40px] p-1  rounded-lg text-white font-xl font-bold'>Learn more</button>
        </div>
        
    </div>

    </>
  )
}

export default Expert
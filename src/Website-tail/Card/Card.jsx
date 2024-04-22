import React from 'react'

const Card = () => {
  return (
    <>
    <div className="main p-10   gap-16 text-white font-semibold md:flex items-center justify-between font-serif">
        <div className="card1 border-violet-900 shadow-lg hover:w-[50%] w-full  transition-all cursor-pointer  bg-cyan-600 rounded-lg flex flex-col items-center gap-14 md:w-[40%] p-5  h-[35%]">
          <h1 className='text-[20px] capitalize'>Simple Web developer</h1>
          <p className='text-[20px] text-purple-800'>$500</p>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad, velit doloremque, commodi reiciendis sint, eveniet laboriosam ex itaque placeat ullam ipsa numquam mollitia similique. Dolores, adipisci commodi? Id, nesciunt.</p>
        <button className="button bg-black w-32 p-2 text-[20px]">Start Trial</button>
        </div> 


        <div className="card1 border-violet-900 shadow-lg hover:w-[50%] transition-all cursor-pointer  bg-cyan-600 rounded-lg
          flex flex-col items-center gap-14 p-5 w-full md:w-[40%] h-[40%]">
          <h1 className='text-[20px] capitalize'>Mern Stack developer</h1>
          <p className='text-[20px] text-purple-800'>$500</p>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad, velit doloremque, commodi reiciendis sint, eveniet laboriosam ex itaque placeat ullam ipsa numquam mollitia similique. Dolores, adipisci commodi? Id, nesciunt.</p>
        <button  className="button bg-black w-32 p-2 text-[20px]">Start Trial</button>
        </div> 


        <div className="card1  border-violet-900shadow-lg hover:w-[50%] transition-all cursor-pointer  flex flex-col items-center gap-14
         bg-cyan-600 rounded-lg  p-5 w-full md:w-[40%] h-[40%]">
          <h1 className='text-[20px] capitalize'>PHP & Laravel developer</h1>
          <p className='text-[20px] text-purple-800'>$500</p>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad, velit doloremque, commodi reiciendis sint, eveniet laboriosam ex itaque placeat ullam ipsa numquam mollitia similique. Dolores, adipisci commodi? Id, nesciunt.</p>
        <button  className="button bg-black w-32 mx-auto p-2 text-[20px]">Start Trial</button>
        </div> 
        
    </div>
    </>
  )
}

export default Card
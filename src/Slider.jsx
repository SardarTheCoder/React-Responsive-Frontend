import React from 'react'

const Slider = () => {
  const Slides=[
    "src/assets/Forest Pizzo (1) 1.png"

  ]
  return (
    <>

      {Slides.map((S)=>{
        return <div className="container bg-red-500 mx-auto my-auto"><img src={S}/></div>
      })}
    </>
  )
}
export default Slider;

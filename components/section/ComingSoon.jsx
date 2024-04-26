import React from 'react'
import Image from 'next/image'

function Comingsoon() {
  return (
    <>
    <div className="min-h-screen  flex flex-col justify-center items-center">
    <Image
    className=""
    src="/images/coming.png"
    width={150}
    height={200}
    alt="aboutimage"
  />
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4">Page is under maintenance</h1>
    <p className="text-center text-white text-lg md:text-xl lg:text-2xl mb-8">We're working hard to improve the user experience. Stay tuned!</p>
    <div className="flex space-x-4">
      
    </div>
  </div>
  
    
    </>
  )
}

export default Comingsoon
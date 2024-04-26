import React from 'react'

function Mapsection({ customPadding = 'pb-0' }) {
  return (
    <>
    <div className={`w-[90%] m-auto ${customPadding}`}>
    <div className="flex flex-col md:flex-row mt-2 gap-2">
    <div className="bg-white md:w-[60%] mb-8 md:mb-0 w-full">
      <div className="rounded-lg">
        <iframe
          width="100%"
          height="300"
          frameborder="50"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
      z
    </div>
    <div className="bg-black md:w-[40%] w-full">
      <h1 className="text-white px-4 py-2 font-bold text-4xl">How can we <br className='hidden md:flex'/>help you?</h1>
      <p className="text-white px-4 md:text-[12px] text-[16px] pt-2 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus</p>
      <div className=" p-2 flex gap-2">
          <div className="bg-white w-[20%] rounded-full">&nbsp;</div>
          <div className="w-[80%]">
             <h1 className="font-bold text-white px-2 text-2xl">Address</h1>
             <p className="text-white px-2 text-[15px]">Mertasari Lane Memory, KY 7780</p>
          </div>

         
      </div>

      <div className=" p-2 flex gap-2">
      <div className="bg-white w-[20%] rounded-full">&nbsp;</div>
      <div className="w-[80%]">
         <h1 className="font-bold text-white px-2 text-2xl">Phone</h1>
         <p className="text-white px-2 text-[15px]">Mertasari Lane Memory, KY 7780</p>
      </div>

     
  </div>

  <div className=" p-2 flex gap-2">
  <div className="bg-white w-[20%] rounded-full">&nbsp;</div>
  <div className="w-[80%]">
     <h1 className="font-bold text-white px-2 text-2xl">Email</h1>
     <p className="text-white px-2 text-[15px]">Mertasari Lane Memory, KY 7780</p>
  </div>

 
</div>
    
    
    </div>
  </div>
  </div>
    
    </>
  )
}

export default Mapsection
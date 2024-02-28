import React from 'react'
import Image from "next/image";

function Sectionabout() {
    return (
        <>
            <div className='flex flex-col md:flex-row  w-[90%] m-auto mb-8 rounded-lg md:p-8 p-1 bg-gradient-to-br from-[--secondary] to-[--primary]'>
                <div>
                    <div>
                        <Image
                            src="/images/About-Us-1.png"
                            width={900}
                            height={700}
                            alt="aboutimage"
                        />
                    </div>
                </div>

                <div className='flex items-center py-4 text-white pl-4 md:pl-10'>
                    <div>
                        <div className='py-2'> 
                            <h2 className='text-[34px] font-bold'>About Us</h2>
                        </div>
                        <div>
                            <p>Welcome to Bytevision Solutions, where creativity meets technology. We are a passionate team of digital enthusiasts dedicated to transforming ideas into extraordinary online experiences </p>
                        </div>

                        <div className='py-4'>
                            <button type="button" class="bg-[--primary] text-sm sm:text-md py-3 px-5 rounded-lg font-semibold hover:bg-[--secondary]  transition-all duration-300 flex items-center">know More</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Sectionabout
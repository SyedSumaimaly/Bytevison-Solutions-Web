'use client';
import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function FooterPg() {
  return (
    <>

    <Footer container className='bg-gradient-to-br from-blue-600 to-pink-500'>
  <div className="w-full ">
    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
      <div>
        <Footer.Brand
          href="https://flowbite.com"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          name="Flowbite"
        />
      </div>
      <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
        <div>
          <Footer.Title title="about" className="text-black font-bold" />
          <Footer.LinkGroup col>
            <Footer.Link href="#" className="text-black font-bold">Flowbite</Footer.Link>
            <Footer.Link href="#" className="text-black font-bold">Tailwind CSS</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Follow us" className="text-black font-bold" />
          <Footer.LinkGroup col>
            <Footer.Link href="#" className="text-black font-bold">Github</Footer.Link>
            <Footer.Link href="#" className="text-black font-bold">Discord</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Legal" className="text-black font-bold" />
          <Footer.LinkGroup col>
            <Footer.Link href="#" className="text-black font-bold">Privacy Policy</Footer.Link>
            <Footer.Link href="#" className="text-black font-bold">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </div>
    <Footer.Divider />
    <div className="w-full sm:flex sm:items-center sm:justify-between">
      <Footer.Copyright href="#" by="Flowbite™" year={2022} className="text-black font-bold" />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Footer.Icon href="#" icon={BsFacebook} />
        <Footer.Icon href="#" icon={BsInstagram} />
        <Footer.Icon href="#" icon={BsTwitter} />
        <Footer.Icon href="#" icon={BsGithub} />
        <Footer.Icon href="#" icon={BsDribbble} />
      </div>
    </div>
  </div>
</Footer>
   
    </>
  )
}

export default FooterPg
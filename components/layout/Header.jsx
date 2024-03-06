import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

const Header = () => {
  return (
    <Navbar fluid rounded className='bg-transparent'>
      <NavbarBrand href="/">
        <img src="/images/logo.png" className="mr-3 h-6 sm:h-12" alt="Logo" />
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className='nav-btn bg-[--primary] transition-all duration-500 delay-50' href='/contact'>Contact Us</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
      <NavbarLink href="/" className='text-white'>Home</NavbarLink>
        <NavbarLink href="/about" className='text-white'>About</NavbarLink>
        <NavbarLink href="/service" className='text-white'>Service</NavbarLink>
        <NavbarLink href="/portfolio" className='text-white'>Portfolio</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}

export default Header;
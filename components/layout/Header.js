import React from 'react';
import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
  } from "flowbite-react";

const Header = () => {
  return (
    <Navbar fluid rounded className="bg-transparent pt-4">
      <NavbarBrand href="/">
        <img
          src="/images/logo.png"
          className="mr-3 h-6 sm:h-12"
          alt="Logo"
        />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold">
          ByteVision Solutions
        </span> */}
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className='nav-btn bg-[--primary] transition-all duration-500 delay-50'>Contact Us</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" className='text-gray'>Home</NavbarLink>
        <NavbarLink href="/about" className='text-gray'>About</NavbarLink>
        <NavbarLink href="/" className='text-gray'>Service</NavbarLink>
        <NavbarLink href="/" className='text-gray'>Portfolio</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
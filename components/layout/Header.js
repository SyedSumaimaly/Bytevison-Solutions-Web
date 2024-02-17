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
    <Navbar fluid rounded className="bg-transparent">
      <NavbarBrand href="/">
        <img
          src=""
          className="mr-3 h-6 sm:h-9"
          alt="ByteVision Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          ByteVision Solutions
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" className='text-gray'>Home</NavbarLink>
        <NavbarLink href="/about" className='text-gray'>About Us</NavbarLink>
        {/* <NavbarLink href="#">Services</NavbarLink> */}
        {/* <NavbarLink href="#">Pricing</NavbarLink> */}
        <NavbarLink href="/contact" className='text-gray'>Contact Us</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
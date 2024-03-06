import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-black text-white   ">
      <div className="container mx-auto py-12 px-4 mt-8 border-t border-[--secondary] pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">About The Store</h3>
            <p className="mb-4">One of the most popular on the web is shopping.</p>
            <ul className="footer-contact-info">
              <li><i className='bx bx-map'></i> <a href="#" target="_blank">Wonder Street, USA, New York</a></li>
              <li><i className='bx bx-phone-call'></i> <a href="tel:+01321654214">+01 321 654 214</a></li>
              <li><i className='bx bx-envelope'></i> <a href="mailto:hello@xton.com">hello@xton.com</a></li>
            </ul>
            <ul className="social-link mt-4">
              <li><a href="#" className="text-white"><i className='bx bxl-facebook'></i></a></li>
              <li><a href="#" className="text-white"><i className='bx bxl-twitter'></i></a></li>
              <li><a href="#" className="text-white"><i className='bx bxl-instagram'></i></a></li>
              <li><a href="#" className="text-white"><i className='bx bxl-linkedin'></i></a></li>
              <li><a href="#" className="text-white"><i className='bx bxl-pinterest-alt'></i></a></li>
            </ul>
          </div>

          <div>
          <h3 className="text-2xl font-bold mb-4">Company</h3>
          
          <ul class="quick-links">
          <li><a href="about.html">Home</a></li>
          <li><a href="products-left-sidebar.html">About Us</a></li>
          <li><a href="contact.html">Portfolio</a></li>
          <li><a href="customer-service.html">Services</a></li>
      </ul>
          <ul className="social-link mt-4">
            <li><a href="#" className="text-white"><i className='bx bxl-facebook'></i></a></li>
            <li><a href="#" className="text-white"><i className='bx bxl-twitter'></i></a></li>
            <li><a href="#" className="text-white"><i className='bx bxl-instagram'></i></a></li>
            <li><a href="#" className="text-white"><i className='bx bxl-linkedin'></i></a></li>
            <li><a href="#" className="text-white"><i className='bx bxl-pinterest-alt'></i></a></li>
          </ul>
        </div>

       

      <div>
      <h3 className="text-lg font-semibold mb-4">Contact</h3>
      <ul class="quick-links">
      <li><a href="about.html">info@agency.com</a></li>
      <li><a href="products-left-sidebar.html">+01 556 6969 70</a></li>
      <li><a href="products-left-sidebar-2.html">Mertasari Lane</a></li>
      <li><a href="faqs.html">Memory, KY 7780</a></li>
  </ul>
      <ul className="social-link mt-4">
        <li><a href="#" className="text-white"><i className='bx bxl-facebook'></i></a></li>
        <li><a href="#" className="text-white"><i className='bx bxl-twitter'></i></a></li>
        <li><a href="#" className="text-white"><i className='bx bxl-instagram'></i></a></li>
        <li><a href="#" className="text-white"><i className='bx bxl-linkedin'></i></a></li>
        <li><a href="#" className="text-white"><i className='bx bxl-pinterest-alt'></i></a></li>
      </ul>
    </div>
          {/* Repeat the same pattern for other columns */}
        </div>
        <div className="footer-bottom-area mt-8 border-t border-[--secondary] pt-8">
          <div className="">
            <p className="text-lg text-center">© Bytevison Solutions is Proudly Owned by <a href="/home" target="_blank" className="text-blue-400">Home</a></p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';
import Logo from '../assets/img/logo.png';
import { footer } from '../data';

const Footer = () => {
  return (
    <footer className='section bg-[#1f3144] text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
          {/* Logo */}
          <a className='mb-6 lg:mb-0' href='#'>
            <img src={Logo} alt='' className='w-1/3 md:w-1/4 h-auto' />
          </a>
          {/* Social Icons */}
          <div className='flex gap-x-4'>
            {footer.social.map((item, index) => {
              return (
                <div
                  className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition'
                  key={index}
                >
                  <a href='#'>{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        {/* Footer Text */}
        <p className='text-center'>
          ©Vestas 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

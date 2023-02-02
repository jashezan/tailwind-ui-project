import React from 'react';
import MobileMenu from './mobile-menu';
import MobileMenuButton from './mobile-menu-button';
import Logo from './logo';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuState, setMenu] = useState(false);

  const toggleMenu = (): void => {
    setMenu(!menuState);
  };

  return (
    <header className='tw-text-gray-700 tw-w-full tw-z-10 tw-bg-yellow-200 tw-relative tw-overflow-visible'>
      <div className='tw-z-10 tw-mx-auto tw-container tw-p-4 tw-grid lg:tw-flex lg:tw-justify-between lg:tw-items-start tw-grid-cols-2'>
        <nav className='tw-flex tw-items-center tw-w-full tw-justify-between'>
          <Logo />

          <ul className='lg:tw-flex tw-hidden  tw-items-center'>
            {['About us', 'Our Work', 'Support', 'Contact Us'].map((item) => (
              <li key={item} className='tw-mr-8'>
                <a className='hover:tw-text-gray-500' href='#'>
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                className='tw-font-bold tw-ml-12 tw-transform tw-transition-all tw-group'
                href='#'>
                Let&apos;s chat
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='tw-w-6 tw-h-6 tw-inline tw-transition-all tw-duration-300 -tw-translate-x-3 tw-opacity-0 tw-ml-0 group-hover:tw-opacity-100 group-hover:tw-translate-x-3'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        {/* <!-- mobile menu button --> */}
        <MobileMenuButton menuState={menuState} togMenu={toggleMenu} />
        {/* <!-- mobile menu --> */}

        <MobileMenu isOpen={menuState} />
      </div>
    </header>
  );
}

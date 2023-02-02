import React from 'react';

export default function Header() {
  return (
    <header className='tw-z-50 tw-bg-gray-100 tw-text-neutral-600 tw-w-full'>
      <div className='tw-mx-auto tw-container tw-p-4 tw-grid lg:tw-flex lg:tw-justify-between tw-grid-cols-2'>
        <nav className='tw-flex tw-items-center'>
          <img
            className='tw-w-12 tw-mr-16'
            src='https://tailwindui.com/img/logos/mark.svg?color=black'
            alt='logo'
          />

          <ul className='lg:tw-flex tw-hidden'>
            <li className='tw-mr-8'>
              <a className='tw-font-light hover:tw-text-neutral-500' href='#'>
                All courses
              </a>
            </li>
            <li className='tw-mr-8'>
              <a className='tw-font-light hover:tw-text-neutral-500' href='#'>
                Student Portal
              </a>
            </li>
            <li className='tw-mr-8'>
              <a className='tw-font-light hover:tw-text-neutral-500' href='#'>
                Support
              </a>
            </li>
            <li className='tw-mr-8'>
              <a className='tw-font-light hover:tw-text-neutral-500' href='#'>
                Contact us
              </a>
            </li>
          </ul>
        </nav>
        <div className='tw-hidden lg:tw-block'>
          <button className='tw-px-4 tw-py-3 tw-bg-transparent hover:tw-cursor-pointer tw-text-neutral-700 tw-rounded-lg tw-mr-8'>
            Sign In
          </button>
          <button className='tw-px-4 tw-py-3 tw-bg-neutral-800 hover:tw-cursor-pointer tw-text-neutral-50 tw-rounded-lg'>
            Get Your Card
          </button>
        </div>
        {/* <!-- mobile menu button --> */}
        <button
          type='button'
          className='lg:tw-hidden tw-justify-self-end tw-inline-flex tw-items-center tw-justify-center tw-rounded-md  tw-p-2  focus:tw-outline-none'
          aria-controls='mobile-menu'
          aria-expanded='false'>
          <span className='tw-sr-only'>Open main menu</span>

          <svg
            className='tw-lock tw-h-6 tw-w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            aria-hidden='true'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>

          <svg
            className='tw-hidden tw-h-6 tw-w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            aria-hidden='true'>
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        <div
          id='mobile-menu'
          className='tw-col-span-2 tw-bg-neutral-50 tw-text-neutral-700 tw-p-2 tw-mt-4 tw-rounded tw-shadow-lg lg:tw-hidden tw-z-50'>
          <ul className='tw-w-full tw-py-2'>
            <li className='tw-bg-neutral-800 hover:tw-bg-neutral-400 tw-text-neutral-50 focus:tw-bg-neutral-400 hover:tw-text-neutral-50 focus:tw-text-neutral-50 tw-p-2 tw-rounded'>
              <a className='tw-font-medium hover:tw-text-neutral-900' href='#'>
                Demos
              </a>
            </li>
            <li className='hover:tw-bg-neutral-400 focus:tw-bg-neutral-400 hover:tw-text-neutral-50 focus:tw-text-neutral-50t tw-p-2 tw-rounded'>
              <a className='tw-font-medium hover:tw-text-neutral-900' href='#'>
                About
              </a>
            </li>
            <li className='hover:tw-bg-neutral-400 focus:tw-bg-neutral-400 hover:tw-text-neutral-50 focus:tw-text-neutral-50 tw-p-2 tw-rounded'>
              <a className='tw-font-medium hover:tw-text-neutral-900' href='#'>
                Blog
              </a>
            </li>
            <li className='hover:tw-bg-neutral-400 focus:tw-bg-neutral-400 hover:tw-text-neutral-50 focus:tw-text-neutral-50 tw-p-2 tw-rounded'>
              <a className='tw-font-medium hover:tw-text-neutral-900' href='#'>
                Pages
              </a>
            </li>
            <li className='hover:tw-bg-neutral-400 focus:tw-bg-neutral-400 hover:ttw-ext-neutral-50 focus:tw-text-neutral-50 tw-p-2 tw-rounded'>
              <a className='tw-font-medium hover:tw-text-neutral-900' href='#'>
                Contact
              </a>
            </li>
          </ul>
          <div className='tw-border-t tw-border-neutral-400 tw-pt-4'>
            <button className='tw-w-full tw-px-4 tw-py-3 tw-bg-neutral-900 hover:tw-cursor-pointer tw-text-neutral-50 tw-font-medium tw-rounded-lg'>
              Get Started now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

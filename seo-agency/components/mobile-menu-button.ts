interface Props {
  togMenu: () => void;
  menuState: boolean;
}

import React from 'react';
export default function MobileMenuButton({ togMenu, menuState }: Props) {
  return (
    <button
      onClick={() => togMenu()}
      type='button'
      className='lg:tw-hidden tw-justify-self-end tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-bg-transparent tw-p-2  tw-text-gray-500 focus:tw-outline-none'
      aria-controls='mobile-menu'
      aria-expanded='false'>
      <span className='tw-sr-only'>Open main menu</span>
      {!menuState ? (
        <svg
          className='tw-block tw-h-6 tw-w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='black'
          aria-hidden='true'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      ) : (
        <svg
          className=' tw-h-6 tw-w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='black'
          aria-hidden='true'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      )}
    </button>
  );
}

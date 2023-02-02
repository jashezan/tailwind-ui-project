interface Props {
  togMenu: () => void;
  menuState: boolean;
}

import React from 'react';
import styles from '../styles/MobileMenu.module.css';
export default function MobileMenuButton({ togMenu, menuState }: Props) {
  return (
    <button
      onClick={() => togMenu()}
      type='button'
      className={styles.mobileBtn}
      aria-controls='mobile-menu'
      aria-expanded='false'>
      <span className='sr-only'>Open main menu</span>
      {!menuState ? (
        <svg
          className='block h-6 w-6'
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
          className=' h-6 w-6'
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

import React from 'react';
import Logo from './logo';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.linksWrapper}>
          <Logo />
          <ul>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Features</a>
            </li>
            <li>
              <a href='#'>Works</a>
            </li>
            <li>
              <a href='#'>Career</a>
            </li>
          </ul>
        </div>
        <div className={styles.linksWrapper}>
          <h4>Help</h4>
          <ul>
            <li>
              <a href='#'>Customer Support</a>
            </li>
            <li className='py-3'>
              <a href='#'>Delivery Details</a>
            </li>
            <li>
              <a href='#'>Terms & conditions</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className={styles.linksWrapper}>
          <h4>Resources</h4>
          <ul>
            <li>
              <a href='#'>Free Ebooks</a>
            </li>
            <li>
              <a href='#'>Development Tutorial</a>
            </li>
            <li>
              <a href='#'>How to - Blog</a>
            </li>
            <li>
              <a href='#'>Youtube Playlist</a>
            </li>
          </ul>
        </div>
        <div className={styles.linksWrapper}>
          <h4>Extra Links</h4>
          <ul>
            <li>
              <a href='#'>Customer Support</a>
            </li>
            <li>
              <a href='#'>Delivery Details</a>
            </li>
            <li>
              <a href='#'>Terms & Condtitions</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className='flex items-center mb-2'>
          <a className='mr-6' href='#'>
            <img className='opacity-70' src='/facebook.svg' alt='facebook' />
          </a>
          <a className='mr-6' href='#'>
            <img className='opacity-70' src='/instagram.svg' alt='instagram' />
          </a>
          <a className='mr-6' href='#'>
            <img className='opacity-70' src='/twitter.svg' alt='twitter' />
          </a>
          <a className='mr-6' href='#'>
            <img className='opacity-70' src='/github.svg' alt='github' />
          </a>
        </div>
        <a className={styles.footerLinks} href='#'>
          Privacy Polciy
        </a>
        <a className={styles.footerLinks} href='#'>
          Terms and conditions
        </a>
        <a className={styles.footerLinks} href='#'>
          Support
        </a>
        <p className={styles.footerCopyright}>
          Copyright 2022, All Rights Reserved by Tailland
        </p>
      </div>
    </footer>
  );
}

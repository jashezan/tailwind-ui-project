import React from 'react';
import MobileMenu from './mobile-menu';
import MobileMenuButton from './mobile-menu-button';
import styles from '../styles/Header.module.css';
import Logo from './logo';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuState, setMenu] = useState(false);

  const toggleMenu = (): void => {
    setMenu(!menuState);
  };

  return (
    <header className={styles.header}>
      <div>
        <nav className={styles.nav}>
          <Logo />
          <ul>
            <li>
              <a href='#'>All courses</a>
            </li>
            <li>
              <a href='#'>Student Portal</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
            <li>
              <a href='#'>Contact us</a>
            </li>
          </ul>
        </nav>
        <div className={styles.action}>
          <button>Get Started now</button>
        </div>
        {/* <!-- mobile menu button --> */}
        <MobileMenuButton menuState={menuState} togMenu={toggleMenu} />
        {/* <!-- mobile menu --> */}
        {/* {menuState ? <MobileMenu /> : null} */}

        <MobileMenu isOpen={menuState} />
      </div>
    </header>
  );
}

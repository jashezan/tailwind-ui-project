import Logo from './logo';
import MobileMenu from './mobile-menu';
import MobileMenuButton from './mobine-menu-button';
import styles from '../styles/Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [menuState, setMenu] = useState(false);

  const toggleMenu = (): void => {
    setMenu(!menuState);
  };

  return (
    <header className={styles.header}>
      <nav>
        <Logo />
        <ul className={styles.navMenu}>
          <li>
            <a href='#'>Demos</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Pages</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
      <div className={styles.navCTA}>
        <button className='ghostBTN'>Login</button>
        <button className='primaryBTN'>Get Started For Free</button>
      </div>
      {/* <!-- mobile menu button --> */}
      <MobileMenuButton menuState={menuState} togMenu={toggleMenu} />
      {/* <!-- mobile menu --> */}
      {menuState ? <MobileMenu /> : null}
    </header>
  );
}

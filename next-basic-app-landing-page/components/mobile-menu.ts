import styles from '../styles/Header.module.css';

export default function MobileMenu() {
  return (
    <div id='mobile-menu' className={styles.mobileMenuWrapper}>
      <ul className={styles.mobileNav}>
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
      <div className={styles.mobileHeaderCTA}>
        <button className='primaryBTN w-full'>Get Started For Free</button>
        <button className='ghostBTN w-full text-center'>Login</button>
      </div>
    </div>
  );
}

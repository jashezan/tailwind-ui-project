import React from 'react';
import styles from '../styles/MobileMenu.module.css';
import { motion } from 'framer-motion';

interface Props {
  isOpen: boolean;
}

const variants = {
  open: {
    opacity: 1,
    display: 'block',
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    display: 'none',

    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};

const variantsForUl = {
  open: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
    },
  },
};

const item = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -100 },
};

const button = {
  open: { scale: 1 },
  closed: { scale: 0 },
};

export default function MobileMenu({ isOpen }: Props) {
  return (
    <motion.div
      initial={{ display: 'none' }}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      id='mobile-menu'
      className={styles.menu}>
      <motion.ul variants={variantsForUl}>
        <motion.li variants={item} className='bg-neutral-800  text-neutral-50 '>
          <a href='#'>Demos</a>
        </motion.li>
        <motion.li variants={item}>
          <a href='#'>About</a>
        </motion.li>
        <motion.li variants={item}>
          <a href='#'>Blog</a>
        </motion.li>
        <motion.li variants={item}>
          <a href='#'>Pages</a>
        </motion.li>
        <motion.li variants={item}>
          <a href='#'>Contact</a>
        </motion.li>
      </motion.ul>
      <motion.div variants={button}>
        <button>Get Started now</button>
      </motion.div>
    </motion.div>
  );
}

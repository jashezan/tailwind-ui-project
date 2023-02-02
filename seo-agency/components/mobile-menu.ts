import React from 'react';
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

const menuitem = {
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
      className='tw-col-span-2 tw-bg-gray-700 tw-text-gray-200 tw-p-2 tw-mt-4 tw-shadow-lg tw-hidden tw-z-50'>
      <motion.ul variants={variantsForUl}>
        {['Demos', 'About', 'Blog', 'Pages', 'Contact'].map((item) => (
          <motion.li
            key={item}
            variants={menuitem}
            className='hover:tw-bg-gray-400 focus:tw-bg-gray-400 hover:tw-text-gray-50 focus:tw-text-gray-50 tw-p-2 '>
            <a className='tw-font-light hover:tw-text-gray-900' href='#'>
              {item}
            </a>
          </motion.li>
        ))}
      </motion.ul>
      <motion.div
        className='tw-border-t tw-border-gray-400 tw-pt-4'
        variants={button}>
        <button className='tw-w-full tw-px-4 tw-py-3 tw-bg-cyan-700 hover:tw-cursor-pointer tw-text-gray-50 tw-font-serif'>
          Get Started now
        </button>
      </motion.div>
    </motion.div>
  );
}

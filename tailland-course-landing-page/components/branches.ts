import React from 'react';
import styles from '../styles/Branches.module.css';
import { motion } from 'framer-motion';

export default function Branches() {
  return (
    <section className={styles.branches}>
      <motion.h3
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-100px' }}
        transition={{ duration: 0.5 }}>
        Our Branches
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        voluptas eum nulla quibusdam quod. Corporis.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        {Array.from(Array(6), (e, i) => (
          <div key={i + '_branch'} className={styles.branch}>
            <h4>Branch #{i + 1}</h4>
            <p>1901 Thornridge Cir, Shiloh, Hawaii 81063, USA</p>
          </div>
        ))}
      </motion.div>

      <motion.a
        whileHover={{ opacity: 1, scale: 1.2 }}
        className='opacity-70'
        href='#'>
        See all 24 locations
        <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6 inline ml-2'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
          />
        </motion.svg>
      </motion.a>
    </section>
  );
}

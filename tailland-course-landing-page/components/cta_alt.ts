import React from 'react';
import styles from '../styles/CTAALT.module.css';
import { motion } from 'framer-motion';

export default function ctaAlt() {
  return (
    <section className={styles.cta}>
      <div>
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className='w-20 h-20 mx-auto lg:mx-0'
          src='/user_white.svg'
          alt='user'
        />
        <motion.h3
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          Join as a mentor, teach people <br />& help them grow
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quam dolor soluta minima id sed fugiat magni ut, sint officiis
          explicabo velit similique ex eos numquam illo recusandae optio quos.
        </motion.p>
        <motion.div
          className='lg:w-max'
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.7 }}>
          <motion.button
            whileHover={{ scale: 1.1, borderRadius: '50px' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={styles.left}>
            Get Started now
          </motion.button>
        </motion.div>
      </div>
      <div>
        <motion.img
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className='w-20 h-20 mx-auto lg:mx-0'
          src='/mail.svg'
          alt='user'
        />
        <motion.h3
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          Still have more questions? <br />
          Contact us now.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quam dolor soluta minima id sed fugiat magni ut, sint officiis
          explicabo velit similique ex eos numquam illo recusandae optio quos.
        </motion.p>
        <motion.div
          className='lg:w-max'
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.7 }}>
          <motion.button
            whileHover={{ scale: 1.1, borderRadius: '50px' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className={styles.right}>
            Contact Us Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

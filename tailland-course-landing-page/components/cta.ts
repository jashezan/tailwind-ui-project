import React from 'react';
import styles from '../styles/CTA.module.css';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={styles.cta}>
      <div>
        <h3>Join one of our free courses now</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero a magni
          suscipit.
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.1, borderRadius: '50px' }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}>
        Get Started now
      </motion.button>
    </motion.section>
  );
}

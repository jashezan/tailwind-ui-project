import React from 'react';
import styles from '../styles/Remote.module.css';
import { motion } from 'framer-motion';

export default function Remote() {
  return (
    <section className={styles.remote}>
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.5 }}>
          Get virtual counseling
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.5 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero a magni
          suscipit.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-100px' }}
          transition={{ duration: 0.5 }}>
          <motion.button
            whileHover={{ scale: 1.1, borderRadius: '50px' }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}>
            Get Started for Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

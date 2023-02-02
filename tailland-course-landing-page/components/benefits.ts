import React from 'react';
import Image from 'next/image';
import styles from '../styles/Benefits.module.css';
import { motion } from 'framer-motion';

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <motion.h2
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-100px' }}
        transition={{ duration: 0.5 }}>
        Why should you choose us?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <Image width={48} height={48} src='/compass.svg' alt='' />{' '}
        <p>
          Get all courses <br />
          from a single platform.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.3 }}>
        <Image width={48} height={48} src='/chat.svg' alt='' />
        <p>
          Communicate with your <br />
          mentors on time.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        <Image width={48} height={48} src='/users.svg' alt='' />{' '}
        <p>
          Collaborate on real <br />
          projects to learn things.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.5 }}>
        <Image width={48} height={48} src='/pie.svg' alt='' />{' '}
        <p>
          Get regular updates <br />
          with proper tutorials.
        </p>
      </motion.div>
    </section>
  );
}

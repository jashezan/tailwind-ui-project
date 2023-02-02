import React from 'react';
import styles from '../styles/benefits.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };

const beneftis = [
  {
    title: 'Innovative Solution',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nostrum, quaerat blanditiis architecto.',
    image: 'icon_bulb',
  },
  {
    title: 'Fully functional',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nostrum, quaerat blanditiis architecto.',
    image: 'icon_db',
  },
  {
    title: 'Secure Database',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nostrum, quaerat blanditiis architecto.',
    image: 'icon_lock',
  },
];

export default function Benefits() {
  return (
    <section className='section bg-gray-100'>
      <h2 className={styles.title}>
        Some features that set <br />
        Tailland apart from others
      </h2>
      <p className={styles.description}>
        Tailland has some unique values, it allows you to create landing pages
        quickly and with ease, or mix and match different templates as you like
      </p>
      {beneftis?.map((item, index) => {
        return (
          <motion.div
            key={item.title}
            initial={initial}
            whileInView={animate}
            transition={{ delay: 0.5 + index / 10 }}
            viewport={{ once: true }}
            className={styles.card}>
            <div className={styles.img}>
              <Image
                className=''
                src={`/${item.image}.svg`}
                alt={item.title}
                width={48}
                height={48}
              />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <small>{item.description}</small>
          </motion.div>
        );
      })}
    </section>
  );
}

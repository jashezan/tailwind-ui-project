import React from 'react';
import styles from '../styles/Reviews.module.css';
import { motion } from 'framer-motion';
export default function Reviews() {
  return (
    <section className='section'>
      <h2 className={styles.title}>
        What our satisfied <br />
        clients say about Tailland
      </h2>
      <p className={styles.description}>
        Landing is a network of fully furnished apartments across the whole
        country, so no matter where you land, it&apos;ll always feel like home.
      </p>
      {/* <!-- card 1 --> */}
      {Array.from(Array(8), (e, i) => {
        return (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: 'linear', duration: 0.4, delay: 0.5 + i / 10 }}
            key={i + '_review_card_a'}
            className={styles.reviewCard}>
            <div className={styles.starRatingWrapper}>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <title>First star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <title>Second star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <title>Third star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <title>Fourth star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-yellow-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <title>Fifth star</title>
                <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
              </svg>
            </div>
            <small className='my-8 block'>
              &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Maxime omnis soluta vero velit alias architecto officiis non
              minima et iste modi, quod reprehenderit, tempora saepe fugit
              beatae ea quo obcaecati?&quot;
            </small>
            <div className={styles.reviewCardContentWrapper}>
              <img
                className='w-10 h-10 rounded-full block mr-2'
                src='http://www.placecage.com/250/250'
                alt='Rounded avatar'
              />
              <p className={styles.name}>
                Henry Slade <br />
                <small>Founder</small>
              </p>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}

import React from 'react';
import Image from 'next/image';
import styles from '../styles/features.module.css';
import Phone from './phone';
import { motion } from 'framer-motion';
const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };
const tasks = ['Go to gym', 'Launch Feature A', 'Call Mom', 'Get diapers'];

export default function FeatureA() {
  return (
    <section className='section'>
      <div className={styles.imageWrapper}>
        <div className='appBlurImage'>
          <Image src='/app_bg.svg' alt='' width={800} height={800} />
        </div>
        <Phone>
          {tasks.map((e, i) => {
            return (
              <div
                key={i}
                className='border bg-slate-100 rounded-md p-2 max-w-sm w-full mx-auto mb-4'>
                <div className='flex items-center space-x-4'>
                  <div className='w-min'>
                    <div className='h-4 w-4 bg-transparent rounded-full border border-slate-500'></div>
                  </div>
                  <div className='flex-1 py-1 col-span-11'>
                    <p className='text-md font-medium'>{e}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Phone>
      </div>
      <motion.div
        initial={initial}
        whileInView={animate}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className={styles.contentWrapper}>
        <h2 className={styles.title}>
          Organize your web app <br />
          easily with Tailland
        </h2>
        <p className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis iste
          perspiciatis commodi consequatur praesentium accusantium? Provident,
          tempore dignissimos. Accusantium officiis expedita nobis rem autem ab,
          numquam blanditiis omnis veniam ex!
        </p>
        <div className={styles.statsWrapper}>
          <p className={styles.stat}>3.5x</p>
          <p className={styles.statsContent}>
            Mobile apps convert 3.5x <br />
            higher than mobile websites
          </p>
        </div>

        <button className='primaryBTN lg:mr-8 mb-4 lg:mb-0'>Explore Now</button>
      </motion.div>
    </section>
  );
}

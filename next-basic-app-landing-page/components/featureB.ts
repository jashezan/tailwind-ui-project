import React from 'react';
import Image from 'next/image';
import styles from '../styles/features.module.css';
import { motion } from 'framer-motion';

const initial_card = { opacity: 0, scale: 0 };
const whileInView_card = { opacity: 1, scale: 1 };
const initial = { opacity: 0, y: -20 };
const animate = { opacity: 1, y: 0 };
const transition_cardA = { delay: 0.4, duration: 0.5 };
const transition_cardB = { delay: 0.5, duration: 0.5 };
const transition_cardC = { delay: 0.6, duration: 0.5 };

export default function FeatureB() {
  return (
    <section className='section'>
      <motion.div
        initial={initial}
        whileInView={animate}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        className={styles.contentWrapper}>
        <h2 className={styles.title}>
          Get detailed time and <br />
          data for every project
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

        <button className='w-full lg:w-max px-4 py-3 bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer text-white font-medium rounded lg:mr-8 mb-4 lg:mb-0'>
          Explore Now
        </button>
      </motion.div>
      <div className={styles.featureBImageWrapper}>
        <div className='appBlurImage'>
          <Image src='/app_bg.svg' alt='' width={800} height={800} />
        </div>
        <motion.div
          initial={initial_card}
          whileInView={whileInView_card}
          transition={transition_cardA}
          viewport={{ once: true }}
          className={styles.cardA}>
          <div className='flex items-center absolute right-2 top-5'>
            <div className='w-1 h-1 rounded-full bg-gray-300 mr-1'></div>
            <div className='w-1 h-1 rounded-full bg-gray-300 mr-1'></div>
            <div className='w-1 h-1 rounded-full bg-gray-300 mr-1'></div>
          </div>
          <p className='text-lg font-medium text-slate-900'>
            Landing Page Concept
          </p>
          <small className='text-gray-300'>Due: 24 Nov 2023</small>
          <p className='my-6'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            saepe accusamus asperiores dolore.
          </p>
          <div className='text-gray-500 w-full flex items-center'>
            <p className=''>Project Progress</p>
            <p className='ml-auto'>35%</p>
          </div>
          <div className='w-full bg-gray-50 rounded-full h-2 mt-1'>
            <div className='bg-emerald-400 h-2 rounded-full w-[45%]'></div>
          </div>
        </motion.div>
        <motion.div
          initial={initial_card}
          whileInView={whileInView_card}
          transition={transition_cardB}
          viewport={{ once: true }}
          className={styles.cardB}>
          <div className='flex items-center absolute right-2 top-5'>
            <div className='w-1 h-1 rounded-full bg-gray-300 mr-1'></div>
            <div className='w-1 h-1 rounded-full bg-gray-300 mr-1'></div>
            <div className='w-1 h-1 rounded-full bg-gray-300 mr-1'></div>
          </div>
          <p className='text-md font-medium text-slate-900 mb-4'>
            Users Online
          </p>
          <div className='flex items-center'>
            <div className='relative '>
              <img
                className='w-10 h-10 rounded-full border-2  border-white'
                src='/human_1.png'
                alt=''
              />
              {/* <span className='top-0 left-7 absolute  w-2 h-2 bg-green-400 border-1 border-white dark:border-gray-800 rounded-full'></span> */}
            </div>
            <div className='relative -ml-2 z-10 '>
              <img
                className='w-10 h-10 rounded-full border-2  border-white'
                src='/human_2.jpeg'
                alt=''
              />
              {/* <span className='top-0 left-7 absolute  w-2 h-2 bg-green-400 border-1 border-white dark:border-gray-800 rounded-full'></span> */}
            </div>
            <div className='relative -ml-2 z-20'>
              <img
                className='w-10 h-10 rounded-full border-2  border-white'
                src='/human_3.jpeg'
                alt=''
              />
              {/* <span className='top-0 left-7 absolute  w-2 h-2 bg-green-400 border-1 border-white dark:border-gray-800 rounded-full'></span> */}
            </div>
            <div className='relative -ml-2 z-30'>
              <img
                className='w-10 h-10 rounded-full border-2  border-white'
                src='/human_4.jpeg'
                alt=''
              />
              {/* <span className='top-0 left-7 absolute  w-2 h-2 bg-green-400 border-1 border-white dark:border-gray-800 rounded-full'></span> */}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={initial_card}
          whileInView={whileInView_card}
          transition={transition_cardC}
          viewport={{ once: true }}
          className={styles.cardC}>
          <p className='text-md font-medium text-slate-900 mb-4'>Tasks</p>
          <div className='text-gray-500 w-full flex items-center'>
            <p className='text-sm'>Development</p>
          </div>
          <div className='w-full bg-gray-50 rounded-full h-1 mt-1 mb-4'>
            <div className='bg-yellow-400 h-1 rounded-full w-[45%]'></div>
          </div>
          <div className='text-gray-500 w-full flex items-center'>
            <p className='text-sm'>Design</p>
          </div>
          <div className='w-full bg-gray-50 rounded-full h-1 mt-1 mb-4'>
            <div className='bg-emerald-400 h-1 rounded-full w-[45%]'></div>
          </div>
          <div className='text-gray-500 w-full flex items-center'>
            <p className='text-sm'>Copywriting</p>
          </div>
          <div className='w-full bg-gray-50 rounded-full h-1 mt-1 mb-4'>
            <div className='bg-blue-400 h-1 rounded-full w-[45%]'></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

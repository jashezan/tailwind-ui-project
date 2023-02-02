import styles from '../styles/Hero.module.css';
import Image from 'next/image';
import Phone from './phone';
import { motion } from 'framer-motion';

const initial = { opacity: 0 };
const animate = { opacity: 1 };
const transition_h1 = { delay: 0.2, duration: 0.5 };
const transition_P = { delay: 0.3, duration: 0.5 };
const transition_btn_a = { delay: 0.4, duration: 0.5 };
const transition_btn_b = { delay: 0.4, duration: 0.5 };

export default function Hero() {
  return (
    <section className='section'>
      <div className={styles.leftDiv}>
        <motion.h1
          initial={initial}
          animate={animate}
          transition={transition_h1}
          className={styles.heading}>
          Just one click away <br />
          to create a modern app <br />
          landing page
        </motion.h1>
        <motion.p
          initial={initial}
          animate={animate}
          transition={transition_P}
          className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis iste
          perspiciatis commodi consequatur praesentium accusantium? Provident,
          tempore dignissimos. Accusantium officiis expedita nobis rem autem ab,
          numquam blanditiis omnis veniam ex!
        </motion.p>
        <div className={styles.ctaContainer}>
          <motion.button
            initial={initial}
            animate={animate}
            transition={transition_btn_a}
            className='primaryBTN lg:mr-8 mb-4 lg:mb-0'>
            Let&apos;s Get Started
          </motion.button>
          <motion.button
            initial={initial}
            animate={animate}
            transition={transition_btn_b}
            className='secondaryBTN'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-4 h-4 mr-1'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
              />
            </svg>
            Watch a demo
          </motion.button>
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className='appBlurImage'>
          <Image src='/app_bg.svg' alt='' width={800} height={800} />
        </div>
        <Phone>
          {Array.from(Array(5), (e, i) => {
            return (
              <div
                key={i + '_loader_fro_phone'}
                className='border bg-slate-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-4'>
                <div className='animate-pulse flex space-x-4'>
                  <div className='rounded-full bg-slate-700 h-4 w-4'></div>
                  <div className='flex-1 space-y-6 py-1'>
                    <div className='h-2 bg-slate-700 rounded'></div>
                  </div>
                </div>
              </div>
            );
          })}
        </Phone>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
const init = { opacity: 0, y: 50 };
const animate = { opacity: 1, y: 0 };
const duration = { duration: 0.5 };

export default function Beneftis() {
  return (
    <section className='tw-z-10 tw-relative tw-py-16 lg:tw-py-52 tw-px-4 md:tw-px-8 2xl:tw-px-60 tw-mx-auto tw-grid tw-gap-8 tw-gap-y-24 tw-grid-cols-12 md:tw-place-items-center tw-bg-gray-800 tw-text-white'>
      <div className='tw-col-span-12 tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-8 tw-w-full tw-place-items-center tw-border-b tw-border-gray-500 tw-py-24'>
        <div>
          <motion.p
            initial={init}
            whileInView={animate}
            transition={duration}
            className='tw-text-6xl tw-font-serif tw-flex tw-items-stretch'>
            15
            <span className='tw-font-sans tw-text-sm tw-opacity-60 tw-ml-4 tw-mt-4 tw-leading-relaxed'>
              Years of
              <br />
              experience
            </span>
          </motion.p>
        </div>
        <div>
          <motion.p
            initial={init}
            whileInView={animate}
            transition={duration}
            className='tw-text-6xl tw-font-serif tw-flex tw-items-stretch'>
            36K
            <span className='tw-font-sans tw-text-sm tw-opacity-60 tw-ml-4 tw-mt-4 tw-leading-relaxed'>
              Satisfied clients
              <br />
              arround the world
            </span>
          </motion.p>
        </div>
        <div>
          <motion.p
            initial={init}
            whileInView={animate}
            transition={duration}
            className='tw-text-6xl tw-font-serif tw-flex tw-items-stretch'>
            6428
            <span className='tw-font-sans tw-text-sm tw-opacity-60 tw-ml-4 tw-mt-4 tw-leading-relaxed'>
              Projects completed
              <br />
              in 25 countries
            </span>
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={init}
        whileInView={animate}
        viewport={{ margin: '-300px' }}
        transition={duration}
        className='tw-col-span-12 tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8 tw-w-full tw-place-items-center lg:tw-pt-24 lg:tw-pb-72'>
        <h2 className='tw-text-4xl xl:tw-text-5xl'>
          Creative & experienced <br />
          Digital design studio
        </h2>
        <p className='tw-font-light tw-opacity-70'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio
          amet iure perferendis magni nostrum modi itaque nam voluptate. Nemo
          maiores molestias, mollitia cumque fugit nam non alias laborum
          praesentium?
        </p>
      </motion.div>
      <motion.div
        initial={init}
        whileInView={animate}
        viewport={{ margin: '-300px' }}
        transition={duration}
        className='tw-col-span-12 lg:tw-absolute tw-block lg:-tw-bottom-64'>
        <video width='1280' height='720' controls>
          <source src='./landing.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
}

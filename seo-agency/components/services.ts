import React from 'react';
import { motion } from 'framer-motion';
const init = { opacity: 0, y: 50 };
const animate = { opacity: 1, y: 0 };
const duration = { duration: 0.5 };

export default function Services() {
  return (
    <section className='tw-z-0 tw-relative tw-pb-52 lg:tw-pt-[300px] tw-px-4 md:tw-px-8 2xl:tw-px-60 tw-mx-auto tw-grid tw-gap-8 lg:tw-gap-y-24 tw-grid-cols-12 md:tw-place-items-center tw-bg-gray-100'>
      <motion.h2
        initial={init}
        whileInView={animate}
        viewport={{ margin: '-300px' }}
        transition={duration}
        className='tw-text-4xl xl:tw-text-5xl 2xl:tw-text-6xl tw-col-span-12 tw-text-center tw-w-full tw-py-12'>
        Our Services
      </motion.h2>
      {[
        'UI/UX Design',
        'Print Desing & Illustration',
        'Brand Design',
        'Content Writing',
      ].map((item, index) => (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: '-200px' }}
          transition={{ duration: 0.5, delay: 1 - index - 0.8 }}
          key={item}
          className='tw-col-span-12 lg:tw-col-span-9 lg:tw-col-start-3 tw-grid tw-grid-cols-1 tw-gap-0 tw-w-full tw-border-b tw-border-gray-500 tw-py-4'>
          <div>
            <h3 className='tw-text-4xl tw-text-center lg:tw-text-left'>
              {item}
            </h3>
            <div className='tw-grid tw-grid-cols-12 tw-py-2 tw-place-items-end tw-gap-8 tw-text-center lg:tw-text-left'>
              <p className='tw-col-span-12 lg:tw-col-span-6 tw-text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                praesentium ab, aliquid.
              </p>
              <a
                className='tw-font-bold tw-transform tw-text-center lg:tw-text-left tw-w-full tw-transition-all tw-group tw-col-span-12 lg:tw-col-span-3 lg:tw-col-start-9'
                href='#'>
                Discover More
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='tw-w-6 tw-h-6 tw-inline tw-transition-all tw-duration-300 -tw-translate-x-3 tw-opacity-0 tw-ml-0 group-hover:tw-opacity-100 group-hover:tw-translate-x-3'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

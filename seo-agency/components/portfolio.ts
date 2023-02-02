import React from 'react';
import { motion } from 'framer-motion';
const init = { opacity: 0 };
const animate = { opacity: 1 };
const duration = { duration: 0.5 };

export default function Portfolio() {
  return (
    <section className='tw-z-0 tw-relative tw-py-52 tw-px-4 md:tw-px-8 2xl:tw-px-60 tw-mx-auto tw-grid tw-gap-8 tw-gap-y-24 tw-grid-rows-7 lg:tw-grid-rows-none lg:tw-grid-cols-12 md:tw-place-items-center tw-bg-gray-800 tw-text-gray-100'>
      <h2 className='tw-text-4xl xl:tw-text-5xl 2xl:tw-text-6xl tw-col-span-12 tw-pb-12 tw-w-full'>
        Check out some works <br />
        from our portfolio
      </h2>
      <motion.div
        initial={init}
        whileInView={animate}
        viewport={{margin: '-300px'}}
        transition={duration}
        className='tw-col-span-12 lg:tw-col-span-6 tw-place-self-start'>
        <img src='./feature_one.jpeg' width='550px' height='550px' alt='' />
      </motion.div>
      <motion.div
        initial={init}
        whileInView={animate}
        viewport={{margin: '-300px'}}
        transition={duration}
        className='tw-col-span-12 lg:tw-col-span-6 tw-align-self-end tw-place-self-center'>
        <h3 className='tw-text-4xl xl:tw-text-5xl tw-font-medium tw-w-full tw-pb-8'>
          Print Design <br />
          for Coffino
        </h3>
        <p className='tw-text-gray-300 lg:tw-w-2/3 tw-font-light'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero soluta
          incidunt aliquid maxime ipsam veniam exercitationem inventore
          molestias libero accusantium voluptas laboriosam, aliquam magnam. Et
          totam debitis consectetur ipsa assumenda!
        </p>
      </motion.div>
      <motion.div
        initial={init}
        whileInView={animate}
        viewport={{margin: '-300px'}}
        transition={duration}
        className='tw-col-span-12 tw-row-start-3 lg:tw-row-start-3 lg:tw-col-span-6 tw-align-self-end tw-place-self-center'>
        <h3 className='tw-text-4xl xl:tw-text-5xl tw-font-medium tw-w-full tw-pb-8'>
          Brand Design <br />
          for Marmano
        </h3>
        <p className='tw-text-gray-300 lg:tw-w-2/3 tw-font-light'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero soluta
          incidunt aliquid maxime ipsam veniam exercitationem inventore
          molestias libero accusantium voluptas laboriosam, aliquam magnam. Et
          totam debitis consectetur ipsa assumenda!
        </p>
      </motion.div>
      <motion.div
        initial={init}
        whileInView={animate}
        viewport={{margin: '-300px'}}
        transition={duration}
        className='tw-col-span-12 tw-row-start-2 lg:tw-row-start-4 lg:tw-col-span-6 tw-place-self-start'>
        <img src='./feature_two.jpeg' width='550px' height='550px' alt='' />
      </motion.div>
      <motion.div
        initial={init}
        whileInView={animate}
        viewport={{margin: '-300px'}}
        transition={duration}
        className='tw-col-span-12 lg:tw-col-span-6 tw-place-self-start'>
        <img src='./feature_three.jpeg' width='550px' height='550px' alt='' />
      </motion.div>
      <motion.div
        initial={init}
        whileInView={animate}
        viewport={{margin: '-300px'}}
        transition={duration}
        className='tw-col-span-12 lg:tw-col-span-6 tw-align-self-end tw-place-self-center'>
        <h3 className='tw-text-4xl xl:tw-text-5xl tw-font-medium tw-w-full tw-pb-8'>
          Brand Design <br />
          for Radical
        </h3>
        <p className='tw-text-gray-300 lg:tw-w-2/3 tw-font-light'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero soluta
          incidunt aliquid maxime ipsam veniam exercitationem inventore
          molestias libero accusantium voluptas laboriosam, aliquam magnam. Et
          totam debitis consectetur ipsa assumenda!
        </p>
      </motion.div>
    </section>
  );
}

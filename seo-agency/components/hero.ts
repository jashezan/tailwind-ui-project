import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const init = { opacity: 0, x: -50 };
const animate = { opacity: 1, x: 0 };
const duration = { duration: 0.5 };

export default function hero() {
  return (
    <section className='tw-relative tw-py-16 lg:tw-py-52 tw-z-0 tw-px-4 md:tw-px-8 2xl:tw-px-60 tw-mx-auto tw-grid tw-gap-8 lg:tw-gap-y-24 tw-grid-cols-12 md:tw-place-items-center tw-bg-yellow-200'>
      <motion.h1
        initial={init}
        whileInView={animate}
        transition={duration}
        className='tw-text-3xl tw-w-full lg:tw-text-4xl 2xl:tw-text-6xl tw-font-bold tw-col-span-12 lg:tw-col-span-8 tw-col-start-0'>
        A Studio that solves your
        <br />
        product problem
        <span className='tw-font-sans tw-font-light'>
          with
          <br />
          meaningfull design.
        </span>
      </motion.h1>
      <motion.p
        initial={init}
        whileInView={animate}
        transition={{ ...duration, delay: 0.2 }}
        className='tw-col-span-12 lg:tw-col-span-4 lg:tw-col-start-3 tw-border-l tw-border-black tw-pl-12 tw-text-lg tw-font-light'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        officia deleniti molestiae adipisci impedit esse ut iure velit accusamus
        pariatur facilis veniam incidunt quidem dolore quae magni error,
        mollitia debitis.
      </motion.p>
      <motion.p
        initial={init}
        whileInView={animate}
        transition={{ ...duration, delay: 0.5 }}
        className='tw-col-span-12 lg:tw-col-span-4 tw-border-l tw-border-black lg:tw-border-none tw-text-lg tw-font-light tw-pl-12 lg:tw-col-start-8'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        officia deleniti molestiae adipisci impedit esse ut iure velit accusamus
        pariatur facilis veniam incidunt quidem dolore quae magni error,
        mollitia debitis.
      </motion.p>
    </section>
  );
}

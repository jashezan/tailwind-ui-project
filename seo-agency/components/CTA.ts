import React from 'react';

export default function CTA() {
  return (
    <section className='tw-z-0 tw-relative tw-py-32 tw-px-4 md:tw-px-8 2xl:tw-px-60 tw-mx-auto tw-grid tw-gap-8 tw-grid-cols-12 md:tw-place-items-center tw-bg-gray-100'>
      <h2 className='tw-text-4xl xl:tw-text-5xl 2xl:tw-text-6xl tw-col-span-12 tw-text-center tw-w-full tw-font-bold'>
        Want to grow your <br />
        business with us? <br />
        <span className='tw-font-light tw-font-sans'>Let&apos;s talk</span>
      </h2>
      <div className='tw-col-span-12'>
        <button className='tw-w-full lg:tw-w-max tw-bg-cyan-700 tw-py-3 tw-px-6 tw-mx-auto tw-text-gray-100 hover:tw-shadow-xl hover:tw-scale-105 tw-transition-all tw-duration-300 tw-ease-in'>
          Get Started- Let&apos;s Chat Now
        </button>
      </div>
    </section>
  );
}

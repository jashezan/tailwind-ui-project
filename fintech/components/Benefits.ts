import React from 'react';

export default function Benefits() {
  return (
    <section className='lg:tw-divide-x lg:tw-divide-y-0 tw-divide-y tw-z-40  tw-py-24 tw-px-4 md:tw-px-8 tw-overflow-hidden 2xl:tw-px-60 tw-mx-auto tw-grid tw-grid-cols-1 tw-gap-8 lg:tw-grid-cols-12 tw-relative tw-bg-neutral-800 tw-text-neutral-50'>
      <div className='tw-col-span-4 lg:tw-px-16 tw-pt-8 lg:tw-pt-0'>
        <img src='/clock.svg' alt='' />
        <p className='tw-font-bold tw-my-4'>Solve problems in real time</p>
        <p className='tw-text-sm tw-font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui
          eius optio recusandae sint debitis officia animi ab vero, suscipit
          accusantium commodi eos corporis natus perspiciatis corrupti incidunt
          maxime quaerat!
        </p>
      </div>
      <div className='tw-col-span-4 lg:tw-px-16 tw-pt-8 lg:tw-pt-0'>
        <img src='/trust.svg' alt='' />
        <p className='tw-font-bold tw-my-4'>Secured and safe payments</p>
        <p className='tw-text-sm tw-font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui
          eius optio recusandae sint debitis officia animi ab vero, suscipit
          accusantium commodi eos corporis natus perspiciatis corrupti incidunt
          maxime quaerat!
        </p>
      </div>
      <div className='tw-col-span-4 lg:tw-px-16 tw-pt-8 lg:tw-pt-0'>
        <img src='/face.svg' alt='' />
        <p className='tw-font-bold tw-my-4'>24/7 customer support</p>
        <p className='tw-text-sm tw-font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui
          eius optio recusandae sint debitis officia animi ab vero, suscipit
          accusantium commodi eos corporis natus perspiciatis corrupti incidunt
          maxime quaerat!
        </p>
      </div>
    </section>
  );
}

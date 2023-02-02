import React from 'react';

export default function CTA() {
  return (
    <section className='tw-items-center tw-z-40 tw-relative tw-py-24 tw-px-4 md:tw-px-8 tw-overflow-hidden 2xl:tw-px-60 tw-mx-auto tw-grid tw-gap-8 tw-grid-cols-12 tw-relative'>
      <div className='tw-col-span-12 lg:tw-col-span-4 tw-h-max'>
        <h2 className='tw-text-4xl tw-font-bold'>Ready to get Started?</h2>
        <p className='tw-font-light tw-text-neutral-500 tw-pt-4 tw-max-w-xs'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          aliquam voluptatem doloremque harum sequi placeat, ratione obcaecati
          fuga reprehenderit debitis quidem quaerat omnis eaque alias, vitae
          ipsa eveniet velit assumenda.
        </p>

        <div className='tw-flex tw-items-center tw-mt-8'>
          <button className='tw-px-6 tw-py-3 tw-bg-neutral-800 hover:tw-cursor-pointer tw-text-neutral-50 tw-rounded-xl tw-mr-4'>
            Join Now
          </button>
          <button className='tw-px-6 tw-py-3 tw-border tw-border-neutral-800 hover:tw-cursor-pointer tw-rounded-xl'>
            Learn More
          </button>
        </div>
      </div>
      <div className='tw-col-span-12 lg:tw-col-span-8 tw-h-max tw-grid tw-grid-cols-2 tw-gap-8'>
        <div className='tw-col-span-2 lg:tw-col-span-1 tw-border tw-border-neutral-300 tw-rounded-lg tw-p-8'>
          <img src='/dark_ cloud.svg' alt='' />
          <p className='tw-font-bold tw-my-4'>Solve problems in real time</p>
          <p className='tw-text-sm tw-font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui
            eius optio recusandae sint debitis officia animi ab vero, suscipit
            accusantium commodi eos corporis natus perspiciatis corrupti
            incidunt maxime quaerat!
          </p>
        </div>
        <div className='tw-col-span-2 lg:tw-col-span-1 tw-border tw-border-neutral-300 tw-rounded-lg tw-p-8'>
          <img src='/dark_dots.svg' alt='' />
          <p className='tw-font-bold tw-my-4'>Solve problems in real time</p>
          <p className='tw-text-sm tw-font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui
            eius optio recusandae sint debitis officia animi ab vero, suscipit
            accusantium commodi eos corporis natus perspiciatis corrupti
            incidunt maxime quaerat!
          </p>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function Hero() {
  return (
    <section className='tw-z-40  tw-pt-12 tw-py-0  lg:tw-py-24 tw-px-4 md:tw-px-8 tw-overflow-hidden 2xl:tw-px-60 tw-mx-auto tw-grid tw-grid-cols-1 tw-gap-8 lg:tw-grid-cols-12 tw-relative tw-bg-gray-100'>
      <div className='tw-col-span-5'>
        <h1 className='tw-text-5xl lg:tw-text-8xl tw-font-bold tw-text-neutral-900 tw-mb-8'>
          The next gen <br />
          payment <br />
          method
        </h1>
        <p className='tw-font-light tw-mb-8'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo dicta
          provident ad porro nisi quidem voluptates.
        </p>
        <button className='tw-px-6 tw-py-3 tw-bg-neutral-800 hover:tw-cursor-pointer tw-text-neutral-50 tw-rounded-xl'>
          Get Your Card
        </button>
        <div className='tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-center tw-pt-8 lg:tw-pt-16'>
          <p className='tw-text-3xl tw-font-bold tw-flex tw-flex-row tw-items-center lg:tw-mr-16'>
            2943
            <small className='tw-text-sm tw-font-light tw-leading-none tw-ml-2'>
              Cards <br />
              Delivered
            </small>
          </p>
          <p className='tw-text-3xl tw-font-bold tw-flex tw-flex-row tw-items-center tw-flex-nowrap tw-pt-4 lg:tw-pt-0'>
            $1M +
            <small className='tw-text-sm tw-font-light tw-leading-none tw-ml-2'>
              Transactions <br />
              Completed
            </small>
          </p>
        </div>
      </div>
      <div className='tw-col-span-7 tw-pt-24 lg:tw-pt-0 lg:tw-pl-24 tw-align-self-center tw-relative tw-place-self-center tw-h-full tw-w-full'>
        <div className='tw-w-[300px]  tw-h-[300px] lg:tw-w-[600px] lg:tw-h-[600px] tw-bg-lime-200 tw-rounded-full'></div>
        <img
          className='tw-absolute tw-left-10 lg:tw-top-[-150px] tw-top-0 tw-w-[700px]'
          src='/man.png'
          alt=''
        />
        <img
          className='tw-absolute tw-left-[80px] tw-top-[200px] tw-w-[200px] lg:tw-w-[400px]'
          src='/card.svg'
          alt=''
        />
      </div>
    </section>
  );
}

import React from 'react';

export default function FeatureB() {
  return (
    <section className='tw-items-center tw-z-40 tw-relative tw-py-24 tw-px-4 md:tw-px-8 tw-overflow-hidden 2xl:tw-px-60 tw-mx-auto tw-grid  tw-gap-8 tw-grid-cols-12 tw-relative'>
      <div className='tw-col-span-12 lg:tw-col-span-4 tw-h-max'>
        <h2 className='tw-text-3xl lg:tw-text-4xl tw-font-bold'>
          The backbone for <br />
          internet business
        </h2>
        <p className='tw-font-light tw-text-neutral-500 tw-pt-4'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          suscipit quaerat expedita dignissimos numquam, nostrum consequuntur!
          Facilis eos nam optio enim cum nihil corrupti ea perferendis ducimus
          repellendus. Deleniti, ratione.
        </p>
        <hr className='tw-bg-neutral-500 tw-my-8' />
        <p className='tw-font-medium tw-pb-4 tw-italic'>
          &quot;Simple the best. Better than all the rest. Recommend the product.&quot;
        </p>
        <div className='tw-text-sm tw-flex tw-items-center'>
          <img
            className='tw-w-8 tw-rounded-full tw-h-8 tw-mr-4'
            src='https://i.guim.co.uk/img/media/35dea5d8e39db1af5cc5acbbadc29e2d4b19e46b/0_202_5308_3184/master/5308.jpg?width=620&quality=85&dpr=1&s=none'
            alt=''
          />
          <div>
            <p className='tw-font-medium'>Trevor Noah</p>
            <p className='tw-text-neutral-500'>
              Director of Tech. At Commedy Central.
            </p>
          </div>
        </div>
      </div>
      <div className='tw-col-span-12 lg:tw-col-span-8 tw-align-self-center tw-relative tw-place-self-center'>
        <div className='tw-w-[300px] lg:tw-w-[600px] tw-h-[300px] lg:tw-h-[600px] tw-bg-lime-200 tw-rounded-full'></div>
        <img
          className='tw-transform tw-rotate-12 tw-absolute tw-left-0 tw-top-[100px] tw-w-[400px]'
          src='/card_black.svg'
          alt=''
        />
        <img
          className='tw-transform -tw-rotate-12 tw-absolute tw-left-0 lg:tw-left-40 tw-top-[100px] lg:tw-top-[270px] tw-w-[400px]'
          src='/card_blue.svg'
          alt=''
        />
      </div>
    </section>
  );
}

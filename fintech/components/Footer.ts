import React from 'react';

export default function Footer() {
  return (
    <footer className='tw-bg-neutral-100 tw-items-center tw-z-40  tw-py-16 tw-px-4 md:tw-px-8 tw-overflow-hidden 2xl:tw-px-60 tw-mx-auto tw-grid tw-grid-cols-1 tw-gap-8 lg:tw-grid-cols-12 tw-relative'>
      <div className='tw-col-span-12 lg:tw-col-span-9'>
        <h3 className='tw-font-medium tw-text-neutral-800 tw-text-5xl'>
          Make secure <br />
          payment & grow <br />
          your online business
        </h3>
      </div>
      <div className='tw-col-span-12 lg:tw-col-span-3'>
        <div className='tw-flex tw-items-center tw-py-2'>
          <img src='/pin.svg' alt='' />
          <p className='tw-ml-4'>
            8502 Preston Rd. Inlgewood. Maine 98380, USA
          </p>
        </div>
        <div className='tw-flex tw-items-center tw-py-2'>
          <img src='/email.svg' alt='' />
          <p className='tw-ml-4'>support@fintech.co</p>
        </div>
      </div>
      <div className='tw-col-span-12 tw-border-t tw-pt-8'>
        <ul className='tw-flex tw-flex-col lg:tw-flex-row'>
          <li className='tw-mr-8'>
            <a className='tw-font-light hover:tw-text-neutral-500' href='#'>
              All courses
            </a>
          </li>
          <li className='tw-mr-8'>
            <a className='tw-font-light hover:tw-text-neutral-500' href='#'>
              Student Portal
            </a>
          </li>
          <li className='tw-mr-8'>
            <a className='tw-font-light hover:tw-text-neutral-500' href='#'>
              Support
            </a>
          </li>
          <li className='tw-mr-8'>
            <a className='tw-font-light hover:tw-text-neutral-500' href='#'>
              Contact us
            </a>
          </li>
          <li className='lg:tw-ml-auto tw-mt-8 lg:tw-mt-0'>
            <small>Copyright 2022, All rights reserved</small>
          </li>
        </ul>
      </div>
    </footer>
  );
}

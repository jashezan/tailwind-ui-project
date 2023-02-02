import React from 'react';

export default function FeatureA() {
  return (
    <section className='tw-bg-neutral-100 tw-content-center tw-z-40 tw-py-24 tw-px-4 md:tw-px-8 tw-overflow-hidden 2xl:tw-px-60 tw-mx-auto tw-grid tw-gap-8 tw-grid-cols-12 tw-relative tw-h-max'>
      <div className='tw-col-span-12 lg:tw-col-span-8 tw-align-self-center tw-relative'>
        <div className='tw-bg-white tw-shadow-2xl tw-rounded-lg tw-p-8 tw-relative tw-max-w-lg tw-flex tw-flex-col'>
          <div className='tw-flex tw-items-center tw-p-2'>
            <svg
              width='50'
              height='50'
              viewBox='0 0 50 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect width='50' height='50' rx='15' fill='#3B82F6' />
              <path
                d='M33.125 18.125H16.875C16.5293 18.125 16.25 18.4043 16.25 18.75V31.25C16.25 31.5957 16.5293 31.875 16.875 31.875H33.125C33.4707 31.875 33.75 31.5957 33.75 31.25V18.75C33.75 18.4043 33.4707 18.125 33.125 18.125ZM17.6562 19.5312H32.3438V21.875H17.6562V19.5312ZM32.3438 30.4688H17.6562V23.5938H32.3438V30.4688ZM27.7148 29.2188H30.9375C31.0234 29.2188 31.0938 29.1484 31.0938 29.0625V27.6562C31.0938 27.5703 31.0234 27.5 30.9375 27.5H27.7148C27.6289 27.5 27.5586 27.5703 27.5586 27.6562V29.0625C27.5586 29.1484 27.6289 29.2188 27.7148 29.2188Z'
                fill='white'
              />
            </svg>

            <div className='tw-px-4'>
              <p className='tw-font-bold tw-leading-none'>Add Card</p>
              <small className='tw-leading-none tw-font-light tw-text-neutral-500'>
                Add a card to your account
              </small>
            </div>
            <div className='tw-w-4 tw-h-4 tw-rounded-full tw-border tw-border-neutral-400 tw-ml-auto'></div>
          </div>
          <div className='tw-flex tw-items-center tw-p-2'>
            <svg
              width='50'
              height='50'
              viewBox='0 0 50 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect width='50' height='50' rx='15' fill='#F59E0B' />
              <path
                d='M32.1875 17.1875H17.8125C17.4668 17.1875 17.1875 17.4668 17.1875 17.8125V32.1875C17.1875 32.5332 17.4668 32.8125 17.8125 32.8125H32.1875C32.5332 32.8125 32.8125 32.5332 32.8125 32.1875V17.8125C32.8125 17.4668 32.5332 17.1875 32.1875 17.1875ZM31.4062 26.25H25.3125V23.75H31.4062V26.25ZM31.4062 31.4062H18.5938V18.5938H31.4062V22.5H24.6875C24.3418 22.5 24.0625 22.7793 24.0625 23.125V26.875C24.0625 27.2207 24.3418 27.5 24.6875 27.5H31.4062V31.4062ZM26.3281 25C26.3281 25.2072 26.4104 25.4059 26.5569 25.5524C26.7035 25.6989 26.9022 25.7812 27.1094 25.7812C27.3166 25.7812 27.5153 25.6989 27.6618 25.5524C27.8083 25.4059 27.8906 25.2072 27.8906 25C27.8906 24.7928 27.8083 24.5941 27.6618 24.4476C27.5153 24.3011 27.3166 24.2188 27.1094 24.2188C26.9022 24.2188 26.7035 24.3011 26.5569 24.4476C26.4104 24.5941 26.3281 24.7928 26.3281 25Z'
                fill='white'
              />
            </svg>

            <div className='tw-px-4'>
              <p className='tw-font-bold tw-leading-none'>Add Crypto Wallet</p>
              <small className='tw-leading-none tw-font-light tw-text-neutral-500'>
                Connect to your crypto wallet
              </small>
            </div>
            <div className='tw-w-4 tw-h-4 tw-rounded-full tw-border tw-border-neutral-400 tw-ml-auto'></div>
          </div>
          <div className='tw-flex tw-items-center tw-bg-neutral-100 tw-p-2 tw-rounded-lg'>
            <svg
              width='50'
              height='50'
              viewBox='0 0 50 50'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect width='50' height='50' rx='15' fill='#EF4444' />
              <g clip-path='url(#clip0_102_112)'>
                <path
                  d='M26.479 22.883C24.853 22.279 23.967 21.816 23.967 21.08C23.967 20.458 24.478 20.103 25.39 20.103C27.057 20.103 28.769 20.745 29.948 21.323L30.614 17.212C29.679 16.766 27.767 16.035 25.124 16.035C23.254 16.035 21.699 16.524 20.588 17.436C19.433 18.39 18.831 19.77 18.831 21.436C18.831 24.459 20.678 25.748 23.678 26.839C25.614 27.527 26.257 28.017 26.257 28.773C26.257 29.505 25.628 29.928 24.495 29.928C23.092 29.928 20.779 29.239 19.264 28.35L18.59 32.507C19.894 33.239 22.295 33.995 24.787 33.995C26.763 33.995 28.411 33.528 29.522 32.639C30.767 31.662 31.412 30.217 31.412 28.35C31.412 25.259 29.523 23.97 26.477 22.882H26.479V22.883Z'
                  fill='white'
                />
              </g>
              <defs>
                <clipPath id='clip0_102_112'>
                  <rect
                    width='24'
                    height='24'
                    fill='white'
                    transform='translate(13 13)'
                  />
                </clipPath>
              </defs>
            </svg>
            <div className='tw-px-4'>
              <p className='tw-font-bold tw-leading-none'>Add Stripe Account</p>
              <small className='tw-leading-none tw-font-light tw-text-neutral-500'>
                Connect to your stripe account
              </small>
            </div>
            <div className='tw-w-4 tw-h-4 tw-rounded-full tw-bg-green-400 tw-ml-auto tw-flex tw-items-center tw-align-center'></div>
          </div>
        </div>
        <div className='tw-bg-white tw-shadow-2xl tw-rounded-lg tw-p-4 tw-relative tw-max-w-sm tw-font-bold tw-absolute tw-left-[100px] lg:tw-left-[300px] tw-top-[-250px]'>
          <small>Cashback</small>
          <p className='tw-text-xl tw-py-2 tw-leading-none'>
            $1,324{' '}
            <small className='tw-text-green-500 tw-text-sm'>+ 4,5%</small>
          </p>
          <small className='tw-text-neutral-500 tw-font-light tw-leading-none'>
            Compared to $890 last month
          </small>
        </div>
      </div>
      <div className='tw-col-span-12 lg:tw-col-span-4'>
        <h2 className='tw-text-3xl lg:tw-text-4xl tw-font-bold'>
          A fully integrated suite <br />
          of payments products
        </h2>
        <p className='tw-font-medium tw-py-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          possimus reprehenderit dolorem ipsam.
        </p>
        <p className='tw-font-light tw-text-neutral-500'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          suscipit quaerat expedita dignissimos numquam, nostrum consequuntur!
          Facilis eos nam optio enim cum nihil corrupti ea perferendis ducimus
          repellendus. Deleniti, ratione.
        </p>
      </div>
    </section>
  );
}

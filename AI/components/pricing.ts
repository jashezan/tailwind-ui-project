import React from "react";

export default function Pricing() {
  return (
    <section className="tw-z-40 tw-relative tw-text-gray-50 tw-py-32 tw-px-4 md:tw-px-8 tw-overflow-hidden 2xl:tw-px-60 tw-mx-auto ">
      <h2 className="tw-text-4xl tw-text-center tw-w-full tw-font-medium">
        Make the wise descision <br />
        for your business
      </h2>
      <p className="tw-py-8 tw-text-gray-500 tw-font-light tw-max-w-md tw-text-center tw-mx-auto">
        Choose from 3 affordable packages
      </p>
      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 xl:tw-grid-cols-5 tw-mt-12 tw-gap-4 tw-mx-auto  tw-items-stretch tw-text-left tw-text-gray-400 lg:tw-h-[500px]">
        <div className="tw-bg-gray-800 tw-rounded-lg tw-p-8 xl:tw-col-start-2 tw-flex tw-flex-col">
          <small className="tw-mb-8 tw-block">Starter Plan</small>
          <p className="tw-text-4xl tw-text-white tw-mb-4">
            $29<span className="tw-text-sm">/month</span>
          </p>
          <small className="tw-mb-8 tw-block">
            This plan is suitable for teams of 1-15 people
          </small>
          <p className="tw-mb-4 tw-text-white">What&apos;s included</p>
          <p className="tw-mb-2 tw-block">10 Dedicated hosting</p>
          <p className="tw-mb-2 tw-block">Great for freelancers</p>
          <p className="tw-mb-2 tw-block">1 Year support</p>
          <button className="tw-w-full tw-text-white tw-px-4 tw-py-2.5 tw-bg-transparent tw-border tw-border-gray-500 hover:tw-cursor-pointer hover:tw-text-gray-300 tw-rounded-lg tw-mr-2 tw-mt-auto">
            Get Started
          </button>
        </div>
        <div className="tw-bg-gray-800 tw-rounded-lg tw-p-8 tw-flex tw-flex-col">
          <small className="tw-mb-8 tw-block">Basic Plan</small>
          <p className="tw-text-4xl tw-text-white tw-mb-4">
            $79<span className="tw-text-sm">/month</span>
          </p>
          <small className="tw-mb-8 tw-block">
            This plan is suitable for teams of 15-100 people
          </small>
          <p className="tw-mb-4 tw-text-white">What&apos;s included</p>
          <p className="tw-mb-2 tw-block">50 Dedicated hosting</p>
          <p className="tw-mb-2 tw-block">Great for Businesses</p>
          <p className="tw-mb-2 tw-block">2 Year support</p>
          <button className="tw-w-full tw-text-white tw-px-4 tw-py-2.5 tw-bg-gradient-to-r tw-from-indigo-700 tw-to-fuchsia-700 hover:tw-cursor-pointer hover:tw-text-gray-300 tw-rounded-lg tw-mr-2 tw-mt-auto">
            Get Started
          </button>
        </div>
        <div className="tw-bg-gray-800 tw-rounded-lg tw-p-8 tw-flex tw-flex-col">
          <small className="tw-mb-8 tw-block">Premuim Plan</small>
          <p className="tw-text-4xl tw-text-white tw-mb-4">
            $129<span className="tw-text-sm">/month</span>
          </p>
          <small className="tw-mb-8 tw-block">
            This plan is suitable for teams of 100+ people
          </small>
          <p className="tw-mb-4 tw-text-white">What&apos;s included</p>
          <p className="tw-mb-2 tw-block">100 Dedicated hosting</p>
          <p className="tw-mb-2 tw-block">Great for enterprises</p>
          <p className="tw-mb-2 tw-block">4 Year support</p>
          <button className="tw-w-full tw-text-white tw-px-4 tw-py-2.5 tw-bg-transparent tw-border tw-border-gray-500 hover:tw-cursor-pointer hover:tw-text-gray-300 tw-rounded-lg tw-mr-2 tw-mt-auto">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function CTA() {
  return (
    <section className="tw-border-b tw-border-gray-700 tw-z-40  tw-text-gray-50 tw-py-8 tw-px-4 md:tw-px-8 tw-overflow-hidden 2xl:tw-px-60 tw-mx-auto tw-relative">
      <div className="tw-p-8 lg:tw-w-9/12 tw-mx-auto tw-rounded-lg tw-bg-gradient-to-r tw-from-indigo-700 tw-to-fuchsia-700 tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-items-center">
        <h2 className="tw-text-center lg:tw-text-left tw-mb-4 lg:tw-mb-0 tw-text-2xl tw-text-white lg:tw-w-1/2 tw-font-medium">
          Take your content creation to the next level
        </h2>
        <button className="tw-capitalize tw-px-4 tw-py-3 tw-bg-white hover:tw-cursor-pointer tw-text-gray-700 tw-rounded-lg tw-block">
          Start your 14 day free trail
        </button>
      </div>
    </section>
  );
}

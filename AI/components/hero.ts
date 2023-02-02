import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const init = { opacity: 0, x: -50 };
const animate = { opacity: 1, x: 0 };
const duration = { duration: 0.5 };

export default function hero() {
  return (
    <section className="tw-border-b tw-border-gray-700 tw-z-40 tw-relative tw-text-gray-50 tw-py-32 tw-px-4 md:tw-px-8 tw-overflow-hidden 2xl:tw-px-60 tw-mx-auto tw-relative">
      <h1 className="lg:tw-leading-[5rem] tw-text-4xl lg:tw-text-7xl tw-text-center tw-w-full">
        Write better <br />
        content for your <br />
      </h1>
      <div className="tw-w-max tw-flex tw-flex-col tw-mx-auto tw-mt-0">
        <span className="tw-text-transparent tw-bg-gradient-to-r tw-from-orange-600 tw-to-yellow-500 tw-bg-clip-text tw-underline tw-text-4xl lg:tw-text-7xl">
          Facebook Ads
          <div className="tw-h-1 tw-w-full tw-bg-gradient-to-r tw-from-orange-600 tw-to-yellow-500"></div>
        </span>
      </div>
      <p className="tw-text-center tw-max-w-2xl tw-mx-auto tw-mt-12 tw-text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        obcaecati sequi ex quisquam distinctio nihil libero rerum.
      </p>
      <button className="tw-capitalize tw-px-4 tw-py-3 tw-bg-gradient-to-r tw-from-indigo-700 tw-to-fuchsia-700 hover:tw-cursor-pointer tw-text-gray-50 tw-rounded-lg tw-mx-auto tw-block tw-mt-12">
        Start your 14 day free trail
      </button>
      <button className="tw-flex tw-items-center tw-capitalize tw-px-4 tw-py-3 hover:tw-cursor-pointer tw-text-gray-50 tw-rounded-lg tw-mx-auto tw-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="tw-mr-1 tw-w-4 tw-h-4"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
            clip-rule="evenodd"
          />
        </svg>
        Watch a demo
      </button>
    </section>
  );
}

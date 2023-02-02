import React from "react";

export default function FeatureA() {
  return (
    <section className="tw-grid tw-grid-cols-12 tw-gap-8 tw-border-b tw-border-gray-700 tw-z-40  tw-text-gray-50 tw-py-32 tw-px-4 md:tw-px-8 tw-overflow-hidden 2xl:tw-px-60 tw-mx-auto tw-relative">
      <div className="tw-col-span-12 lg:tw-col-span-6">
        <div className="tw-relative tw-bg-white tw-rounded-lg tw-p-4 lg:tw-w-9/12 tw-text-gray-700 tw-flex tw-flex-col tw-gap-2">
          <p className="tw-text-gray-900 tw-font-medium">Result</p>
          <small className="tw-bloc">Here&apos;s what our AI came up with</small>
          <div className="tw-relative tw-bg-gray-100 tw-rounded-lg tw-p-4 tw-text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem sed
            ab quam obcaecati. Consectetur dolor, dignissimos ratione error ipsa
            cumque, provident molestiae eveniet vitae, tempore iure nostrum quas
            nisi.
          </div>
          <div className="tw-relative tw-bg-gray-100 tw-rounded-lg tw-p-4 tw-text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rem sed
            ab quam obcaecati. Consectetur dolor, dignissimos ratione error ipsa
            cumque, provident molestiae eveniet vitae, tempore iure nostrum quas
            nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            rem sed ab quam obcaecati. Consectetur dolor, dignissimos ratione
            error ipsa cumque, provident molestiae eveniet vitae, tempore iure
            nostrum quas nisi.
          </div>
        </div>
      </div>
      <div className="tw-col-span-12 lg:tw-col-span-6">
        <h2 className="tw-text-4xl tw-font-medium">
          Create content quickly <br />
          and efficiently with <br />
          great AI writing tools
        </h2>
        <p className="tw-py-8 tw-text-gray-500 tw-font-light tw-max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          repudiandae? Earum dignissimos corrupti amet eos tempore porro, fuga
          repellat quibusdam ad atque ex sequi officia iure in dolorum libero
          aperiam.
        </p>
        <button className="tw-capitalize tw-px-4 tw-py-3 tw-bg-gradient-to-r tw-from-indigo-700 tw-to-fuchsia-700 hover:tw-cursor-pointer tw-text-gray-50 tw-rounded-lg tw-block">
          Start your 14 day free trail
        </button>
      </div>
    </section>
  );
}

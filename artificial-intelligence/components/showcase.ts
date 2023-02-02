import React from "react";

export default function Showcase() {
  return (
    <section className="tw-border-b tw-border-gray-700 tw-z-40  tw-text-gray-50 tw-py-32 tw-px-4 md:tw-px-8 tw-overflow-hidden 2xl:tw-px-60 tw-mx-auto tw-relative">
      <h2 className="tw-text-4xl tw-text-center tw-w-full tw-font-medium">
        Mixland helps you build <br className="tw-hidden lg;tw-block" />
        beautifull websites
      </h2>
      <div className="tw-grid tw-grid-cols-12 tw-mt-12 xl:tw-gap-12 tw-mx-auto tw-items-stretch">
        <div className="tw-col-span-12 lg:tw-col-span-4">
          <div className="tw-p-4 tw-rounded-lg tw-bg-gradient-to-r tw-from-indigo-700 tw-to-fuchsia-700 tw-mb-4">
            Blog Headlines
          </div>
          <div className="tw-p-4 tw-rounded-lg tw-border hover:tw-border-none tw-border-gray-700 hover:tw-cursor-pointer hover:tw-bg-gradient-to-r tw-from-indigo-700 tw-to-fuchsia-700 tw-mb-4">
            Blog Intros
          </div>
          <div className="tw-p-4 tw-rounded-lg tw-border hover:tw-border-none tw-border-gray-700 hover:tw-cursor-pointer hover:tw-bg-gradient-to-r tw-from-indigo-700 tw-to-fuchsia-700 tw-mb-4">
            Social Media Handles
          </div>
          <div className="tw-p-4 tw-rounded-lg tw-border hover:tw-border-none tw-border-gray-700 hover:tw-cursor-pointer hover:tw-bg-gradient-to-r tw-from-indigo-700 tw-to-fuchsia-700 tw-mb-4">
            Facebook Ads
          </div>
          <div className="tw-p-4 tw-rounded-lg tw-border hover:tw-border-none tw-border-gray-700 hover:tw-cursor-pointer hover:tw-bg-gradient-to-r tw-from-indigo-700 tw-to-fuchsia-700 tw-mb-4">
            Product Description
          </div>
          <div className="tw-p-4 tw-rounded-lg tw-border hover:tw-border-none tw-border-gray-700 hover:tw-cursor-pointer hover:tw-bg-gradient-to-r tw-from-indigo-700 tw-to-fuchsia-700 tw-mb-4">
            PAS copywriting formulas
          </div>
        </div>
        <div className="tw-col-span-12 lg:tw-col-span-8 tw-bg-gray-700 tw-p-4 tw-rounded-lg tw-flex tw-flex-col tw-justify-start">
          <div className="tw-flex">
            <div className="tw-h-2 tw-w-2 tw-bg-green-400 tw-rounded-full tw-mr-1"></div>
            <div className="tw-h-2 tw-w-2 tw-bg-yellow-400 tw-rounded-full tw-mr-1"></div>
            <div className="tw-h-2 tw-w-2 tw-bg-red-400 tw-rounded-full tw-mr-1"></div>
          </div>
          <p className="tw-text-gray-500 tw-text-sm tw-my-8 tw-justify-self-start">
            4 blog headlines generated
          </p>
          <div className="tw-flex tw-justify-between tw-flex-col tw-h-full">
            <p className="tw-mb-4 tw-text-xl">
              Create original content that ranks SEO
            </p>
            <p className="tw-mb-4 tw-text-xl">Mechanic keayborad enthusiasts</p>
            <p className="tw-mb-4 tw-text-xl">
              How to grow your side hustle to 10x MRR.
            </p>
            <p className="tw-mb-4 tw-text-xl">10 JSON API Generators.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

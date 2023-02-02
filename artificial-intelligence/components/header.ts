import React from "react";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="tw-z-50 tw-bg-gray-900 tw-w-full">
      <div className="tw-mx-auto tw-container tw-p-4 tw-grid lg:tw-flex lg:tw-justify-between tw-grid-cols-2">
        <nav className="tw-flex tw-items-center">
          <Logo />

          <ul className="lg:tw-flex tw-hidden">
            <li className="tw-mr-8">
              <a className="hover:tw-text-gray-300" href="#">
                All courses
              </a>
            </li>
            <li className="tw-mr-8">
              <a className="hover:tw-text-gray-300" href="#">
                Student Portal
              </a>
            </li>
            <li className="tw-mr-8">
              <a className="hover:tw-text-gray-300" href="#">
                Support
              </a>
            </li>
            <li className="tw-mr-8">
              <a className="hover:tw-text-gray-300" href="#">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
        <div className="tw-hidden lg:tw-block">
          <button className="tw-px-4 tw-py-2.5 tw-bg-transparent tw-border tw-border-gray-500 hover:tw-cursor-pointer hover:tw-text-gray-300 tw-rounded-lg tw-mr-2">
            Sign In
          </button>
          <button className="tw-px-4 tw-py-3 tw-bg-gradient-to-r tw-from-indigo-700 tw-to-fuchsia-700 hover:tw-cursor-pointer tw-text-gray-50 tw-rounded-lg">
            Get Your Card
          </button>
        </div>

        <button
          type="button"
          className="lg:tw-hidden tw-justify-self-end tw-inline-flex tw-items-center tw-justify-center tw-rounded-lg tw-p-2 focus:tw-outline-none"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="tw-sr-only">Open main menu</span>

          <svg
            className="tw-lock tw-h-6 tw-w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <svg
            className="tw-hidden tw-h-6 tw-w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div
          id="mobile-menu"
          className="tw-col-span-2 tw-p-2 tw-mt-4 tw-rounded-lg lg:tw-hidden tw-z-50"
        >
          <ul className="tw-w-full tw-py-2">
            <li className="tw-bg-gray-800 hover:tw-bg-gray-700 tw-text-gray-50 focus:tw-bg-gray-700 hover:tw-text-gray-50 focus:tw-text-gray-50 tw-p-2 tw-rounded-lg">
              <a className="tw-font-medium hover:tw-text-gray-900" href="#">
                Demos
              </a>
            </li>
            <li className="hover:tw-bg-gray-700 focus:tw-bg-gray-700 hover:tw-text-gray-50 focus:tw-text-gray-50t tw-p-2 tw-rounded-lg">
              <a className="tw-font-medium hover:tw-text-gray-900" href="#">
                About
              </a>
            </li>
            <li className="hover:tw-bg-gray-700 focus:tw-bg-gray-700 hover:tw-text-gray-50 focus:tw-text-gray-50 tw-p-2 tw-rounded-lg">
              <a className="tw-font-medium hover:tw-text-gray-900" href="#">
                Blog
              </a>
            </li>
            <li className="hover:tw-bg-gray-700 focus:tw-bg-gray-700 hover:tw-text-gray-50 focus:tw-text-gray-50 tw-p-2 tw-rounded-lg">
              <a className="tw-font-medium hover:tw-text-gray-900" href="#">
                Pages
              </a>
            </li>
            <li className="hover:tw-bg-gray-700 focus:tw-bg-gray-700 hover:tw-text-gray-50 focus:tw-text-gray-50 tw-p-2 tw-rounded-lg">
              <a className="tw-font-medium hover:tw-text-gray-900" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="tw-border-t tw-border-gray-700 tw-pt-4">
            <button className="tw-w-full tw-px-4 tw-py-3 tw-bg-gradient-to-r tw-from-indigo-700 tw-to-fuchsia-700 hover:tw-cursor-pointer tw-text-gray-50 tw-font-medium tw-rounded-lg-lg">
              Get Started now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

import React, { useState } from "react";
const lstMenu = [
  {
    title: "Home",
    isTrue: false,
  },
  {
    title: "Shop",
    isTrue: true,
    submenu: [
      {
        title: "shirt",
      },
      {
        title: "T-shirt",
      },
      {
        title: "kurata",
      },
      {
        title: "shoot",
      },
    ],
  },
  {
    title: "Collection",
    isTrue: false,
  },
  {
    title: "Men",
    isTrue: true,
    submenu: [
      {
        title: "shirt",
      },
      {
        title: "T-shirt",
      },
      {
        title: "kurata",
      },
      {
        title: "shoot",
      },
    ],
  },
  {
    title: "Women",
    isTrue: false,
  },
  {
    title: "Child",
    isTrue: false,
  },
  {
    title: "About Us",
    isTrue: false,
  },
  {
    title: "Contact Us",
    isTrue: false,
  },
];
export default function Navbar() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div>
      <div className="mx-[15px]">
        <ul className="flex justify-center">
          <div className="flex gap-x-5">
            {lstMenu.map((item: any) => (
              <li className="group/item">
                <div className="grid grid-cols-[auto_auto]">
                  <div>
                    <div className="text-gray-500 group inline-flex items-center  text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span>{item.title}</span>
                      {item.isTrue == true && (
                        <svg
                          className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                <a
                  href={item.title}
                  className=" group/edit invisible hover:bg-slate-200 group-hover/item:visible"
                >
                  <div className="absolute top-40 z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                    {item.isTrue === true && (
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <a
                            href="#"
                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          >
                            <svg
                              className="h-6 w-6 flex-shrink-0 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Analytics
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Get a better understanding of where your traffic
                                is coming from.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          >
                            <svg
                              className="h-6 w-6 flex-shrink-0 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Engagement
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Speak directly to your customers in a more
                                meaningful way.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          >
                            <svg
                              className="h-6 w-6 flex-shrink-0 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Security
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Your customers' data will be safe and secure.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          >
                            <svg
                              className="h-6 w-6 flex-shrink-0 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Integrations
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Connect with third-party tools that you're
                                already using.
                              </p>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          >
                            <svg
                              className="h-6 w-6 flex-shrink-0 text-indigo-600"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                              />
                            </svg>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Automations
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Build strategic funnels that will drive your
                                customers to convert
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          <div className="flow-root">
                            <a
                              href="#"
                              className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                            >
                              <svg
                                className="h-6 w-6 flex-shrink-0 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                                />
                              </svg>
                              <span className="ml-3">Watch Demo</span>
                            </a>
                          </div>
                          <div className="flow-root">
                            <a
                              href="#"
                              className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                            >
                              <svg
                                className="h-6 w-6 flex-shrink-0 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                />
                              </svg>
                              <span className="ml-3">Contact Sales</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </a>
                {/* <div className="absolute top-40 w-44">
                  <a
                    href={item.title}
                    className=" group/edit invisible hover:bg-slate-200 group-hover/item:visible"
                  >
                    {item.isTrue === true && (
                      <ul className="border border-gray-800">
                        {item.submenu.map((submenu: any) => (
                          <li className="bg-gray-100 p-3">
                            <div className="">
                              <span className="px-2">{submenu.title}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </a>
                </div> */}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

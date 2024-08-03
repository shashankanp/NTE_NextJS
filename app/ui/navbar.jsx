"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";
import Logo from "../../public/nteLogo.png";

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-[#dd007a1a] backdrop-filter backdrop-blur-md bg-opacity-30 shadow w-full sticky top-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center font-bold text-black">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              {/* Left side with logo */}
              <div className="flex items-center">
                <Image src={Logo} className="h-14 w-14" alt="NTE Logo" />
              </div>

              {/* Right side with navigation links */}
              <div className="ml-auto flex items-center space-x-8">
                <div className="hidden md:flex md:space-x-8">
                  <a
                    href="#"
                    className="inline-flex items-center px-1 pt-1 text-sm font-bold "
                  >
                    HOME
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-transparent px-1 pt-1 text-sm font-bold"
                  >
                    OUR TEAM
                  </a>
                  <Menu as="div" className="relative">
                    <MenuButton className="relative  px-1 pt-1 flex rounded-full text-sm focus:outline-none ">
                      2021 CONFERENCE &#11167;
                    </MenuButton>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-transparent py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-[#dd007a1a]" : "",
                              "block px-4 py-2 text-sm text-black"
                            )}
                          >
                            CONFERENCE AGENDA
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-[#dd007a1a]" : "",
                              "block px-4 py-2 text-sm text-black"
                            )}
                          >
                            CONFERENCE FAQs
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href="#"
                            className={classNames(
                              focus ? "bg-[#dd007a1a]" : "",
                              "block px-4 py-2 text-sm text-black"
                            )}
                          >
                            CONFERENCE RECORDING
                          </a>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                  <a
                    href="#"
                    className="inline-flex items-center border-transparent px-1 pt-1 text-sm font-bold"
                  >
                    MENTAL HEALTH RESOURCES
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-transparent px-1 pt-1 text-sm font-bold"
                  >
                    BUTTERFLY CHAT
                  </a>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-bold text-indigo-700 sm:pl-5 sm:pr-6"
              >
                HOME
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-bold hover:bg-gray-50 sm:pl-5 sm:pr-6"
              >
                OUR TEAM
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-bold hover:bg-gray-50 sm:pl-5 sm:pr-6"
              >
                2021 Conference
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-bold hover:bg-gray-50 sm:pl-5 sm:pr-6"
              >
                MENTAL HEALTH RESOURCES
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-bold hover:bg-gray-50 sm:pl-5 sm:pr-6"
              >
                BUTTERFLY CHAT
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

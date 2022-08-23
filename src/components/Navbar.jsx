import React from 'react'
import { useState } from 'react'
import CartWidget from "./CartWidget"
import logo from "../data/images/logo.png"
import { TiThMenu } from "react-icons/ti"
import { Transition } from "@headlessui/react";




const Navbar = () => {

  const Links = [
    { name: "HOME1", link: "/" },
    { name: "HOME2", link: "/" },
    { name: "HOME3", link: "/" },
    { name: "HOME4", link: "/" },
    { name: "HOME5", link: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-main-bg">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="items-center text-2xl font-bold cursor-pointer">
            <img src={logo} className="" alt="" style={{ width: "150px", height: '150px' }} />
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-main-bg md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-12 transition-all duration-500 ease-in`}>
                {
                  Links.map((link) => (
                    <li key={link.name} className='text-xl md:ml-8 md:my-0 my-7'>
                      <a href={link.link} className='text-gray-800 duration-500 hover:text-secondaryColor'>{link.name}</a>
                    </li>
                  ))
                }
                <li className="text-4xl duration-500 cursor-pointer md:ml-8 md:my-0 my-7 hover:text-secondaryColor">
                  <CartWidget />
                </li>
              </ul>
            </div>
          </div>
          {/* Menu Button */}
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-transparent rounded-md hover:text-white hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className=" md:hidden" id="mobile-menu">
            <div ref={ref} className="">
              {
                Links.map((link) => (
                  <li key={link.name} className='block px-12 text-base text-xl font-medium rounded-md md:ml-8 md:my-0 my-7'>
                    <a href={link.link} className='text-gray-800 duration-500 hover:text-secondaryColor'>{link.name}</a>
                  </li>
                ))
              }
              <li className="justify-center block pb-5 pl-12 mb-3 text-4xl text-gray-800 duration-500 cursor-pointer md:ml-8 md:my-0 my-7 hover:text-secondaryColor">
                <CartWidget />
              </li>
            </div>
          </div>
        )}
      </Transition>
      {/* Menu Button */}
    </nav>
  );
}






export default Navbar
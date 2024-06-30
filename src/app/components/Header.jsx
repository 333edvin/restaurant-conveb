'use client'
import { useState } from "react";
import TopBar from './TopBar';
import heroicon from '../../../public/images/hero-icon.png';
import Image from 'next/image';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>

      <header className=" fixed top-0 left-0 right-0 z-50 text-white">
    <div className="hidden md:block  text-white">
      <TopBar />
    </div>
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <a href="#" className="flex items-center text-2xl font-bold ">
            <Image src={heroicon} width={50} height={50} alt="burnup - Home" />
            <span className="ml-2">BurnUp</span>
          </a>
          <nav className="flex items-center space-x-4 md:space-x-6">
            <div className="hidden md:flex space-x-6">
              <a href="#home" className=" hover:text-gray-600">
                Home
              </a>
              <a href="#menu" className=" hover:text-gray-600">
                Menus
              </a>
              <a href="#about" className=" hover:text-gray-600">
                About Us
              </a>
              <a href="#" className=" hover:text-gray-600">
                Our Chefs
              </a>
              <a href="#" className=" hover:text-gray-600">
                Contact
              </a>
            </div>
            <button
              className="md:hidden "
              aria-label="open menu"
              onClick={handleMenuToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </nav>
          <a href="#" className="btn btn-secondary hidden md:block">
            <span className="text border-orange-400 border-2 p-3">Find A Table</span>
          </a>
        </div>
        {isMobileMenuOpen && (
          <div className="container mx-auto  h-full px-6 md:hidden header-bg">
            <div className="flex flex-col space-y-4 pt-5">
              <a href="#home" className=" hover:text-gray-600">
                Home
              </a>
              <a href="#menu" className=" hover:text-gray-600">
                Menus
              </a>
              <a href="#about" className=" hover:text-gray-600">
                About Us
              </a>
              <a href="#" className=" hover:text-gray-600">
                Our Chefs
              </a>
              <a href="#" className=" hover:text-gray-600">
                Contact
              </a>
            </div>
            <div className=" text-center py-10">
              <div>

              <p className="text-lg font-semibold">Visit Us</p>
              <address className="not-italic">
                Restaurant St, Delicious City,<br />
                London 9578, UK
              </address>
              <p className="text-sm">Open: 9.30 am - 2.30 pm</p>
              <a href="mailto:booking@example.com" className="text-sm text-blue-600 hover:underline">booking@example.com</a>
              <p className="mt-2">Booking Request</p>
              <a href="tel:+88123123456" className="text-lg text-blue-600 hover:underline">
                +88-123-123456
              </a>
              </div>
              <br />
            <a href="#" className="btn btn-secondary ">
              <span className="text border-orange-400 border-2 p-3 mt-4">Find A Table</span>
            </a>
            </div>
          </div>
        )}
      <hr />
      </header>
    </>
  );
}

export default Header;

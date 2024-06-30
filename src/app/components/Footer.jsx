import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
function Footer() {
  return (
    <>
     <footer className="bg-black-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-start md:justify-between space-y-4 md:space-y-0">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 md:order-2 md:mr-10">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <a href="#about" className="text-gray-300 hover:text-white">About Us</a>
            <a href="#menu" className="text-gray-300 hover:text-white">Menu</a>
            <a href="#gallery" className="text-gray-300 hover:text-white">Gallery</a>
            <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          </div>
          {/* Newsletter Signup */}
          <div className="md:flex md:flex-col md:items-start md:flex-1 md:order-1">
            <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
            <form className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <input type="email" placeholder="Your email" className="w-full md:w-56 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">Subscribe</button>
            </form>
            <p className="text-sm mt-2">Stay updated with our latest news and promotions!</p>
          </div>
          {/* Social Media Icons */}
          <div className="flex md:order-3 mt-8 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-white" aria-label="Facebook">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="ml-6 text-gray-300 hover:text-white" aria-label="Instagram">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="ml-6 text-gray-300 hover:text-white" aria-label="Twitter">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
        {/* Copyright Text */}
        <hr className='my-5'/>
        <div className="text-center mt-8 ">
          <p className="text-sm">© 2024 Restaurant Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
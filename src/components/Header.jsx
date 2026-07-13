import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../router/Router'
import Logo from './Logo'
import { FaHandHoldingHeart } from "react-icons/fa"
import { FaBasketShopping } from "react-icons/fa6"
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"

const Header = ({ favourite, basket }) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-200 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {paths.map(item => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="relative transition duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Favourite */}
          <Link
            to="/favourite"
            className="relative bg-red-50 hover:bg-red-100 text-red-600 p-3 rounded-full shadow transition duration-300 hover:scale-110"
          >
            <FaHandHoldingHeart className="text-xl" />

            {favourite.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                {favourite.length}
              </span>
            )}
          </Link>

          {/* Basket */}
          <Link
            to="/basket"
            className="relative bg-green-50 hover:bg-green-100 text-green-600 p-3 rounded-full shadow transition duration-300 hover:scale-110"
          >
            <FaBasketShopping className="text-xl" />

            {basket.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 text-white text-xs rounded-full flex items-center justify-center">
                {basket.length}
              </span>
            )}
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {open ? (
              <HiX className="text-3xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-3xl" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"
          }`}
      >
        <ul className="bg-white border-t shadow-lg">
          {paths.map(item => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
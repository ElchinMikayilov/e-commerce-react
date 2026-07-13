import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

import Logo from './Logo'
import { paths } from '../router/Router'

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="flex flex-col items-center md:items-start gap-3">
            <Logo />

            <p className="text-sm text-gray-600 text-center md:text-left">
              © 2026 MyShop. All rights reserved.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-6">
            {paths.map(item => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-blue-600 duration-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-500 hover:text-white duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-600 hover:text-white duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-sky-500 hover:text-white duration-300"
            >
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
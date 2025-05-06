import React from 'react';
import duLogo from '@/assets/logos/du-logo-full.png'

const Footer = () => (
  
<footer id="footer" className="block bg-white dark:bg-gray-900">
  <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
    <div className="flex-col flex items-center">
      <a href="javascript:void(0);" className="mb-8 inline-block max-w-full text-black dark:text-gray-100">
        <img src={duLogo} alt="" className="inline-block max-h-20 dark:invert" />
      </a>
      <div className="text-center font-semibold">
        <a href="hero" className="inline-block px-6 py-2 font-normal text-black dark:text-gray-100 transition hover:text-blue-600 dark:hover:text-blue-400">
          Home
        </a>
        <a href="#" className="inline-block px-6 py-2 font-normal text-black dark:text-gray-100 transition hover:text-blue-600 dark:hover:text-blue-400">
          About
        </a>
        <a href="#contact" className="inline-block px-6 py-2 font-normal text-black dark:text-gray-100 transition hover:text-blue-600 dark:hover:text-blue-400">
          Contact
        </a>
        <a href="#" className="inline-block px-6 py-2 font-normal text-black dark:text-gray-100 transition hover:text-blue-600 dark:hover:text-blue-400">
          Privacy Policy
        </a>
        <a href="#" className="inline-block px-6 py-2 font-normal text-black dark:text-gray-100 transition hover:text-blue-600 dark:hover:text-blue-400">
          Terms of Service
        </a>
      </div>
      <div className="mb-8 mt-8 border-b border-gray-300 dark:border-gray-700 w-48"></div>
      <div className="mb-12 grid-cols-4 grid-flow-col grid max-w-52 gap-8 mx-auto">
        <a href="javascript:void(0);" className="mx-auto flex-col flex max-w-6 items-center justify-center text-black dark:text-gray-100">
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945b4ae6cf7b_Vector-1.svg" alt="" className="inline-block filter dark:invert" />
        </a>
        <a href="javascript:void(0);" className="mx-auto flex-col flex max-w-6 items-center justify-center text-black dark:text-gray-100">
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945560e6cf77_Vector.svg" alt="" className="inline-block filter dark:invert" />
        </a>
        <a href="javascript:void(0);" className="mx-auto flex-col flex max-w-6 items-center justify-center text-black dark:text-gray-100">
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a940535e6cf7a_Vector-3.svg" alt="" className="inline-block filter dark:invert" />
        </a>
        <a href="javascript:void(0);" className="mx-auto flex-col flex max-w-6 items-center justify-center text-black dark:text-gray-100">
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9433a9e6cf88_Vector-2.svg" alt="" className="inline-block filter dark:invert" />
        </a>
      </div>
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
        © Copyright 2025. All rights reserved by Dunosis LLC.
      </p>
    </div>
  </div>
</footer>

);

export default Footer; 
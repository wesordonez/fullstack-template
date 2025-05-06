import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import duHeroImage from '@/assets/images/du-hero.png'

const Hero = () => (
  <section id="hero" className="bg-gray-50 dark:bg-gray-900">
		  {/* Hero Container */}
		  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
		    {/* Component */}
		    <div className="grid items-center justify-items-start gap-8 sm:gap-16 md:grid-cols-2">
		      {/* Hero Content */}
		      <div className="flex flex-col">
		        {/* Hero Title */}
		        <h1 className="mb-4 text-4xl font-bold md:text-6xl md:leading-tight text-gray-900 dark:text-gray-100">
		          The Ultimate Web Development Full Stack Template
		        </h1>
		        <p className="mb-6 max-w-lg text-sm text-gray-500 dark:text-gray-400 sm:text-xl md:mb-10 lg:mb-12">
		          This is a full stack template that is built with Django, Tailwind CSS, React, and Vite. It is built for large scalable web development projects.
		        </p>
		        {/* Hero Button */}
		        <div className="flex items-center">
		          <a
		            href="#"
		            className="mr-5 items-center rounded-md px-6 py-3 font-semibold text-white md:mr-6 lg:mr-8 bg-accent dark:bg-accent hover:bg-white hover:text-accent dark:hover:bg-gray-900 dark:hover:text-accent border-2 border-accent dark:border-accent transition-colors"
		          >
		            Let's Talk
		          </a>
		          <a href="https://github.com/wesordonez/fullstack-template" className="flex max-w-full items-center font-bold hover:text-accent dark:text-accent transition-colors">
		            <ArrowUpRightIcon className="mr-2 inline-block max-h-4 w-5 text-gray-900 dark:text-accent group-hover:text-accent transition-colors" />
		            <p>View Template</p>
		          </a>
		        </div>
		      </div>
		      {/* Hero Image */}
		      <img src={duHeroImage} alt="" className="inline-block h-full w-full max-w-2xl rounded-2xl" />
		    </div>
		  </div>
	</section>
);

export default Hero; 
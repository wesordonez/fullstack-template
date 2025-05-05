import React from 'react'
import Globe from './magicui/globe'

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', alt: 'React' },
  { src: 'https://vitejs.dev/logo.svg', alt: 'Vite' },
  { src: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg', alt: 'Tailwind CSS' },
  { src: 'https://static.djangoproject.com/img/logos/django-logo-negative.svg', alt: 'Django' },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Build modern, scalable web apps with a best-in-class stack: Django, React, Vite, and Tailwind CSS.
      </p>
      <div className="flex justify-center my-8">
        <Globe />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
        {logos.map((logo) => (
          <img
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-12 w-auto grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  )
}

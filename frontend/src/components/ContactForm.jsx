import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { validateEmail, validatePhone } from '@/utils/validation'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState({ email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    // Clear errors when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    let hasErrors = false
    const newErrors = { email: '', phone: '' }

    if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address'
      hasErrors = true
    }

    if (!validatePhone(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)'
      hasErrors = true
    }

    setErrors(newErrors)

    if (!hasErrors) {
      // Here you would send the form data to your backend API
      setSubmitted(true)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md flex flex-col gap-6 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Contact Us Form</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">This form is not connected to the django backend API (yet!). It is just a placeholder for the contact form.</p>
        <Input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
        />
        <Input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <Textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          required
          className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
        />
        <Button type="submit" className="w-full text-gray-100 bg-accent dark:bg-accent hover:bg-white hover:text-accent dark:hover:bg-gray-900 dark:hover:text-accent border-2 border-accent dark:border-accent transition-colors">Send Message</Button>
        {submitted && (
          <div className="text-green-600 dark:text-green-400 text-center mt-2">Thank you! Your message has been sent.</div>
        )}
      </form>
    </section>
  )
} 
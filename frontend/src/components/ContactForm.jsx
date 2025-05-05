import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Here you would send the form data to your backend API
    setSubmitted(true)
  }

  return (
    <section className="py-16 bg-white flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-50 p-8 rounded-xl shadow-md flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-4">We'd love to hear from you. Fill out the form below and we'll get back to you soon.</p>
        <Input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          required
        />
        <Button type="submit" className="w-full">Send Message</Button>
        {submitted && (
          <div className="text-green-600 text-center mt-2">Thank you! Your message has been sent.</div>
        )}
      </form>
    </section>
  )
} 
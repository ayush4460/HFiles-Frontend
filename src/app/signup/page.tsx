'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    gender: 'Male',
    phoneNumber: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(false) // State to toggle password visibility

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError('')
    try {
      const res = await fetch('http://localhost:5138/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          passwordHash: form.password, // maps to backend expected field
        }),
        credentials: 'include', // important for cookies!
      })

      if (!res.ok) {
        const err = await res.text()
        throw new Error(err)
      }

      router.push('/dashboard') // redirect after signup
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="fullName"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
          <select
            name="gender"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={form.gender}
          >
            <option>Male</option>
            <option>Female</option>
          </select>
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
          <div className="relative">
            <input
              name="password"
              type={passwordVisible ? 'text' : 'password'} // Toggle password visibility
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility state
              className="absolute right-3 top-3 text-gray-500"
            >
              {passwordVisible ? 'Hide' : 'Show'} {/* Toggle button text */}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">
            Already have an account?{' '}
            <button
              onClick={() => router.push('/login')}
              className="text-blue-600 hover:underline"
            >
              Login here
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

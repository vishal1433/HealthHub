import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const dummyUserData = {
    email: 'admin@gmail.com',
    password: 'lavis3'
  }

  const onButtonClick = () => {
    setEmailError('')
    setPasswordError('')


    if (!email) {
      setEmailError('Email is required')
      return
    }

    if (!password) {
      setPasswordError('Password is required')
      return
    }


    if (email === dummyUserData.email && password === dummyUserData.password) {
      console.log('Login successful!')
      alert('Welcome Admin your Dashboard😍')
      navigate('/analytics')
    } else {
      setEmailError('Invalid email or password')
      setPasswordError('Invalid email or password')
    }

  }

  return (
    <div className="login-container flex flex-col h-screen justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="login-form shadow-md rounded-md p-8 bg-white">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Login</h1>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="text-red-500 text-xs mt-1">{emailError}</label>
        </div>
        <div className="mb-8">
          <input
            type="password"
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="text-red-500 text-xs mt-1">{passwordError}</label>
        </div>
        <button
          type="button"
          onClick={onButtonClick}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
        >
          Log in
        </button>
      </div>
    </div>
  )
}

export default AdminLogin

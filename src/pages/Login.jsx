import React from 'react'

import LoginForm from '../components/LoginForm'

import { useDispatch } from 'react-redux'
import { login } from '../reducers/userReducer'

const Login = () => {
  const dispatch = useDispatch()

  const handleLogin = async (credentials) => {
    try {
        dispatch(login(credentials))
    } catch (error) {
        console.error('error logging in:', error.message)
    }
  }

  return (
    <main>
      <h1>Personal Library</h1>
      <h2>Welcome back</h2>
      <LoginForm handleLogin={handleLogin} />
    </main>
  )
}

export default Login

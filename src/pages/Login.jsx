import React, { useState, useEffect } from 'react'
import { Logo } from '../components/Logo'
import './Login.css'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Acadly - Login'
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    console.log('Login attempt with:', { email, password })
    // Simulate login
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <div className="login-page">
      <div className="logo-top-left">
        <Logo />
      </div>

      <div className="login-left">
        <div className="login-logo-text">ACADLY</div>
        <p className="login-tagline">teachers and clubs at your university</p>
      </div>

      <div className="login-right">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>

          <a href="#forgot" className="forgot-password">Forgot password?</a>

          <div className="divider"></div>

          <button type="button" className="create-account-btn">
            Create new account
          </button>
        </form>
      </div>
    </div>
  )
}

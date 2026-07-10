import { useState } from 'react'
import { Link } from 'react-router-dom'
import IssuedLogo from '../components/IssuedLogo.jsx'
import PageMeta from '../components/PageMeta.jsx'
import { submitWebLoginRequest } from '../utils/webLoginRequest.js'

function HomePage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  function handleSubmit(event) {
    event.preventDefault()
    const result = submitWebLoginRequest(email)

    setStatus({
      type: result.ok ? 'success' : 'error',
      message: result.message,
    })
  }

  const hasError = status.type === 'error'

  return (
    <>
      <PageMeta
        title="Log In"
        description="Secure access to Issued inventory management for stockrooms, tool cribs, and shop teams."
      />
      <section className="login-screen">
        <div className="login-card" aria-labelledby="login-title">
          <div className="login-accent" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <IssuedLogo className="login-logo" />
          <p className="login-subtitle">Shop Inventory Management</p>
          <h1 id="login-title">Welcome to Issued</h1>
          <p className="login-intro">
            Sign in with your work email to access inventory, checkouts, returns, counts, and
            workspace records.
          </p>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="login-email">Email address</label>
            <input
              autoComplete="email"
              id="login-email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              value={email}
              aria-describedby="login-status login-help"
              aria-invalid={hasError}
            />
            <p className="login-help" id="login-help">
              We will send a secure login code or link by email. No password required.
            </p>
            <button className="button primary login-button" type="submit">
              Log In
            </button>
            <p className={`login-status ${status.type}`} id="login-status" aria-live="polite">
              {status.message}
            </p>
          </form>
        </div>

        <footer className="login-footer" aria-label="Public links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/data-deletion">Data Deletion</Link>
          <Link to="/support">Support</Link>
        </footer>
      </section>
    </>
  )
}

export default HomePage

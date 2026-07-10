import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import IssuedLogo from './IssuedLogo.jsx'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/data-deletion', label: 'Data Deletion' },
  { to: '/support', label: 'Support' },
]

function Layout() {
  const currentYear = new Date().getFullYear()
  const location = useLocation()

  if (location.pathname === '/') {
    return (
      <main id="main-content">
        <Outlet />
      </main>
    )
  }

  return (
    <>
      <header className="site-header">
        <IssuedLogo className="header-logo" linked />
        <nav className="main-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main id="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div>
          <Link className="footer-brand" to="/">
            Issued
          </Link>
          <p>Inventory control for stockrooms, tool cribs, and field teams.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link to="/privacy">Privacy</Link>
          <Link to="/data-deletion">Data Deletion</Link>
          <Link to="/support">Support</Link>
        </nav>
        <p className="copyright">&copy; {currentYear} Issued. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Layout

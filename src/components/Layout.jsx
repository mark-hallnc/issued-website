import { Link, NavLink, Outlet } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/data-deletion', label: 'Data Deletion' },
  { to: '/support', label: 'Support' },
]

function Layout() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Issued home">
          {/* Replace this text mark with public/Issued_name_icon.png when the final logo is ready. */}
          <span className="brand-mark" aria-hidden="true">
            I
          </span>
          <span className="brand-name">Issued</span>
        </Link>
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

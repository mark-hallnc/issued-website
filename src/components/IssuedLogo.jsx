import { Link } from 'react-router-dom'

function IssuedLogo({ alt = 'Issued', className = '', linked = false }) {
  const logo = (
    <img
      alt={alt}
      className={`issued-logo ${className}`.trim()}
      src="/Issued_name_icon.png"
    />
  )

  if (!linked) {
    return logo
  }

  return (
    <Link className="issued-logo-link" to="/" aria-label="Issued home">
      {logo}
    </Link>
  )
}

export default IssuedLogo

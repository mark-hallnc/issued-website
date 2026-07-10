import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta.jsx'

const featureCards = [
  {
    title: 'Inventory tracking',
    text: 'Keep item counts, locations, photos, notes, and stockroom activity organized across shared workspaces.',
  },
  {
    title: 'Checkouts and returns',
    text: 'Issue tools, parts, and supplies to team members, then record returns with a clear activity trail.',
  },
  {
    title: 'Barcode scanning',
    text: 'Use the mobile camera to find items, speed up counts, and reduce manual entry during daily work.',
  },
  {
    title: 'Reorders and low stock',
    text: 'Monitor reorder points so purchasing and replenishment decisions are easier to spot before work stops.',
  },
  {
    title: 'Cycle counts',
    text: 'Support recurring counts by location, item group, or team process without turning every count into a spreadsheet.',
  },
  {
    title: 'Reports',
    text: 'Review issue history, inventory movement, usage patterns, and exception areas for better operational decisions.',
  },
  {
    title: 'Roles and permissions',
    text: 'Give workspace owners, managers, and team members the access they need without exposing every control to everyone.',
  },
]

function HomePage() {
  return (
    <>
      <PageMeta
        title="Inventory and Stockroom Management"
        description="Issued helps teams manage inventory, stockrooms, tool cribs, checkouts, returns, barcode scanning, reorders, counts, and reports."
      />
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Inventory management for working teams</p>
            <h1>Track stockrooms, tool cribs, issues, and returns without the spreadsheet drift.</h1>
            <p className="hero-text">
              Issued is a mobile inventory app for teams that need clear item counts, fast checkouts,
              barcode-assisted workflows, and shared workspace controls.
            </p>
            <div className="button-row">
              <Link className="button primary" to="/support">
                Get Started
              </Link>
              <Link className="button secondary" to="/privacy">
                Learn More
              </Link>
            </div>
          </div>
          <div className="workflow-panel" aria-label="Issued inventory workflow preview">
            <div className="scan-line" aria-hidden="true" />
            <div className="workflow-toolbar">
              <span>Receiving</span>
              <span>Count ready</span>
            </div>
            <div className="shelf-grid" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="workflow-card">
              <span className="status-dot" />
              <div>
                <strong>Impact driver kit</strong>
                <span>Issued to Maintenance Bay 2</span>
              </div>
              <b>Due back</b>
            </div>
            <div className="barcode" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <p className="eyebrow">Built around real inventory workflows</p>
          <h2>Everything a small stockroom or tool crib needs to stay accountable.</h2>
        </div>
        <div className="container feature-grid">
          {featureCards.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-icon" aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container split">
          <div>
            <p className="eyebrow">Ready when your team is</p>
            <h2>Prepare your inventory process before the mobile app listing goes live.</h2>
          </div>
          <Link className="button primary" to="/support">
            Contact Support
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage

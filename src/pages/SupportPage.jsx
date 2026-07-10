import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta.jsx'

const supportTopics = [
  {
    title: 'General support',
    text: 'For setup, workspace questions, inventory workflows, or app feedback, contact issuedinventorysupport@gmail.com.',
  },
  {
    title: 'Login problems',
    text: 'If you cannot sign in, confirm you are using the same email address used for your Issued account or invitation.',
  },
  {
    title: 'Invitation problems',
    text: 'If an invite link does not open the app, use the invite fallback page or ask the sender to issue a new invitation.',
  },
  {
    title: 'Data deletion',
    text: 'Account and workspace deletion requests can be started from the data deletion page.',
  },
  {
    title: 'Privacy questions',
    text: 'For privacy questions or access requests, contact issuedinventorysupport@gmail.com.',
  },
]

function SupportPage() {
  return (
    <>
      <PageMeta
        title="Support"
        description="Get help with Issued login issues, invitations, privacy questions, and data deletion."
      />
      <section className="container page-hero">
        <p className="eyebrow">Support</p>
        <h1>Help for Issued accounts, invitations, and workspace access.</h1>
        <p>
          For support, email issuedinventorysupport@gmail.com. Include the email address on your Issued account and
          the workspace or organization name if your question involves shared inventory data.
        </p>
      </section>

      <section className="container feature-grid support-grid">
        {supportTopics.map((topic) => (
          <article className="feature-card" key={topic.title}>
            <h2>{topic.title}</h2>
            <p>{topic.text}</p>
          </article>
        ))}
      </section>

      <section className="container faq-section">
        <h2>FAQ</h2>
        <details>
          <summary>What should I include in a support request?</summary>
          <p>
            Include your account email, workspace name if applicable, device type, app version if
            known, and a short description of what happened.
          </p>
        </details>
        <details>
          <summary>Can support delete all workspace data for me?</summary>
          <p>
            Workspace deletion may require authorization from the workspace owner or organization.
            Personal account deletion does not automatically delete employer or shared workspace
            records.
          </p>
        </details>
        <details>
          <summary>What if an invitation link does not open Issued?</summary>
          <p>
            Visit the <Link to="/invite">invite fallback page</Link>, use the Open Issued button,
            and ask the sender for a new invitation if the token has expired.
          </p>
        </details>
      </section>
    </>
  )
}

export default SupportPage

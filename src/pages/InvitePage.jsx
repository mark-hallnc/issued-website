import { useMemo } from 'react'
import PageMeta from '../components/PageMeta.jsx'

function InvitePage() {
  const inviteUrl = useMemo(() => {
    const suffix = `${window.location.search}${window.location.hash}`
    return `issued://invite${suffix}`
  }, [])

  return (
    <>
      <PageMeta
        title="Open Invite"
        description="Open an Issued workspace invitation in the mobile app."
      />
      <section className="container page-hero invite-page">
        <p className="eyebrow">Workspace invitation</p>
        <h1>Issued is attempting to open your invitation in the mobile app.</h1>
        <p>
          Use the button below to open Issued. If the app does not open, make sure Issued is
          installed and that the invitation link has not expired.
        </p>
        <div className="button-row">
          <a className="button primary" href={inviteUrl}>
            Open Issued
          </a>
          <button className="button secondary" type="button" disabled>
            Download Issued
          </button>
        </div>
        <div className="notice">
          <h2>If the app does not open</h2>
          <p>
            Return to the message that contained your invitation and try the link again. If the link
            still fails, ask the workspace owner to send a new invitation. The store listing is not
            live yet, so the download button is currently a placeholder.
          </p>
          <p>
            Invitation tokens can grant access to workspace information. Do not share invite links
            with anyone who should not join that workspace.
          </p>
        </div>
      </section>
    </>
  )
}

export default InvitePage

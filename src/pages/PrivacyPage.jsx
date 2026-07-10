import PageMeta from '../components/PageMeta.jsx'

function PrivacyPage() {
  return (
    <>
      <PageMeta
        title="Privacy Policy"
        description="Privacy policy for Issued, a mobile inventory and stockroom management app."
      />
      <article className="container legal-page">
        <p className="eyebrow">Effective date: July 1, 2026</p>
        <h1>Issued Privacy Policy</h1>
        <p>
          This Privacy Policy explains how Issued collects, uses, stores, and protects information
          when you use the Issued mobile app and related website. Issued is designed for inventory,
          stockroom, tool crib, checkout, return, counting, and reporting workflows.
        </p>

        <section>
          <h2>Information collected</h2>
          <p>
            Issued may collect account information such as your name, email address, login details,
            invitation status, workspace membership, role, and authentication activity. The app may
            also collect inventory data entered by you or your workspace, including item names,
            quantities, locations, barcodes, notes, photos, checkout and return records, count
            results, reorder settings, reports, and related operational history.
          </p>
          <p>
            We may collect technical information such as device type, app version, approximate
            timestamps, local storage state, diagnostic events, and synchronization status needed to
            operate, secure, and troubleshoot the service.
          </p>
        </section>

        <section>
          <h2>How information is used</h2>
          <p>
            Information is used to provide account authentication, email login, invitations, shared
            workspace access, cloud backup, synchronization, inventory records, checkout and return
            activity, reports, support, security, abuse prevention, and service improvement. We do
            not use Issued to serve advertising, and we do not add tracking, analytics, cookies, or
            advertising to this website.
          </p>
        </section>

        <section>
          <h2>Shared workspace information</h2>
          <p>
            Issued workspaces are collaborative. Information you add to a shared workspace may be
            visible to workspace owners, administrators, managers, and other authorized members
            according to their roles. Inventory records, issue and return history, reports, and
            related activity may belong to the organization or workspace rather than to an individual
            user.
          </p>
        </section>

        <section>
          <h2>Device permissions</h2>
          <p>
            Issued may request camera access for barcode scanning and optional item photos. Camera
            access is used only for app features you choose to use. The app may also use local device
            storage to keep app settings, cached workspace data, authentication state, and queued
            changes needed for synchronization.
          </p>
        </section>

        <section>
          <h2>Service providers</h2>
          <p>
            Issued may use Supabase infrastructure for authentication, database storage, cloud
            backup, synchronization, file storage, and related backend services. Issued may use Resend
            or a similar transactional email provider to deliver login messages, invitations,
            account notices, and support-related communications. These providers process information
            only as needed to provide their services to Issued.
          </p>
        </section>

        <section>
          <h2>Data retention</h2>
          <p>
            We retain account, workspace, inventory, and operational records for as long as needed to
            provide Issued, comply with legal obligations, resolve disputes, maintain security, and
            support legitimate business or workspace recordkeeping needs. Shared workspace records
            may remain after an individual account is deleted if those records belong to an employer,
            customer, or shared workspace.
          </p>
        </section>

        <section>
          <h2>Data security</h2>
          <p>
            We use reasonable administrative, technical, and organizational safeguards designed to
            protect information. No method of transmission or storage is perfectly secure, so we
            cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>User choices</h2>
          <p>
            You may choose what information you enter into Issued, whether to upload optional item
            photos, and whether to grant camera access. You may also request account help, workspace
            access changes, correction of inaccurate information, or deletion where applicable by
            contacting issuedinventorysupport@gmail.com.
          </p>
        </section>

        <section>
          <h2>Account and data deletion</h2>
          <p>
            You may request deletion of your personal Issued account through the data deletion page
            or by contacting issuedinventorysupport@gmail.com. Deleting an individual account does not automatically
            delete inventory, checkout, return, report, or workspace records owned by an employer,
            customer, or shared workspace. Workspace deletion may require authorization from the
            workspace owner or organization.
          </p>
        </section>

        <section>
          <h2>Children's privacy</h2>
          <p>
            Issued is intended for business and organizational inventory management. It is not
            directed to children under 13, and we do not knowingly collect personal information from
            children under 13.
          </p>
        </section>

        <section>
          <h2>Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When changes are made, we will
            update the effective date and make the revised policy available on this page.
          </p>
        </section>

        <section>
          <h2>Contact information</h2>
          <p>
            For privacy questions, account requests, or data deletion requests, contact [SUPPORT
            EMAIL].
          </p>
        </section>
      </article>
    </>
  )
}

export default PrivacyPage

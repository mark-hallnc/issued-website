import { useState } from 'react'
import PageMeta from '../components/PageMeta.jsx'
import { requestTypes, submitDeletionRequest } from '../utils/deletionRequest.js'

const initialFormValues = {
  email: '',
  fullName: '',
  workspace: '',
  requestType: '',
  details: '',
  confirm: false,
}

function DataDeletionPage() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState({})
  const [statusMessage, setStatusMessage] = useState('')
  const [statusType, setStatusType] = useState('info')

  function updateField(event) {
    const { name, type, checked, value } = event.target
    setFormValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const result = submitDeletionRequest(formValues)

    setErrors(result.errors)
    setStatusMessage(result.message)
    setStatusType(result.ok ? 'success' : 'error')
  }

  return (
    <>
      <PageMeta
        title="Account and Data Deletion"
        description="Request deletion of an Issued account, workspace access, or workspace data."
      />
      <article className="container legal-page">
        <p className="eyebrow">Account and data requests</p>
        <h1>Issued Data Deletion</h1>
        <p>
          Use this page to request deletion of a personal Issued account, removal from a shared
          workspace, or deletion of an entire workspace. If the form cannot be processed, contact
          issuedinventorysupport@gmail.com.
        </p>

        <div className="info-grid">
          <section>
            <h2>Deleting a personal account</h2>
            <p>
              This removes your personal Issued account and login access where deletion is available.
              It does not automatically delete records that belong to an employer, customer, or
              shared workspace.
            </p>
          </section>
          <section>
            <h2>Leaving a shared workspace</h2>
            <p>
              You may request to leave or be removed from a workspace. Inventory records, checkout
              history, reports, and other workspace data may remain available to authorized workspace
              members.
            </p>
          </section>
          <section>
            <h2>Deleting a workspace</h2>
            <p>
              Deleting an entire workspace may require confirmation from the workspace owner or
              authorized organization contact. Some records may be retained for legal, security, or
              abuse-prevention reasons.
            </p>
          </section>
        </div>

        <section>
          <h2>Deletion request form</h2>
          <form className="request-form" onSubmit={handleSubmit} noValidate>
            <label>
              Email address
              <input
                autoComplete="email"
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-invalid={Boolean(errors.email)}
                name="email"
                onChange={updateField}
                type="email"
                value={formValues.email}
              />
              {errors.email && (
                <span className="field-error" id="email-error">
                  {errors.email}
                </span>
              )}
            </label>

            <label>
              Full name
              <input
                autoComplete="name"
                aria-describedby={errors.fullName ? 'full-name-error' : undefined}
                aria-invalid={Boolean(errors.fullName)}
                name="fullName"
                onChange={updateField}
                type="text"
                value={formValues.fullName}
              />
              {errors.fullName && (
                <span className="field-error" id="full-name-error">
                  {errors.fullName}
                </span>
              )}
            </label>

            <label>
              Workspace or organization name, optional
              <input
                autoComplete="organization"
                name="workspace"
                onChange={updateField}
                type="text"
                value={formValues.workspace}
              />
            </label>

            <label>
              Request type
              <select
                aria-describedby={errors.requestType ? 'request-type-error' : undefined}
                aria-invalid={Boolean(errors.requestType)}
                name="requestType"
                onChange={updateField}
                value={formValues.requestType}
              >
                <option value="">Select a request type</option>
                {requestTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.requestType && (
                <span className="field-error" id="request-type-error">
                  {errors.requestType}
                </span>
              )}
            </label>

            <label>
              Additional details
              <textarea
                name="details"
                onChange={updateField}
                rows="5"
                value={formValues.details}
              />
            </label>

            <label className="checkbox-label">
              <input
                aria-describedby={errors.confirm ? 'confirm-error' : undefined}
                aria-invalid={Boolean(errors.confirm)}
                checked={formValues.confirm}
                name="confirm"
                onChange={updateField}
                type="checkbox"
              />
              <span>I understand Issued may need to verify my identity before processing.</span>
            </label>
            {errors.confirm && (
              <span className="field-error" id="confirm-error">
                {errors.confirm}
              </span>
            )}

            <button className="button primary" type="submit">
              Submit Request
            </button>

            {statusMessage && (
              <div className={`form-status ${statusType}`} role="status">
                {statusMessage}
              </div>
            )}
          </form>
        </section>

        <section>
          <h2>Processing and verification</h2>
          <p>
            Issued may ask for additional information to verify your identity and authority over the
            requested account or workspace. Requests are reviewed before processing. Some limited
            information may be retained where necessary for legal obligations, security, fraud
            prevention, dispute resolution, backup integrity, or legitimate workspace recordkeeping.
          </p>
        </section>
      </article>
    </>
  )
}

export default DataDeletionPage

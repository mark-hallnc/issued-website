export const requestTypes = [
  'Delete my personal Issued account',
  'Leave or remove me from a shared workspace',
  'Request deletion of an entire workspace',
  'Ask a privacy or deletion question',
]

export function validateDeletionRequest(formValues) {
  const errors = {}

  if (!formValues.email.trim()) {
    errors.email = 'Enter the email address used with Issued.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!formValues.fullName.trim()) {
    errors.fullName = 'Enter your full name.'
  }

  if (!formValues.requestType) {
    errors.requestType = 'Choose a request type.'
  }

  if (!formValues.confirm) {
    errors.confirm = 'Confirm that you understand identity verification may be required.'
  }

  return errors
}

export function submitDeletionRequest(formValues) {
  const errors = validateDeletionRequest(formValues)

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      errors,
      message: 'Please fix the highlighted fields before submitting your request.',
    }
  }

  return {
    ok: true,
    errors: {},
    message:
      'Your request is ready to send, but backend processing is not connected yet. Please contact issuedinventorysupport@gmail.com to complete this request.',
  }
}

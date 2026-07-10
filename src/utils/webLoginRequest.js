export function submitWebLoginRequest(email) {
  const trimmedEmail = email.trim()

  if (!trimmedEmail) {
    return {
      ok: false,
      message: 'Enter the email address for your Issued account.',
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return {
      ok: false,
      message: 'Enter a valid email address.',
    }
  }

  return {
    ok: true,
    message:
      'Web login is not connected yet. Later, Issued will send a secure login code or link to this email address.',
  }
}

export function restoreGithubPagesRoute() {
  const redirectPath = sessionStorage.getItem('issued.redirectPath')

  if (!redirectPath) {
    return
  }

  sessionStorage.removeItem('issued.redirectPath')
  window.history.replaceState(null, '', redirectPath)
}

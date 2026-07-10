import { useEffect } from 'react'

const siteName = 'Issued'
const defaultDescription =
  'Issued is an inventory, stockroom, tool crib, and issue/return management app for teams.'

function setMetaDescription(description) {
  let meta = document.querySelector('meta[name="description"]')

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'description')
    document.head.appendChild(meta)
  }

  meta.setAttribute('content', description || defaultDescription)
}

function PageMeta({ title, description = defaultDescription }) {
  useEffect(() => {
    document.title = title ? `${title} | ${siteName}` : siteName
    setMetaDescription(description)
  }, [description, title])

  return null
}

export default PageMeta

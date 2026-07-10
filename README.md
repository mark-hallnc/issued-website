# Issued Website

Issued is the public website for the Issued mobile inventory management app. The site supports the product landing page, Google Play privacy requirements, public account and data deletion instructions, support information, and the invitation fallback route for future Android App Links.

The production domain is:

```text
issuedinventory.com
```

## Local Setup

Install dependencies:

```bash
npm ci
```

Start the local development server:

```bash
npm run dev
```

## Development Commands

Run linting:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/components` contains shared layout and metadata components.
- `src/pages` contains route-level pages.
- `src/styles` contains site styling.
- `src/utils` contains replaceable utility logic, including the deletion request form handler and GitHub Pages SPA route restoration.
- `public` contains static files copied into the production build.

## GitHub Pages Deployment

The site is configured for GitHub Pages with a custom root domain:

- `vite.config.js` uses `base: '/'`.
- `public/CNAME` contains `issuedinventory.com`.
- `.github/workflows/deploy.yml` runs on pushes to `main`.
- The workflow installs dependencies with `npm ci`, runs `npm run lint`, builds with `npm run build`, uploads `dist`, and deploys with GitHub Pages Actions.
- The Pages artifact upload includes hidden files so `dist/.well-known/assetlinks.json` is deployed for Android App Link verification.

GitHub Pages does not natively serve React Router routes such as `/privacy` or `/invite` on direct visit. The file `public/404.html` stores the requested path and redirects to `/`; `src/utils/githubPagesRedirect.js` restores the original route before React renders.

## Squarespace Custom Domain Summary

If the domain is managed in Squarespace, point the DNS records for `issuedinventory.com` to GitHub Pages according to GitHub's current custom-domain instructions. Keep `public/CNAME` set to `issuedinventory.com`, then enable GitHub Pages for the repository and enforce HTTPS after DNS verification completes.

## Logo Asset

The header currently uses a temporary text-based Issued mark. When the final logo is ready, place it at:

```text
public/Issued_name_icon.png
```

Then replace the text mark in `src/components/Layout.jsx` with an image element that references `/Issued_name_icon.png`.

## Privacy and Data Deletion Pages

The `/privacy` route contains a mobile-app privacy policy drafted for account authentication, email login and invitations, shared workspaces, cloud backup and synchronization, Supabase infrastructure, transactional email delivery, camera access, optional item photos, and local device storage.

The `/data-deletion` route explains the difference between deleting a personal account, leaving a shared workspace, and deleting an entire workspace. The request form validates client-side fields but is not connected to a backend yet. The submit logic lives in `src/utils/deletionRequest.js` so it can later be replaced with a Supabase Edge Function call.

## Invite Fallback Page

The `/invite` route supports future Android App Links. It does not automatically redirect. The "Open Issued" button attempts to open:

```text
issued://invite
```

The current query string and hash are appended to the custom-scheme URL so invitation tokens and route state are preserved.

## Android App Links

The file `public/.well-known/assetlinks.json` is valid JSON for Android App Link verification, but it currently contains placeholders:

```text
YOUR_ANDROID_PACKAGE_NAME
YOUR_PLAY_APP_SIGNING_SHA256_FINGERPRINT
```

Replace these with the real Android package name and Play App Signing SHA-256 fingerprint before verified Android App Links will work. Do not add comments to `assetlinks.json`; JSON does not support comments.

## Remaining Placeholders

- Replace `[SUPPORT EMAIL]` in visible website copy with `issuedinventorysupport@gmail.com`.
- Replace `[EFFECTIVE DATE]` in the privacy policy with the actual effective date.
- Replace `YOUR_ANDROID_PACKAGE_NAME` in `public/.well-known/assetlinks.json`.
- Replace `YOUR_PLAY_APP_SIGNING_SHA256_FINGERPRINT` in `public/.well-known/assetlinks.json`.

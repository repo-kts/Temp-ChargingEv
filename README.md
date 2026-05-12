# TrioEv — Coming Soon

Single-page React landing for **charging.trioev.com**. Built with Vite + React, ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel (gets you the `charging.trioev.com` subdomain)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — keep defaults and click **Deploy**.
4. After deploy, open the project → **Settings → Domains**.
5. Add `charging.trioev.com`.
6. Vercel will give you a **CNAME** record (usually `cname.vercel-dns.com`). In your DNS provider for `trioev.com`, add:

   | Type  | Name      | Value                  |
   |-------|-----------|------------------------|
   | CNAME | charging  | cname.vercel-dns.com   |

7. Wait a minute for DNS to propagate — Vercel auto-issues an SSL cert.

That's it. `https://charging.trioev.com` will serve this site.

## Files

- `src/App.jsx` — page structure & content (edit copy here)
- `src/index.css` — design system (colors, type, motion)
- `index.html` — `<title>`, meta tags, font links
- `public/favicon.svg` — the three-bar TrioEv mark

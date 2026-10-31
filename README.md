# Dr. Dukhan Ram DAV Public School — Digital E-Library

A bilingual, accessible, static Next.js e-library for Classes 1–12. It uses local TypeScript content, requires no backend or paid API, and exports to GitHub Pages.

> The subject structure and demo records are proposed placeholders. They are not claims about the school’s actual subjects, staff, announcements or holdings.

## Features

- English/Hindi UI with locally persisted language preference
- Light/dark mode
- Class 1–12 and configurable subject navigation
- Search, filtering and sorting
- Resource details with attribution and external-source safety
- Local bookmarks and recently viewed history (no student accounts)
- Official NCERT, ePathshala, DIKSHA and CBSE root portal links
- Static export, sitemap, robots.txt and GitHub Pages workflow
- Content validation and automated tests
- Responsive, keyboard accessible and reduced-motion friendly

## Local setup

```powershell
cd "D:\Python Project\DAV-Digital-E-Library"
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```powershell
npm run validate:content
npm run typecheck
npm test
npm run lint
npm run build
```

The static website is produced in `out/`.

## Add or edit resources

1. Review [content/CONTENT-CHECKLIST.md](content/CONTENT-CHECKLIST.md).
2. Copy the fields from [content/resource-template.json](content/resource-template.json).
3. Add the verified record to `src/data/resources.ts`.
4. For licensed school-owned files only, place the asset under `public/resources/` and reference its path.
5. Run all quality checks.

Never add student personal information, client-side admin credentials, unlicensed textbooks or invented source links.

## Configure GitHub Pages

The configuration reads `GITHUB_REPOSITORY` during Actions builds and automatically sets `basePath` and `assetPrefix` to the repository name. Local builds remain at `/`.

1. Create a GitHub repository and push this project to its `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push a change or manually run the “Deploy static Next.js site to GitHub Pages” workflow.
5. The workflow builds and uploads `out/`, then reports the live URL.

After content updates, validate, commit and push again. The workflow redeploys automatically.

### Troubleshooting paths

- Do not hard-code the repository name into asset URLs.
- Use root-relative public asset paths such as `/images/resource-book.svg`; Next applies the configured base path to routed links, while exported image paths should be checked after any repository rename.
- Confirm the Actions environment includes `GITHUB_REPOSITORY`.
- If assets fail after a repository rename, rebuild and inspect `out/` before redeploying.

## Content administration

There is intentionally no fake admin login. Repository write access controls editing. See `/management-guide/` for the staff workflow. A future real admin panel would require a secure backend, authentication, authorization and audit logs.

## Privacy

Only non-sensitive preferences, bookmarks and resource history IDs are stored in browser localStorage. No analytics, ads, social login, public upload forms or student information collection are included.

## Known limitations / future work

- Verified school address, contact details, logo, principal name and announcements were not supplied and are intentionally omitted.
- Demo resources must be replaced with authorized school content.
- The proposed senior-secondary subjects require school confirmation.
- External providers control availability and embedding; the site uses safe external links.
- A secure admin interface is Phase 2 and needs a backend.

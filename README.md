# Wellridge Group Website

A static website for Wellridge Group, built with Astro, TypeScript, and Tailwind CSS. The canonical site URL is `https://www.wellridgegroup.com`.

## Internal strategy source of truth

The local Astro site now implements the selected **Wellridge Group** public identity, with **WELLRIDGE** as the dominant visual brand, as documented in [`docs/README.md`](docs/README.md). Current handoff and remaining launch boundaries live in [`docs/ACTIVE_CONTEXT.md`](docs/ACTIVE_CONTEXT.md); the July 11 prototype audit and subsequent identity migrations live in [`docs/site-copy-migration-inventory.md`](docs/site-copy-migration-inventory.md).

The site is deployed through `fdtorres1/wellridge_site` main to Vercel. The September 9 conversion batch is owner-authorized; release receipts and remaining checks are recorded in `docs/ACTIVE_CONTEXT.md`. Older July planning sections are historical snapshots. Formation, registrations, outreach, and unrelated integrations remain separate work.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── felix-torres.jpg
├── docs/
│   └── legacy-assets/
│       └── wellridge-advisory-logo.png (quarantined; not publicly served)
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── insights/
│   │   └── resources/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── grant-writing.astro
│   │   ├── process.astro
│   │   ├── pricing.astro
│   │   ├── contact.astro
│   │   ├── insights/
│   │   ├── resources/
│   │   └── work-examples/
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Design System

### Colors

- **Deep Slate**: `#1B1F24` - Primary text and dark backgrounds
- **Ridge Blue**: `#275C7A` - Primary brand color, CTAs
- **Fog**: `#E9ECEF` - Backgrounds and light surfaces
- **Well Green**: `#4B7F6A` - Accent color

### Typography

- **Sans**: Inter (UI, navigation, body text)
- **Serif**: Source Serif Pro (headings, logo text)
- **Mono**: IBM Plex Mono (code, figures)

### Assets

- `docs/legacy-assets/wellridge-advisory-logo.png` preserves the old Advisory wordmark outside Astro's public directory
- Felix Torres photo (`felix-torres.jpg`) is used in the About section

## 📝 Content Management

### Insights (Blog)

Insights are managed through Astro content collections. Add new posts in `src/content/insights/`:

```markdown
---
title: Your Post Title
description: A brief description
pubDate: 2025-11-07
category: Strategy & Fit
pinned: false
---

Your content here...
```

### Resources

Resources are also managed through content collections. Add new resources in `src/content/resources/`:

```markdown
---
title: Resource Title
description: Brief description
category: Strategy & Fit
---

Resource content...
```

## 🔧 Configuration

### Contact Intake

`src/pages/contact.astro` uses `src/lib/contact.ts` and `src/lib/inquiry.ts` to send through FormSubmit to `hello@wellridgegroup.com`. Package links preselect a grant offer; operations inquiries use separate scope prompts. Required reply details, a honeypot, duplicate prevention, and a 20-second timeout bound submission. Unconfirmed failures retain details and expose an email/copy alternative. No uploads or browser storage are used. See `/privacy` and `docs/INQUIRIES.md` for handling and verification.

Before releasing material intake changes:

1. Confirm ownership and operating responsibility for the selected endpoint.
2. Add appropriate privacy, consent, retention, and security handling.
3. Test delivery, response ownership, error states, and sensitive-data warnings.
4. Update the contact page and deployment checklist only after the endpoint is verified.

Grant prices and terms are centralized in `src/lib/grants.ts`. Keep the buyer guide and examples consistent when revising them. Run `npm run build`, `node --test scripts/inquiry.test.ts` on Node with TypeScript stripping, and `python3 -m unittest scripts/indexnow_test.py`. The repository has no separate `validate` npm command. Update `public/sitemap.xml` when adding routes; `docs/INDEXNOW.md` documents selected-URL notifications after deployment. Analytics setup is deferred.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Astro and configure build settings
4. Deploy only after the pre-deployment checklist in `DEPLOYMENT.md` is complete and explicit release authorization is recorded.

The `vercel.json` file is included for custom configuration if needed.

### Other Platforms

This site can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Any other static host

## 📚 Documentation

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com)

## 🛠️ Customization

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import `BaseLayout` from `../layouts/BaseLayout.astro`
3. Add your content

### Modifying Navigation

Update the `navItems` array in `src/components/Header.astro`.

### Styling

- Global styles: `src/styles/global.css`
- Tailwind config: `tailwind.config.mjs`
- Component-specific styles: Use Tailwind classes in components

## 📄 License

All rights reserved. Wellridge Group © 2026

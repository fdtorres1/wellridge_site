# Wellridge Group Website

A modern, static website for Wellridge Group, built with Astro, TypeScript, and Tailwind CSS. The canonical site URL is configured as `https://wellridgegroup.com`.

## Internal strategy source of truth

The local Astro site now implements the selected **Wellridge Group** public identity, with **WELLRIDGE** as the dominant visual brand, as documented in [`docs/README.md`](docs/README.md). Current handoff and remaining launch boundaries live in [`docs/ACTIVE_CONTEXT.md`](docs/ACTIVE_CONTEXT.md); the July 11 prototype audit and subsequent identity migrations live in [`docs/site-copy-migration-inventory.md`](docs/site-copy-migration-inventory.md).

The migration is local only. It does not authorize deployment, DNS changes, formation, calendar, social, analytics, or newsletter systems. The contact page can prepare a visitor-reviewed mailto draft using the existing public inquiry route; it does not send, store, or accept uploads.

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

No form handler, scheduling link, social profile, or newsletter workflow is active. `src/pages/contact.astro` presents a client-side email composer that requires the visitor to review and send from their own mail app; fields remain local until that explicit action.

Before enabling intake:

1. Confirm ownership and operating responsibility for the selected endpoint.
2. Add appropriate privacy, consent, retention, and security handling.
3. Test delivery, response ownership, error states, and sensitive-data warnings.
4. Update the contact page and deployment checklist only after the endpoint is verified.

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

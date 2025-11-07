# Wellridge Advisory Website

A modern, static website for Wellridge Advisory, built with Astro, TypeScript, and Tailwind CSS.

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
│   └── favicon.svg
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
│   │   ├── process.astro
│   │   ├── pricing.astro
│   │   ├── contact.astro
│   │   ├── insights/
│   │   └── resources/
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
- **Serif**: Source Serif Pro (headings)
- **Mono**: IBM Plex Mono (code, figures)

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

### Contact Form

The contact form currently uses Formspree. Update the form action in `src/pages/contact.astro`:

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form ID
3. Replace `YOUR_FORM_ID` in the form action

Alternatively, you can use:
- Netlify Forms (if deploying to Netlify)
- Custom API endpoint
- Email service (SendGrid, Mailgun, etc.)

### Calendly Integration

Update the Calendly link in `src/pages/contact.astro` with your actual Calendly URL.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Astro and configure build settings
4. Deploy!

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

All rights reserved. Wellridge Advisory © 2025

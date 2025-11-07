# Deployment Guide

This guide covers deploying the Wellridge Advisory website to Vercel and other platforms.

## 🚀 Vercel Deployment (Recommended)

### Automatic Deployment

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Select the `wellridge_site` repository

2. **Configure Project**
   - Vercel will auto-detect Astro
   - Build settings should be:
     - **Framework Preset**: Astro
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a URL like `wellridge-site.vercel.app`

4. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Environment Variables

If you need environment variables (e.g., for form handling), add them in:
- Project Settings → Environment Variables

### Continuous Deployment

Vercel automatically deploys:
- Every push to `main` branch → Production
- Pull requests → Preview deployments

## 🌐 Other Deployment Options

### Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select `wellridge_site`

2. **Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

3. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy

**Note:** If using Netlify Forms, update the contact form in `src/pages/contact.astro` to use Netlify's form attributes.

### Cloudflare Pages

1. **Connect Repository**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to Pages
   - Click "Create a project" → "Connect to Git"
   - Select `wellridge_site`

2. **Build Settings**
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

3. **Deploy**
   - Click "Save and Deploy"

### GitHub Pages

1. **Install GitHub Actions**
   - Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Configure Astro**
   - Update `astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/wellridge_site', // if using project site
   });
   ```

## 📝 Pre-Deployment Checklist

- [ ] Update contact form with actual Formspree ID or form handler
- [ ] Update Calendly link in contact page
- [ ] Update email addresses in footer/contact
- [ ] Update LinkedIn URL in footer
- [ ] Test all pages locally (`npm run build && npm run preview`)
- [ ] Check all links work
- [ ] Verify images/assets load correctly
- [ ] Test contact form submission
- [ ] Review mobile responsiveness
- [ ] Check SEO meta tags

## 🔧 Post-Deployment

### Analytics

Consider adding:
- Google Analytics
- Plausible Analytics
- Vercel Analytics (if using Vercel)

### Performance

- Enable Vercel's Edge Network (automatic)
- Optimize images (use Astro's Image component)
- Enable compression

### Monitoring

- Set up error tracking (Sentry, etc.)
- Monitor uptime
- Track form submissions

## 🐛 Troubleshooting

### Build Fails

1. Check Node.js version (requires 18+)
2. Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
3. Check for TypeScript errors: `npm run build`

### Assets Not Loading

1. Verify paths are relative (not absolute)
2. Check `public/` directory structure
3. Ensure assets are in `public/` not `src/`

### Form Not Working

1. Verify form action URL is correct
2. Check form service (Formspree, Netlify Forms, etc.) configuration
3. Test form submission manually

## 📚 Resources

- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)


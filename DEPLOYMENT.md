# Deployment Guide

This guide covers deploying the Wellridge Partners website to Vercel and other platforms. It documents technical capability; repository changes do not by themselves authorize a deployment.

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

4. **Custom Domain**
   - Go to Project Settings → Domains
   - After ownership and launch approval are confirmed, add `wellridgepartners.com`
   - Follow DNS configuration instructions

### Environment Variables

If you need environment variables (e.g., for form handling), add them in:
- Project Settings → Environment Variables

### Continuous Deployment

If a Vercel project is later connected and Git deployment settings are enabled, pushes and pull requests may create production or preview deployments. The presence of `vercel.json` alone does not verify a live project connection or active branch triggers; confirm the actual project settings before pushing release work.

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

**Note:** If Netlify Forms is selected later, implement and review a form in `src/pages/contact.astro`; no form currently exists.

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

- [ ] Confirm name, entity, domain, and launch readiness with the accountable owner
- [ ] Confirm control of `wellridgepartners.com` and the intended DNS records
- [ ] Keep contact intake inactive unless a verified handler, mailbox, privacy workflow, and response owner are ready
- [ ] Add calendar, social, analytics, or newsletter integrations only when their accounts and data-handling workflows are verified
- [ ] Review every public claim, example, price, and scope boundary before release
- [ ] Test all pages locally (`npm run build && npm run preview`)
- [ ] Check all links work
- [ ] Verify images/assets load correctly
- [ ] If intake is activated, test contact submission, validation, failure, privacy, and response routing
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
- If intake is activated, monitor submission delivery, failures, spam, and response ownership

## 🐛 Troubleshooting

### Build Fails

1. Check Node.js version (requires 18+)
2. Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
3. Check for TypeScript errors: `npm run build`

### Assets Not Loading

1. Verify paths are relative (not absolute)
2. Check `public/` directory structure
3. Ensure assets are in `public/` not `src/`

### Contact Intake Not Working

The current site intentionally has no active form or mailbox. If intake is later implemented:

1. Verify the handler or mailbox is owned and configured.
2. Confirm privacy, consent, retention, spam, and sensitive-data controls.
3. Test success, validation, failure, and response-routing behavior before deployment.

## 📚 Resources

- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

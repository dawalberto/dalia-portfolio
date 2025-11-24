# 🚀 Deployment Checklist for Dalia's Brutalist Portfolio

## ✅ Pre-Deployment (Already Done)

- [x] SEO meta tags added (title, description, keywords)
- [x] Open Graph tags for social media sharing
- [x] Twitter Card meta tags
- [x] Structured data (JSON-LD) for search engines
- [x] Canonical URL configured
- [x] CNAME file created with custom domain
- [x] robots.txt for search engine crawling
- [x] sitemap.xml for SEO
- [x] Web App Manifest (PWA support)
- [x] Brutalist-themed favicons (SVG)
- [x] Social media links updated (LinkedIn, Behance)
- [x] Google Analytics placeholder added
- [x] .gitignore file created
- [x] Comprehensive README.md

## 📋 Before Going Live

### 1. Content Review

- [ ] Review all text for typos
- [ ] Check that all job descriptions are accurate
- [ ] Verify email address: dalialopezrubio@gmail.com

### 2. Analytics Setup

- [ ] Create Google Analytics 4 property
- [ ] Replace `G-XXXXXXXXXX` in `index.html` with actual Measurement ID
- [ ] Test that analytics is tracking properly

### 3. Social Media Images (Optional)

- [ ] Convert `og-image.svg` to PNG/JPG (1200x630px) for better compatibility
- [ ] Update meta tags to point to PNG/JPG version if created
- [ ] Test social media preview on:
  - [ ] Facebook Sharing Debugger
  - [ ] Twitter Card Validator
  - [ ] LinkedIn Post Inspector

### 4. Favicon Optimization (Optional)

- [ ] Generate PNG versions from SVG (16x16, 32x32, 180x180)
- [ ] Generate .ico file for older browser support
- [ ] Test favicons on different devices/browsers

## 🌐 Deployment to GitHub Pages

### Step 1: Initialize Git Repository

```bash
cd /Users/kairosds/code/inditex/pruebas/brutalist-design
git init
git add .
git commit -m "Initial commit: Brutalist portfolio with full SEO setup"
```

### Step 2: Create/Connect to GitHub Repository

```bash
# If repository doesn't exist, create it on GitHub first, then:
git remote add origin https://github.com/dawalberto/dalia-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to: https://github.com/dawalberto/dalia-portfolio/settings/pages
2. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
3. Click Save
4. Wait 2-5 minutes for deployment

### Step 4: Verify Custom Domain

- [ ] GitHub automatically reads CNAME file
- [ ] Check that "Custom domain" shows: dalialopezrubio.com
- [ ] Enable "Enforce HTTPS" (may take a few minutes to become available)

## 🔧 DNS Configuration

If DNS is not already configured, add these records at your domain registrar:

### A Records (for apex domain)

```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
```

### CNAME Record (for www)

```
Type: CNAME, Name: www, Value: dawalberto.github.io
```

**⏱ DNS propagation can take 24-48 hours**

## ✅ Post-Deployment Testing

### Functionality Tests

- [ ] Site loads at https://dalialopezrubio.com
- [ ] HTTPS is working (padlock icon in browser)
- [ ] All sections display correctly
- [ ] Custom cursor works on desktop
- [ ] Language switcher (EN/ES) works
- [ ] Email link opens mail client
- [ ] LinkedIn link opens correct profile
- [ ] Behance link opens correct profile
- [ ] Smooth scroll animations work
- [ ] Responsive design works on mobile

### SEO & Performance Tests

- [ ] Submit sitemap to Google Search Console
- [ ] Verify in Google Search Console
- [ ] Test page speed: https://pagespeed.web.dev/
- [ ] Check mobile-friendliness: https://search.google.com/test/mobile-friendly
- [ ] Validate HTML: https://validator.w3.org/
- [ ] Test Open Graph: https://www.opengraph.xyz/
- [ ] Test Twitter Card: https://cards-dev.twitter.com/validator

### Browser/Device Testing

- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (desktop)
- [ ] Edge (desktop)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)
- [ ] Test on tablet

### Accessibility

- [ ] Check color contrast
- [ ] Test keyboard navigation
- [ ] Test with screen reader (basic check)

## 📊 Monitoring Setup

### Google Search Console

1. Go to: https://search.google.com/search-console
2. Add property: dalialopezrubio.com
3. Verify ownership (via DNS TXT record or HTML file)
4. Submit sitemap: https://dalialopezrubio.com/sitemap.xml

### Google Analytics

1. Property created: [ ]
2. Measurement ID added to site: [ ]
3. Real-time tracking verified: [ ]
4. Goals/conversions configured: [ ]

## 🔄 Future Updates

To update the site:

```bash
# Make changes to files
git add .
git commit -m "Describe your changes"
git push origin main
```

Site will automatically redeploy in 1-3 minutes.

## 📝 Notes

- Original portfolio: https://dalialopezrubio.com/ (Astro-based)
- New version: Brutalist design with acid lime (#ccff00) accent
- Repository: https://github.com/dawalberto/dalia-portfolio
- Framework: Vanilla HTML/CSS/JS (no build step required)
- Hosting: GitHub Pages
- Custom domain: dalialopezrubio.com

## 🆘 Troubleshooting

### Site not loading after 5 minutes

- Check GitHub Actions tab for deployment status
- Verify CNAME file is present in repository
- Check DNS settings are correct

### Custom domain not working

- Wait up to 48 hours for DNS propagation
- Use `dig dalialopezrubio.com` to check DNS records
- Clear browser cache

### HTTPS not available

- Wait 10-15 minutes after enabling GitHub Pages
- Try disabling and re-enabling "Enforce HTTPS"
- Verify domain is properly configured

### Analytics not tracking

- Check browser console for errors
- Verify Measurement ID is correct
- Check Ad Blocker isn't blocking analytics
- Test in Incognito mode

---

**Ready to launch! 🎉**

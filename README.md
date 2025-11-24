# Dalia Lopez Rubio - Portfolio (Brutalist Design)

A brutalist design portfolio showcasing digital product design work.

## 🚀 Deployment Guide

This portfolio is designed to be deployed on **GitHub Pages** with a custom domain.

### Prerequisites

- GitHub account
- Custom domain: `dalialopezrubio.com`

### Deployment Steps

#### 1. Push to GitHub Repository

```bash
git init
git add .
git commit -m "Initial commit - Brutalist portfolio"
git branch -M main
git remote add origin https://github.com/dawalberto/dalia-portfolio.git
git push -u origin main
```

#### 2. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select `main` branch and `/root` folder
4. Click **Save**
5. GitHub will automatically detect the `CNAME` file and configure your custom domain

#### 3. Configure DNS (if not already done)

At your domain registrar (e.g., GoDaddy, Namecheap), add the following DNS records:

**For apex domain (dalialopezrubio.com):**

```
Type: A
Name: @
Value: 185.199.108.153
```

```
Type: A
Name: @
Value: 185.199.109.153
```

```
Type: A
Name: @
Value: 185.199.110.153
```

```
Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain:**

```
Type: CNAME
Name: www
Value: dawalberto.github.io
```

#### 4. Enable HTTPS

In GitHub Pages settings, check **Enforce HTTPS** (may take a few minutes to become available).

### 📝 Post-Deployment Checklist

- [ ] Replace Google Analytics ID (`G-XXXXXXXXXX`) with your actual Measurement ID
- [ ] Test all links (LinkedIn, Behance, email)
- [ ] Verify SEO meta tags are correct
- [ ] Check that the site loads properly on mobile devices
- [ ] Test language switcher (EN/ES)
- [ ] Verify custom cursor works as expected
- [ ] Generate actual PNG versions of favicons (optional, SVGs work well)
- [ ] Submit sitemap to Google Search Console: `https://dalialopezrubio.com/sitemap.xml`

### 🎨 Customization

#### Colors

Edit CSS variables in `style.css`:

```css
:root {
  --bg-color: #0a0a0a; /* Background */
  --text-color: #f0f0f0; /* Text */
  --accent-color: #ccff00; /* Acid Lime */
  --border-color: #333; /* Borders */
}
```

#### Content

- Update text in `index.html`
- Modify translations in `script.js`

### 📊 SEO Features Included

✅ Meta tags (title, description, keywords)
✅ Open Graph tags for social sharing
✅ Twitter Card meta tags
✅ Structured data (JSON-LD)
✅ Canonical URL
✅ Robots.txt
✅ XML Sitemap
✅ Web App Manifest (PWA support)
✅ Brutalist-themed favicons
✅ Google Analytics integration

### 🛠 File Structure

```
.
├── index.html          # Main HTML file
├── style.css           # Styles (brutalist design)
├── script.js           # JavaScript (cursor, translations, animations)
├── manifest.json       # PWA manifest
├── CNAME              # Custom domain configuration
├── robots.txt         # Search engine crawling rules
├── sitemap.xml        # XML sitemap
├── favicon.svg        # SVG favicon
├── apple-touch-icon.svg  # iOS home screen icon
├── og-image.svg       # Social media preview image
└── README.md          # This file
```

### 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Custom cursor uses `cursor: none` and may not work on touch devices (falls back to default cursor).

### 📱 Social Media Preview

The site includes Open Graph and Twitter Card meta tags. When shared on social media, it will display:

- Title: "Dalia Lopez Rubio | Product Designer"
- Description: Your bio
- Image: `og-image.svg` (brutalist design with your name)

### 🔄 Updates

To update the site:

```bash
# Make your changes
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Pages will automatically rebuild and deploy your site in a few minutes.

### 📧 Contact

- Email: dalialopezrubio@gmail.com
- LinkedIn: [linkedin.com/in/dalialopezrubio](https://www.linkedin.com/in/dalia-lopez-rubio)
- Behance: [behance.net/dalialopezrubio](https://www.behance.net/dalialopezrubio)

---

**Design Philosophy:** This brutalist design embraces raw, bold aesthetics with acid lime accents, custom cursor interactions, and typography-focused layouts that challenge conventional web design norms.

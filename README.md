# My Portfolio Website

A modern, responsive portfolio website built with React that showcases my professional background, projects, and resume.

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technologies](#-technologies)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Maintenance Guide](#-maintenance-guide)
  - [Updating Resume](#updating-resume)
  - [Adding/Updating Projects](#addingupdating-projects)
  - [Updating About Content](#updating-about-content)
- [Deployment](#-deployment)
  - [Quick Deployment Steps](#quick-deployment-steps)
  - [Detailed Deployment Guide](#detailed-deployment-guide)
- [Performance Optimizations](#-performance-optimizations)
- [Troubleshooting](#-troubleshooting)
- [Progressive Web App Files](#-progressive-web-app-files)

## 🔍 Overview

This portfolio website is designed to showcase my professional background, projects, and skills. It features a clean, modern UI with pixel art elements and provides smooth navigation experience. The site is built as a Progressive Web App (PWA) for improved performance and offline capabilities.

**Live Site:** https://niitora.com  
**Repository:** GitHub Pages deployment  
**Domain:** Custom domain through Namecheap  
**Branches:** `main` (source code) → `gh-pages` (deployed site)

## 🚀 Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean design with pixel art elements
- **Smooth Transitions**: Page transitions and animations
- **PWA Support**: Offline capabilities and caching
- **Error Handling**: Comprehensive error boundaries
- **Performance Optimized**: Code splitting, lazy loading, and caching strategies
- **Accessibility**: Proper semantic HTML and ARIA attributes
- **Custom Domain**: Professional domain with GitHub Pages

## 🛠️ Technologies

- **React 19**: For UI components
- **React Router 7**: For navigation
- **CSS3**: For styling and animations
- **Service Workers**: For PWA capabilities
- **GitHub Pages**: For deployment
- **Namecheap**: For domain management

## 📁 Project Structure

```
niitora_landingpage/
├── public/                 # Static assets and PWA files
│   ├── assets/             # Static resources
│   │   ├── images/         # Image assets
│   │   ├── icons/          # Icon assets
│   │   └── docs/           # PDF and document files
│   ├── service-worker.js   # PWA service worker
│   ├── manifest.json       # PWA manifest
│   └── index.html          # HTML entry point
├── src/
│   ├── components/         # React components
│   │   ├── shared/         # Reusable components
│   │   │   ├── Background.js        # Background component
│   │   │   ├── BackButton.js        # Navigation button
│   │   │   ├── ErrorBoundary.js     # Error handling
│   │   │   ├── Footer.js            # Site footer
│   │   │   ├── PageTransition.js    # Animation wrapper
│   │   │   └── Skeleton.js          # Loading placeholder
│   │   └── pages/          # Page components
│   │       ├── About.js            # About page
│   │       └── Project.js          # Projects page
│   ├── styles/             # CSS styles
│   ├── App.js              # Main app component
│   └── index.js            # App entry point
├── build/                  # Production build (auto-generated)
└── package.json            # Dependencies and scripts

Deployment Structure (gh-pages branch):
├── static/                 # Built CSS/JS files
├── assets/                 # Images/docs from public/
├── index.html             # Main page
├── manifest.json          # PWA config
└── CNAME                  # Domain config (niitora.com)
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/nicktran1308/niitora_page.git
   cd niitora_landingpage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The website will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Maintenance Guide

### Updating Resume

The resume PDF is set up to bypass browser caching, ensuring visitors always see the latest version.

**To update the resume:**
1. Create your new resume PDF
2. Name it `resume_full.pdf`
3. Replace the existing file at `/public/assets/icons/docs/resume_full.pdf`
4. Follow the [deployment steps](#deployment) to publish changes

**How it works:**
- The resume file is excluded from service worker caching
- The site adds a timestamp parameter to the URL when opening the resume
- The service worker is configured to always fetch PDFs from the network

### Adding/Updating Projects

Projects are defined in the `Project.js` file as an array of project objects.

**To add a new project:**
1. Add your project image to `/public/assets/icons/`
2. Open `/src/components/pages/Project.js`
3. Locate the `projects` array (around line 7)
4. Add a new project object:
   ```javascript
   {
     id: 7, // Use the next available number
     name: "Your Project Name",
     image: "/assets/icons/your_image.jpg",
     github: "https://github.com/yourusername/your-repo" // Optional, use null if no GitHub link
   }
   ```
5. Follow the [deployment steps](#deployment) to publish changes

### Updating About Content

**To update your profile information:**
1. Open `/src/components/pages/About.js`
2. Locate the text content within the `introduction` div (around line 68)
3. Update the paragraphs as needed
4. Follow the [deployment steps](#deployment) to publish changes

**To update your profile picture:**
1. Create your new image
2. Replace the existing file at `/public/assets/images/nick_photo.jpg`
3. Or use a different file name and update the `src` attribute in `About.js`

## 📤 Deployment

### Quick Deployment Steps

**For any website updates, always follow this sequence:**

1. **Make Changes** (on main branch)
   ```bash
   git checkout main
   # Make your changes to src/ files
   ```

2. **Test Locally**
   ```bash
   npm start
   # Test your changes at http://localhost:3000
   ```

3. **Commit Source Code**
   ```bash
   git add .
   git commit -m "Your descriptive message"
   git push origin main
   ```

4. **Build and Deploy**
   ```bash
   npm run build
   git checkout gh-pages
   git rm -rf .
   cp -r build/* .
   git add .
   git commit -m "Deploy: [describe changes]"
   git push origin gh-pages
   ```

5. **Verify Deployment**
   - Wait 5-10 minutes for GitHub Pages to update
   - Visit https://niitora.com
   - Check in incognito mode if you have cache issues

### Detailed Deployment Guide

**Important File Path Rules:**
- ✅ **ALWAYS use** absolute paths starting with `/`
- ❌ **NEVER use** `process.env.PUBLIC_URL` in your code
- ✅ Example: `/assets/images/photo.jpg`
- ❌ Not: `${process.env.PUBLIC_URL}/assets/images/photo.jpg`

**Branch Structure:**
- **main branch:** Source code (src/, public/, package.json)
- **gh-pages branch:** Built website files that GitHub Pages serves

**One-Line Deployment Command:**
```bash
npm run build && git checkout gh-pages && git rm -rf . && cp -r build/* . && git add . && git commit -m "Deploy updates" && git push origin gh-pages && git checkout main
```

## 🔍 Performance Optimizations

The site includes several performance optimizations:

1. **Code Splitting & Lazy Loading**: Page components are loaded on demand
2. **Service Worker Caching**: Static assets are cached for offline use
3. **Image Optimization**: Images use `loading="lazy"` attribute
4. **Component Memoization**: Key components use React.memo to prevent unnecessary re-renders
5. **Performance Monitoring**: Basic performance metrics are logged
6. **Cache Busting**: Resume PDF bypasses cache for latest versions

## 🔧 Troubleshooting

### Cache Issues
If you see old version after deployment:
1. **Wait 10 minutes** (GitHub Pages delay)
2. **Test in incognito mode** (bypasses cache)
3. **Clear browser cache:**
   - F12 → Application → Storage → Clear storage
   - Or Ctrl+Shift+Delete → Clear cached files

### Site Shows Blank Page
- Check browser console for errors
- Verify all files deployed to gh-pages
- Test in incognito mode
- Ensure no `process.env.PUBLIC_URL` in code

### Assets Not Loading (404 errors)
- Check file paths don't use `process.env.PUBLIC_URL`
- Verify assets folder copied to gh-pages
- Check capitalization in file names

### Domain Not Working
- Verify CNAME file contains only: `niitora.com`
- Check Namecheap DNS settings
- Wait up to 24 hours for DNS propagation

### Emergency Reset
If something breaks completely:
```bash
git checkout main
npm run build
git checkout gh-pages
git reset --hard HEAD~10  # Go back 10 commits
git rm -rf .
cp -r build/* .
git add .
git commit -m "Emergency reset"
git push --force origin gh-pages
```

## 📱 Progressive Web App Files

### manifest.json
Enables the site to be installed as an app on devices:

| Property | Description |
|----------|-------------|
| `short_name` | "Nick Tran" - Displayed on home screen when app is installed |
| `name` | "Nick Tran - Personal Portfolio" - Full application name |
| `icons` | Icons used when the app is installed on a device |
| `start_url` | The URL that loads when users launch the app |
| `display` | "standalone" - Makes the app look like a native app |
| `theme_color` | "#000000" - Color of browser UI elements |
| `background_color` | "#ffffff" - Background color during app launch |

### service-worker.js
Enables offline functionality and improved performance by:
- Caching essential resources for offline use
- Using network-first strategy for PDFs like your resume
- Using cache-first strategy for other static assets
- Managing cache versions to ensure updates are properly applied

## 🎯 Quick Commands Reference

```bash
# Development
npm start                    # Start development server
npm run build               # Build for production

# Git workflow
git checkout main           # Work on source code
git checkout gh-pages       # Check deployment branch

# Full deployment process
git checkout main
git add . && git commit -m "Update" && git push origin main
npm run build
git checkout gh-pages
git rm -rf . && cp -r build/* .
git add . && git commit -m "Deploy" && git push origin gh-pages
git checkout main
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Contact

For any issues with this deployment process, check:
1. GitHub Pages settings in repository
2. Browser developer tools for specific errors
3. GitHub Actions (if any)

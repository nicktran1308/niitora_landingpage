# Nick Tran's Portfolio Website

A modern, responsive portfolio website built with React that showcases Nick's professional background, projects, and resume.

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
- [Performance Optimizations](#-performance-optimizations)
- [Troubleshooting](#-troubleshooting)

## 🔍 Overview

This portfolio website is designed to showcase Nick Tran's professional background, projects, and skills. It features a clean, modern UI with pixel art elements and provides smooth navigation experience. The site is built as a Progressive Web App (PWA) for improved performance and offline capabilities.

## 🚀 Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean design with pixel art elements
- **Smooth Transitions**: Page transitions and animations
- **PWA Support**: Offline capabilities and caching
- **Error Handling**: Comprehensive error boundaries
- **Performance Optimized**: Code splitting, lazy loading, and caching strategies
- **Accessibility**: Proper semantic HTML and ARIA attributes

## 🛠️ Technologies

- **React 19**: For UI components
- **React Router 7**: For navigation
- **CSS3**: For styling
- **Service Workers**: For PWA capabilities
- **GitHub Pages**: For deployment

## 📁 Project Structure

```
niitora-landing/
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
└── package.json            # Dependencies and scripts
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/nicktran1308/niitora_page.git
   cd niitora_page
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
4. No additional steps needed - the site automatically serves the latest version

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
4. Add a new project object with the following format:
   ```javascript
   {
     id: 7, // Use the next available number
     name: "Your Project Name",
     image: "/assets/icons/your_image.jpg",
     github: "https://github.com/yourusername/your-repo" // Optional, use null if no GitHub link
   }
   ```
5. Save the file

**To update an existing project:**

1. Find the project in the `projects` array by its ID
2. Update the properties as needed
3. Save the file

### Updating About Content

The About page content is in the `About.js` file.

**To update your profile information:**

1. Open `/src/components/pages/About.js`
2. Locate the text content within the `introduction` div (around line 68)
3. Update the paragraphs as needed
4. Save the file

**To update your profile picture:**

1. Create your new image
2. Replace the existing file at `/public/assets/images/nick_photo.jpg`
   - Alternatively, you can use a different file name and update the `src` attribute in the `About.js` file

## 📤 Deployment

The site is configured to deploy to GitHub Pages.

**To deploy the website:**

1. Make sure your repository has a `gh-pages` branch set up
2. Run the deployment command:
   ```bash
   npm run deploy
   ```
3. This will build the project and push to the `gh-pages` branch
4. GitHub Pages will automatically update with the new content

**To set up GitHub Pages for the first time:**

1. Install the GitHub Pages package if not already installed:
   ```bash
   npm install --save-dev gh-pages
   ```
2. The `package.json` file already has the necessary deployment scripts

## 🔍 Performance Optimizations

The site includes several performance optimizations:

1. **Code Splitting & Lazy Loading**: Page components are loaded on demand
2. **Service Worker Caching**: Static assets are cached for offline use
3. **Image Optimization**: Images use `loading="lazy"` attribute
4. **Component Memoization**: Key components use React.memo to prevent unnecessary re-renders
5. **Performance Monitoring**: Basic performance metrics are logged

## 🔧 Troubleshooting

**If changes don't appear after deployment:**

- Check that the deployment completed successfully
- Clear your browser cache or open in incognito mode
- Verify that the `gh-pages` branch has the updated files

**If resume updates aren't showing:**

- Ensure you replaced the file at the correct location
- Try opening the resume in an incognito window
- Check the browser console for any errors

**If service worker issues occur:**

- Update the `CACHE_NAME` in `service-worker.js` to force cache refresh
- Check the browser console for service worker errors

## 📱 Progressive Web App Files

### manifest.json

The `manifest.json` file enables the site to be installed as an app on devices. Here's what each property does:

| Property           | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| `short_name`       | "Nick Tran" - Displayed on the user's home screen when the app is installed |
| `name`             | "Nick Tran - Personal Portfolio" - Full name of the application             |
| `icons`            | Icons used when the app is installed on a device                            |
| `start_url`        | The URL that loads when users launch the app from their device              |
| `display`          | "standalone" - Makes the app look more like a native app (no browser UI)    |
| `theme_color`      | "#000000" - Color of the browser UI elements when the app is running        |
| `background_color` | "#ffffff" - Background color shown during app launch                        |

For future enhancements, consider adding:

- More icon sizes for better device compatibility
- A `description` field to describe the application
- `orientation` to control screen orientation
- `screenshots` to show in app stores or installation prompts
- `scope` to define the navigation scope of the application

### service-worker.js

The service worker enables offline functionality and improved performance by:

- Caching essential resources for offline use
- Using network-first strategy for PDFs like your resume
- Using cache-first strategy for other static assets
- Managing cache versions to ensure updates are properly applied

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Contact

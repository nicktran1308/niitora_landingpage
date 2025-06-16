# Niitora Landing Page

A modern, responsive portfolio website built with React and deployed via GitHub Pages.

## 🚀 Live Site

[https://niitora.com](https://niitora.com)

---

## 📦 Getting Started

1. **Clone the repository**

   ```sh
   git clone https://github.com/nicktran1308/niitora_landingpage.git
   cd niitora_landingpage
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm start
   ```
   - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🛠️ Making Changes

- Edit files in the `src/` directory for code, or `public/` for static assets.
- Test your changes locally with `npm start`.

---

## 🚢 Deployment

**Deploying to GitHub Pages is simple:**

1. **Commit and push your changes to the `main` branch:**

   ```sh
   git add .
   git commit -m "Describe your changes"
   git push origin main
   ```

2. **Deploy to GitHub Pages:**
   ```sh
   npm run deploy
   ```
   - This will automatically build your project and publish the latest build to the `gh-pages` branch.
   - Your site will update at [https://niitora.com](https://niitora.com) within a few minutes.

**Note:**  
If you encounter errors with `npm run deploy`, see the Troubleshooting section below.

---

## 📝 Maintenance

- **Update Resume:** Replace `public/assets/icons/docs/resume_full.pdf` and redeploy.
- **Add/Update Projects:** Edit `src/components/pages/Project.js` and redeploy.
- **Update About Content:** Edit `src/components/pages/About.js` and redeploy.
- **Update Profile Picture:** Replace `public/assets/images/nick_photo.jpg` and redeploy.

---

## 🐞 Troubleshooting

- If `npm run deploy` fails with an error (e.g., E2BIG), you may need to manually update the `gh-pages` branch.  
  See the manual deployment steps below:

  ```sh
  # On main branch, build the project
  npm run build

  # Switch to gh-pages branch
  git checkout gh-pages

  # Remove old files and copy new build
  git rm -rf .
  cp -r ../build/* .

  # Add and commit
  git add .
  git commit -m "Manual deploy: update site"
  git push origin gh-pages --force

  # Switch back to main
  git checkout main
  ```

---

## 📁 Project Structure

- `src/` – React source code
- `public/` – Static assets
- `build/` – Production build (auto-generated)
- `gh-pages` branch – Deployed site

---

## 📄 License

MIT

# personal-profile

Mobile-first portfolio and resume website for **Md Arifuzzaman Tanin**.

Live URL:

```text
https://arifuzzaman-tanin.github.io/personal-profile/
```

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 4
- GitHub Actions for deployment
- GitHub Pages for hosting

## Run locally

### 1) Clone the repository

```bash
git clone https://github.com/arifuzzaman-tanin/personal-profile.git
cd personal-profile
```

### 2) Install dependencies

```bash
npm install
```

### 3) Start the local development server

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Build locally

```bash
npm run build
```

## Preview the production build locally

```bash
npm run preview
```

## Important update before deploy

Open `src/App.jsx` and replace the placeholder Google Drive URL:

```js
const resumePdfUrl = "https://drive.google.com/file/d/YOUR_FILE_ID/view";
```

with your real resume share link.

## Deploy with GitHub Actions

### 1) Create the GitHub repository

Repository name must be:

```text
personal-profile
```

### 2) Push the code

```bash
git init
git branch -M main
git add .
git commit -m "Initial portfolio site"
git remote add origin https://github.com/arifuzzaman-tanin/personal-profile.git
git push -u origin main
```

### 3) Configure GitHub Pages

Open GitHub repository settings:

```text
Settings -> Pages
```

Under **Build and deployment**:

- Source: **GitHub Actions**

No other Pages branch setup is needed because deployment is handled by:

```text
.github/workflows/deploy.yml
```

### 4) Wait for the workflow to finish

Open:

```text
Actions
```

You should see the workflow named:

```text
Deploy React Vite site to GitHub Pages
```

Once successful, the site will be available at:

```text
https://arifuzzaman-tanin.github.io/personal-profile/
```

## Notes

- The Vite base path is already configured for `/personal-profile/`
- The project is ready for GitHub Pages
- You only need to update the Google Drive resume link before deploying

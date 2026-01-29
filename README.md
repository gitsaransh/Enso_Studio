# ENSO Studio

> Quietly shipping focused digital products.

A modern, minimal, and aesthetic portfolio website showcasing ENSO Studio's projects, philosophy, and capabilities.

![ENSO Studio](https://img.shields.io/website?url=https%3A%2F%2Fgitsaransh.github.io%2FEnso_Studio)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## 🚨 Versions

This repository contains two versions of the ENSO Studio website:

### **v2: Next.js + Tailwind CSS (Current)**
*   **Folder**: [`enso-v2/`](./enso-v2)
*   **Tech**: Next.js 15, React 19, Tailwind CSS v3.
*   **Live Site**: **[gitsaransh.github.io/Enso_Studio](https://gitsaransh.github.io/Enso_Studio/)**
*   **Status**: Active, deployed via GitHub Actions.

### **v1: HTML + CSS (Legacy)**
*   **Folder**: Root directory (`index.html`, `css/`, `js/`)
*   **Tech**: Vanilla HTML5, CSS3, JavaScript.
*   **Status**: Legacy / Archived.

---

## 🚀 Getting Started (v2)

To work on the current version of the site:

1.  Navigate to the v2 directory:
    ```bash
    cd enso-v2
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack (v2)

-   **Framework**: Next.js 15 (App Router)
-   **Styling**: Tailwind CSS
-   **Icons**: Heroicons (Dynamic import)
-   **Deployment**: GitHub Pages (Static Export)
-   **Animation**: Native CSS animations + Tailwind utilities

## 📂 Project Structure

```
Enso_Studio/
├── enso-v2/                # ✨ NEW Version (Next.js)
│   ├── src/
│   │   ├── app/            # App router pages
│   │   ├── components/     # Reusable components
│   │   │   ├── common/     # Header, Footer, Logo
│   │   │   ├── sections/   # Hero, Philosophy, Work, etc.
│   │   │   └── ui/         # Base UI elements (Icons)
│   │   └── styles/         # Global styles
│   ├── public/             # Static assets
│   └── ...config files     # Next.js, Tailwind, etc.
│
├── index.html              # 👴 Legacy Version (HTML)
├── css/                    # Legacy styles
├── js/                     # Legacy scripts
└── ...
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

**Built with focus, clarity, and disciplined execution.**

© ENSO Studio. All rights reserved.

# ENSO Studio

> Quietly shipping focused digital products.

A modern, minimal, and aesthetic portfolio website showcasing ENSO Studio's projects, philosophy, and capabilities.

![ENSO Studio](https://img.shields.io/website?url=https%3A%2F%2Fgitsaransh.github.io%2FEnso_Studio)
[View Live Site](https://gitsaransh.github.io/Enso_Studio/)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🌟 Features

- **🎨 Dual Theme Support** - Seamless dark/light mode with persistent preferences
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Interactive Case Studies** - Detailed project breakdowns in elegant modals
- **💬 Testimonials** - Client feedback with engaging animations
- **🎭 Smooth Animations** - Parallax effects, fade-ins, and micro-interactions
- **♿ Accessible** - Keyboard navigation and ARIA labels throughout
- **🚀 Performance Optimized** - Zero dependencies, GPU-accelerated animations

## 🛠️ Tech Stack

- **HTML5** - Semantic markup with SEO best practices
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Progressive Enhancement** - Works without JavaScript

## 🎯 Sections

1. **Hero** - Animated ENSO symbol with theme toggle
2. **Philosophy** - Studio approach and values
3. **Services** - What we build (Apps, Games, AI Tools, Automation)
4. **Work** - Portfolio with interactive case studies
5. **Testimonials** - Client feedback and reviews
6. **Studio Credit** - Branding information
7. **Footer** - Contact and navigation

## 🚀 Quick Start

### View Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Enso_Studio.git
   cd Enso_Studio
   ```

2. Open with a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Or simply open index.html in your browser
   ```

3. Visit `http://localhost:8000`

### Deploy

This is a static website and can be deployed to:
- **GitHub Pages** (recommended)
- **Netlify**
- **Vercel**
- **Cloudflare Pages**

## 📂 Project Structure

```
Enso_Studio/
├── index.html          # Main HTML file
├── css/
│   └── main.css        # All styles and themes
├── js/
│   └── main.js         # Interactive functionality
├── FEATURES.md         # Detailed feature documentation
└── README.md           # This file
```

## 🎨 Customization

### Change Theme Colors

Edit CSS custom properties in `css/main.css`:

```css
:root {
    --color-accent: #00d4ff;        /* Primary accent color */
    --color-bg-primary: #0a0a0a;    /* Background color */
    /* ... more variables */
}
```

### Update Projects

Edit the `caseStudies` object in `js/main.js`:

```javascript
const caseStudies = {
    'your-project': {
        title: 'Your Project',
        subtitle: 'Project description',
        tags: ['Tag1', 'Tag2'],
        sections: [...]
    }
};
```

### Modify Testimonials

Update the testimonials section in `index.html`.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome via issues.

## 📧 Contact

For collaborations or inquiries: contact@ensostudio.com

---

**Built with focus, clarity, and disciplined execution.**

© ENSO Studio. All rights reserved.

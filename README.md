# Yunus Demir - Personal Portfolio

A modern, animated personal portfolio website built with React, Framer Motion, and Tailwind CSS.

## Features

- 🎨 Modern design with dark theme and gradient accents
- ✨ Smooth animations powered by Framer Motion
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎯 SEO-friendly
- 🚀 Easy to deploy to GitHub Pages

## Tech Stack

- **Frontend:** React 18
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **Icons:** React Icons
- **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

- Bun (v1.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yunusdemir/personal-website.git
   cd personal-website
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
bun run build
```

The build output will be in the `dist` directory.

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`): Update your name and title
2. **About Section** (`src/components/About.jsx`): Add your personal bio and facts
3. **Projects** (`src/components/Projects.jsx`): Add your actual projects
4. **Skills** (`src/components/Skills.jsx`): Update with your skills
5. **Navigation & Footer** (`src/components/Navigation.jsx`, `src/components/Footer.jsx`): Update social links

### Update Colors

Edit `tailwind.config.js` to change the color scheme.

## Deployment

This project is configured for GitHub Pages deployment. Push to the `main` branch and GitHub Actions will automatically build and deploy your site.

To set up:
1. Go to your repository settings
2. Navigate to Pages
3. Select "GitHub Actions" as the source

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- LinkedIn: [yunus-demir](https://linkedin.com/in/yunus-demir)
- GitHub: [@yunusdemir](https://github.com/yunusdemir)

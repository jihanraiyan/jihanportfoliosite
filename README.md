# Jihan Raiyan - Interactive 3D Portfolio Gallery

> Live at: https://jihanraiyan.github.io/jihanportfoliosite/

A stunning interactive 3D portfolio website featuring an infinite walking gallery. Navigate through floating project images in 3D space and click on any image to learn more.

## ✨ Features

- **3D Infinite Gallery**: Immersive Three.js powered gallery that showcases your profile and projects in 3D space
- **Interactive Clickable Images**: Click on any image as you scroll through the gallery:
  - **Profile Picture**: Opens a modal with your bio, education, location, and social links
  - **Project Images**: Opens detailed project information with descriptions, tech stack, and links
- **Smooth 3D Navigation**: 
  - Mouse wheel scrolling
  - Arrow key navigation
  - Touch support for mobile
  - Auto-play when idle
- **"I create; therefore I am"**: Beautiful philosophical tagline overlaid on the gallery
- **Cloth-like Animation**: Images have realistic cloth physics and flag-waving effects on hover
- **Modern Dark Theme**: Sleek dark design with cyan and purple accent colors

## 🎨 How It Works

1. **Explore the Gallery**: Scroll through your floating images using mouse, keyboard, or touch
2. **Click Your Profile**: Learn about your background, education, and connect via social links
3. **Click a Project**: View detailed information, tech stack, and access live demos or videos
4. **Close Modals**: Click outside or the X button to return to the gallery
5. **Auto-play**: The gallery continues scrolling automatically after 3 seconds of inactivity

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **UI Library**: React 19
- **3D Graphics**: Three.js with React Three Fiber & Drei
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: Custom GLSL shaders for cloth effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps
```

### Development

```bash
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to experience the gallery.

### Build for Production

```bash
# Build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main gallery page with modals
├── components/
│   └── InfiniteGallery.tsx   # 3D gallery with cloth physics
├── public/               # Images
│   ├── profile.jpg
│   ├── celly.jpg
│   ├── flashquran.png
│   ├── games4peace.jpeg
│   └── guardian-angel.jpeg
└── package.json
```

## 🎯 Featured Projects

1. **Games4Peace Platform** - Gaming platform with 14,000+ users raising funds for humanitarian causes
2. **Celly** - AI-powered Google Sheets assistant (Cursor for Sheets)
3. **Flashquran.org** - Minimal flash card web app for Quran reading
4. **Guardian Angel** - Wearable safety system with motion sensors and haptic alerts

## 🎨 Customization

### Adding New Projects

Edit `app/page.tsx` and update the `projectsData` object:

```typescript
const projectsData: Record<string, ProjectData> = {
  'your-project-id': {
    title: 'Your Project',
    subtitle: 'Your Role',
    date: 'Timeline',
    description: 'Brief description',
    details: ['Detail 1', 'Detail 2'],
    tags: ['Tag1', 'Tag2'],
    link: 'https://yourproject.com',
  },
};
```

Then add your image to `galleryImages` array:

```typescript
const galleryImages = [
  // ... existing images
  { src: '/your-image.jpg', alt: 'Your Project', id: 'your-project-id' },
];
```

### Updating Profile Info

Edit the profile modal section in `app/page.tsx` to update your bio, education, location, and social links.

### Customizing Gallery Settings

Adjust gallery parameters in `app/page.tsx`:

```typescript
<InfiniteGallery
  images={galleryImages}
  speed={1.2}           // Scroll speed
  zSpacing={3}          // Spacing between images
  visibleCount={12}     // Number of visible planes
  falloff={{ near: 0.8, far: 14 }}  // Depth fade distances
/>
```

## 🌐 Deployment

Deploy to Vercel (recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or deploy to:
- Netlify
- Cloudflare Pages
- Any Node.js hosting platform

## 📄 License

MIT

## 👤 Author

**Jihan Raiyan**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [jihan-raiyan](https://www.linkedin.com/in/jihan-raiyan/)
- GitHub: [jihanraiyan](https://github.com/jihanraiyan)
- Email: jar10134@nyu.edu

---

*"I create; therefore I am"* - Experience the interactive gallery at http://localhost:3000

# Don's Plumbing Website

A modern, professional, conversion-focused website for Don's Plumbing - Oklahoma City's trusted plumber for over 13 years.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

The site will be available at `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact/booking page
│   └── services/
│       ├── page.tsx        # Services overview
│       ├── drain-cleaning/
│       ├── water-heaters/
│       ├── sewer-line-replacement/
│       ├── video-camera-inspection/
│       └── slab-leak-detection/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── AnimatedSection.tsx # Scroll animation wrapper
│   ├── PageTransition.tsx  # Page transition animations
│   ├── ServiceCard.tsx     # Service card component
│   ├── CTASection.tsx      # Call-to-action sections
│   ├── ContactForm.tsx     # Contact form
│   └── PlaceholderImage.tsx # Image placeholder component
└── public/
    └── assets/
        └── images/         # Image placeholders (add your images here)
```

## Site Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, services, trust factors |
| `/services` | Services overview page |
| `/services/drain-cleaning` | Drain cleaning service page |
| `/services/water-heaters` | Water heater service page |
| `/services/sewer-line-replacement` | Sewer line service page |
| `/services/video-camera-inspection` | Video inspection service page |
| `/services/slab-leak-detection` | Slab leak service page |
| `/about` | About the company |
| `/contact` | Contact form and booking |

## Image Placeholders

The site uses placeholder components for images. To add your actual images:

1. Create the `/public/assets/images/` directory
2. Add your images with these filenames:
   - `hero-service-action.jpg`
   - `trust-team-or-truck.jpg`
   - `local-service-area.jpg`
   - `services/drain-cleaning.jpg`
   - `services/water-heaters.jpg`
   - `services/sewer-line-replacement.jpg`
   - `services/video-camera-inspection.jpg`
   - `services/slab-leak-detection.jpg`
   - `about/don-founder.jpg`
   - `about/team-photo.jpg`
   - `about/service-area-map.jpg`
   - `contact/service-truck.jpg`

3. Update the `PlaceholderImage` components with Next.js `Image` components

## Key Features

- **Mobile-first responsive design**
- **24/7 Emergency service emphasis**
- **Click-to-call phone links**
- **Contact form with service selection**
- **Smooth scroll animations**
- **Page transitions**
- **SEO optimized with metadata**
- **Accessible navigation**

## Customization

### Colors

The primary color scheme is defined in `tailwind.config.ts`:

- Primary: Blue (#2563eb)
- Accent: Yellow (#eab308)
- Emergency: Red (#dc2626)

### Business Information

Update business details in these files:
- `app/layout.tsx` - Site metadata
- `components/Header.tsx` - Navigation and phone number
- `components/Footer.tsx` - Contact info and service areas
- Individual page files - Content and CTAs

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
npm run start
```

## License

Private - Don's Plumbing

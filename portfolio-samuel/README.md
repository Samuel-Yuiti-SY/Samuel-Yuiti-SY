# Samuel Yuiti Portfolio

Professional developer portfolio for Samuel Yuiti Endo Silva, focused on Python, SQL, financial data analysis, process automation, file processing, and modern web solutions.

This portfolio was inspired by modern visual experiences from developers and designers, but it has its own structure, content, visual identity, and implementation.

## Objective

Create a premium, responsive, bilingual portfolio with a strong technical identity around financial data, automation, Python, SQL, dashboards, and web interfaces. The project is ready for deployment on Vercel.

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- App Router
- Framer Motion
- GSAP with ScrollTrigger
- lucide-react
- next-themes

## Features

- Dark theme by default with light theme support
- Portuguese and English language toggle
- Scroll-based animation and layered hero effects
- Animated technology marquee
- Built projects and future project ideas separated visually
- Practical experience section
- Animated vertical work process timeline
- FAQ accordion
- Visual playground for theme, language, accent color, animation preference, and density
- Contact form prepared for future integration through mailto
- Accessible, responsive layout

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
```

## Deploy on Vercel

```bash
npm install
npm run build
npx vercel deploy --prod
```

You can also import the repository in the Vercel dashboard and use the default Next.js settings.

## Folder Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    common/
    effects/
    layout/
    providers/
    sections/
  data/
  hooks/
  lib/
  messages/
```

## Visual Inspiration

The project uses modern portfolio design principles such as bold typography, scroll motion, elegant cards, soft transitions, layered sections, and a visual personalization area. It does not copy layout, text, brand, identity, proprietary elements, or exact structure from any reference site.

## Future Improvements

- Add a PDF resume
- Add analytics and performance monitoring
- Add a real contact form endpoint
- Add more case studies with screenshots
- Add automated tests for key UI behavior

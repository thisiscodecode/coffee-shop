# Coffee Glacé | کافی گلاسه

A beautifully designed, fully responsive coffee shop website with a warm, elegant aesthetic. Built with Next.js 16, Tailwind CSS v4, Framer Motion, and Persian (Farsi) typography.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Bilingual (RTL)** — Full Persian/Farsi support with Vazirmatn font
- **Animated UI** — Smooth scroll animations, floating particles, parallax hero with Framer Motion
- **Product Menu** — 46 curated items across 5 categories (Coffee, Iced Drinks, Hot Drinks, Tea & Herbal, Desserts)
- **Sticky Navigation** — Category-aware sticky nav with active section highlighting
- **Responsive Design** — Optimized for mobile, tablet, and desktop
- **Image Fallback** — Graceful placeholder for failed product images
- **Scroll-to-Top** — Animated floating button for quick navigation
- **Standalone Deployment** — Next.js standalone output for Docker/container deployments
- **Caddy Reverse Proxy** — Production-ready reverse proxy configuration

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + tw-animate-css |
| Animations | Framer Motion |
| Icons | Lucide React |
| Database | Prisma + SQLite |
| Font | Vazirmatn (Google Fonts) |
| Runtime | Bun |
| Proxy | Caddy |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.0+)
- [Node.js](https://nodejs.org/) (v18+)

### Installation

```bash
# Clone the repository
git clone https://github.com/thisiscodecode/coffee-shop.git
cd coffee-shop

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env

# Push database schema
bun run db:push

# Start development server
bun run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server on port 3000 |
| `bun run build` | Build production bundle (standalone output) |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun run db:push` | Push Prisma schema to database |
| `bun run db:generate` | Generate Prisma client |
| `bun run db:migrate` | Run database migrations |
| `bun run db:reset` | Reset database |

## Project Structure

```
coffee-shop/
├── .zscripts/           # Build & deployment scripts
│   ├── build.sh         # Full build pipeline
│   ├── dev.sh           # Development launcher
│   └── start.sh         # Production start script
├── prisma/
│   └── schema.prisma    # Database schema
├── public/              # Static assets
├── src/
│   ├── app/
│   │   ├── api/         # API routes
│   │   ├── globals.css  # Global styles & animations
│   │   ├── layout.tsx   # Root layout (RTL, Vazirmatn font)
│   │   └── page.tsx     # Homepage (menu, hero, about, contact)
│   ├── components/
│   │   └── ui/          # Reusable UI components (shadcn/ui)
│   ├── hooks/           # Custom React hooks
│   └── lib/
│       ├── db.ts        # Prisma client singleton
│       ├── menu-data.ts # Menu data & types
│       └── utils.ts     # Utility functions (cn)
├── Caddyfile            # Caddy reverse proxy config
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
DATABASE_URL=file:./db/dev.db
```

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | SQLite database connection string | `file:./db/dev.db` |
| `PORT` | Server port (production) | `3000` |
| `HOSTNAME` | Server hostname (production) | `0.0.0.0` |

## Deployment

### Docker / Standalone

The project uses Next.js standalone output for minimal Docker images:

```bash
# Build
bun run build

# The standalone output is in .next/standalone/
# Copy static assets:
cp -r .next/static .next/standalone/.next/
cp -r public .next/standalone/
```

### Using Build Scripts

```bash
# Full build (includes mini-services if present)
bash .zscripts/build.sh

# Production start
DATABASE_URL="file:/path/to/prod.db" bash .zscripts/start.sh
```

### Caddy

The included `Caddyfile` proxies requests on port 81:

- `/ws/*` → `localhost:3003` (WebSocket services)
- Everything else → `localhost:3000` (Next.js)

## Menu Categories

| Category | Items | Icon |
|----------|-------|------|
| قهوه (Coffee) | Espresso, Latte, Cappuccino, Mocha, and more | ☕ |
| نوشیدنی‌های سرد (Iced Drinks) | Iced Latte, Frappuccino, Cold Brew, and more | 🧊 |
| نوشیدنی‌های گرم (Hot Drinks) | Hot Chocolate, Chai Latte, Turkish Tea, and more | 🔥 |
| چای و دمنوش (Tea & Herbal) | Green Tea, Chamomile, Earl Grey, and more | 🍃 |
| دسر (Desserts) | Tiramisu, Cheesecake, Macaron, and more | 🍰 |

## License

MIT

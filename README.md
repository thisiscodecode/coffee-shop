# ☕ Coffee Glacé — Coffee Shop Website

A modern, elegant, and fully responsive coffee shop website built for presenting a café menu, brand story, and contact information in a beautiful Persian RTL interface.

Coffee Glacé is designed for coffee shops, cafés, and dessert bars that want a clean online presence where customers can quickly explore products, prices, ingredients, and store details.

---

## 📌 Project Overview

**Coffee Glacé** is a polished single-page website for a coffee shop.

It includes a premium landing section, animated product menu, category navigation, about section, contact section, and responsive mobile layout.

The website is built with a warm coffee-inspired design, smooth animations, and Persian typography to create a pleasant browsing experience for customers.

### Main Benefits

* Beautiful online menu for café customers
* Fully responsive design for mobile and desktop
* Persian RTL layout
* Smooth animated user experience
* Organized product categories
* Clear prices and ingredients
* Easy to customize for any coffee shop brand
* Deployment-ready Next.js standalone build

---

## 🧰 Tech Stack

| Part           | Technology                |
| -------------- | ------------------------- |
| Framework      | Next.js                   |
| Language       | TypeScript                |
| Styling        | Tailwind CSS              |
| Animations     | Framer Motion             |
| Icons          | Lucide React              |
| Font           | Vazirmatn                 |
| Image Handling | Next.js Image             |
| Database Layer | Prisma                    |
| Database       | SQLite                    |
| Runtime        | Bun                       |
| Deployment     | Next.js Standalone, Caddy |

---

## 🏗️ Architecture

Coffee Glacé uses a simple and clean frontend-first architecture.

```text
Customer Browser
      ↓
Next.js App
      ↓
Home Page Sections
      ↓
Local Menu Data
      ↓
Product Cards, Prices, Images, Ingredients
```

### 1. Next.js App

The website is served through a Next.js application.

It handles:

* Page rendering
* Layout structure
* SEO metadata
* Font loading
* Image optimization
* Production build output

---

### 2. Home Page

The main website is built as a single-page experience.

It includes:

* Hero section
* Sticky category navigation
* Product menu sections
* About section
* Contact section
* Footer
* Scroll-to-top button

This keeps the website simple, fast, and easy for customers to use.

---

### 3. Menu Data

The product menu is stored in a structured TypeScript file.

Each product includes:

* Product name
* Price
* Ingredients
* Image
* Optional badge such as popular, special, or best-selling

This makes it easy to update the menu without changing the page design.

---

### 4. Styling & Animation Layer

Tailwind CSS controls the layout, spacing, colors, and responsive behavior.

Framer Motion adds smooth animations such as:

* Hero animations
* Product reveal effects
* Hover transitions
* Mobile menu animation
* Scroll-based effects

---

### 5. Deployment Layer

The project supports standalone Next.js deployment.

Caddy can be used as a reverse proxy in production, making the project easier to serve on a VPS or custom server.

---

## 🔄 Data Flow

```text
Visitor
   ↓
Website Opens
   ↓
Next.js Loads Page
   ↓
Menu Data Is Read
   ↓
Products Are Rendered
   ↓
Visitor Browses Categories
   ↓
Visitor Reads Contact Information
```

### Step-by-Step Flow

1. A visitor opens the coffee shop website.
2. Next.js loads the main page and layout.
3. The menu categories are loaded from local TypeScript data.
4. Products are displayed as clean product cards.
5. The visitor can jump between menu categories using the sticky navigation.
6. Product images, prices, and ingredients are shown clearly.
7. The visitor can read the café story in the about section.
8. The visitor can find address, phone number, working hours, and Instagram details in the contact section.

---

## ✨ Features

## Website Features

* Elegant coffee shop landing page
* Persian RTL interface
* Vazirmatn Persian font
* Responsive mobile-first design
* Sticky navigation bar
* Mobile hamburger menu
* Smooth category scrolling
* Active category highlighting
* Animated hero section
* Floating coffee-themed particles
* Product cards with image, price, and ingredients
* Product badges for special items
* Image fallback support
* About section
* Contact section
* Scroll-to-top button
* SEO metadata
* Warm coffee color palette

---

## Menu Features

* Coffee category
* Cold drinks category
* Hot drinks category
* Tea and herbal drinks category
* Dessert category
* Persian prices in تومان
* Product ingredients
* Product images
* Special, popular, and best-selling badges

---

## 📁 Project Structure

```text
coffee-shop/
│
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles, theme, and animations
│   │   ├── layout.tsx         # Root layout, metadata, and Persian font
│   │   └── page.tsx           # Main coffee shop website page
│   │
│   ├── components/
│   │   └── ui/                # Reusable UI components
│   │
│   ├── hooks/                 # Custom React hooks
│   │
│   └── lib/
│       ├── db.ts              # Prisma client setup
│       ├── menu-data.ts       # Menu categories and products
│       └── utils.ts           # Utility helpers
│
├── prisma/
│   └── schema.prisma          # Prisma schema
│
├── public/                    # Static assets
├── db/                        # SQLite database files
├── Caddyfile                  # Caddy reverse proxy config
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
├── package.json
└── README.md
```

---

## 🚀 Setup Instructions

## 1. Clone the Repository

```bash
git clone https://github.com/thisiscodecode/coffee-shop.git
cd coffee-shop
```

---

## 2. Install Dependencies

```bash
bun install
```

---

## 3. Create Environment File

Create a `.env` file in the project root:

```env
DATABASE_URL=file:./db/dev.db
```

---

## 4. Set Up the Database

```bash
bun run db:push
bun run db:generate
```

---

## 5. Run Development Server

```bash
bun run dev
```

Open the website at:

```text
http://localhost:3000
```

---

## 🧪 Available Scripts

| Command               | Description                    |
| --------------------- | ------------------------------ |
| `bun run dev`         | Start development server       |
| `bun run build`       | Build the production app       |
| `bun run start`       | Start the production server    |
| `bun run lint`        | Run ESLint                     |
| `bun run db:push`     | Push Prisma schema to database |
| `bun run db:generate` | Generate Prisma client         |
| `bun run db:migrate`  | Run Prisma migrations          |
| `bun run db:reset`    | Reset the database             |

---

## 📦 Production Build

Build the project:

```bash
bun run build
```

Start production server:

```bash
bun run start
```

The project uses Next.js standalone output, which makes it suitable for VPS and container-based deployments.

---

## 🌐 Caddy Reverse Proxy

The included `Caddyfile` can proxy traffic to the Next.js app.

Default app target:

```text
localhost:3000
```

Default Caddy port:

```text
81
```

---

## 🎨 Customization

You can easily customize the project by editing:

| File                   | Purpose                                                           |
| ---------------------- | ----------------------------------------------------------------- |
| `src/lib/menu-data.ts` | Update menu categories, products, prices, images, and ingredients |
| `src/app/page.tsx`     | Update page sections and content                                  |
| `src/app/globals.css`  | Update colors, theme, animations, and global styles               |
| `src/app/layout.tsx`   | Update metadata, title, description, and font settings            |

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👥 Author

Built by the **codecode** team.

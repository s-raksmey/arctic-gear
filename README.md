# Arctic Gear - Premium Arctic Equipment Store

A modern e-commerce website built with Next.js 16, TypeScript, and Tailwind CSS, featuring dynamic routing, SEO optimization, and a beautiful shadcn/ui component library.

## 🚀 Features

### ✅ Complete Project Setup
- **TypeScript** - Full type safety and modern development experience
- **Next.js 16** - Latest App Router with dynamic routing
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint + Prettier** - Code formatting and linting
- **Absolute Imports** - Clean import paths with `@/` prefix

### 🎨 UI Components
- **shadcn/ui** - Beautiful, accessible components
- **Radix UI** - Headless UI primitives
- **Lucide Icons** - Modern icon library
- **Class Variance Authority** - Type-safe component variants
- **Classnames Helper** - Utility for conditional classes

### 🔍 SEO Optimization
- **Dynamic SEO** - Automatic meta tags for all routes
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Enhanced Twitter sharing
- **Structured Data** - Search engine optimization
- **Canonical URLs** - Proper URL canonicalization

### 🛣️ Dynamic Routing Structure
```
/[category]/page.tsx                    # Category pages (e.g., /winter-clothing)
/[category]/[subCategory]/page.tsx      # Subcategory pages (e.g., /winter-clothing/jackets)
/[category]/[subCategory]/[slug]/page.tsx # Product pages (e.g., /winter-clothing/jackets/arctic-parka)
```

### 🧭 Navigation
- **Responsive Navbar** - Mobile-friendly navigation
- **Dropdown Menus** - Category-based navigation
- **Breadcrumbs** - Clear navigation hierarchy
- **Search & Cart** - E-commerce functionality

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd arctic-gear
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your actual values:
   ```env
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_SITE_NAME=Arctic Gear
   NEXT_PUBLIC_SITE_DESCRIPTION=Your premium arctic gear destination
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
arctic-gear/
├── app/                          # Next.js App Router
│   ├── [category]/              # Dynamic category routes
│   │   ├── [subCategory]/       # Dynamic subcategory routes
│   │   │   ├── [slug]/         # Dynamic product routes
│   │   │   │   └── page.tsx    # Product page
│   │   │   └── page.tsx        # Subcategory page
│   │   └── page.tsx            # Category page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/                  # React components
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx
│   │   └── navigation-menu.tsx
│   └── navbar.tsx              # Main navigation
├── lib/                        # Utility functions
│   ├── seo.ts                  # SEO utilities
│   └── utils.ts                # General utilities & cn helper
├── types/                      # TypeScript type definitions
├── .env.local                  # Environment variables
├── .prettierrc                 # Prettier configuration
├── eslint.config.mjs          # ESLint configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint with auto-fix
npm run lint:check   # Check linting without fixing
npm run format       # Format code with Prettier
npm run format:check # Check formatting without fixing
```

## 🔧 Configuration

### TypeScript Paths
Absolute imports are configured in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/utils/*": ["./utils/*"]
    }
  }
}
```

### ESLint & Prettier
- ESLint configured with Next.js and Prettier rules
- Prettier configured with Tailwind CSS plugin
- Automatic code formatting on save (recommended)

### Tailwind CSS
- Configured with shadcn/ui design system
- Custom color palette and spacing
- Responsive design utilities

## 🌐 SEO Features

### Automatic Meta Tags
Each route automatically generates:
- Title tags with site branding
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Dynamic SEO Functions
```typescript
// Category page SEO
generateCategoryPageSEO(category: string)

// Subcategory page SEO  
generateSubCategoryPageSEO(category: string, subCategory: string)

// Product page SEO
generateProductPageSEO(category: string, subCategory: string, slug: string)
```

## 🎨 Component Library

### shadcn/ui Components
- **Button** - Versatile button component with variants
- **Navigation Menu** - Accessible dropdown navigation
- **More components** - Easy to add from shadcn/ui

### Utility Functions
- **cn()** - Tailwind class merging utility
- **slugify()** - Convert text to URL-friendly slugs
- **unslugify()** - Convert slugs back to readable text

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the Next.js documentation
- Review the shadcn/ui documentation
# arctic-gear

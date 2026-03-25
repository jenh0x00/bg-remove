# BGRemover

> Free online image background remover for ecommerce sellers

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

Remove image backgrounds instantly and for free. Perfect for ecommerce product photos on Amazon, Shopify, and your own store.

## Features

- 🚀 **Instant Processing** — Remove backgrounds in 2-3 seconds
- 💰 **100% Free** — No signup required
- 📦 **Ecommerce Ready** — Perfect for Amazon, Shopify product photos
- 🎨 **High Quality** — AI-powered edge detection
- 📱 **Responsive** — Works on desktop and mobile

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Background Removal**: remove.bg API
- **Deployment**: Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm
- A remove.bg API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/jenh0x00/bg-remove.git
cd bg-remove
```

2. Install dependencies:

```bash
npm install
```

3. Copy the environment variables template:

```bash
cp .env.local.example .env.local
```

4. Add your remove.bg API key to `.env.local`:

```
REMOVE_BG_API_KEY=your_api_key_here
```

5. Get your free API key at [remove.bg/api](https://www.remove.bg/api)

6. Run the development server:

```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Cloudflare Pages

1. Push your code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect your repository
4. Set the following:
   - **Framework**: Next.js
   - **Build command**: `npx next build`
   - **Output directory**: `.next`
5. Add environment variable:
   - `REMOVE_BG_API_KEY`: your API key
6. Deploy

## Project Structure

```
bg-remove/
├── src/
│   ├── app/
│   │   ├── api/remove-background/route.ts   # API endpoint
│   │   ├── about/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx                     # Blog listing
│   │   │   └── [slug]/page.tsx             # Blog posts
│   │   ├── terms/page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx                         # Home page (tool)
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── HomeClient.tsx                  # Client-side home logic
│   │   ├── ImageUploader.tsx                # Drag & drop upload
│   │   ├── ProcessingStatus.tsx             # Loading/error states
│   │   └── ResultView.tsx                  # Before/after display
│   └── lib/
│       └── remove-bg.ts                     # remove.bg API client
├── public/
├── .env.local.example
├── next.config.ts
├── package.json
└── tsconfig.json
```

## API

### POST /api/remove-background

Remove the background from an uploaded image.

**Request:**

- Method: `POST`
- Content-Type: `multipart/form-data`
- Body: `image` (file field)

**Response:**

```json
{
  "success": true,
  "result": "data:image/png;base64,..."
}
```

**Errors:**

```json
{
  "error": "No image file provided"
}
```

## SEO

This project is built with SEO in mind:

- Semantic HTML with proper heading hierarchy
- Meta tags for all pages (title, description, keywords)
- OpenGraph and Twitter Card meta tags
- Structured sitemap.xml and robots.txt
- 5 SEO-focused blog articles

### SEO Keywords

The site targets these keyword clusters:

- **Core**: `background remover`, `image background remover`
- **Ecommerce**: `product photo background`, `ecommerce background remover`
- **Platform**: `amazon product photos`, `shopify background remover`
- **Intent**: `white background maker`, `transparent background maker`

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Lint
npm run lint
```

## License

MIT © jenh0x00

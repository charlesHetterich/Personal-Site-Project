# Personal Site Project

Charles Hetterich's personal website (chetterich.com).

## Stack

- **Monorepo:** pnpm workspaces + Turborepo
- **App:** React 19, Vite 6, React Router v7, MDX for article content
- **Component lib:** `@chetterich/ui` — plain CSS modules, no framework
- **Icons:** lucide-react
- **Formatting:** Biome (spaces, 100 line width, double quotes, semicolons)
- **TypeScript:** 5.x, strict, bundler module resolution
- **Deployment:** GitHub Pages via `gh-pages`

## Repo Structure

```
src/
  apps/
    personal-site/          # @chetterich/personal-site — the website
      src/
        main.tsx            # Entry point (createRoot)
        App.tsx             # Router, MDXProvider, Layout
        global.css          # CSS reset, custom properties, layout classes
        routes/             # TSX page components (Home, NotFound)
        content/            # MDX article files (one per route)
        assets/             # All static assets (images, gifs, pdfs, zips)
      public/               # CNAME, 404.html (GH Pages SPA routing), favicon
      vite.config.ts        # MDX plugin (enforce: "pre"), React plugin, base: "./"
  lib/
    ui/                     # @chetterich/ui — shared component library
      src/
        index.ts            # Barrel export
        theme.ts            # CSS custom property tokens
        hooks/              # useScrollToTop
        components/         # Each component has ComponentName.tsx + ComponentName.module.css
          Text/             # Title, SubTitle, Body, Whisper, Emoji
          Header/           # Page header with back button, title, link buttons
          Footer/           # Social links (Github, Gitlab, LinkedIn)
          Link/             # CustomLink, BackButton, InlineLink
          Image/            # Image with captions, display types (regular/mobile)
          BulletList/       # Colored random bullet points
          MainLinkSection/  # Home page link sections
          MediaLinks/       # Animated media grid on home page
```

## Commands

```sh
pnpm install          # Install all dependencies
pnpm build            # Build UI lib (type-check) then app (Vite)
pnpm dev              # Start Vite dev server
pnpm format           # Run Biome formatter
pnpm clean            # Remove dist directories
pnpm run deploy       # Build & deploy to GitHub Pages (gh-pages -d dist)
```

## How the UI Library Works

`@chetterich/ui` exports source TypeScript directly (no build/dist step). Vite handles bundling the source when building the app. The `build` script is `tsc --noEmit` — type-checking only. CSS module type declarations live in `src/css.d.ts`.

When importing within the UI lib, use **extensionless imports** (e.g., `from "../Text/Text"` not `"../Text/Text.js"`).

## How Articles Work

Article pages are written as **MDX files** in `src/apps/personal-site/src/content/`. Each `.mdx` file is imported in `App.tsx` and rendered as a `<Route>`.

MDX files use an `MDXProvider` that maps standard markdown elements to UI components:
- `p` paragraphs render as `<Body>`
- `## headings` render as `<SubTitle>`
- `[links](url)` render as `<InlineLink>`

For richer content, MDX files import and use UI components directly as JSX (e.g., `<Header>`, `<Image>`, `<BulletList>`, `<Whisper>`).

### Adding a new article

1. Create `src/apps/personal-site/src/content/my-article.mdx`
2. Import it in `App.tsx`: `import MyArticle from "./content/my-article.mdx"`
3. Add a `<Route path="/my-article" element={<MyArticle />} />` in the `<Routes>` block
4. Add a link to it from the Home page in `src/apps/personal-site/src/routes/Home.tsx`

### Adding a new UI component

1. Create `src/lib/ui/src/components/MyComponent/MyComponent.tsx` and `MyComponent.module.css`
2. Export from `src/lib/ui/src/index.ts`

## Styling

- All styling uses **CSS modules** — no CSS-in-JS, no utility frameworks
- Global styles and CSS custom properties are in `global.css`
- Theme tokens (colors, fonts) are defined in `src/lib/ui/src/theme.ts`
- Responsive breakpoints: 850px (container max-width), 600px, 550px, 400px, 350px
- Fonts: Roboto (headings), Poppins (body)

## Assets

All assets live in a flat `src/apps/personal-site/src/assets/` directory. Import them in TSX/MDX files — Vite handles hashing and bundling. The `assetsInclude` config in `vite.config.ts` covers `.zip`, `.pdf`, and `.mp4` files.

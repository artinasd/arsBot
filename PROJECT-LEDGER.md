# PROJECT LEDGER

## Project Name
NOVA — نُوا

## Current Version
0.4.0

## Current Development Phase
Phase 10 — Major visual redesign: light-first editorial system and curated real product photography.

## Current Mode
MODE A — GITHUB WRITE MODE

## GitHub Repository
artinasd/arsBot

## Current Branch
feature/nova-foundation

## Latest Commit
a9fe93aecf2bedb5a88d01696fc61654e185cd59

## Architecture Summary
Static Next.js App Router application using React, JavaScript, Tailwind CSS and local JavaScript content modules. No backend, API, database, authentication or authorization layer is required.

## Technology Stack
- Next.js latest
- React latest
- JavaScript / ES6+
- Tailwind CSS latest
- npm
- Git / GitHub

## Database Schema
None by design.

## Authentication Strategy
None required.

## Authorization Strategy
None required.

## API Routes
None by design.

## Pages Completed
- `/`
- `/products`
- `/products/[slug]`
- `/technology`
- `/about`
- `/magazine`
- `/magazine/[slug]`
- `/contact`
- `/privacy`
- `/terms`

## Shared Components
- `Header`
- `Footer`
- `ProductVisual`
- `ProductCard`

## Important Design Decisions
1. Fictional brand: NOVA / نُوا.
2. Industry: Iranian smart-home technology.
3. Audience: Iranian Persian-speaking users.
4. Entire UI is RTL and Persian-first.
5. The previous dark/neon visual direction was rejected by the user as too dark, repetitive and visually weak.
6. The visual direction is now light-first, editorial, architectural and premium, using ivory/stone/white surfaces with indigo, cyan, graphite and selective warm accents.
7. Real internet-sourced product photography is now used instead of CSS-generated fake product objects.
8. Curated Pexels imagery is used for the five product categories; the source/credit is retained in product data.
9. Product photography is rendered with `next/image` and Pexels is allowed through `next.config.mjs` remote image configuration.
10. Product cards use real photography with restrained overlays instead of repeated rounded-square/circle illustrations.
11. Homepage was rebuilt around large editorial typography, whitespace, real product photography, asymmetric compositions and fewer card-like surfaces.
12. Dark sections are now used strategically rather than as the default page background.
13. No backend/database/API because the requested product is explicitly static.
14. Content is centralized in `data/` modules.
15. Global navigation uses actual application routes rather than page-specific hash anchors.
16. Internal product and article cards use Next.js `Link`.
17. ESLint 9 flat configuration is provided through `eslint.config.mjs`.
18. Site URL configuration is centralized in `lib/site.js` and can be overridden with `NEXT_PUBLIC_SITE_URL` for deployment.
19. Metadata, sitemap and robots all consume the same centralized site URL.

## Completed Tasks
- GitHub write capabilities verified.
- Empty repository verified.
- Next.js foundation bootstrapped.
- RTL visual foundation established.
- NOVA brand and content ecosystem created.
- Homepage, product system, company, technology, magazine, contact and legal pages implemented.
- Responsive navigation/footer implemented.
- Premium global styling, reduced-motion handling and focus states added.
- Persian SEO/social metadata, robots and sitemap added.
- ESLint 9 configuration fixed after user-reported failure.
- 404 internal navigation fixed.
- Global header navigation converted to real routes.
- Product and magazine cards converted to Next.js `Link`.
- Footer navigation and legal links converted to real routes.
- Unused homepage variable removed.
- Centralized site/deployment URL configuration in `lib/site.js`.
- Updated root metadata, sitemap and robots to use centralized site configuration.
- User verified lint, runtime and production build successfully after the navigation audit.
- User explicitly rejected the dark/neon visual direction and requested a dramatically more modern, attractive and client-impressing interface.
- Reworked global palette from dark/neon to light-first editorial.
- Rebuilt header and footer for the light visual system.
- Added curated Pexels product photography URLs and source credits to `data/products.js`.
- Added Pexels remote image configuration to `next.config.mjs`.
- Rebuilt `ProductVisual` to render actual product photography with `next/image`.
- Reworked `ProductCard` typography and controls for the light system.
- Rebuilt homepage composition around real product imagery and editorial layouts.

## Current Task
Complete the visual migration across all inner pages so they use the same light-first editorial system and real product imagery where relevant.

## Next Planned Task
Audit and redesign `/products`, `/products/[slug]`, `/technology`, `/about`, `/magazine`, `/magazine/[slug]`, `/contact`, `/privacy`, `/terms` and 404 for visual consistency, responsive behavior and accessibility. Then run final code-quality and production-readiness review.

## Known Issues
- Repository name remains `arsBot`.
- The default site URL remains `https://nova.example` until a real deployment domain is selected; production deployment should set `NEXT_PUBLIC_SITE_URL`.
- Internet-sourced imagery depends on external Pexels CDN availability; production should consider self-hosting approved assets if long-term asset stability is required.
- The inner pages have not yet all been migrated to the new light visual system.
- User must re-run lint/build after this major visual change; previous local validation predates the latest redesign.

## Technical Debt
- Consolidate repeated visual classes where useful after the full visual migration.
- Consider self-hosting approved image assets for stronger production control.
- Add final production domain through `NEXT_PUBLIC_SITE_URL`.

## Testing Status
User-reported local validation before the latest major visual redesign: `npm run lint` succeeds, the application runs successfully, and `npm run build` succeeds. These checks were performed by the user locally and were not independently executed by the GitHub connector. The latest redesign requires a fresh local lint/build verification.

## Repository Verification Status
The latest repository tree was inspected after the visual migration. The branch contains the new light-first global styles, real-image product system, updated header/footer, new homepage and Pexels remote-image configuration.

## Deployment Status
Not deployed.

## Notes For Future Continuation
Do not return to the previous dark/neon CSS-object aesthetic unless the user explicitly requests it. The new target is premium light editorial technology: real objects, strong typography, whitespace, architectural composition, selective color and restrained rounded surfaces. Do not turn every section into a card grid. Use real photography when it communicates the product better than decorative CSS. Treat user-provided local command output as authoritative local validation.

## Conversation Summary
NOVA is a fictional Iranian smart-home technology company created as a premium Persian RTL portfolio website. The application is static/backend-less and uses Next.js, React, JavaScript, Tailwind CSS and local data. The user confirmed lint, runtime and production build success locally before the latest visual redesign. The user then strongly rejected the dark/neon visual language and specifically requested real recognizable objects instead of repeated rounded-square/circle CSS illustrations. The visual direction has therefore been reset to a light-first premium editorial system. Curated free-to-use Pexels imagery was selected for the product categories, added to product data, configured for `next/image`, and integrated into the homepage/product visual system. The homepage was substantially rebuilt rather than merely recolored. The next task is to migrate the remaining inner pages to this same visual language and then revalidate the project.

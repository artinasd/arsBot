# PROJECT LEDGER

## Project Name
NOVA — نُوا

## Project Description
Premium Persian RTL static showcase website for a fictional Iranian smart-home technology company. The project is intended as a portfolio/resume sample and is designed to feel like a real commercial technology brand.

## Current Version
0.3.1

## Current Development Phase
Phase 10 — Visual refinement, SEO/accessibility polish, and production-readiness review.

## Current Mode
MODE A — GITHUB WRITE MODE

## GitHub Repository
artinasd/arsBot

## Current Branch
feature/nova-foundation

## Latest Commit
b089399a2391eb0a18765d1a72f8dca936109897

## Architecture Summary
Static Next.js App Router application using React, JavaScript, Tailwind CSS and local JavaScript content modules. No backend, API, database, authentication or authorization layer is required.

## Technology Stack
- Next.js latest
- React latest
- JavaScript / ES6+
- Tailwind CSS latest
- npm
- Git / GitHub

## Folder Structure
- `app/` — routes, layout, metadata, robots/sitemap, global CSS
- `components/layout/` — header and footer
- `components/products/` — product-specific reusable components
- `components/ui/` — reusable visual primitives
- `data/` — company/product/technology/article content
- `public/` — reserved for future static assets

## Database Schema
None by design.

## Database Relationships
None.

## Authentication Strategy
None required.

## Authorization Strategy
None required.

## API Routes
None by design.

## Business Logic Completed
- Static product lookup by slug
- Static product related-item selection
- Static article routing
- Client-only contact form demo state

## UI Components Completed
- Responsive header
- Mobile navigation
- Footer
- Product visual primitive
- Product card
- Homepage sections
- Product detail layout
- Product catalog layout
- Company page
- Technology page
- Magazine index
- Magazine article layout
- Contact form
- Legal pages
- 404 page

## Pages Completed
- `/`
- `/products`
- `/products/[slug]`
- `/about`
- `/technology`
- `/magazine`
- `/magazine/[slug]`
- `/contact`
- `/privacy`
- `/terms`

## Admin Pages Completed
None.

## Shared Components
- `Header`
- `Footer`
- `ProductVisual`
- `ProductCard`

## Utilities
No dedicated utility module yet.

## Middleware
None.

## Environment Variables
None required at present.

## Dependencies Installed
Declared in `package.json`; dependency installation/build has not been executed in the connected GitHub environment.

## Configuration Files
- `package.json`
- `next.config.mjs`
- `postcss.config.mjs`
- `jsconfig.json`
- `eslint.config.mjs`
- `.gitignore`

## Coding Conventions
- JavaScript only
- Functional React components
- Server Components by default
- Client Components only where interaction requires them
- Feature-oriented organization
- Reusable components
- No unnecessary abstractions

## Naming Conventions
- PascalCase React components
- camelCase JavaScript variables/functions
- kebab-case URL slugs
- descriptive filenames

## Important Design Decisions
1. Fictional brand: NOVA / نُوا.
2. Industry: Iranian smart-home technology.
3. Audience: Iranian Persian-speaking users.
4. Entire UI is RTL and Persian-first.
5. Dark premium visual language with acid-lime accent.
6. Product visuals are currently CSS-generated so the repository has no dependency on external stock imagery.
7. No backend/database/API because the requested product is explicitly static.
8. Content is centralized in `data/` modules.
9. The project is implemented directly in GitHub.
10. `artinasd/arsBot` was selected because it was verified empty at project start. Repository rename has not been performed.
11. Global CSS includes premium grid/noise treatment, gradient typography, focus states, and reduced-motion handling.
12. Metadata includes Persian Open Graph/Twitter configuration and robots directives.
13. Sitemap and robots generation use a single explicit placeholder deployment host that must be replaced before production.
14. ESLint 9 flat configuration is now explicitly provided through `eslint.config.mjs`, using `eslint-config-next/core-web-vitals`.

## Git Workflow
- Initial bootstrap was committed to `main` because GitHub cannot create a branch from an entirely empty repository.
- Subsequent implementation is on `feature/nova-foundation`.
- Every GitHub Contents API file write creates its own commit; these commits are logical by file/feature but will be consolidated or cleaned up only if repository tooling supports safe history rewriting.

## Completed Tasks
- Verified GitHub write capabilities.
- Verified empty repository.
- Bootstrapped Next.js configuration.
- Established RTL global visual foundation.
- Defined fictional NOVA brand.
- Added product catalog data.
- Added technology and magazine content.
- Built responsive navigation/footer.
- Built homepage.
- Built product catalog and dynamic product pages.
- Built about, technology, magazine, article, contact and legal pages.
- Added sitemap and README.
- Refined global visual system.
- Added reduced-motion and keyboard focus handling.
- Added Persian SEO/social metadata.
- Added robots metadata.
- Diagnosed the user's ESLint 9 failure.
- Added the missing ESLint 9 flat configuration at `eslint.config.mjs`.
- Verified the new ESLint configuration file exists on the feature branch.

## Current Task
Continue final static code consistency and production-readiness review after the ESLint configuration fix.

## Next Planned Task
User should rerun `npm run lint`. If lint reports source-level errors, fix those errors directly in the feature branch. Then continue with build validation and final repository audit.

## Known Issues
- The repository name is still `arsBot`.
- The sitemap and metadata currently use the reserved placeholder host `https://nova.example`; this should be replaced with the actual deployment domain before production.
- The connected GitHub tooling does not provide a local npm execution environment, so I cannot independently execute the user's local `npm run lint` or `npm run build` from this environment.
- The product `image` fields are currently reserved content metadata; actual product visuals are generated by `ProductVisual`.
- No real binary product images have been added yet.

## Technical Debt
- Consolidate repeated visual classes into reusable primitives where useful.
- Add proper final production domain to metadata/sitemap.
- Consider adding generated static product artwork under `public/` after visual review.
- Validate every internal navigation target.

## Outstanding Features
- Final responsive audit
- Accessibility audit
- Motion polish
- Final code consistency review
- Dependency/build verification in a local or CI environment
- Final production-domain configuration

## Future Improvements
- CMS-backed content
- Real contact form
- Analytics
- Internationalization
- Product comparison
- Real product imagery

## Deployment Status
Not deployed.

## Testing Status
The user executed `npm run lint` locally and encountered the ESLint 9 missing-flat-config error. The root cause was confirmed by repository inspection: `package.json` declares ESLint 9-compatible tooling but the required `eslint.config.mjs` file was absent. The missing configuration has now been added. A successful lint run has not yet been independently verified after the fix.

## Repository Verification Status
The `feature/nova-foundation` tree was inspected and the newly added `eslint.config.mjs` was verified to exist with the expected ESLint 9 flat configuration.

## Notes For Future Continuation
Do not introduce backend/database infrastructure unless requirements change. The portfolio objective is premium visual design and frontend engineering quality. When the user reports a local build/lint failure, treat the local output as authoritative evidence, inspect the repository, fix the actual root cause, and never claim the command passes until it has actually been executed successfully.

## Conversation Summary
User requested a highly modern Persian website for a fictional company and its products, specifically as a resume/portfolio sample for Iranian users. NOVA / نُوا was selected as a believable Iranian smart-home technology brand. The project is intentionally static/backend-less. GitHub write access was verified and implementation is occurring directly in `artinasd/arsBot` on `feature/nova-foundation` after initial bootstrap commits on `main`. During local validation, the user ran `npm run lint` and ESLint 9 reported that no `eslint.config.js|mjs|cjs` existed. Repository inspection confirmed the missing configuration. `eslint.config.mjs` was added using the ESLint 9 flat-config format and Next.js core-web-vitals configuration. The user should now rerun `npm run lint` so any remaining source-level issues can be addressed.

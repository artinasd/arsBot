# PROJECT LEDGER

## Project Name
NOVA — نُوا

## Current Version
0.3.3

## Current Development Phase
Phase 10 — Visual refinement, SEO/accessibility polish, navigation consistency, and production-readiness review.

## Current Mode
MODE A — GITHUB WRITE MODE

## GitHub Repository
artinasd/arsBot

## Current Branch
feature/nova-foundation

## Latest Commit
5e2a3c4d0a884fb2b1c15911b713615f0c094175

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
5. Dark premium visual language with acid-lime accent.
6. Product visuals are CSS-generated.
7. No backend/database/API because the requested product is explicitly static.
8. Content is centralized in `data/` modules.
9. Global navigation uses actual application routes rather than page-specific hash anchors.
10. Internal product and article cards use Next.js `Link`.
11. ESLint 9 flat configuration is provided through `eslint.config.mjs`.
12. Site URL configuration is centralized in `lib/site.js` and can be overridden with `NEXT_PUBLIC_SITE_URL` for deployment.
13. Metadata, sitemap and robots all consume the same centralized site URL.

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

## Current Task
Continue focused accessibility, responsive, visual and code-quality audit.

## Next Planned Task
Inspect responsive/mobile and accessibility-sensitive components, then perform final SEO/deployment configuration review and repository audit.

## Known Issues
- Repository name remains `arsBot`.
- The default site URL remains `https://nova.example` until a real deployment domain is selected; production deployment should set `NEXT_PUBLIC_SITE_URL`.
- No real binary product imagery has been added; `ProductVisual` currently generates product art with CSS.
- Final responsive/accessibility review remains outstanding.

## Technical Debt
- Consolidate repeated visual classes where useful.
- Add final production domain through `NEXT_PUBLIC_SITE_URL`.
- Consider generated/static product artwork after visual review.

## Testing Status
User-reported local validation after the navigation consistency changes: `npm run lint` succeeds, the application runs successfully, and `npm run build` succeeds. These checks were performed by the user locally and were not independently executed by the GitHub connector.

## Repository Verification Status
The site configuration, root metadata, sitemap and robots files were inspected and updated directly on `feature/nova-foundation`. Latest implementation commit before this ledger update: `5e2a3c4d0a884fb2b1c15911b713615f0c094175`.

## Deployment Status
Not deployed.

## Notes For Future Continuation
Do not introduce backend/database infrastructure unless requirements change. Treat user-provided local command output as authoritative local validation. Continue making concrete visual, accessibility and production-readiness improvements rather than repeatedly re-planning the architecture. Before production deployment, set `NEXT_PUBLIC_SITE_URL` to the actual canonical HTTPS domain.

## Conversation Summary
NOVA is a fictional Iranian smart-home technology company created as a premium Persian RTL portfolio website. The application is static/backend-less and uses Next.js, React, JavaScript, Tailwind CSS and local data. The user confirmed lint, runtime and production build success locally after the navigation consistency audit. This continuation centralized the deployment/site URL in `lib/site.js`, updated root metadata, sitemap and robots to consume it, and made the production domain configurable through `NEXT_PUBLIC_SITE_URL` without inventing a real domain. The next phase is focused accessibility, responsive, visual and final repository review.

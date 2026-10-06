# Matthew Van Winkle · Portfolio 2026

A personal software engineering portfolio focused on the next step into sales and solutions engineering. Built with Next.js App Router, React, TypeScript, and a static export. The primary website is https://matthewvanwinkle.com/, hosted on Vercel from the `main` branch. A separate GitHub Pages workflow also publishes the repository subpath.

The layout is deliberately conventional: introduction, selected projects, experience, and contact. The five-step approach panel is the single distinctive interaction. Discover and Build establish the solution; Re-Discover and Rebuild bring stakeholder feedback back into the work; Present/Pitch connects the result to stakeholder priorities. The panel supports pointer and keyboard navigation, and it does not advance automatically.

The light palette uses a soft off-white background. The header's color-theme selector offers System (the default), Light, and Dark. System follows the browser/OS preference and updates when it changes; explicit choices persist locally. The initial theme is applied before page content is painted, and printed pages use the light palette.

## Local development

```sh
npm ci
npm run dev
```

## Production preview

```sh
npm run build
npm start
```

The static preview listens on `http://127.0.0.1:3000`. Set `PORT` to choose a different port. The existing GitHub Pages workflow sets `NEXT_PUBLIC_BASE_PATH` during the build. Use the same value during `npm start` to preview a build produced under a subpath.

## Content and design

- `src/content/projects.ts`: project narratives, repository links, video links, metrics, and career history.
- `src/app/page.tsx`: homepage and positioning.
- `src/app/projects/[slug]/page.tsx`: statically generated case studies.
- `src/app/design.css`: responsive visual system, focus states, reduced-motion support, and print styling.
- `src/components/HeroSystem.tsx`: the five-stage approach diagram and accessible tabs.
- `src/components/VideoWalkthrough.tsx`: validated YouTube IDs and lazy-loaded privacy-enhanced embeds.
- `public/resume.pdf`: Matthew's supplied one-page resume, preserved byte-for-byte. Replace this file directly when a new resume is supplied.

The site has no contact-form backend. Email links open the visitor's email app.

## Content provenance

Career details are grounded in Matthew's supplied `Resume Van Winkle.pdf`: CU Boulder research with Kai Larsen (October 2025–September 2026), course assistance January 2024–May 2025, a summer 2020 Litify migration internship, and a Computer Science B.A. completed July 2025.

Per Matthew's explicit direction, video metrics take precedence in website copy. The downloadable PDF remains exactly as supplied and retains its 35M+ taxi figure; the website uses the video's 56 million figure:

- [NYC taxi walkthrough](https://youtu.be/F2tun2CSJp4): 56 million trips, 15 monthly files, 94.7% QA pass rate, three executive dashboards, and 60+ validation tests. Runtime 4:21.
- [Market streaming walkthrough](https://youtu.be/jRSKh9EK6B0): one-second bars, a local dashboard and cache, batched Snowflake delivery, operational monitoring, and historical analytics. Runtime 2:01. One-second windows describe aggregation, not a guaranteed end-to-end latency.
- [Retail ETL walkthrough](https://youtu.be/wQX-hpfx584): data cleaning, type enforcement, deduplication, dimensional modeling, QA outputs, plots, and a JSON audit. Runtime 1:30. No performance or revenue uplift is claimed.

The videos' auto-generated transcripts and representative visual frames were reviewed. Public repository documentation supplements implementation details. No sales quota, client revenue, enterprise production deployment, or employment at a sales-engineering title is asserted.

## Checks

`npm run build` checks TypeScript, runs the Next.js lint step, and exports all routes. `npm run typecheck` and `npm run lint` are also available independently. Verify all five approach states (including arrow keys, Home, and End), desktop/mobile navigation, project routes, YouTube mappings, and the resume download after changing the site.

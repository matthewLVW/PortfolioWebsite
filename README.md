# Data Engineering Portfolio - Next.js + Tailwind

Minimal, recruiter-focused portfolio highlighting three hands-on data engineering builds.

## Quickstart

```bash
# install deps
npm install
# run locally
npm run dev
# build and serve
npm run build && npm run start
```

## Featured Projects

- **Retail ETL Reliability** - Deterministic Python ETL that lands clean star-schema tables in SQLite with QA flags.
- **NYC Taxi Medallion Pipeline** - Local medallion lakehouse with Polars, DuckDB, and dbt powering a Gold star schema.
- **Real-Time Stock Streaming to Snowflake** - Kafka-driven OHLCV pipeline landing minute aggregates in Snowflake with validation.

### Update visuals
- Replace the hero background by swapping `/public/bg-tech.jpg`.
- Project artwork lives in `/public/thumbnails/*.svg`; adjust paths for custom assets in `content/projects.ts`.

### Refresh copy
- Edit project details in `content/projects.ts` (summaries, challenges, lessons, repo links).
- Homepage and `/projects` automatically reflect updates to the shared data module.

### Resume link
- Replace `/public/Resume.pdf` with your latest CV if needed. The link is surfaced on the homepage modal and the `/resume` page.



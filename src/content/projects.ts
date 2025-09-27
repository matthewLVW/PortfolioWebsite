export interface ProjectChallenge {
  title: string;
  body: string;
}

export interface ProjectContent {
  slug: string;
  title: string;
  summary: string;
  longSummary: string;
  stack: string[];
  challenges: ProjectChallenge[];
  learned: string[];
  repo: string;
  thumbnail: string;
}

export const projects: ProjectContent[] = [
  {
    slug: 'retail-etl',
    title: 'Retail ETL Reliability',
    summary:
      'Built a reliable ETL that ingests raw retail CSVs, cleans them, and loads a normalized star schema in SQLite.',
    longSummary:
      'A Python ETL that ingests messy retail exports, applies deterministic cleaning and validation, and promotes curated dimension + fact tables to SQLite for lightweight analytics.',
    stack: ['Python', 'Pandas/Polars', 'SQLite'],
    challenges: [
      {
        title: 'Dirty & inconsistent source data',
        body:
          'Handled invalid or missing dates, mismatched totals, inconsistent categories, and duplicates. Validation rules and anomaly flags preserved lineage instead of throwing data away.',
      },
      {
        title: 'Designing an analytics-ready schema',
        body:
          'Modeled a star schema (fact_transactions, dim_date, dim_product, dim_store, dim_payment) with staging tables for idempotent loads and referential checks before promotion.',
      },
      {
        title: 'Deterministic deduplication',
        body:
          'Introduced composite business keys and load timestamps to power deterministic upserts, documenting merge rules for transparency.',
      },
    ],
    learned: [
      'Codifying data-quality rules and surfacing QA flags for stakeholders.',
      'Balancing dimensional modeling tradeoffs for small OLAP workloads.',
      'Designing idempotent, restartable loads with clear lineage.',
    ],
    repo: 'https://github.com/matthewLVW/ETL_Retail_Portfolio',
    thumbnail: '/thumbnails/retail-etl.svg',
  },
  {
    slug: 'nyc-taxi-pipeline',
    title: 'NYC Taxi Medallion Pipeline (Local Lakehouse)',
    summary:
      'Local medallion pipeline with Polars + DuckDB + dbt, optimized for memory and speed across Bronze -> Silver -> Gold layers.',
    longSummary:
      'A local lakehouse pipeline processing NYC Taxi parquet files: Bronze unifies raw data, Silver standardizes and flags data quality issues, and Gold dbt models in DuckDB deliver a queryable star schema.',
    stack: ['Polars', 'DuckDB', 'dbt', 'Python'],
    challenges: [
      {
        title: 'Large files on a single machine',
        body:
          'Leverages Polars lazy scans, projection/predicate pushdown, and chunked writes to keep peak memory modest while still performing joins and aggregations.',
      },
      {
        title: 'Medallion contracts & QA flags',
        body:
          'Standardized canonical names, normalized datetimes, enforced enums, and added QA flags for outliers, negative fares, and improbable speeds.',
      },
      {
        title: 'Gold star schema with tests',
        body:
          'Modeled FACT_TRIPS with supporting dimensions in dbt and layered tests for unique keys, not-null constraints, and custom fare component tolerances.',
      },
    ],
    learned: [
      'Applying medallion architecture on commodity hardware.',
      'Promoting only contract-compliant rows forward in the pipeline.',
      'Authoring dbt models and tests in DuckDB for trusted marts.',
    ],
    repo: 'https://github.com/matthewLVW/NYC_Taxi_Portfolio',
    thumbnail: '/thumbnails/nyc-taxi.svg',
  },
  {
    slug: 'stock-streaming',
    title: 'Real-Time Stock Streaming to Snowflake',
    summary:
      'Kafka-driven 1-second OHLCV aggregation with micro-batched loads to Snowflake and a simple real-time dashboard.',
    longSummary:
      'Simulates live market ticks into Kafka, aggregates them to 1-second OHLCV bars, reconciles against raw data, and micro-batches trusted bars into Snowflake with cost-aware warehouse usage.',
    stack: ['Kafka', 'Python', 'Snowflake', 'Streamlit'],
    challenges: [
      {
        title: 'Coordinating multi-stage streaming',
        body:
          'Split producer, consumer, and aggregator roles with explicit JSON contracts and monitored end-to-end latency while keeping micro-batches backpressure-safe.',
      },
      {
        title: 'Cost & correctness in Snowflake',
        body:
          'Used auto-suspend XS warehouses and wrote 5-row-per-minute aggregates instead of raw ticks, with reconciliation checks to guarantee bar accuracy.',
      },
      {
        title: 'Observability & validation',
        body:
          'Added ingest latency and consumer lag metrics plus a replay validator comparing aggregated vs. raw streams for drift detection.',
      },
    ],
    learned: [
      'Designing event-driven pipelines with durable messaging and contracts.',
      'Balancing latency, cost, and fidelity landing streaming data in warehouses.',
      'Building lightweight validation to keep real-time aggregates trustworthy.',
    ],
    repo: 'https://github.com/matthewLVW/SnowflakeRealtimeStreaming',
    thumbnail: '/thumbnails/stock-streaming.svg',
  },
];

export const focusAreas = [
  'Reliable batch ETL',
  'Medallion lakehouse patterns',
  'Streaming analytics to warehouses',
];

export const highlightStats = [
  { metric: '5', label: 'Retail star-schema tables' },
  { metric: '3', label: 'Bronze to Gold layers' },
  { metric: '1s', label: 'OHLCV aggregation window' },
];


export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  business: string;
  technical: string;
  stack: string[];
  repo?: string;
  videoUrl?: string;
  videoDuration: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  approach: string[];
  tradeoff: string;
  takeaway: string;
};

export const projects: Project[] = [
  {
    slug: "market-streaming",
    number: "01",
    category: "REAL-TIME SYSTEMS",
    title: "A clearer picture.\nA fresher signal.",
    subtitle: "Market data streaming platform",
    summary:
      "A Kafka pipeline aggregating market ticks into one-second bars, with a live dashboard, batched Snowflake storage, and latency monitoring.",
    business:
      "A market dashboard is only useful if you can trust how fresh it is. I built a pipeline that makes latency visible and separates immediate insight from warehouse analytics.",
    technical:
      "Python and Kafka process market ticks into 1-second OHLCV bars. A real-time dashboard sits alongside batched Snowflake delivery, with timestamped metrics to track freshness.",
    stack: ["Python", "Kafka", "Snowflake", "Streamlit"],
    repo: "https://github.com/matthewLVW/SnowflakeRealtimeStreaming",
    videoUrl: "https://youtu.be/jRSKh9EK6B0",
    videoDuration: "2:01",
    metric: "1s",
    metricLabel: "aggregation windows",
    challenge:
      "Live monitoring and historical analysis need the same data, but they have different latency and cost requirements. Sending every tick to a warehouse is an expensive answer to the wrong question.",
    approach: [
      "Separate ingestion, aggregation, and persistence with Kafka topics and explicit data contracts.",
      "Aggregate market ticks into one-second OHLCV bars for the local dashboard, while batching rollups for Snowflake.",
      "Expose ingestion lag and data freshness through timestamped logging, metrics, and dashboard views.",
      "Use validation scripts and deterministic identifiers to reason about duplicates and aggregate correctness.",
    ],
    tradeoff:
      "Freshness versus compute cost. The real-time path serves immediate monitoring; batched warehouse writes support analysis without making every incoming event a warehouse operation.",
    takeaway:
      "I would start a customer conversation with the decision they need to make and how fresh its data must be. The architecture follows that requirement.",
  },
  {
    slug: "taxi-lakehouse",
    number: "02",
    category: "DATA PLATFORMS",
    title: "Millions of rows.\nOne useful answer.",
    subtitle: "NYC taxi lakehouse & analytics",
    summary:
      "Processed 56 million trips into a tested data warehouse and three executive dashboards, with a 94.7% QA pass rate.",
    business:
      "Turn raw trip records into data someone can actually use. This local analytics platform takes 56 million trips through quality checks and into three executive dashboards.",
    technical:
      "Polars lazy scans prepare Bronze and Silver Parquet layers. DuckDB and dbt model the Gold layer, with tested dimensions, facts, and curated analytics marts.",
    stack: ["Python", "Polars", "DuckDB", "dbt"],
    repo: "https://github.com/matthewLVW/NYC_Taxi_Portfolio",
    videoUrl: "https://youtu.be/F2tun2CSJp4",
    videoDuration: "4:21",
    metric: "56M",
    metricLabel: "trip records processed",
    challenge:
      "Raw data is not a decision tool. Inconsistent types, questionable fares, and ambiguous definitions make even a simple revenue question hard to answer reliably.",
    approach: [
      "Bring 15 monthly Parquet files into consistent Bronze, Silver, and Gold layers, with explicit contracts between each.",
      "Process 56 million trips with a 94.7% QA pass rate. Quarantine anomalies and fare mismatches instead of silently fixing them.",
      "Use Polars, DuckDB, and dbt to create reproducible dimensions, facts, and analytics marts, backed by 60+ validation tests.",
      "Build three executive views: Company Pulse, Strategic Levers, and Zone Heat, connecting operational questions to explorable data.",
    ],
    tradeoff:
      "Portability versus distributed scale. A local stack makes the project reproducible and easy to demonstrate; a shared enterprise deployment would need a different concurrency and operational design.",
    takeaway:
      "The useful demo starts with an answer in a dashboard, then traces it back to the data contract and quality checks that make that answer credible.",
  },
  {
    slug: "retail-etl",
    number: "03",
    category: "RELIABLE FOUNDATIONS",
    title: "Messy exports.\nMeaningful answers.",
    subtitle: "Retail ETL & data quality",
    summary:
      "A repeatable workflow that cleans sales data, validates records, and produces structured tables and reporting outputs.",
    business:
      "Before a business can trust its reports, it needs to trust the data underneath. I built a repeatable path from raw retail exports to a structured, queryable model.",
    technical:
      "A Python ETL workflow cleans raw CSVs and loads a SQLite star schema. Validation rules flag anomalies, while deterministic keys support repeatable loads.",
    stack: ["Python", "SQL", "SQLite", "Data modeling"],
    repo: "https://github.com/matthewLVW/ETL_Retail_Portfolio",
    videoUrl: "https://youtu.be/wQX-hpfx584",
    videoDuration: "1:30",
    metric: "CSV → SQL",
    metricLabel: "from raw exports to useful data",
    challenge:
      "Missing dates, inconsistent categories, duplicates, and mismatched totals can quietly undermine reporting. A useful pipeline has to make these issues visible before data reaches a dashboard.",
    approach: [
      "Ingest raw sales data and standardize mixed types, missing values, discounts, and mismatched totals.",
      "Stage records to deduplicate and enforce types; normalize dimension lookups and join facts at row level.",
      "Deliver clean tables for analysis, quality-assurance tables for review, plots, and a JSON audit.",
      "Frame the analysis around practical questions: who drives revenue, where money is spent, and when demand occurs.",
    ],
    tradeoff:
      "Simplicity versus scale. SQLite keeps the workflow lightweight and inspectable. A multi-user production platform would need additional access controls, orchestration, and a storage strategy suited to its workload.",
    takeaway:
      "Data quality is a business conversation. I would demonstrate what happens to a problematic record and explain how that affects the report someone uses to make a decision.",
  },
];

export const experience = [
  {
    date: "October 2025 — September 2026",
    role: "Research Assistant",
    summary:
      "Built research pipelines that turn 10K+ web and PDF documents into structured datasets.",
    company: "University of Colorado Boulder",
    description:
      "Built web and PDF extraction pipelines for research with Kai Larsen. Python, Playwright, and LLM-based extraction turned 10K+ documents into normalized JSON, with dashboards for pipeline health and coverage.",
  },
  {
    date: "January 2024 — May 2025",
    role: "Course Assistant",
    summary:
      "Taught SQL, relational modeling, and computer systems concepts through four semesters of office hours.",
    company: "University of Colorado Boulder",
    description:
      "Supported Database Systems and Computer Systems across four semesters. Office hours meant translating SQL, relational modeling, and systems concepts into explanations that met people where they were.",
  },
  {
    date: "May — August 2020",
    role: "Data Migration Intern",
    summary:
      "Supported data validation and workflow continuity during a move to Litify, a Salesforce-based platform.",
    company: "Allen, Allen, Allen & Allen",
    description:
      "Supported a move from a legacy case management system to Litify, built on Salesforce. Assisted with data validation and workflow continuity through the transition.",
  },
];

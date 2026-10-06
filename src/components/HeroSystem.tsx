"use client";

import { useRef, useState, type KeyboardEvent } from "react";

const stages = [
  {
    label: "Discover",
    title: "Understand the problem.",
    description:
      "Work with stakeholders to define the goal, the workflow, and the constraints before choosing a solution.",
    inputs: ["Stakeholders", "Goals", "Constraints"],
    output: ["Shared", "requirements"],
  },
  {
    label: "Build",
    title: "Build a working solution.",
    description:
      "Turn those requirements into reliable software, with clear data contracts and measurable performance.",
    inputs: ["Requirements", "Data", "Engineering"],
    output: ["Working", "software"],
  },
  {
    label: "Re-Discover",
    title: "Review it with the people using it.",
    description:
      "Continue collaborating with key stakeholders. Learn what works in practice, what creates friction, and what needs to change.",
    inputs: ["Stakeholders", "Real usage", "Feedback"],
    output: ["Refined", "requirements"],
  },
  {
    label: "Rebuild",
    title: "Improve the fit.",
    description:
      "Use that feedback to refine the solution. Validate technical performance and confirm it works in the users’ actual workflow.",
    inputs: ["Feedback", "Priorities", "Validation"],
    output: ["A better", "fit"],
  },
  {
    label: "Present/Pitch",
    title: "Show the solution and its value.",
    description:
      "Demonstrate the result, explain the tradeoffs, and connect the work to the priorities that matter to stakeholders.",
    inputs: ["The result", "The evidence", "The tradeoffs"],
    output: ["A clear", "case"],
  },
];

function StageIcon({ stage }: { stage: number }) {
  const paths = [
    <g key="discover">
      <circle cx="21" cy="20" r="9" />
      <path d="m28 27 9 9" />
    </g>,
    <g key="build">
      <path d="m16 15-9 9 9 9m16-18 9 9-9 9m-6-22-5 26" />
    </g>,
    <g key="review">
      <path d="M9 12h30v21H24l-9 7v-7H9Z" />
      <path d="M16 20h16m-16 6h10" />
    </g>,
    <g key="rebuild">
      <path d="M36 17a14 14 0 0 0-24-2l-3 4m0-10v10h10M12 31a14 14 0 0 0 24 2l3-4m0 10V29H29" />
    </g>,
    <g key="present">
      <path d="M8 11h32v23H8ZM24 34v7m-9 0 9-7 9 7M15 26l7-6 5 3 7-7" />
    </g>,
  ];
  return (
    <svg
      x="213"
      y="55"
      width="54"
      height="54"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[stage]}
    </svg>
  );
}

export default function HeroSystem() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = stages[active];
  const feedback = active === 2 || active === 3;

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % stages.length;
    else if (event.key === "ArrowLeft")
      next = (index + stages.length - 1) % stages.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = stages.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section className="approach-card" aria-labelledby="approach-title">
      <div className="approach-heading">
        <h2 id="approach-title">My approach</h2>
        <span>0{active + 1} / 05</span>
      </div>
      <div
        className={`approach-diagram ${feedback ? "has-feedback" : ""}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 440 182" fill="none">
          <defs>
            <marker
              id="loop-arrow"
              markerWidth="6"
              markerHeight="6"
              refX="4"
              refY="3"
              orient="auto"
            >
              <path
                d="m1 1 3 2-3 2"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </marker>
          </defs>
          <path
            className="approach-wire"
            d="M118 32h25q18 0 18 18v13q0 18 19 18h26M118 81h88M118 130h25q18 0 18-18V99q0-18 19-18h26M274 81h72"
          />
          {stage.inputs.map((label, i) => (
            <g key={i}>
              <rect
                className="input-node"
                x="18"
                y={17 + i * 49}
                width="100"
                height="30"
                rx="4"
              />
              <text
                className="input-label"
                x="68"
                y={36 + i * 49}
                textAnchor="middle"
              >
                {label}
              </text>
            </g>
          ))}
          <rect
            className="core-halo"
            x="201"
            y="42"
            width="78"
            height="78"
            rx="19"
          />
          <rect
            className="core-node"
            x="207"
            y="48"
            width="66"
            height="66"
            rx="14"
          />
          <StageIcon stage={active} />
          <circle className="output-node" cx="363" cy="81" r="17" />
          <path className="output-arrow" d="M355 81h15m-5-5 6 5-6 5" />
          <text className="output-label" x="363" y="118" textAnchor="middle">
            {stage.output[0]}
          </text>
          <text className="output-label" x="363" y="132" textAnchor="middle">
            {stage.output[1]}
          </text>
          <path
            className="feedback-wire"
            d="M380 81h9q17 0 17 17v49q0 14-14 14H254q-14 0-14-14v-18"
            markerEnd="url(#loop-arrow)"
          />
          <text className="feedback-label" x="324" y="178" textAnchor="middle">
            Review and refine
          </text>
        </svg>
      </div>
      {stages.map((item, i) => (
        <div
          key={item.label}
          id={`approach-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`approach-tab-${i}`}
          tabIndex={0}
          hidden={active !== i}
          className="approach-copy"
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
      <div className="approach-tabs" role="tablist" aria-label="My approach">
        {stages.map((item, i) => (
          <button
            key={item.label}
            ref={(node) => {
              tabs.current[i] = node;
            }}
            id={`approach-tab-${i}`}
            role="tab"
            aria-label={`0${i + 1} ${item.label}`}
            aria-selected={active === i}
            aria-controls={`approach-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(event) => navigate(event, i)}
          >
            <span className="stage-number">0{i + 1}</span>
            <span>
              {i === 2 ? (
                <>
                  Re-
                  <wbr />
                  Discover
                </>
              ) : i === 4 ? (
                <>
                  Present/
                  <wbr />
                  Pitch
                </>
              ) : (
                item.label
              )}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

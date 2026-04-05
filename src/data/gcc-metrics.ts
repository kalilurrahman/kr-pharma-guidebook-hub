export interface GccMetric {
  metric: string;
  dimension: string;
  description: string;
  matureBenchmark: string;
  largeBenchmark: string;
  industryInsight: string;
  source: string;
}

export const gccDimensions = [
  "Strategic Alignment to HQ",
  "Governance & Empowerment",
  "Service Portfolio",
  "Depth of Capability",
  "Digital Maturity",
  "Future-Ready Workforce",
  "Risk & Resilience",
  "Value & Cost",
  "Cross-Cutting",
] as const;

export const gccDimensionColors: Record<string, string> = {
  "Strategic Alignment to HQ": "teal",
  "Governance & Empowerment": "indigo",
  "Service Portfolio": "violet",
  "Depth of Capability": "gold",
  "Digital Maturity": "coral",
  "Future-Ready Workforce": "teal",
  "Risk & Resilience": "indigo",
  "Value & Cost": "gold",
  "Cross-Cutting": "violet",
};

export const gccMetrics: GccMetric[] = [
  { metric: "Strategic Alignment Score", dimension: "Strategic Alignment to HQ", description: "Degree of integration with corporate OKRs and planning", matureBenchmark: "Co-creates strategy; India leaders on global committees (>80% alignment)", largeBenchmark: "70–85% OKR contribution", industryInsight: "Top pharma GCCs contribute to nearly every late-stage molecule; operate as 'HQ Twin'", source: "Zinnov / KPMG / Playbook" },
  { metric: "Enterprise Strategy Co-Creation Index", dimension: "Strategic Alignment to HQ", description: "Frequency and depth of GCC input into HQ roadmaps", matureBenchmark: "Annual 3-year GCC plan integrated; standing committee seats", largeBenchmark: "Quarterly strategic reviews", industryInsight: "Leading GCCs deeply embedded in R&D workflows and pipeline strategy", source: "BCG / Zinnov" },
  { metric: "Cross-BU Collaboration Rate", dimension: "Strategic Alignment to HQ", description: "% of initiatives spanning multiple business units", matureBenchmark: ">70%", largeBenchmark: "50–65%", industryInsight: "High across drug development, clinical, and commercial in mature GCCs", source: "Industry benchmarks" },
  { metric: "Governance Maturity Index", dimension: "Governance & Empowerment", description: "Presence of GCC Charter, Leadership Council, autonomy tiers", matureBenchmark: "Two-Approval-Layer Rule; global P&L elements owned", largeBenchmark: "Formal council with defined escalation", industryInsight: "High autonomy in clinical operations and innovation for Wave 4 GCCs", source: "Playbook Levers / BCG" },
  { metric: "Decision Velocity", dimension: "Governance & Empowerment", description: "Average time from proposal to approval (days)", matureBenchmark: "Comparable to HQ (<7–14 days for mid-tier)", largeBenchmark: "10–21 days", industryInsight: "Supports rapid trial execution in mature pharma GCCs", source: "BCG" },
  { metric: "Autonomy Tier Coverage", dimension: "Governance & Empowerment", description: "% of decisions made locally", matureBenchmark: ">75%", largeBenchmark: "50–70%", industryInsight: "High in drug development workflows for advanced GCCs", source: "KPMG" },
  { metric: "Service Portfolio Breadth", dimension: "Service Portfolio", description: "Number of functions with end-to-end ownership", matureBenchmark: "Enterprise-wide + 2–4 global mandates", largeBenchmark: "8–12+ functions", industryInsight: "R&D, clinical operations, pharmacovigilance, commercial, finance, supply chain, quality, procurement, HR (~9 functions)", source: "ANSR / Zinnov" },
  { metric: "Global Mandate Ownership", dimension: "Service Portfolio", description: "Number of enterprise-global processes owned", matureBenchmark: "2–4 domains", largeBenchmark: "1–3", industryInsight: "Multiple mandates in drug development and clinical trials for top GCCs", source: "Playbook" },
  { metric: "Portfolio Optimization Rate", dimension: "Service Portfolio", description: "Annual sunset/sunrise reviews completed (%)", matureBenchmark: "100% with automation of low-value work", largeBenchmark: "80–90%", industryInsight: "Ongoing evolution from support to innovation across the industry", source: "BCG" },
  { metric: "Capability Depth Score", dimension: "Depth of Capability", description: "Expertise level and 'best-in-enterprise' recognition", matureBenchmark: "Patents filed; institutional knowledge repository", largeBenchmark: "Multiple CoEs", industryInsight: "Biomedical research, biostatistics, advanced analytics; contributions to Phase II/III programs", source: "Zinnov" },
  { metric: "IP Generation Rate", dimension: "Depth of Capability", description: "Patents/process innovations per year", matureBenchmark: "5+ enterprise-contributing", largeBenchmark: "1–5", industryInsight: "Leading GCCs support multiple molecules; AI in trials (e.g., faster recruitment)", source: "Industry reports" },
  { metric: "Domain Expertise Coverage", dimension: "Depth of Capability", description: "% of critical roles with advanced certification", matureBenchmark: ">80%", largeBenchmark: "60–75%", industryInsight: "Strong in clinical data management and regulatory across mature pharma GCCs", source: "Deloitte" },
  { metric: "Cloud Adoption Rate", dimension: "Digital Maturity", description: "% of workloads on cloud", matureBenchmark: "≥70%", largeBenchmark: "60–80%", industryInsight: "High adoption enables digital platforms for trials across the industry", source: "BCG" },
  { metric: "Automation Penetration", dimension: "Digital Maturity", description: "% of processes automated (RPA+AI)", matureBenchmark: ">60–70%", largeBenchmark: "40–60%", industryInsight: "High efficiency and automation in commercial operations for leading GCCs", source: "Industry reports" },
  { metric: "AI-Native Index", dimension: "Digital Maturity", description: "% of AI initiatives reaching production", matureBenchmark: ">40%; AI agents in core processes", largeBenchmark: "25–40%", industryInsight: "AI-driven site selection and trial recruitment (e.g., 40% faster in key trials)", source: "BCG / ZS" },
  { metric: "Digital Maturity Score", dimension: "Digital Maturity", description: "Overall technology enablement level (1–5 scale)", matureBenchmark: "4.5–5.0 (proprietary assets)", largeBenchmark: "3.5–4.5", industryInsight: "Advanced in analytics and digital health for Wave 4 centres", source: "ANSR" },
  { metric: "Attrition Rate", dimension: "Future-Ready Workforce", description: "Annual voluntary turnover (%)", matureBenchmark: "<12–15%", largeBenchmark: "12–18%", industryInsight: "Focus on talent pipeline and retention across top pharma GCCs", source: "Standard benchmarks" },
  { metric: "eNPS / Engagement Score", dimension: "Future-Ready Workforce", description: "Net Promoter Score for employees", matureBenchmark: ">60", largeBenchmark: "50–65", industryInsight: "Leading GCCs maintain Great Place to Work certification; leadership-ready talent hub", source: "Industry reports" },
  { metric: "Internal/Global Mobility Rate", dimension: "Future-Ready Workforce", description: "% of employees moving roles/locations annually", matureBenchmark: ">20%", largeBenchmark: "15–25%", industryInsight: "Talent development emphasised in mature pharma GCCs", source: "Zinnov" },
  { metric: "L&D Investment per Employee", dimension: "Future-Ready Workforce", description: "Annual spend (INR)", matureBenchmark: ">₹50,000", largeBenchmark: "₹30,000–50,000", industryInsight: "Skills in AI, clinical, and digital prioritised across the industry", source: "Playbook" },
  { metric: "Time-to-Productivity", dimension: "Future-Ready Workforce", description: "Months for new hires to full output", matureBenchmark: "<3 months", largeBenchmark: "3–6 months", industryInsight: "Structured onboarding for complex R&D roles in top GCCs", source: "Qatalys" },
  { metric: "AI Literacy Coverage", dimension: "Future-Ready Workforce", description: "% of workforce with forward-looking skills assessment", matureBenchmark: "2–3 year forecast; >70% AI-literate baseline", largeBenchmark: "Annual assessment", industryInsight: "High in data science and analytics teams across leading GCCs", source: "BCG" },
  { metric: "BCP/DR Success Rate", dimension: "Risk & Resilience", description: "% of tests meeting targets", matureBenchmark: ">99%", largeBenchmark: "95–99%", industryInsight: "Robust for global clinical operations across mature GCCs", source: "Standard" },
  { metric: "Audit/Compliance Score", dimension: "Risk & Resilience", description: "Overall regulatory and internal audit rating (%)", matureBenchmark: ">95%", largeBenchmark: "90–95%", industryInsight: "High in pharmacovigilance and quality for leading pharma GCCs", source: "KPMG" },
  { metric: "Risk Horizon Coverage", dimension: "Risk & Resilience", description: "Months of proactive scanning (5 domains)", matureBenchmark: "12–24 months; scenario planning", largeBenchmark: "6–12 months", industryInsight: "Supports global supply and trials resilience", source: "Playbook" },
  { metric: "Cost Savings vs Onshore", dimension: "Value & Cost", description: "% reduction in equivalent roles", matureBenchmark: "30–45%+ with productivity uplift", largeBenchmark: "35–50%", industryInsight: "Significant scale efficiencies; top pharma GCCs in India achieve 30–45% cost advantage", source: "Industry" },
  { metric: "ROI on AI/Digital Initiatives", dimension: "Value & Cost", description: "Multiple of return", matureBenchmark: "3.5×+", largeBenchmark: "2.5–4×", industryInsight: "Demonstrated in trial acceleration and efficiency across leaders", source: "BCG" },
  { metric: "Value Delivered Index", dimension: "Value & Cost", description: "Quantified business impact (revenue influence, TTM)", matureBenchmark: "Three-layer KPI dashboard to board", largeBenchmark: "Mix of operational + outcomes", industryInsight: "Powers innovation; faster trial enrollment across mature GCCs", source: "ZS / Qatalys" },
  { metric: "Time-to-Market Acceleration", dimension: "Value & Cost", description: "% reduction in development cycles", matureBenchmark: "20–40%", largeBenchmark: "15–30%", industryInsight: "AI-powered sites recruited 40% faster in key trials across the industry", source: "Industry benchmarks" },
  { metric: "Innovation Contribution", dimension: "Value & Cost", description: "% of enterprise innovation pipeline supported", matureBenchmark: ">30–50%", largeBenchmark: "20–40%", industryInsight: "Top GCCs contribute to almost every late-stage molecule in their portfolio", source: "ANSR / Zinnov" },
  { metric: "Operational Excellence Metrics", dimension: "Value & Cost", description: "Composite: speed, accuracy, consistency, efficiency, automation", matureBenchmark: "Industry-leading (>95% first-time-right)", largeBenchmark: "High benchmarks in commercial ops", industryInsight: "Explicitly tracked in commercial functions across leading pharma GCCs", source: "ZS Interview" },
  { metric: "Overall Maturity Index", dimension: "Cross-Cutting", description: "Aggregate score across dimensions", matureBenchmark: "24/24 (100%) – Full Wave 4", largeBenchmark: "75–90% typical for scaled centers", industryInsight: "Advanced Wave 4 characteristics (innovation engine) in top GCCs", source: "KPMG / Zinnov" },
  { metric: "Headcount Scale Efficiency", dimension: "Cross-Cutting", description: "Value per FTE (innovation output)", matureBenchmark: "High strategic leverage", largeBenchmark: "High at 1,000–10,000+ scale", industryInsight: "Top pharma GCCs deliver global mandates with 5,000–10,000+ FTEs", source: "Industry Reports" },
  { metric: "Sustainability/ESG Integration", dimension: "Cross-Cutting", description: "Alignment with corporate ESG targets", matureBenchmark: "97%+ compliance", largeBenchmark: "On track for 2025–2030 targets", industryInsight: "Strong manufacturing and supplier ESG metrics across leading pharma GCCs", source: "Industry Reports" },
];

export const gccHighlightStats = [
  { value: "37", label: "Metrics Tracked" },
  { value: "9", label: "Dimensions" },
  { value: "1,600+", label: "GCCs in India" },
  { value: "10,000+", label: "Avg FTEs (Top GCCs)" },
  { value: "30–45%", label: "Cost Advantage" },
  { value: "40%", label: "Faster Trial Recruitment" },
];

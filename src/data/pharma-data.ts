import type { Chapter, HandbookStats } from "@/types/pharma.types";

export const handbookStats: HandbookStats = {
  chapters: 14,
  words: "30K+",
  pillars: 7,
  phases: 3,
};

export const coverStats = [
  { value: "14", label: "Chapters" },
  { value: "30K+", label: "Words" },
  { value: "7", label: "ACUITAS Pillars" },
  { value: "3", label: "Transformation Phases" },
];

export const chapters: Chapter[] = [
  {
    id: "ch1",
    num: "01",
    partLabel: "Part I · Foundations",
    title: "The Pharmaceutical Landscape & the GCC Imperative",
    lead: "Understanding the forces reshaping global pharma — and why Global Capability Centres are no longer optional.",
    metrics: [
      { value: "$1.48T", label: "Global Pharma Market 2025" },
      { value: "6.1%", label: "CAGR Through 2030" },
      { value: "12–15", label: "Years Drug-to-Market" },
      { value: "$2.6B", label: "Avg. Drug Dev. Cost" },
    ],
    tags: ["Market Analysis", "GCC Strategy", "Pharma Landscape"],
    sections: [
      {
        title: "A Sector at a Crossroads",
        content: [
          "The global pharmaceutical industry is experiencing its most consequential transformation since the biotechnology revolution of the 1980s. Converging forces — artificial intelligence, post-pandemic supply chain disruptions, unprecedented regulatory complexity, and a fundamental rethinking of the drug discovery paradigm — are rewriting every assumption.",
          "The emergence of GLP-1 therapeutics has demonstrated that a single breakthrough molecule can reshape trillion-dollar disease categories overnight. mRNA platform technologies have unlocked programmable medicine at speed never before imagined.",
        ],
        pullQuote: {
          text: "The pharmaceutical organisations that will lead the next decade are not those with the largest R&D budgets, but those with the most intelligent, interconnected, and adaptive operating models.",
          cite: "KR · Pharma GCC Transformation Handbook",
        },
      },
      {
        title: "Why GCCs Are Now Central to Pharma Strategy",
        content: [
          "Global Capability Centres have evolved dramatically from their origins as cost-arbitrage back-offices. A modern GCC is a strategic nerve centre: a co-located hub of deep scientific, digital, and operational expertise.",
          "India alone hosts over 1,600 GCCs employing 1.7 million professionals, and pharma GCCs represent one of the fastest-growing segments.",
        ],
      },
      {
        title: "The Seven Macro Forces Reshaping Pharma",
        content: [],
        pillars: [
          { num: "Force 01", title: "AI & Generative Intelligence", description: "AlphaFold 3, multi-modal foundation models, and agentic AI are collapsing discovery timelines from years to months.", colorVariant: "teal" },
          { num: "Force 02", title: "Regulatory Evolution", description: "FDA's Omnibus legislation, EMA PRIME, and ICH E6(R3) are demanding faster, more transparent, data-rich submissions.", colorVariant: "teal" },
          { num: "Force 03", title: "Precision Medicine", description: "Biomarker-stratified trials, companion diagnostics, and cell & gene therapies require entirely new GCC capability architectures.", colorVariant: "teal" },
          { num: "Force 04", title: "Supply Chain Resilience", description: "Post-COVID reshoring pressures, API concentration risk, and cold-chain complexity for biologics demand sophisticated GCC-led intelligence.", colorVariant: "teal" },
          { num: "Force 05", title: "Pricing Pressure", description: "IRA drug pricing negotiations, EU Pharmaceutical Strategy, and payer consolidation are compressing revenue windows.", colorVariant: "teal" },
          { num: "Force 06", title: "Talent Paradigm Shift", description: "The convergence of biology, data science, and software engineering creates a new class of talent most abundant in GCC hubs.", colorVariant: "teal" },
        ],
        insightBox: {
          icon: "🔬",
          label: "KR Insight",
          title: "The GCC is now the R&D engine, not the support function",
          description: "The strategic shift is irreversible: pharma GCCs that continue to operate as passive service providers will be disrupted by AI automation. The window for this transition is 2025–2027.",
        },
      },
    ],
  },
  {
    id: "ch2",
    num: "02",
    partLabel: "Part I · Foundations",
    title: "Strategic Vision & Transformation Blueprint",
    lead: "Designing a transformation strategy that is simultaneously ambitious enough to matter and grounded enough to execute.",
    metrics: [
      { value: "3×", label: "Value Multiplier of Strategic GCCs" },
      { value: "18 Mo", label: "Avg. Transformation Runway" },
      { value: "5-Star", label: "NASSCOM GCC Maturity Scale" },
      { value: "70%", label: "Transformation Initiatives Fail" },
    ],
    tags: ["Strategy", "Blueprint", "Three-Horizon"],
    sections: [
      {
        title: "Defining True North for a Pharma GCC",
        content: [
          "Every successful GCC transformation begins with a clearly articulated True North — a statement of strategic ambition that goes beyond cost-efficiency. For pharma GCCs, True North typically takes one of three forms: the Deep Science Hub, the Digital Acceleration Engine, or the Regulatory Intelligence Factory.",
        ],
      },
      {
        title: "The Three-Horizon Pharma GCC Framework",
        content: [],
        steps: [
          { num: "H1", title: "Horizon 1 · Stabilise & Standardise (0–12 months)", description: "Audit existing capabilities. Standardise core processes using LEAN and Six Sigma principles. Establish baseline quality metrics and SLA frameworks." },
          { num: "H2", title: "Horizon 2 · Differentiate & Digitise (12–36 months)", description: "Deploy AI-assisted tools across clinical operations, regulatory intelligence, and pharmacovigilance. Build CoE structures for high-value domains." },
          { num: "H3", title: "Horizon 3 · Lead & Innovate (36+ months)", description: "Operate as a co-equal innovation partner to global HQ. Own full drug discovery pipelines. Lead global regulatory strategy for emerging markets." },
        ],
      },
      {
        title: "Strategic Architecture: The Four Dimensions",
        content: [],
        table: {
          headers: ["Dimension", "Key Questions", "Critical Decisions", "Risk if Neglected"],
          rows: [
            ["Capability Portfolio", "Which scientific & digital domains will we own?", "Build vs. buy vs. partner", "Commoditisation and AI substitution"],
            ["Talent Architecture", "What talent profiles power each capability?", "Hiring strategy, university partnerships", "Execution gap"],
            ["Technology Platform", "What digital infrastructure enables the vision?", "Cloud, data lake, AI platform", "Manual bottlenecks at scale"],
            ["Governance Model", "How do we manage accountability?", "Global-local authority matrix", "Strategic drift and HQ misalignment"],
          ],
        },
        insightBox: {
          icon: "📐",
          label: "Blueprint Principle",
          title: "Speed of strategy execution is itself a competitive advantage",
          description: "The window between articulating a strategy and seeing it copied by competitors is narrowing to 12–18 months. Start building Horizon 2 capabilities during Horizon 1 execution.",
        },
      },
    ],
  },
  {
    id: "ch3",
    num: "03",
    partLabel: "Part I · Foundations",
    title: "Governance & Operating Model",
    lead: "Building the organisational architecture that converts strategy into sustained performance — without bureaucratic friction.",
    metrics: [
      { value: "4-Layer", label: "Governance Architecture" },
      { value: "OKR", label: "Quarterly Accountability" },
      { value: "RACI", label: "Decision Rights Framework" },
      { value: "CoE", label: "Centre of Excellence Model" },
    ],
    tags: ["Governance", "Operating Model", "CoE"],
    sections: [
      {
        title: "The Four-Layer Governance Architecture",
        content: [
          "A mature pharma GCC governance model operates across four layers: Strategic Board (quarterly direction and investment decisions), Operating Committee (monthly operational reviews), Domain Councils (bi-weekly functional alignment), and Delivery Teams (daily execution and stand-ups).",
        ],
        pillars: [
          { num: "Layer 01", title: "Strategic Board", description: "Quarterly direction-setting, investment decisions, and global-local alignment chaired by CXO-level sponsors.", colorVariant: "teal" },
          { num: "Layer 02", title: "Operating Committee", description: "Monthly operational reviews, resource allocation, cross-functional coordination, and escalation management.", colorVariant: "teal" },
          { num: "Layer 03", title: "Domain Councils", description: "Bi-weekly functional alignment across clinical, regulatory, manufacturing, and commercial domains.", colorVariant: "teal" },
          { num: "Layer 04", title: "Delivery Teams", description: "Daily execution, agile stand-ups, sprint planning, and continuous improvement cycles.", colorVariant: "teal" },
        ],
        insightBox: {
          icon: "🏛️",
          label: "Governance Insight",
          title: "The best governance model is the lightest one that works",
          description: "Over-governance kills agility. Under-governance kills accountability. The optimal model is one that provides clear decision rights with minimal approval layers — typically no more than two approvals for any operational decision.",
        },
      },
    ],
  },
  {
    id: "ch4",
    num: "04",
    partLabel: "Part II · Value Chain",
    title: "R&D & Drug Discovery",
    lead: "How pharma GCCs are shifting from support roles to driving computational drug discovery, target identification, and lead optimisation.",
    metrics: [
      { value: "AlphaFold", label: "Protein Structure AI" },
      { value: "CADD", label: "Computer-Aided Drug Design" },
      { value: "ADMET", label: "Pharmacokinetic Prediction" },
      { value: "10×", label: "Faster Hit Identification" },
    ],
    tags: ["Drug Discovery", "AI", "Computational Biology"],
    sections: [
      {
        title: "The Drug Discovery Pipeline — GCC-Powered Transformation",
        content: [
          "Modern pharma GCCs are no longer peripheral to drug discovery — they are increasingly the computational and analytical engine that powers it.",
        ],
        steps: [
          { num: "01", title: "Target Identification & Validation", description: "Multi-omics analysis, knowledge graph mining, and AI-powered literature synthesis to identify novel drug targets." },
          { num: "02", title: "Hit Identification & High-Throughput Screening", description: "Virtual screening of billion-compound libraries using molecular docking, pharmacophore modelling, and generative AI." },
          { num: "03", title: "Lead Optimisation", description: "ADMET prediction using ML models. Multi-parameter optimisation navigating efficacy, selectivity, and safety trade-offs." },
          { num: "04", title: "Preclinical Development & IND Package", description: "Computational toxicology, PBPK modelling, and regulatory-ready preclinical dossier preparation." },
        ],
        pullQuote: {
          text: "GCC computational biology teams that master AlphaFold 3, molecular dynamics simulation, and generative chemistry are not supporting drug discovery — they are doing drug discovery.",
          cite: "KR · Chapter 4 · R&D & Drug Discovery",
        },
      },
      {
        title: "Key Technology Platforms for GCC Drug Discovery",
        content: [],
        pillars: [
          { num: "Structural Biology", title: "AlphaFold 3 / RoseTTAFold", description: "Protein structure prediction enabling structure-based drug design at unprecedented scale.", colorVariant: "violet" },
          { num: "Generative Chemistry", title: "Insilico / Schrödinger", description: "De novo molecular generation using reinforcement learning and diffusion models.", colorVariant: "violet" },
          { num: "Multi-Omics Platform", title: "GATK / DESeq2 / STAR", description: "Genomics variant calling, RNA-seq differential expression, and integrated pathway analysis.", colorVariant: "violet" },
          { num: "ADMET Prediction", title: "QikProp / StarDrop", description: "In silico prediction of pharmacokinetic and safety properties for early compound elimination.", colorVariant: "violet" },
        ],
        insightBox: {
          icon: "🧬",
          label: "Strategic Insight",
          title: "Building the Computational Biology CoE",
          description: "The single highest-ROI investment a pharma GCC can make: 20–25 PhD/MSc bioinformaticians, 10 ML engineers, 5 medicinal chemistry data scientists in Year 1.",
        },
      },
    ],
  },
  {
    id: "ch5",
    num: "05",
    partLabel: "Part II · Value Chain",
    title: "Regulatory Affairs — Navigating a Complex Global Landscape",
    lead: "Building GCC regulatory intelligence capabilities that transform submissions from reactive documentation exercises into proactive competitive strategy.",
    metrics: [
      { value: "180+", label: "Global Regulatory Agencies" },
      { value: "eCTD", label: "Universal Submission Format" },
      { value: "ICH", label: "International Harmonisation" },
      { value: "CDSCO", label: "India Central Drugs Authority" },
    ],
    tags: ["Regulatory", "FDA", "EMA", "Submissions"],
    sections: [
      {
        title: "Major Regulatory Pathway Comparison",
        content: [],
        table: {
          headers: ["Agency", "Key Pathway", "Priority Programme", "Typical Review", "GCC Opportunity"],
          rows: [
            ["FDA (US)", "NDA / BLA", "Breakthrough Therapy, Fast Track", "10–12 months", "eCTD assembly, MedWatch"],
            ["EMA (EU)", "MAA Centralised", "PRIME, Conditional MA", "210 active days", "CHMP interactions, PSUR"],
            ["CDSCO (India)", "New Drug Approval", "Accelerated Approval", "12–18 months", "Full submission ownership"],
            ["PMDA (Japan)", "JNDA", "SAKIGAKE Designation", "9–12 months", "eCTD localisation"],
          ],
        },
        insightBox: {
          icon: "⚖️",
          label: "Regulatory Strategy",
          title: "The 'Regulatory-by-Design' Principle",
          description: "The most sophisticated pharma GCC teams shift from submission preparation to regulatory strategy co-creation — engaging from the earliest clinical design stages. This approach can accelerate approval timelines by 6–12 months.",
        },
      },
    ],
  },
  {
    id: "ch6",
    num: "06",
    partLabel: "Part II · Value Chain",
    title: "Clinical Trials — From Protocol Design to Database Lock",
    lead: "Transforming clinical operations through decentralised trials, AI-powered site selection, and GCC-anchored data science teams.",
    metrics: [
      { value: "$1–4B", label: "Cost per Phase III Trial" },
      { value: "DCT", label: "Decentralised Clinical Trials" },
      { value: "eTMF", label: "Electronic Trial Master File" },
      { value: "ICH E6(R3)", label: "GCP Guideline" },
    ],
    tags: ["Clinical Trials", "Biostatistics", "Data Management"],
    sections: [
      {
        title: "GCC Clinical Operations Capability Map",
        content: [
          "Clinical trials remain the most expensive, time-consuming, and operationally complex component of drug development. A large Phase III trial can span 200+ sites across 40 countries.",
        ],
        pillars: [
          { num: "Domain 01", title: "Clinical Data Management", description: "EDC system design, data cleaning, query management, SAE reconciliation, and database lock.", colorVariant: "teal" },
          { num: "Domain 02", title: "Biostatistics & Programming", description: "SAP development, CDISC-compliant datasets (SDTM, ADaM), TLF generation in SAS/R.", colorVariant: "teal" },
          { num: "Domain 03", title: "Medical Writing", description: "Clinical Study Reports, Investigator Brochures, Informed Consent, regulatory briefing documents.", colorVariant: "teal" },
          { num: "Domain 04", title: "Pharmacovigilance Ops", description: "Adverse event processing, ICSR narrative writing, PSUR/PBRER preparation, signal detection.", colorVariant: "teal" },
          { num: "Domain 05", title: "AI-Powered Site Selection", description: "ML models predicting site enrolment potential, patient recruitment analytics using EHR and RWE data.", colorVariant: "teal" },
          { num: "Domain 06", title: "Decentralised Trial Support", description: "ePRO/eCOA management, wearable device data integration, eConsent platform administration.", colorVariant: "teal" },
        ],
      },
    ],
  },
  {
    id: "ch7",
    num: "07",
    partLabel: "Part II · Value Chain",
    title: "Manufacturing Excellence & GMP Compliance",
    lead: "How pharma GCCs drive manufacturing intelligence, quality systems, and digital manufacturing capabilities.",
    metrics: [
      { value: "GMP", label: "Good Manufacturing Practice" },
      { value: "PAT", label: "Process Analytical Technology" },
      { value: "OEE", label: "Overall Equipment Effectiveness" },
      { value: "21 CFR", label: "Part 210/211 cGMP" },
    ],
    tags: ["Manufacturing", "GMP", "Industry 4.0"],
    sections: [
      {
        title: "Digital Manufacturing & Industry 4.0",
        content: [
          "The fourth industrial revolution is reshaping pharmaceutical manufacturing — and GCCs are positioned to be the digital intelligence layer.",
        ],
        pillars: [
          { num: "Technology 01", title: "Digital Twin Manufacturing", description: "Real-time virtual replicas enabling process optimisation and batch failure prediction.", colorVariant: "gold" },
          { num: "Technology 02", title: "Process Analytical Technology", description: "Real-time in-line analytical measurements linked to control systems for continuous verification.", colorVariant: "gold" },
          { num: "Technology 03", title: "AI-Powered Quality Systems", description: "NLP-based deviation management, ML-powered batch disposition, predictive CAPA scoring.", colorVariant: "gold" },
          { num: "Technology 04", title: "Serialisation & Track & Trace", description: "Global serialisation ensuring DSCSA, FMD, and emerging market compliance.", colorVariant: "gold" },
        ],
        insightBox: {
          icon: "🏭",
          label: "Manufacturing Intelligence",
          title: "The GCC as the Global Manufacturing Brain",
          description: "Leading pharma companies consolidate manufacturing analytics into GCCs — monitoring OEE, batch data, and quality KPIs across 20–30 global sites. 15–25% efficiency improvements and 30–40% cost reduction.",
        },
      },
    ],
  },
  {
    id: "ch8",
    num: "08",
    partLabel: "Part II · Value Chain",
    title: "Supply Chain Excellence & Cold Chain Management",
    lead: "Building resilient, AI-optimised pharmaceutical supply chains with end-to-end cold chain integrity from GCC intelligence hubs.",
    metrics: [
      { value: "GDP", label: "Good Distribution Practice" },
      { value: "2–8°C", label: "Cold Chain Range (Biologics)" },
      { value: "-70°C", label: "Ultra-Cold (mRNA)" },
      { value: "S&OP", label: "Sales & Operations Planning" },
    ],
    tags: ["Supply Chain", "Cold Chain", "Logistics"],
    sections: [
      {
        title: "Pharma Supply Chain Complexity",
        content: [
          "Pharmaceutical supply chains are among the most complex in any industry — governed by stringent regulatory requirements, temperature sensitivity, serialisation mandates, and the critical imperative of patient safety.",
          "GCCs are increasingly serving as the analytical and orchestration centre for global pharma supply chains — applying AI, digital twins, and advanced analytics to demand forecasting, inventory optimisation, and cold chain monitoring.",
        ],
        insightBox: {
          icon: "🌡️",
          label: "Cold Chain Intelligence",
          title: "AI-Powered Cold Chain Monitoring",
          description: "GCC-operated AI platforms continuously monitor temperature, humidity, and transit conditions across global cold chain networks, predicting excursions before they occur and recommending corrective actions in real-time.",
        },
      },
    ],
  },
  {
    id: "ch9",
    num: "09",
    partLabel: "Part III · Commercial",
    title: "Commercial Excellence & Market Access",
    lead: "Leveraging GCC analytics, AI, and digital capabilities to drive launch excellence, market access, and commercial performance across global markets.",
    metrics: [
      { value: "HCP", label: "Healthcare Professional Engagement" },
      { value: "NBA", label: "Next-Best-Action AI" },
      { value: "HEOR", label: "Health Economics & Outcomes" },
      { value: "KOL", label: "Key Opinion Leader Mapping" },
    ],
    tags: ["Commercial", "Market Access", "Launch Excellence"],
    sections: [
      {
        title: "GCC Commercial Capabilities",
        content: [
          "The commercial function in pharma is undergoing a fundamental transformation — from relationship-driven field sales to data-driven, omnichannel, precision engagement. GCCs are at the centre of this transformation.",
        ],
        pillars: [
          { num: "Capability 01", title: "Launch Analytics & Excellence", description: "Pre-launch forecasting, competitive intelligence, KOL mapping, and real-time launch performance tracking.", colorVariant: "teal" },
          { num: "Capability 02", title: "Next-Best-Action AI", description: "ML-powered HCP engagement optimisation across channels — email, rep visits, medical affairs, digital.", colorVariant: "teal" },
          { num: "Capability 03", title: "HEOR & Market Access", description: "Health economics modelling, payer analytics, value dossier development, and reimbursement strategy.", colorVariant: "teal" },
          { num: "Capability 04", title: "Omnichannel Orchestration", description: "Integrated digital marketing, medical education platforms, patient support portals, and CRM analytics.", colorVariant: "teal" },
        ],
      },
    ],
  },
  {
    id: "ch10",
    num: "10",
    partLabel: "Part III · Commercial",
    title: "Patient-Centricity & Real-World Evidence",
    lead: "Embedding the patient voice into every decision — from clinical design through market access — powered by real-world data and evidence generation.",
    metrics: [
      { value: "RWE", label: "Real-World Evidence" },
      { value: "PRO", label: "Patient-Reported Outcomes" },
      { value: "EHR", label: "Electronic Health Records" },
      { value: "PCOR", label: "Patient-Centred Outcomes" },
    ],
    tags: ["Patient-Centricity", "RWE", "Outcomes"],
    sections: [
      {
        title: "Building RWE Capabilities in the GCC",
        content: [
          "Real-world evidence is transforming pharma decision-making across the entire product lifecycle. GCCs are uniquely positioned to build world-class RWE capabilities given their data science talent, analytical infrastructure, and ability to process massive real-world datasets.",
        ],
        insightBox: {
          icon: "🏥",
          label: "Patient-Centricity",
          title: "The Patient Data Platform",
          description: "Leading pharma GCCs are building unified patient data platforms that integrate clinical trial data, real-world evidence, patient-reported outcomes, and social determinants of health to generate 360-degree patient insights.",
        },
      },
    ],
  },
  {
    id: "ch11",
    num: "11",
    partLabel: "Part III · Commercial",
    title: "Pharmacovigilance & Patient Safety",
    lead: "Building AI-augmented pharmacovigilance operations that protect patient safety while managing the exponential growth of safety data.",
    metrics: [
      { value: "ICSR", label: "Individual Case Safety Reports" },
      { value: "PSUR", label: "Periodic Safety Update Reports" },
      { value: "60%", label: "Case Processing Automation" },
      { value: "REMS", label: "Risk Evaluation Strategies" },
    ],
    tags: ["Pharmacovigilance", "Safety", "Signal Detection"],
    sections: [
      {
        title: "GCC Pharmacovigilance Operations",
        content: [
          "Pharmacovigilance — the science of detecting, assessing, and preventing adverse drug reactions — is one of the most critical and high-volume functions in pharma GCCs.",
        ],
        pillars: [
          { num: "PV 01", title: "Case Processing & Triage", description: "AI-powered ICSR intake, duplicate detection, medical coding (MedDRA), and narrative generation.", colorVariant: "coral" },
          { num: "PV 02", title: "Aggregate Reports", description: "PSUR/PBRER authoring with AI-assisted benefit-risk assessment and trend analysis.", colorVariant: "coral" },
          { num: "PV 03", title: "Signal Detection", description: "Quantitative signal detection using WHO VigiBase, FAERS, and EudraVigilance with ML-powered pattern recognition.", colorVariant: "coral" },
          { num: "PV 04", title: "Periodic Safety Reports", description: "DSUR and REMS assessment incorporating clinical, post-marketing, literature, and epidemiology data.", colorVariant: "coral" },
        ],
      },
    ],
  },
  {
    id: "ch12",
    num: "12",
    partLabel: "Part IV · Enterprise Enablers",
    title: "AI & Digital Transformation in Pharma",
    lead: "The comprehensive roadmap for deploying artificial intelligence across the pharma value chain — responsibly, at scale, and with measurable ROI.",
    metrics: [
      { value: "GenAI", label: "Generative AI Revolution" },
      { value: "$45B", label: "Pharma AI Market by 2030" },
      { value: "CLARITY", label: "KR AI Product Mgmt Framework" },
      { value: "Agentic", label: "AI Next Frontier" },
    ],
    tags: ["AI", "Digital Transformation", "CLARITY Framework"],
    sections: [
      {
        title: "AI Applications Across the Pharma Value Chain",
        content: [],
        table: {
          headers: ["Domain", "AI Application", "Technology", "Value Created"],
          rows: [
            ["Drug Discovery", "Target identification, molecule generation", "GNN, AlphaFold, Generative Chemistry", "10× faster hit identification"],
            ["Clinical Trials", "Site selection, patient matching", "ML, NLP, AI trial platforms", "30–40% enrolment acceleration"],
            ["Regulatory Affairs", "eCTD assembly, query prediction", "LLM, Veeva AI, regulatory NLP", "50% preparation time reduction"],
            ["Manufacturing", "Predictive quality, batch failure", "Time series ML, Computer Vision", "15–25% OEE improvement"],
            ["Pharmacovigilance", "Case processing, signal detection", "NLP, ML, Argus AI", "60% case processing automation"],
            ["Commercial", "HCP targeting, next-best-action", "ML, GenAI content, CRM AI", "20–35% sales effectiveness gain"],
          ],
        },
      },
      {
        title: "The CLARITY Framework for AI Product Management",
        content: [
          "Managing AI products in a GxP-regulated pharma environment requires a specialised framework that integrates product management discipline with regulatory compliance and ethical governance.",
        ],
        pillars: [
          { num: "C", title: "Customer & Clinical Alignment", description: "Ensure every AI product is anchored in a clinically validated user need.", colorVariant: "indigo" },
          { num: "L", title: "Lifecycle Governance", description: "End-to-end model governance aligned with FDA AI/ML SaMD guidance.", colorVariant: "indigo" },
          { num: "A", title: "Accuracy & Validation", description: "Rigorous model performance validation with drift detection in production.", colorVariant: "indigo" },
          { num: "R", title: "Regulatory Readiness", description: "21 CFR Part 11 compliance and CSV protocols built into architecture.", colorVariant: "indigo" },
          { num: "I", title: "Intelligence & Iteration", description: "Structured feedback loops ensuring continuous improvement with version control.", colorVariant: "indigo" },
          { num: "T", title: "Trust & Transparency", description: "Explainability frameworks enabling stakeholders to trust AI recommendations.", colorVariant: "indigo" },
          { num: "Y", title: "Yield & Value Attribution", description: "Rigorous benefit measurement attributing value to AI investments.", colorVariant: "indigo" },
        ],
      },
    ],
  },
  {
    id: "ch13",
    num: "13",
    partLabel: "Part IV · Enterprise Enablers",
    title: "Quality Engineering & the ACUITAS Framework",
    lead: "Embedding a culture of quality engineering across every function, guided by the seven-pillar ACUITAS framework.",
    metrics: [
      { value: "7", label: "ACUITAS Pillars" },
      { value: "GxP", label: "Quality & Compliance" },
      { value: "CAPA", label: "Corrective Action System" },
      { value: "QbD", label: "Quality by Design (ICH Q8)" },
    ],
    tags: ["Quality Engineering", "ACUITAS", "GxP"],
    sections: [
      {
        title: "The ACUITAS Framework — Seven Pillars",
        content: [
          "ACUITAS (AI-driven Continuous Understanding and Integrated Testing Architecture System) is Kalilur Rahman's proprietary quality engineering framework for AI-augmented, GxP-regulated environments.",
        ],
        pillars: [
          { num: "Pillar A", title: "AI-Driven Quality", description: "Deploying AI and ML to automate quality checks, predict defects, and optimise test coverage.", colorVariant: "teal" },
          { num: "Pillar C", title: "Continuous Testing", description: "Integrating automated testing into every stage of the software development lifecycle.", colorVariant: "teal" },
          { num: "Pillar U", title: "User-Centric Design", description: "Designing systems with the end user — scientist, clinician, regulator, or patient — at the centre.", colorVariant: "teal" },
          { num: "Pillar I", title: "Integrated Validation", description: "GAMP 5-aligned CSV methodology for all regulated systems.", colorVariant: "teal" },
          { num: "Pillar T", title: "Traceability", description: "End-to-end Requirements Traceability Matrix linking requirements to test results.", colorVariant: "teal" },
          { num: "Pillar A", title: "Adaptive Risk Management", description: "ICH Q9-aligned pharmaceutical quality risk management with dynamic updates.", colorVariant: "teal" },
          { num: "Pillar S", title: "System Intelligence", description: "Real-time quality dashboards aggregating KPIs across all GCC functions and sites.", colorVariant: "teal" },
        ],
        insightBox: {
          icon: "🏆",
          label: "ACUITAS in Practice",
          title: "The Quality Engineering Competitive Advantage",
          description: "40–60% reduction in post-production defects, 30–50% improvement in submission quality, 25–35% reduction in CSV effort. Quality engineering is the foundation of sustainable competitive advantage.",
        },
      },
    ],
  },
  {
    id: "ch14",
    num: "14",
    partLabel: "Part IV · Enterprise Enablers",
    title: "Technology Transformation & GCC Execution Roadmap",
    lead: "The integrated 36-month execution blueprint — sequencing capability development, technology investment, and talent evolution.",
    metrics: [
      { value: "36 Mo", label: "Full Transformation" },
      { value: "3-Phase", label: "Execution Architecture" },
      { value: "OKR", label: "Quarterly Accountability" },
      { value: "ROI", label: "Value Realisation" },
    ],
    tags: ["Roadmap", "Execution", "36-Month Plan"],
    sections: [
      {
        title: "The 36-Month Execution Roadmap",
        content: [],
        steps: [
          { num: "P1", title: "Phase 1 · Foundation (Months 1–12)", description: "Stabilise, standardise & build credibility. Cloud migration, data lake foundation, 2 CoEs operational. SLA attainment ≥98%, talent attrition ≤8%." },
          { num: "P2", title: "Phase 2 · Differentiation (Months 13–24)", description: "AI, CoEs & domain ownership. Enterprise AI/ML platform, GenAI pilots, first GCC-originated patent, 5 CoEs operational." },
          { num: "P3", title: "Phase 3 · Leadership (Months 25–36)", description: "Global innovation hub. Own drug discovery pipeline, lead regulatory strategy for Asia-Pacific, publish peer-reviewed research." },
        ],
        pullQuote: {
          text: "The pharma GCC that executes this roadmap with discipline will not just have transformed itself — it will have transformed the competitive position of its global parent organisation.",
          cite: "KR · Chapter 14",
        },
        insightBox: {
          icon: "🚀",
          label: "The Call to Action",
          title: "Begin the Transformation Today",
          description: "The organisations that begin this transformation journey today — with clarity of vision, rigour of execution, and commitment to quality — will define the pharma GCC leadership table for the next decade.",
        },
      },
    ],
  },
];

export const partColors: Record<string, string> = {
  "Part I · Foundations": "teal",
  "Part II · Value Chain": "violet",
  "Part III · Commercial": "gold",
  "Part IV · Enterprise Enablers": "indigo",
};

export const parts = [
  {
    label: "Part I · Foundations",
    icon: "🏛️",
    chapters: ["ch1", "ch2", "ch3"],
  },
  {
    label: "Part II · Value Chain",
    icon: "🔬",
    chapters: ["ch4", "ch5", "ch6", "ch7", "ch8"],
  },
  {
    label: "Part III · Commercial",
    icon: "📊",
    chapters: ["ch9", "ch10", "ch11"],
  },
  {
    label: "Part IV · Enterprise Enablers",
    icon: "⚡",
    chapters: ["ch12", "ch13", "ch14"],
  },
];

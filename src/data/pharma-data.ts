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

// SVG Diagram Constants
const SVG_FIVE_FORCES = `<svg viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:760px;display:block;margin:0 auto">
  <defs><marker id="ma" viewBox="0 0 8 8" refX="8" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L8,4 L0,8Z" fill="hsl(172,83%,32%)"/></marker></defs>
  <rect x="280" y="82" width="200" height="68" rx="12" fill="hsl(222,47%,9%)" stroke="hsl(172,83%,32%)" stroke-width="2"/>
  <text x="380" y="108" text-anchor="middle" fill="hsl(172,83%,32%)" font-size="14" font-weight="bold">🏭 Pharma Enterprise</text>
  <text x="380" y="130" text-anchor="middle" fill="hsl(215,20%,65%)" font-size="10">$1.48T Market · 6.1% CAGR</text>
  <rect x="10" y="10" width="170" height="62" rx="8" fill="hsl(222,47%,9%)" stroke="hsl(220,16%,22%)" stroke-width="1"/>
  <text x="95" y="34" text-anchor="middle" fill="hsl(172,83%,32%)" font-size="11" font-weight="700">🧬 AI &amp; GenAI Revolution</text>
  <text x="95" y="51" text-anchor="middle" fill="hsl(215,20%,65%)" font-size="10">AlphaFold · LLMs · Agentic AI</text>
  <line x1="180" y1="41" x2="281" y2="105" stroke="hsl(172,83%,32%)" stroke-width="1.2" marker-end="url(#ma)" opacity=".75"/>
  <rect x="580" y="10" width="170" height="62" rx="8" fill="hsl(222,47%,9%)" stroke="hsl(220,16%,22%)" stroke-width="1"/>
  <text x="665" y="34" text-anchor="middle" fill="hsl(172,83%,32%)" font-size="11" font-weight="700">⚖️ Regulatory Evolution</text>
  <text x="665" y="51" text-anchor="middle" fill="hsl(215,20%,65%)" font-size="10">FDA · EMA · ICH E6(R3)</text>
  <line x1="580" y1="41" x2="477" y2="105" stroke="hsl(172,83%,32%)" stroke-width="1.2" marker-end="url(#ma)" opacity=".75"/>
  <rect x="10" y="158" width="170" height="62" rx="8" fill="hsl(222,47%,9%)" stroke="hsl(220,16%,22%)" stroke-width="1"/>
  <text x="95" y="182" text-anchor="middle" fill="hsl(172,83%,32%)" font-size="11" font-weight="700">👥 Patient Centricity</text>
  <text x="95" y="199" text-anchor="middle" fill="hsl(215,20%,65%)" font-size="10">DCT · RWE · ePRO · DTx</text>
  <line x1="180" y1="189" x2="281" y2="132" stroke="hsl(172,83%,32%)" stroke-width="1.2" marker-end="url(#ma)" opacity=".75"/>
  <rect x="580" y="158" width="170" height="62" rx="8" fill="hsl(222,47%,9%)" stroke="hsl(220,16%,22%)" stroke-width="1"/>
  <text x="665" y="182" text-anchor="middle" fill="hsl(172,83%,32%)" font-size="11" font-weight="700">🔗 Supply Resilience</text>
  <text x="665" y="199" text-anchor="middle" fill="hsl(215,20%,65%)" font-size="10">Serialisation · IoT · AI SCM</text>
  <line x1="580" y1="189" x2="477" y2="132" stroke="hsl(172,83%,32%)" stroke-width="1.2" marker-end="url(#ma)" opacity=".75"/>
  <rect x="305" y="182" width="150" height="44" rx="8" fill="hsl(222,47%,9%)" stroke="hsl(220,16%,22%)" stroke-width="1"/>
  <text x="380" y="200" text-anchor="middle" fill="hsl(172,83%,32%)" font-size="11" font-weight="700">🎓 GCC Talent &amp; India</text>
  <text x="380" y="217" text-anchor="middle" fill="hsl(215,20%,65%)" font-size="9">1,600+ GCCs · Digital-native</text>
  <line x1="380" y1="182" x2="380" y2="150" stroke="hsl(172,83%,32%)" stroke-width="1.2" marker-end="url(#ma)" opacity=".75"/>
</svg>`;

const SVG_VALUE_CHAIN = `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:600px;display:block;margin:0 auto">
  <text x="300" y="25" text-anchor="middle" font-size="15" font-weight="bold" fill="hsl(172,83%,32%)">Pharmaceutical Digital Value Chain</text>
  <text x="300" y="44" text-anchor="middle" font-size="10.5" fill="hsl(215,20%,65%)">End-to-end digital thread connecting every function</text>
  <polygon points="10,75 88,75 98,100 88,125 10,125 20,100" fill="hsl(263,70%,58%)" opacity="0.9"/>
  <text x="54" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">R&amp;D</text>
  <text x="54" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">Discovery</text>
  <polygon points="93,75 171,75 181,100 171,125 93,125 103,100" fill="hsl(172,83%,32%)" opacity="0.9"/>
  <text x="137" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">Clinical</text>
  <text x="137" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">Trials</text>
  <polygon points="176,75 254,75 264,100 254,125 176,125 186,100" fill="hsl(244,58%,42%)" opacity="0.9"/>
  <text x="220" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">Regulatory</text>
  <text x="220" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">&amp; CMC</text>
  <polygon points="259,75 337,75 347,100 337,125 259,125 269,100" fill="hsl(215,20%,65%)" opacity="0.9"/>
  <text x="303" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">Mfg</text>
  <text x="303" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">&amp; SC</text>
  <polygon points="342,75 420,75 430,100 420,125 342,125 352,100" fill="hsl(38,90%,43%)" opacity="0.9"/>
  <text x="386" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="hsl(222,47%,6%)">Quality</text>
  <text x="386" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="hsl(222,47%,6%)">Control</text>
  <polygon points="425,75 503,75 513,100 503,125 425,125 435,100" fill="hsl(346,84%,50%)" opacity="0.9"/>
  <text x="469" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">Commercial</text>
  <text x="469" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">&amp; Sales</text>
  <polygon points="508,75 586,75 596,100 586,125 508,125 518,100" fill="hsl(263,70%,58%)" opacity="0.9"/>
  <text x="552" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">Patient</text>
  <text x="552" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="#FFFFFF">Engagement</text>
  <line x1="10" y1="145" x2="590" y2="145" stroke="hsl(172,83%,32%)" stroke-width="3"/>
  <text x="300" y="158" text-anchor="middle" font-size="10" fill="hsl(172,83%,32%)" font-weight="bold">UNIFIED DIGITAL THREAD · DATA FLOWS ACROSS ALL FUNCTIONS</text>
</svg>`;

const SVG_DRUG_PIPELINE = `<svg viewBox="0 0 720 110" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:720px;display:block;margin:0 auto">
  <text x="360" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="hsl(172,83%,32%)">Drug Discovery &amp; Development Pipeline</text>
  <rect x="10" y="35" width="100" height="40" rx="6" fill="hsl(263,70%,58%)" opacity="0.9"/>
  <text x="60" y="58" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFF">Target ID</text>
  <text x="115" y="58" fill="hsl(215,20%,65%)" font-size="14">→</text>
  <rect x="125" y="35" width="100" height="40" rx="6" fill="hsl(172,83%,32%)" opacity="0.9"/>
  <text x="175" y="58" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFF">Hit Finding</text>
  <text x="230" y="58" fill="hsl(215,20%,65%)" font-size="14">→</text>
  <rect x="240" y="35" width="100" height="40" rx="6" fill="hsl(244,58%,42%)" opacity="0.9"/>
  <text x="290" y="58" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFF">Lead Opt.</text>
  <text x="345" y="58" fill="hsl(215,20%,65%)" font-size="14">→</text>
  <rect x="355" y="35" width="100" height="40" rx="6" fill="hsl(38,90%,43%)" opacity="0.9"/>
  <text x="405" y="58" text-anchor="middle" font-size="10" font-weight="bold" fill="hsl(222,47%,6%)">Preclinical</text>
  <text x="460" y="58" fill="hsl(215,20%,65%)" font-size="14">→</text>
  <rect x="470" y="35" width="100" height="40" rx="6" fill="hsl(346,84%,50%)" opacity="0.9"/>
  <text x="520" y="58" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFF">Clinical I-III</text>
  <text x="575" y="58" fill="hsl(215,20%,65%)" font-size="14">→</text>
  <rect x="585" y="35" width="120" height="40" rx="6" fill="hsl(172,83%,32%)" opacity="0.9"/>
  <text x="645" y="58" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFF">Approval &amp; Launch</text>
  <text x="60" y="90" text-anchor="middle" font-size="8" fill="hsl(215,20%,65%)">AI/Knowledge Graphs</text>
  <text x="175" y="90" text-anchor="middle" font-size="8" fill="hsl(215,20%,65%)">Virtual Screening</text>
  <text x="290" y="90" text-anchor="middle" font-size="8" fill="hsl(215,20%,65%)">ADMET ML</text>
  <text x="405" y="90" text-anchor="middle" font-size="8" fill="hsl(215,20%,65%)">Comp. Tox</text>
  <text x="520" y="90" text-anchor="middle" font-size="8" fill="hsl(215,20%,65%)">DCT/AI Analytics</text>
  <text x="645" y="90" text-anchor="middle" font-size="8" fill="hsl(215,20%,65%)">eCTD/RIM</text>
</svg>`;

const SVG_INDIA_ECOSYSTEM = `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:600px;display:block;margin:0 auto">
  <text x="300" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="hsl(172,83%,32%)">India Pharma Digital Ecosystem</text>
  <text x="300" y="38" text-anchor="middle" font-size="10" fill="hsl(215,20%,65%)">Policy · Manufacturing · GCC Talent · Digital Health</text>
  <line x1="100" y1="80" x2="300" y2="60" stroke="hsl(172,83%,32%)" stroke-width="1" opacity="0.4"/>
  <line x1="300" y1="60" x2="500" y2="80" stroke="hsl(172,83%,32%)" stroke-width="1" opacity="0.4"/>
  <line x1="500" y1="80" x2="120" y2="200" stroke="hsl(172,83%,32%)" stroke-width="1" opacity="0.4"/>
  <line x1="120" y1="200" x2="300" y2="200" stroke="hsl(172,83%,32%)" stroke-width="1" opacity="0.4"/>
  <line x1="300" y1="200" x2="480" y2="200" stroke="hsl(172,83%,32%)" stroke-width="1" opacity="0.4"/>
  <line x1="480" y1="200" x2="200" y2="310" stroke="hsl(172,83%,32%)" stroke-width="1" opacity="0.4"/>
  <line x1="200" y1="310" x2="400" y2="310" stroke="hsl(172,83%,32%)" stroke-width="1" opacity="0.4"/>
  <circle cx="100" cy="80" r="38" fill="hsl(172,83%,32%)" opacity="0.92"/>
  <text x="100" y="75" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">ABDM</text>
  <text x="100" y="89" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">Health IDs</text>
  <circle cx="300" cy="60" r="38" fill="hsl(244,58%,42%)" opacity="0.92"/>
  <text x="300" y="55" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">SUGAM</text>
  <text x="300" y="69" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">Portal</text>
  <circle cx="500" cy="80" r="38" fill="hsl(38,90%,43%)" opacity="0.92"/>
  <text x="500" y="75" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">PLI</text>
  <text x="500" y="89" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">Scheme</text>
  <circle cx="120" cy="200" r="38" fill="hsl(263,70%,58%)" opacity="0.92"/>
  <text x="120" y="195" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">GCC</text>
  <text x="120" y="209" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">Centers</text>
  <circle cx="300" cy="200" r="38" fill="hsl(215,20%,65%)" opacity="0.92"/>
  <text x="300" y="195" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">Generic</text>
  <text x="300" y="209" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">Mfg</text>
  <circle cx="480" cy="200" r="38" fill="hsl(172,83%,32%)" opacity="0.92"/>
  <text x="480" y="195" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">CRO/CDMO</text>
  <text x="480" y="209" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">Ecosystem</text>
  <circle cx="200" cy="310" r="38" fill="hsl(244,58%,42%)" opacity="0.92"/>
  <text x="200" y="305" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">NDHE</text>
  <text x="200" y="319" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">Infra</text>
  <circle cx="400" cy="310" r="38" fill="hsl(346,84%,50%)" opacity="0.92"/>
  <text x="400" y="305" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">IPA/FICCI</text>
  <text x="400" y="319" text-anchor="middle" font-size="10" font-weight="bold" fill="#FFFFFF">Policy</text>
</svg>`;

export const chapters: Chapter[] = [
  {
    id: "ch1",
    num: "01",
    partLabel: "Part I · Foundations",
    title: "The Global Pharma Landscape & the Digital Imperative",
    lead: "Understanding the forces reshaping global pharma — and why Global Capability Centres are no longer optional.",
    metrics: [
      { value: "$1.48T", label: "Global Pharma Market 2025" },
      { value: "6.1%", label: "CAGR Through 2030" },
      { value: "12–15", label: "Years Drug-to-Market" },
      { value: "$2.6B", label: "Avg. Drug Dev. Cost" },
    ],
    tags: ["Market Analysis", "GCC Strategy", "Pharma Landscape", "Digital Imperative"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "The pharmaceutical industry stands at an inflection point unlike any in its history. The convergence of artificial intelligence, cloud computing, real-world data, and advanced manufacturing technologies is compressing drug development timelines, personalising treatment at scale, and fundamentally reshaping the competitive landscape.",
          "Companies that navigate this transformation successfully will discover medicines faster, run trials more efficiently, manufacture with greater precision, and engage patients more meaningfully. Those that do not will find themselves outpaced — not just by other large pharma companies, but by a new class of AI-native biotech firms and technology platforms entering the value chain.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "AI-assisted drug discovery is already reducing target identification timelines from years to months. Decentralised clinical trials have cut patient recruitment windows by 30–50%. Smart manufacturing implementations are driving 15–20% OEE improvements. These are outcomes from Pfizer, Novartis, Roche, and emerging players like Insilico Medicine.",
        },
      },
      {
        title: "Why Now: Industry Forces Driving Transformation",
        content: [
          "The global pharmaceutical industry is experiencing its most consequential transformation since the biotechnology revolution of the 1980s. Converging forces — artificial intelligence, post-pandemic supply chain disruptions, unprecedented regulatory complexity, and a fundamental rethinking of the drug discovery paradigm — are rewriting every assumption.",
          "The emergence of GLP-1 therapeutics has demonstrated that a single breakthrough molecule can reshape trillion-dollar disease categories overnight. mRNA platform technologies have unlocked programmable medicine at speed never before imagined.",
          "<strong>The productivity crisis in drug discovery.</strong> The industry has been aware of Eroom's Law — the number of new drug approvals per billion dollars of R&D spending has roughly halved every nine years since the 1950s. Despite rising R&D investment (global total exceeded $250 billion in 2023), attrition rates remain stubbornly high: approximately 90% of compounds that enter Phase I trials fail to reach approval.",
          "<strong>The explosion of biomedical data.</strong> Genomic sequencing costs have fallen by a factor of more than a million since the Human Genome Project — from approximately $3 billion in 2001 to under $300 today. Machine learning systems can operate at this scale; human scientists cannot.",
          "<strong>The COVID-19 forcing function.</strong> The pandemic compressed a decade of digital adoption into eighteen months. Clinical trials adopted remote monitoring and decentralised designs out of necessity and discovered that they worked better in many respects.",
          "<strong>The platform economy entering life sciences.</strong> Amazon, Microsoft, Google, and specialised life sciences platform providers are moving into the pharmaceutical value chain with capabilities in cloud infrastructure, AI, consumer data, and logistics.",
        ],
        diagram: {
          title: "Five Forces Reshaping Pharma",
          svgContent: SVG_FIVE_FORCES,
        },
        pullQuote: {
          text: "The pharmaceutical organisations that will lead the next decade are not those with the largest R&D budgets, but those with the most intelligent, interconnected, and adaptive operating models.",
          cite: "KR · Pharma GCC Transformation Handbook",
        },
      },
      {
        title: "The $2 Trillion Opportunity",
        content: [
          "McKinsey Global Institute has estimated that advanced analytics and AI could create $100 billion in value annually for the US healthcare system alone. Across the global pharmaceutical value chain, the opportunity is larger still.",
          "If AI could cut average development timelines by 20–30% and improve Phase II success rates by even 10 percentage points, the value creation at a large pharmaceutical company would be measured in tens of billions of dollars of net present value.",
        ],
        diagram: {
          title: "Pharmaceutical Digital Value Chain",
          svgContent: SVG_VALUE_CHAIN,
        },
      },
      {
        title: "Why GCCs Are Now Central to Pharma Strategy",
        content: [
          "Global Capability Centres have evolved dramatically from their origins as cost-arbitrage back-offices. A modern GCC is a strategic nerve centre: a co-located hub of deep scientific, digital, and operational expertise.",
          "India alone hosts over 1,600 GCCs employing 1.7 million professionals, and pharma GCCs represent one of the fastest-growing segments.",
        ],
        callout: {
          type: "spotlight",
          label: "🌍 Regional Spotlight: India's Digital Pharma Moment",
          content: "India's pharmaceutical industry is undergoing a digital transformation that is structurally different from Western multinationals. India accounts for ~20% of global generic medicine exports by volume and over 60% of US FDA-approved manufacturing facilities outside the US. The ABDM (Ayushman Bharat Digital Mission) is creating the world's largest unified health ID system with 600M+ accounts. Companies like Sun Pharma and Dr. Reddy's are demonstrating that Indian generics companies can be fast followers — and in some cases leaders — in pharma digital transformation.",
        },
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
      {
        title: "The Cost of Inaction",
        content: [
          "A pharma company without a unified clinical data platform will take 18–24 months longer to compile a regulatory submission package. A manufacturer without real-time process analytics has deviation detection latency 4–6× higher than a PAT-enabled facility. A commercial organization without AI-driven targeting generates field force efficiency scores 30–40% below best-in-class.",
          "These capability gaps translate directly into slower time-to-market, higher cost of goods, weaker payer negotiations, and ultimately, lower shareholder value. In a post-patent-cliff environment where every margin percentage matters, the cost of digital inaction is existential for mid-tier pharma.",
        ],
      },
      {
        title: "What 'Digital Transformation' Actually Means in Pharma",
        content: [
          "Digital transformation in pharma is not primarily about technology — it is about fundamentally redesigning business processes, decision-making architectures, and operating models enabled by technology. Organizations that deploy technology onto broken processes do not transform; they automate dysfunction.",
        ],
        bulletPoints: [
          "<strong>Data as a Strategic Asset</strong> — Building infrastructure, governance, and culture to treat data as a company-wide resource",
          "<strong>AI-Powered Intelligence</strong> — Embedding ML and advanced analytics into decisions at every level",
          "<strong>Connected Operations</strong> — Integrating previously siloed functions into real-time decision loops",
          "<strong>Digital Patient & Customer Centricity</strong> — Redesigning interactions using digital channels, RWD, and personalised engagement",
        ],
      },
    ],
  },
  {
    id: "ch2",
    num: "02",
    partLabel: "Part I · Foundations",
    title: "Strategic Vision & Digital Maturity Model (PDMF)",
    lead: "Designing a transformation strategy that is simultaneously ambitious enough to matter and grounded enough to execute.",
    metrics: [
      { value: "3×", label: "Value Multiplier of Strategic GCCs" },
      { value: "18 Mo", label: "Avg. Transformation Runway" },
      { value: "5-Star", label: "NASSCOM GCC Maturity Scale" },
      { value: "70%", label: "Transformation Initiatives Fail" },
    ],
    tags: ["Strategy", "Blueprint", "Three-Horizon", "PDMF"],
    sections: [
      {
        title: "Defining True North for a Pharma GCC",
        content: [
          "Every successful GCC transformation begins with a clearly articulated True North — a statement of strategic ambition that goes beyond cost-efficiency. For pharma GCCs, True North typically takes one of three forms: the Deep Science Hub, the Digital Acceleration Engine, or the Regulatory Intelligence Factory.",
          "A clearly articulated digital transformation vision statement, endorsed by the global CEO and board, is the single most important predictor of transformation success. Without it, digital transformation becomes a technology project rather than a business transformation — and technology projects that lack strategic sponsorship have a failure rate that approaches certainty.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "Digital transformation in pharma is not a technology project — it is a strategic repositioning of how the enterprise discovers, develops, manufactures, and commercialises medicines. A structured digital maturity framework (PDMF) enables leadership to benchmark current capabilities, set measurable targets, and allocate investment in a way that produces compounding returns.",
        },
      },
      {
        title: "The Three-Horizon Pharma GCC Framework",
        content: [],
        steps: [
          { num: "H1", title: "Horizon 1 · Stabilise & Standardise (0–12 months)", description: "Audit existing capabilities. Standardise core processes using LEAN and Six Sigma principles. Establish baseline quality metrics and SLA frameworks. Cloud migration, data lake foundation." },
          { num: "H2", title: "Horizon 2 · Differentiate & Digitise (12–36 months)", description: "Deploy AI-assisted tools across clinical operations, regulatory intelligence, and pharmacovigilance. Build CoE structures for high-value domains. Enterprise AI/ML platform, GenAI pilots." },
          { num: "H3", title: "Horizon 3 · Lead & Innovate (36+ months)", description: "Operate as a co-equal innovation partner to global HQ. Own full drug discovery pipelines. Lead global regulatory strategy for emerging markets. Publish peer-reviewed research." },
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
      {
        title: "Pharma Digital Maturity Framework (PDMF)",
        content: [
          "The PDMF provides a structured, repeatable method for pharmaceutical organisations to assess their digital maturity across seven domains: Data & Analytics, AI/ML, Cloud & Infrastructure, Quality & Compliance, Commercial Digital, Manufacturing Digital, and Talent & Culture.",
        ],
        table: {
          headers: ["Level", "Name", "Characteristics", "Example Indicators"],
          rows: [
            ["1", "Foundational", "Siloed systems, manual processes, limited data integration", "Paper-based QMS, no unified data warehouse"],
            ["2", "Developing", "Cloud migration begun, initial analytics, digital projects in flight", "Pilot AI use cases, cloud ERP migration underway"],
            ["3", "Defined", "Enterprise data platform, scaled analytics, digital CoEs", "Unified data lake, ≥3 AI models in production"],
            ["4", "Advanced", "AI embedded in operations, automated quality, predictive capabilities", "Automated batch release, predictive PV, NBA engine"],
            ["5", "Leading", "AI-native, self-optimising, digital innovation exported globally", "Self-driving labs, autonomous manufacturing, AI-designed drugs"],
          ],
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
    tags: ["Governance", "Operating Model", "CoE", "Change Management"],
    sections: [
      {
        title: "The Four-Layer Governance Architecture",
        content: [
          "A mature pharma GCC governance model operates across four layers. The most effective structures are those that provide clear decision rights with minimal approval layers — typically no more than two approvals for any operational decision.",
          "Digital transformation governance in pharma has a fundamental characteristic that distinguishes it from digital governance in other industries: the regulatory environment. Every digital system that touches a GxP process — manufacturing, quality, clinical data, regulatory submissions, pharmacovigilance — must be validated to regulatory standards.",
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
      {
        title: "Centre of Excellence (CoE) Model",
        content: [
          "The CoE model has emerged as the dominant organisational pattern for building and scaling digital capabilities in pharmaceutical GCCs. A well-designed CoE provides three things: deep domain expertise concentrated in a dedicated team, standardised methods and platforms that enable reuse, and a career pathway for specialists.",
        ],
        bulletPoints: [
          "<strong>AI/ML CoE</strong> — Model development, MLOps, AI governance, and ethical AI review",
          "<strong>Data Engineering CoE</strong> — Data platform, pipelines, data quality, and master data management",
          "<strong>Quality Engineering CoE</strong> — Test automation, CSV, GAMP 5, and continuous testing",
          "<strong>Cloud Platform CoE</strong> — Infrastructure, DevSecOps, containerisation, and platform operations",
          "<strong>RPA & Intelligent Automation CoE</strong> — Process automation, document AI, and workflow orchestration",
        ],
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
    tags: ["Drug Discovery", "AI", "Computational Biology", "AlphaFold"],
    sections: [
      {
        title: "Executive Summary",
        content: [],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "Drug discovery is the function where AI is having its most transformative impact — and it is a domain where pharma GCCs can deliver outsized value. The combination of computational biology expertise, data engineering capability, and lower-cost PhD talent creates a structural advantage for GCC-based R&D intelligence teams.",
        },
      },
      {
        title: "The Drug Discovery Pipeline — GCC-Powered Transformation",
        content: [
          "Modern pharma GCCs are no longer peripheral to drug discovery — they are increasingly the computational and analytical engine that powers it.",
          "The traditional process of target identification has historically relied on hypothesis-driven research conducted over years. AI is restructuring this process by using ML models trained on large repositories of genomic data, protein structure databases, published clinical outcomes, and EHRs to identify associations that are not apparent to human researchers.",
        ],
        diagram: {
          title: "Drug Discovery & Development Pipeline",
          svgContent: SVG_DRUG_PIPELINE,
        },
        steps: [
          { num: "01", title: "Target Identification & Validation", description: "Multi-omics analysis, knowledge graph mining, AI-powered literature synthesis. AlphaFold's database covers 200M+ protein structures for structure-based drug design at unprecedented scale." },
          { num: "02", title: "Hit Identification & High-Throughput Screening", description: "Virtual screening of billion-compound libraries using molecular docking, pharmacophore modelling, and generative AI. DNA-encoded chemical libraries (DELs) can screen billions of compounds simultaneously." },
          { num: "03", title: "Lead Optimisation", description: "ADMET prediction using ML models. Multi-parameter lead optimisation (MPLO) simultaneously targeting potency, selectivity, and ADMET properties from the outset." },
          { num: "04", title: "Preclinical Development & IND Package", description: "Computational toxicology, PBPK modelling, and regulatory-ready preclinical dossier preparation. AI models predict hERG cardiac toxicity liability, CYP enzyme inhibition." },
        ],
        pullQuote: {
          text: "GCC computational biology teams that master AlphaFold 3, molecular dynamics simulation, and generative chemistry are not supporting drug discovery — they are doing drug discovery.",
          cite: "KR · Chapter 4 · R&D & Drug Discovery",
        },
      },
      {
        title: "Generative AI for Molecular Design",
        content: [
          "Generative models learn statistical patterns in large datasets of known molecules — chemical structure, properties, binding affinities, assay and clinical outcomes — then generate novel molecular structures with desired properties. Unlike traditional HTS, generative models can propose entirely new chemical entities designed de novo.",
          "The milestone that attracted widespread attention was Insilico Medicine's disclosure in 2023 that it advanced an AI-designed TNIK inhibitor from target identification to Phase II clinical trial in approximately four years and at a fraction of the cost of conventional programmes.",
        ],
        callout: {
          type: "case-study",
          label: "📋 Case Study: Insilico Medicine — First AI-Discovered Clinical Candidate",
          content: "Insilico Medicine progressed INS018_055, a novel TNIK inhibitor for idiopathic pulmonary fibrosis, into Phase II trials. The drug was identified entirely through AI-driven processes — from target ID through generative molecular design — in ~18 months, vs. an industry average of 4–5 years. This demonstrates AI-driven discovery pipelines can produce viable clinical candidates.",
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
          { num: "Self-Driving Labs", title: "Emerald Cloud / Ada", description: "Closed-loop AI-robot systems that design, execute, and learn from experiments autonomously.", colorVariant: "violet" },
        ],
        insightBox: {
          icon: "🧬",
          label: "Strategic Insight",
          title: "Building the Computational Biology CoE",
          description: "The single highest-ROI investment a pharma GCC can make: 20–25 PhD/MSc bioinformaticians, 10 ML engineers, 5 medicinal chemistry data scientists in Year 1.",
        },
      },
      {
        title: "Regional Spotlight: R&D Digital Transformation",
        content: [],
        callout: {
          type: "spotlight",
          label: "🌍 Regional Spotlight: R&D by Geography",
          content: "In the <strong>US</strong>, R&D digital transformation is driven by large multinationals (Pfizer, Merck, AstraZeneca) investing hundreds of millions, and AI-first biotechs (Recursion, Insilico, Exscientia, Schrödinger). In the <strong>EU</strong>, Roche/Genentech has arguably the most mature pharmaceutical AI capability in the world. In <strong>India</strong>, organisations like Syngene, Lambda Therapeutics, and R&D divisions of Sun Pharma and Dr. Reddy's are investing in computational chemistry platforms and ELN systems.",
        },
      },
    ],
  },
  {
    id: "ch5",
    num: "05",
    partLabel: "Part II · Value Chain",
    title: "Clinical Trials — From Protocol Design to Database Lock",
    lead: "Transforming clinical operations through decentralised trials, AI-powered site selection, and GCC-anchored data science teams.",
    metrics: [
      { value: "$1–4B", label: "Cost per Phase III Trial" },
      { value: "DCT", label: "Decentralised Clinical Trials" },
      { value: "eTMF", label: "Electronic Trial Master File" },
      { value: "ICH E6(R3)", label: "GCP Guideline" },
    ],
    tags: ["Clinical Trials", "Biostatistics", "Data Management", "DCT"],
    sections: [
      {
        title: "Executive Summary",
        content: [],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "Clinical trials are the most expensive, time-consuming, and operationally complex component of drug development. A Phase III trial can span 200+ sites across 40 countries. The digital transformation of clinical trials — from AI-powered site selection through decentralised trial designs to automated data management — is creating measurable improvements in speed, quality, and patient experience.",
        },
      },
      {
        title: "GCC Clinical Operations Capability Map",
        content: [
          "Clinical trials remain the most expensive, time-consuming, and operationally complex component of drug development. A large Phase III trial can span 200+ sites across 40 countries. Over 60% of new US trial starts incorporate at least one decentralised element as of 2024.",
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
      {
        title: "Decentralised Clinical Trials (DCT)",
        content: [
          "DCTs represent one of the most significant structural shifts in clinical trial methodology. By moving trial activities from investigator sites to the patient's home or community, DCTs reduce patient burden, expand the eligible patient population, improve retention, and generate continuous digital health data.",
          "The technology infrastructure for DCTs encompasses five interconnected layers: ePRO/eCOA platforms for patient-reported outcomes, connected wearable devices for continuous physiological monitoring, eConsent platforms for remote informed consent, central lab kits and home nursing services, and telemedicine/virtual visit platforms.",
        ],
      },
    ],
  },
  {
    id: "ch6",
    num: "06",
    partLabel: "Part II · Value Chain",
    title: "Manufacturing Excellence & Smart Supply Chain",
    lead: "How pharma GCCs drive manufacturing intelligence, Industry 4.0 capabilities, and end-to-end supply chain orchestration.",
    metrics: [
      { value: "GMP", label: "Good Manufacturing Practice" },
      { value: "PAT", label: "Process Analytical Technology" },
      { value: "OEE", label: "Overall Equipment Effectiveness" },
      { value: "-70°C", label: "Ultra-Cold (mRNA)" },
    ],
    tags: ["Manufacturing", "GMP", "Industry 4.0", "Supply Chain", "Cold Chain"],
    sections: [
      {
        title: "Digital Manufacturing & Industry 4.0",
        content: [
          "The fourth industrial revolution is reshaping pharmaceutical manufacturing — and GCCs are positioned to be the digital intelligence layer. Companies with mature digital manufacturing platforms demonstrate up to 35% faster batch release cycles and 25% lower deviation rates.",
          "Pharmaceutical supply chains are among the most complex in any industry — governed by stringent regulatory requirements, temperature sensitivity, serialisation mandates, and the critical imperative of patient safety.",
        ],
        pillars: [
          { num: "Technology 01", title: "Digital Twin Manufacturing", description: "Real-time virtual replicas enabling process optimisation and batch failure prediction.", colorVariant: "gold" },
          { num: "Technology 02", title: "Process Analytical Technology", description: "Real-time in-line analytical measurements linked to control systems for continuous verification.", colorVariant: "gold" },
          { num: "Technology 03", title: "AI-Powered Quality Systems", description: "NLP-based deviation management, ML-powered batch disposition, predictive CAPA scoring.", colorVariant: "gold" },
          { num: "Technology 04", title: "Serialisation & Track & Trace", description: "Global serialisation ensuring DSCSA, FMD, and emerging market compliance.", colorVariant: "gold" },
          { num: "Technology 05", title: "Cold Chain AI Monitoring", description: "AI platforms continuously monitor temperature, humidity, transit conditions across global cold chain networks, predicting excursions before they occur.", colorVariant: "gold" },
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
    id: "ch7",
    num: "07",
    partLabel: "Part II · Value Chain",
    title: "Quality Management & Compliance",
    lead: "Building AI-augmented quality management systems that ensure GxP compliance while reducing manual overhead and accelerating batch release.",
    metrics: [
      { value: "eQMS", label: "Electronic Quality Mgmt" },
      { value: "GAMP 5", label: "Validation Framework" },
      { value: "21 CFR", label: "Part 11 Compliance" },
      { value: "CAPA", label: "Corrective Action System" },
    ],
    tags: ["Quality", "GxP", "CAPA", "Validation"],
    sections: [
      {
        title: "Digital Quality Management",
        content: [
          "Quality management in pharmaceutical manufacturing is undergoing a fundamental shift from reactive, paper-based compliance systems to proactive, AI-augmented digital quality platforms. The eQMS (electronic Quality Management System) is the backbone of this transformation.",
          "An effective digital QMS provides automated deviation management, real-time quality metrics dashboards, AI-powered CAPA root cause analysis, and predictive quality scoring that identifies potential issues before they result in batch failures or regulatory observations.",
        ],
        pillars: [
          { num: "QMS 01", title: "Deviation Management", description: "AI-powered deviation triage, automated classification, root cause analysis using NLP on historical deviation data.", colorVariant: "coral" },
          { num: "QMS 02", title: "CAPA Management", description: "Predictive CAPA scoring, automated effectiveness check scheduling, trend analysis across global sites.", colorVariant: "coral" },
          { num: "QMS 03", title: "Change Control", description: "Digital change control with impact assessment automation, cross-site change harmonisation.", colorVariant: "coral" },
          { num: "QMS 04", title: "Document Management", description: "SOP lifecycle management, AI-powered document review, version control with regulatory audit trail.", colorVariant: "coral" },
        ],
      },
    ],
  },
  {
    id: "ch8",
    num: "08",
    partLabel: "Part II · Value Chain",
    title: "Regulatory Affairs & Compliance",
    lead: "Building GCC regulatory intelligence capabilities that transform submissions from reactive documentation to proactive competitive strategy.",
    metrics: [
      { value: "180+", label: "Global Regulatory Agencies" },
      { value: "eCTD", label: "Universal Submission Format" },
      { value: "ICH", label: "International Harmonisation" },
      { value: "CDSCO", label: "India Central Drugs Authority" },
    ],
    tags: ["Regulatory", "FDA", "EMA", "Submissions", "eCTD"],
    sections: [
      {
        title: "Major Regulatory Pathway Comparison",
        content: [
          "Regulatory affairs is a domain where GCC value creation is immediate, measurable, and strategically significant. The complexity of managing submissions across 180+ global regulatory agencies creates enormous demand for skilled regulatory professionals — and India's regulatory affairs talent pool is among the deepest globally.",
        ],
        table: {
          headers: ["Agency", "Key Pathway", "Priority Programme", "Typical Review", "GCC Opportunity"],
          rows: [
            ["FDA (US)", "NDA / BLA", "Breakthrough Therapy, Fast Track", "10–12 months", "eCTD assembly, MedWatch"],
            ["EMA (EU)", "MAA Centralised", "PRIME, Conditional MA", "210 active days", "CHMP interactions, PSUR"],
            ["CDSCO (India)", "New Drug Approval", "Accelerated Approval", "12–18 months", "Full submission ownership"],
            ["PMDA (Japan)", "JNDA", "SAKIGAKE Designation", "9–12 months", "eCTD localisation"],
            ["NMPA (China)", "NDA", "Priority Review, Breakthrough", "130 working days", "Dossier preparation"],
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
    id: "ch9",
    num: "09",
    partLabel: "Part III · Commercial",
    title: "Commercial Excellence, Sales & Marketing",
    lead: "Leveraging GCC analytics, AI, and omnichannel capabilities to drive launch excellence, market access, and commercial performance.",
    metrics: [
      { value: "HCP", label: "Healthcare Professional Engagement" },
      { value: "NBA", label: "Next-Best-Action AI" },
      { value: "HEOR", label: "Health Economics & Outcomes" },
      { value: "KOL", label: "Key Opinion Leader Mapping" },
    ],
    tags: ["Commercial", "Market Access", "Launch Excellence", "Omnichannel"],
    sections: [
      {
        title: "Executive Summary",
        content: [],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "The commercial function in pharma is undergoing a fundamental transformation — from relationship-driven field sales to data-driven, omnichannel, precision engagement. Organizations deploying next-generation customer engagement platforms are generating 2–3× the sales force effectiveness of laggards, measured in prescriber access and message recall.",
        },
      },
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
    title: "Patient Engagement & Digital Therapeutics",
    lead: "Embedding the patient voice into every decision — from clinical design through market access — powered by digital health, DTx, and real-world evidence.",
    metrics: [
      { value: "RWE", label: "Real-World Evidence" },
      { value: "PRO", label: "Patient-Reported Outcomes" },
      { value: "DTx", label: "Digital Therapeutics" },
      { value: "PSP", label: "Patient Support Programs" },
    ],
    tags: ["Patient-Centricity", "RWE", "DTx", "Digital Health"],
    sections: [
      {
        title: "Executive Summary",
        content: [],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "The patient has moved from the periphery to the center of pharmaceutical strategy. Companies that still treat patient engagement as a post-approval support program bolt-on will find themselves disadvantaged compared to organizations that have built patient centricity into their operating model from target identification through therapy lifecycle management.",
        },
      },
      {
        title: "The Empowered Patient & Digital PSPs",
        content: [
          "The patient experience of illness has been transformed by digital technology irreversibly. A newly diagnosed patient today researches online, joins digital communities, tracks symptoms through apps, and arrives at specialist appointments with formed views on therapies and clinical trials.",
          "Digital PSPs use mobile apps as the primary patient interface, providing personalized disease information, injection training via video, symptom tracking, adherence monitoring, and direct nurse educator access. Studies consistently show 15–25% higher six-month therapy persistence rates vs. standard pharmacy dispensing.",
        ],
      },
      {
        title: "Digital Therapeutics (DTx)",
        content: [
          "Regulated digital therapeutics are software validated in clinical trials to demonstrate safety and efficacy for specific conditions, and can be prescribed and reimbursed like pharmaceutical products. Approved DTx exist for depression, anxiety, insomnia, ADHD, diabetes management, and chronic pain.",
          "For pharma companies, DTx represent both a threat (displacement of pharmaceutical approaches) and an opportunity (complementing the pharmaceutical portfolio). A depression drug sold in combination with a validated digital CBT therapeutic has a differentiated value proposition.",
        ],
      },
      {
        title: "Regional Spotlight: Patient Engagement",
        content: [],
        callout: {
          type: "spotlight",
          label: "🌍 Regional Spotlight: Patient Engagement",
          content: "In the <strong>US</strong>, patient engagement is most advanced in specialty therapeutic areas — oncology, rare disease, immunology. In the <strong>EU</strong>, GDPR and EHDS shape patient data programmes with federated pan-European health data infrastructure. In <strong>India</strong>, ABDM's health ID infrastructure and 1.4 billion population create vast opportunity for digital patient engagement, especially given the growing burden of non-communicable disease.",
        },
        diagram: {
          title: "India Pharma Digital Ecosystem",
          svgContent: SVG_INDIA_ECOSYSTEM,
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
          "Pharmacovigilance — the science of detecting, assessing, and preventing adverse drug reactions — is one of the most critical and high-volume functions in pharma GCCs. The exponential growth in safety data sources — social media, patient apps, wearables, digital health platforms — is overwhelming traditional case processing workflows.",
        ],
        pillars: [
          { num: "PV 01", title: "Case Processing & Triage", description: "AI-powered ICSR intake, duplicate detection, medical coding (MedDRA), and narrative generation.", colorVariant: "coral" },
          { num: "PV 02", title: "Aggregate Reports", description: "PSUR/PBRER authoring with AI-assisted benefit-risk assessment and trend analysis.", colorVariant: "coral" },
          { num: "PV 03", title: "Signal Detection", description: "Quantitative signal detection using WHO VigiBase, FAERS, and EudraVigilance with ML-powered pattern recognition.", colorVariant: "coral" },
          { num: "PV 04", title: "Literature Monitoring", description: "AI-powered screening of medical literature for safety signals, automated relevance scoring and full-text review.", colorVariant: "coral" },
        ],
      },
    ],
  },
  {
    id: "ch12",
    num: "12",
    partLabel: "Part IV · Enterprise Enablers",
    title: "Enterprise Systems, AI & Digital Transformation",
    lead: "The comprehensive roadmap for deploying AI across the pharma value chain — responsibly, at scale, with measurable ROI — supported by enterprise architecture.",
    metrics: [
      { value: "GenAI", label: "Generative AI Revolution" },
      { value: "$45B", label: "Pharma AI Market by 2030" },
      { value: "CLARITY", label: "KR AI Product Mgmt Framework" },
      { value: "Agentic", label: "AI Next Frontier" },
    ],
    tags: ["AI", "Digital Transformation", "CLARITY Framework", "Enterprise Architecture"],
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
      {
        title: "Enterprise Architecture & Cybersecurity",
        content: [
          "Enterprise architecture in pharma must integrate a complex landscape of GxP-validated systems (ERP, MES, LIMS, eQMS), clinical platforms (EDC, CTMS, eTMF), commercial systems (CRM, NBA engines), and data platforms — while maintaining regulatory compliance, data integrity, and cybersecurity.",
          "Cybersecurity is a critical enabler. Pharmaceutical companies hold some of the world's most valuable intellectual property (drug formulations, clinical data, regulatory submissions) and personally identifiable health information. A comprehensive pharma cybersecurity strategy must address OT (operational technology) security for manufacturing, IT security for enterprise systems, and data privacy compliance across jurisdictions.",
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
          { num: "Pillar A₂", title: "Adaptive Risk Management", description: "ICH Q9-aligned pharmaceutical quality risk management with dynamic updates.", colorVariant: "teal" },
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
    title: "Implementation Roadmap & ROI",
    lead: "The integrated 36-month execution blueprint — sequencing capability development, technology investment, talent evolution, and measurable ROI.",
    metrics: [
      { value: "36 Mo", label: "Full Transformation" },
      { value: "3-Phase", label: "Execution Architecture" },
      { value: "OKR", label: "Quarterly Accountability" },
      { value: "ROI", label: "Value Realisation" },
    ],
    tags: ["Roadmap", "Execution", "36-Month Plan", "ROI"],
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
      },
      {
        title: "ROI & Value Realisation",
        content: [
          "Measuring the return on digital transformation investment requires a framework that captures both quantitative financial returns and qualitative strategic benefits. The most effective approach is a balanced scorecard that tracks four categories of value.",
        ],
        table: {
          headers: ["Value Category", "Metric Examples", "Typical Range", "Measurement Method"],
          rows: [
            ["Cost Efficiency", "Labour cost reduction, process automation savings", "20–40% reduction", "Before/after cost comparison"],
            ["Speed to Market", "Submission timeline, trial enrolment speed", "30–50% faster", "Milestone tracking"],
            ["Quality Improvement", "Defect rates, deviation reduction, right-first-time", "40–60% improvement", "Quality KPI dashboards"],
            ["Innovation Value", "Patents, new capabilities, revenue enablement", "Strategic multiplier", "Innovation portfolio tracking"],
          ],
        },
        insightBox: {
          icon: "🚀",
          label: "The Call to Action",
          title: "Begin the Transformation Today",
          description: "The organisations that begin this transformation journey today — with clarity of vision, rigour of execution, and commitment to quality — will define the pharma GCC leadership table for the next decade.",
        },
      },
      {
        title: "Emerging Technology Outlook",
        content: [
          "The next wave of pharma digital transformation will be shaped by several technologies that are currently in early deployment or late-stage development.",
        ],
        bulletPoints: [
          "<strong>Quantum Computing</strong> — Molecular simulation at quantum scale, enabling drug design breakthroughs currently impossible with classical computing",
          "<strong>Federated Learning</strong> — Training AI models across hospital networks without sharing patient data, unlocking real-world evidence at scale",
          "<strong>Digital Twins (Patient)</strong> — Computational models of individual patients predicting treatment response before therapy begins",
          "<strong>Agentic AI</strong> — Autonomous AI agents that can plan, execute, and iterate on complex multi-step workflows with minimal human supervision",
          "<strong>Brain-Computer Interfaces</strong> — CNS drug development supported by direct neural measurement, enabling precision neuroscience",
        ],
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

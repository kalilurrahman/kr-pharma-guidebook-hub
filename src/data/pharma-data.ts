import type { Chapter, HandbookStats } from "@/types/pharma.types";

export const handbookStats: HandbookStats = {
  chapters: 30,
  words: "~88K",
  pillars: 9,
  phases: 3,
};

export const coverStats = [
  { value: "30", label: "Chapters + Appendix" },
  { value: "~88K", label: "Words · Full Handbook" },
  { value: "9", label: "Parts" },
  { value: "47+", label: "Diagrams & Tables · Full Handbook" },
];

// ── SVG Diagram Constants ──

const SVG_FIVE_FORCES = `<svg viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg" style="font-family:'Segoe UI',Arial,sans-serif">
  <defs><marker id="ma" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="hsl(38,72%,53%)" stroke-width="1.5" stroke-linecap="round"/></marker></defs>
  <rect x="285" y="80" width="190" height="70" rx="10" fill="hsl(222,47%,9%)" stroke="hsl(38,72%,53%)" stroke-width="2"/>
  <text x="380" y="108" text-anchor="middle" fill="hsl(38,72%,53%)" font-size="13" font-weight="700">PHARMA</text>
  <text x="380" y="126" text-anchor="middle" fill="hsl(215,20%,65%)" font-size="11">Enterprise 2025–2030</text>
  <text x="380" y="142" text-anchor="middle" fill="hsl(215,20%,50%)" font-size="9">$1.6T (2024) → ~$2.4T by 2029</text>
  <rect x="10" y="10" width="170" height="62" rx="8" fill="hsl(222,47%,12%)" stroke="hsl(220,16%,22%)" stroke-width="1"/>
  <text x="95" y="34" text-anchor="middle" fill="hsl(38,72%,60%)" font-size="11" font-weight="700">🤖 AI &amp; Generative Tech</text>
  <text x="95" y="51" text-anchor="middle" fill="hsl(215,20%,65%)" font-size="10">AlphaFold · GenAI · LLMs</text>
  <text x="95" y="65" text-anchor="middle" fill="hsl(215,20%,50%)" font-size="9">Drug discovery 10× faster</text>
  <line x1="180" y1="41" x2="281" y2="105" stroke="hsl(38,72%,53%)" stroke-width="1.2" marker-end="url(#ma)" opacity=".75"/>
  <rect x="580" y="10" width="170" height="62" rx="8" fill="hsl(222,47%,12%)" stroke="hsl(220,16%,22%)" stroke-width="1"/>
  <text x="665" y="34" text-anchor="middle" fill="hsl(38,72%,60%)" font-size="11" font-weight="700">⚖️ Regulatory Evolution</text>
  <text x="665" y="51" text-anchor="middle" fill="hsl(215,20%,65%)" font-size="10">FDA · EMA · ICH E6(R3)</text>
  <text x="665" y="65" text-anchor="middle" fill="hsl(215,20%,50%)" font-size="9">Digital evidence mandated</text>
  <line x1="580" y1="41" x2="477" y2="105" stroke="hsl(38,72%,53%)" stroke-width="1.2" marker-end="url(#ma)" opacity=".75"/>
  <rect x="10" y="158" width="170" height="62" rx="8" fill="hsl(222,47%,12%)" stroke="hsl(220,16%,22%)" stroke-width="1"/>
  <text x="95" y="182" text-anchor="middle" fill="hsl(38,72%,60%)" font-size="11" font-weight="700">👥 Patient Centricity</text>
  <text x="95" y="199" text-anchor="middle" fill="hsl(215,20%,65%)" font-size="10">DCT · RWE · ePRO · DTx</text>
  <text x="95" y="213" text-anchor="middle" fill="hsl(215,20%,50%)" font-size="9">Continuous patient data</text>
  <line x1="180" y1="189" x2="281" y2="132" stroke="hsl(38,72%,53%)" stroke-width="1.2" marker-end="url(#ma)" opacity=".75"/>
  <rect x="580" y="158" width="170" height="62" rx="8" fill="hsl(222,47%,12%)" stroke="hsl(220,16%,22%)" stroke-width="1"/>
  <text x="665" y="182" text-anchor="middle" fill="hsl(38,72%,60%)" font-size="11" font-weight="700">🔗 Supply Resilience</text>
  <text x="665" y="199" text-anchor="middle" fill="hsl(215,20%,65%)" font-size="10">Serialisation · IoT · AI SCM</text>
  <text x="665" y="213" text-anchor="middle" fill="hsl(215,20%,50%)" font-size="9">Post-COVID reshoring</text>
  <line x1="580" y1="189" x2="477" y2="132" stroke="hsl(38,72%,53%)" stroke-width="1.2" marker-end="url(#ma)" opacity=".75"/>
  <rect x="305" y="182" width="150" height="44" rx="8" fill="hsl(222,47%,12%)" stroke="hsl(220,16%,22%)" stroke-width="1"/>
  <text x="380" y="200" text-anchor="middle" fill="hsl(38,72%,60%)" font-size="11" font-weight="700">🎓 GCC Talent &amp; India</text>
  <text x="380" y="217" text-anchor="middle" fill="hsl(215,20%,50%)" font-size="9">2,100+ GCCs · Digital-native</text>
  <line x1="380" y1="182" x2="380" y2="150" stroke="hsl(38,72%,53%)" stroke-width="1.2" marker-end="url(#ma)" opacity=".75"/>
</svg>`;

const SVG_EROOMS_LAW = `<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:600px;display:block;margin:0 auto">
  <text x="300" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="hsl(172,83%,32%)">Cost per New Drug Approval (Capitalized R&amp;D)</text>
  <text x="300" y="52" text-anchor="middle" font-size="12" fill="hsl(215,20%,65%)">Eroom's Law: cost doubles every ~9 years despite rising investment</text>
  <line x1="60" y1="20" x2="60" y2="280" stroke="hsl(220,16%,30%)" stroke-width="1"/>
  <line x1="60" y1="280" x2="580" y2="280" stroke="hsl(220,16%,30%)" stroke-width="1"/>
  <rect x="80" y="220" width="80" height="60" fill="hsl(172,83%,32%)" rx="4"/>
  <text x="120" y="210" text-anchor="middle" font-size="13" font-weight="bold" fill="hsl(172,83%,32%)">~$300M</text>
  <text x="120" y="300" text-anchor="middle" font-size="12" fill="hsl(215,20%,65%)">1990s</text>
  <rect x="200" y="180" width="80" height="100" fill="hsl(215,20%,65%)" rx="4"/>
  <text x="240" y="170" text-anchor="middle" font-size="13" font-weight="bold" fill="hsl(215,20%,65%)">~$800M</text>
  <text x="240" y="300" text-anchor="middle" font-size="12" fill="hsl(215,20%,65%)">2000s</text>
  <rect x="320" y="120" width="80" height="160" fill="hsl(38,90%,43%)" rx="4"/>
  <text x="360" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="hsl(38,90%,43%)">~$1.4B</text>
  <text x="360" y="300" text-anchor="middle" font-size="12" fill="hsl(215,20%,65%)">2010s</text>
  <rect x="440" y="60" width="80" height="220" fill="hsl(222,47%,15%)" rx="4" stroke="hsl(38,72%,53%)" stroke-width="1"/>
  <text x="480" y="50" text-anchor="middle" font-size="13" font-weight="bold" fill="hsl(38,72%,53%)">~$2.6B</text>
  <text x="480" y="300" text-anchor="middle" font-size="12" fill="hsl(215,20%,65%)">2020s</text>
  <path d="M 120,220 Q 280,160 440,120 T 600,60" stroke="hsl(346,84%,50%)" stroke-width="3" fill="none" stroke-dasharray="6,3"/>
  <text x="575" y="50" font-size="11" fill="hsl(346,84%,50%)">↗ AI inflection</text>
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

const SVG_DRUG_PIPELINE = `<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:600px;display:block;margin:0 auto">
  <text x="295" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="hsl(172,83%,32%)">AI-Augmented Drug Discovery Pipeline</text>
  <text x="295" y="50" text-anchor="middle" font-size="11" fill="hsl(215,20%,65%)">From target identification to preclinical candidate</text>
  <rect x="20" y="60" width="82" height="70" fill="hsl(172,83%,32%)" rx="6"/>
  <text x="61" y="82" text-anchor="middle" font-size="11" font-weight="bold" fill="white">Target ID</text>
  <text x="61" y="116" text-anchor="middle" font-size="9.5" fill="white" opacity="0.88">AI/ML</text>
  <text x="61" y="129" text-anchor="middle" font-size="9.5" fill="white" opacity="0.88">Knowledge Graph</text>
  <rect x="115" y="60" width="82" height="70" fill="hsl(263,70%,58%)" rx="6"/>
  <text x="156" y="82" text-anchor="middle" font-size="11" font-weight="bold" fill="white">Structure</text>
  <text x="156" y="98" text-anchor="middle" font-size="11" font-weight="bold" fill="white">Prediction</text>
  <text x="156" y="116" text-anchor="middle" font-size="9.5" fill="white" opacity="0.88">AlphaFold</text>
  <rect x="210" y="60" width="82" height="70" fill="hsl(222,47%,15%)" rx="6" stroke="hsl(38,72%,53%)" stroke-width="1"/>
  <text x="251" y="82" text-anchor="middle" font-size="11" font-weight="bold" fill="white">Molecular</text>
  <text x="251" y="98" text-anchor="middle" font-size="11" font-weight="bold" fill="white">Design</text>
  <text x="251" y="116" text-anchor="middle" font-size="9.5" fill="white" opacity="0.88">Generative AI</text>
  <rect x="305" y="60" width="82" height="70" fill="hsl(215,20%,50%)" rx="6"/>
  <text x="346" y="82" text-anchor="middle" font-size="11" font-weight="bold" fill="white">Screening</text>
  <text x="346" y="116" text-anchor="middle" font-size="9.5" fill="white" opacity="0.88">Robotic HTS</text>
  <rect x="400" y="60" width="82" height="70" fill="hsl(38,90%,43%)" rx="6"/>
  <text x="441" y="82" text-anchor="middle" font-size="11" font-weight="bold" fill="white">Lead Opt.</text>
  <text x="441" y="116" text-anchor="middle" font-size="9.5" fill="white" opacity="0.88">MPLO AI</text>
  <rect x="495" y="60" width="82" height="70" fill="hsl(145,50%,35%)" rx="6"/>
  <text x="536" y="82" text-anchor="middle" font-size="11" font-weight="bold" fill="white">Preclinical</text>
  <text x="536" y="116" text-anchor="middle" font-size="9.5" fill="white" opacity="0.88">ADMET AI</text>
  <line x1="103" y1="95" x2="114" y2="95" stroke="hsl(38,72%,53%)" stroke-width="2"/>
  <line x1="198" y1="95" x2="209" y2="95" stroke="hsl(38,72%,53%)" stroke-width="2"/>
  <line x1="293" y1="95" x2="304" y2="95" stroke="hsl(38,72%,53%)" stroke-width="2"/>
  <line x1="388" y1="95" x2="399" y2="95" stroke="hsl(38,72%,53%)" stroke-width="2"/>
  <line x1="483" y1="95" x2="494" y2="95" stroke="hsl(38,72%,53%)" stroke-width="2"/>
  <rect x="20" y="160" width="557" height="22" fill="hsl(222,47%,12%)" rx="3" stroke="hsl(220,16%,25%)" stroke-width="1"/>
  <text x="298" y="176" text-anchor="middle" font-size="11" fill="hsl(215,20%,65%)">Traditional: 4–6 years · AI-enabled: 12–24 months (target)</text>
</svg>`;

const SVG_ECTD_MODULES = `<svg viewBox="0 0 760 168" xmlns="http://www.w3.org/2000/svg" style="font-family:'Segoe UI',Arial,sans-serif">
  <rect x="10" y="10" width="138" height="148" rx="8" fill="hsl(222,47%,15%)" stroke="hsl(38,72%,53%)" stroke-width="1.8"/>
  <text x="79" y="32" text-anchor="middle" fill="hsl(38,72%,53%)" font-size="10.5" font-weight="700">Module 1</text>
  <text x="79" y="48" text-anchor="middle" fill="hsl(215,20%,80%)" font-size="9.5">Regional Admin</text>
  <text x="79" y="66" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">Cover letter &amp; forms</text>
  <text x="79" y="80" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">Approved labelling</text>
  <text x="79" y="94" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">Patent / exclusivity</text>
  <text x="79" y="108" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">Environmental assess.</text>
  <rect x="20" y="142" width="118" height="12" rx="4" fill="hsl(38,72%,53%,.2)"/>
  <text x="79" y="152" text-anchor="middle" fill="hsl(38,72%,53%)" font-size="8">Region-specific</text>
  <rect x="158" y="10" width="138" height="148" rx="8" fill="hsl(222,47%,12%)" stroke="hsl(220,16%,25%)" stroke-width="1"/>
  <text x="227" y="32" text-anchor="middle" fill="hsl(38,72%,60%)" font-size="10.5" font-weight="700">Module 2</text>
  <text x="227" y="48" text-anchor="middle" fill="hsl(215,20%,80%)" font-size="9.5">CTD Summaries</text>
  <text x="227" y="66" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">2.3 Quality overall</text>
  <text x="227" y="80" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">2.4 Nonclinical overview</text>
  <text x="227" y="94" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">2.5 Clinical overview</text>
  <text x="227" y="108" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">2.7 Clinical summaries</text>
  <rect x="306" y="10" width="138" height="148" rx="8" fill="hsl(222,47%,12%)" stroke="hsl(220,16%,25%)" stroke-width="1"/>
  <text x="375" y="32" text-anchor="middle" fill="hsl(38,72%,60%)" font-size="10.5" font-weight="700">Module 3</text>
  <text x="375" y="48" text-anchor="middle" fill="hsl(215,20%,80%)" font-size="9.5">Quality (CMC)</text>
  <text x="375" y="66" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">3.2.S Drug substance</text>
  <text x="375" y="80" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">3.2.P Drug product</text>
  <text x="375" y="94" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">Mfg process &amp; controls</text>
  <text x="375" y="108" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">Stability data</text>
  <rect x="454" y="10" width="138" height="148" rx="8" fill="hsl(222,47%,12%)" stroke="hsl(220,16%,25%)" stroke-width="1"/>
  <text x="523" y="32" text-anchor="middle" fill="hsl(38,72%,60%)" font-size="10.5" font-weight="700">Module 4</text>
  <text x="523" y="48" text-anchor="middle" fill="hsl(215,20%,80%)" font-size="9.5">Nonclinical Reports</text>
  <text x="523" y="66" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">Pharmacology studies</text>
  <text x="523" y="80" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">PK / ADME studies</text>
  <text x="523" y="94" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">Toxicology &amp; geno</text>
  <rect x="602" y="10" width="148" height="148" rx="8" fill="hsl(222,47%,12%)" stroke="hsl(220,16%,25%)" stroke-width="1"/>
  <text x="676" y="32" text-anchor="middle" fill="hsl(38,72%,60%)" font-size="10.5" font-weight="700">Module 5</text>
  <text x="676" y="48" text-anchor="middle" fill="hsl(215,20%,80%)" font-size="9.5">Clinical Study Reports</text>
  <text x="676" y="66" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">Phase I–III CSRs</text>
  <text x="676" y="80" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">Efficacy &amp; safety data</text>
  <text x="676" y="94" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="8.5">5.3.7 PV reports</text>
</svg>`;

const SVG_PV_SIGNAL_FLOW = `<svg viewBox="0 0 600 270" xmlns="http://www.w3.org/2000/svg" width="100%" style="max-width:600px;display:block;margin:0 auto">
  <text x="300" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="hsl(172,83%,32%)">Digital Pharmacovigilance Signal Detection Flow</text>
  <rect x="40" y="50" width="80" height="55" fill="hsl(222,47%,12%)" rx="5" stroke="hsl(215,20%,50%)" stroke-width="1"/>
  <text x="80" y="80" text-anchor="middle" font-size="18">📋</text>
  <text x="80" y="97" text-anchor="middle" font-size="9" fill="hsl(172,83%,32%)" font-weight="bold">Spontaneous</text>
  <rect x="140" y="50" width="80" height="55" fill="hsl(222,47%,12%)" rx="5" stroke="hsl(215,20%,50%)" stroke-width="1"/>
  <text x="180" y="80" text-anchor="middle" font-size="18">🏥</text>
  <text x="180" y="97" text-anchor="middle" font-size="9" fill="hsl(172,83%,32%)" font-weight="bold">EHR / Claims</text>
  <rect x="240" y="50" width="80" height="55" fill="hsl(222,47%,12%)" rx="5" stroke="hsl(215,20%,50%)" stroke-width="1"/>
  <text x="280" y="80" text-anchor="middle" font-size="18">📖</text>
  <text x="280" y="97" text-anchor="middle" font-size="9" fill="hsl(172,83%,32%)" font-weight="bold">Literature</text>
  <rect x="340" y="50" width="80" height="55" fill="hsl(222,47%,12%)" rx="5" stroke="hsl(215,20%,50%)" stroke-width="1"/>
  <text x="380" y="80" text-anchor="middle" font-size="18">💬</text>
  <text x="380" y="97" text-anchor="middle" font-size="9" fill="hsl(172,83%,32%)" font-weight="bold">Social Media</text>
  <rect x="440" y="50" width="80" height="55" fill="hsl(222,47%,12%)" rx="5" stroke="hsl(215,20%,50%)" stroke-width="1"/>
  <text x="480" y="80" text-anchor="middle" font-size="18">🔬</text>
  <text x="480" y="97" text-anchor="middle" font-size="9" fill="hsl(172,83%,32%)" font-weight="bold">Clinical Trials</text>
  <rect x="60" y="140" width="480" height="44" fill="hsl(222,47%,15%)" rx="5" stroke="hsl(38,72%,53%)" stroke-width="1"/>
  <text x="300" y="159" text-anchor="middle" font-size="12" font-weight="bold" fill="hsl(38,72%,60%)">AI-Powered Case Intake &amp; NLP Processing</text>
  <text x="300" y="176" text-anchor="middle" font-size="10" fill="hsl(215,20%,65%)">Automated triage · MedDRA coding · Duplicate detection · Narrative generation</text>
  <rect x="120" y="215" width="360" height="36" fill="hsl(172,83%,32%)" rx="4"/>
  <text x="300" y="230" text-anchor="middle" font-size="11" font-weight="bold" fill="white">Automated Signal Detection &amp; Disproportionality Analysis</text>
  <text x="300" y="245" text-anchor="middle" font-size="9.5" fill="white" opacity="0.85">Multi-source EBGM / PRR · Continuous monitoring dashboard</text>
</svg>`;

const SVG_36_MONTH_ROADMAP = `<svg viewBox="0 0 760 210" xmlns="http://www.w3.org/2000/svg" style="font-family:'Segoe UI',Arial,sans-serif">
  <line x1="30" y1="185" x2="740" y2="185" stroke="hsl(215,20%,30%)" stroke-width="1"/>
  <text x="30" y="198" fill="hsl(215,20%,50%)" font-size="9">Month 0</text>
  <text x="260" y="198" fill="hsl(215,20%,50%)" font-size="9" text-anchor="middle">Month 12</text>
  <text x="490" y="198" fill="hsl(215,20%,50%)" font-size="9" text-anchor="middle">Month 24</text>
  <text x="720" y="198" fill="hsl(215,20%,50%)" font-size="9" text-anchor="end">Month 36</text>
  <rect x="30" y="14" width="218" height="162" rx="8" fill="hsl(222,47%,15%)" stroke="hsl(38,72%,53%)" stroke-width="1.5"/>
  <rect x="30" y="14" width="218" height="4" rx="2" fill="hsl(38,72%,53%)"/>
  <text x="139" y="36" text-anchor="middle" fill="hsl(38,72%,53%)" font-size="10" font-weight="700">WAVE 1 · STABILISE &amp; CONNECT</text>
  <text x="139" y="52" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="9">Months 1–12</text>
  <text x="46" y="72" fill="hsl(215,20%,70%)" font-size="9">▸ CDO role established; governance live</text>
  <text x="46" y="88" fill="hsl(215,20%,70%)" font-size="9">▸ Cloud data lake foundation deployed</text>
  <text x="46" y="104" fill="hsl(215,20%,70%)" font-size="9">▸ eQMS &amp; EBR pilot at lead site</text>
  <text x="46" y="120" fill="hsl(215,20%,70%)" font-size="9">▸ eCTD submission automation live</text>
  <text x="46" y="136" fill="hsl(215,20%,70%)" font-size="9">▸ PV NLP intake automation deployed</text>
  <text x="46" y="152" fill="hsl(215,20%,70%)" font-size="9">▸ PDMF baseline assessment complete</text>
  <text x="46" y="168" fill="hsl(38,72%,53%)" font-size="8">Target: PDMF Level 2→3</text>
  <rect x="270" y="14" width="218" height="162" rx="8" fill="hsl(222,47%,12%)" stroke="hsl(215,20%,50%)" stroke-width="1"/>
  <rect x="270" y="14" width="218" height="4" rx="2" fill="hsl(215,20%,50%)"/>
  <text x="379" y="36" text-anchor="middle" fill="hsl(38,72%,60%)" font-size="10" font-weight="700">WAVE 2 · DIFFERENTIATE &amp; SCALE</text>
  <text x="379" y="52" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="9">Months 13–24</text>
  <text x="286" y="72" fill="hsl(215,20%,70%)" font-size="9">▸ AI drug discovery platform operational</text>
  <text x="286" y="88" fill="hsl(215,20%,70%)" font-size="9">▸ DCT capability in 3+ active trials</text>
  <text x="286" y="104" fill="hsl(215,20%,70%)" font-size="9">▸ NBA commercial engine deployed</text>
  <text x="286" y="120" fill="hsl(215,20%,70%)" font-size="9">▸ PAT + digital twin at mfg sites</text>
  <text x="286" y="136" fill="hsl(215,20%,70%)" font-size="9">▸ eQMS rolled out to all sites</text>
  <text x="286" y="152" fill="hsl(215,20%,70%)" font-size="9">▸ RWE programme generating evidence</text>
  <text x="286" y="168" fill="hsl(38,72%,60%)" font-size="8">Target: PDMF Level 3→4</text>
  <rect x="510" y="14" width="226" height="162" rx="8" fill="hsl(222,47%,12%)" stroke="hsl(145,50%,35%)" stroke-width="1.2"/>
  <rect x="510" y="14" width="226" height="4" rx="2" fill="hsl(145,50%,35%)"/>
  <text x="623" y="36" text-anchor="middle" fill="hsl(145,60%,60%)" font-size="10" font-weight="700">WAVE 3 · LEAD &amp; INNOVATE</text>
  <text x="623" y="52" text-anchor="middle" fill="hsl(215,20%,55%)" font-size="9">Months 25–36</text>
  <text x="526" y="72" fill="hsl(215,20%,70%)" font-size="9">▸ Clinical candidate from AI discovery</text>
  <text x="526" y="88" fill="hsl(215,20%,70%)" font-size="9">▸ Real-time release testing approved</text>
  <text x="526" y="104" fill="hsl(215,20%,70%)" font-size="9">▸ Autonomous PV signal monitoring</text>
  <text x="526" y="120" fill="hsl(215,20%,70%)" font-size="9">▸ Outcome-based contracts with payers</text>
  <text x="526" y="136" fill="hsl(215,20%,70%)" font-size="9">▸ GCC established as digital CoE</text>
  <text x="526" y="152" fill="hsl(215,20%,70%)" font-size="9">▸ PDMF Level 4–5; industry recognition</text>
  <text x="526" y="168" fill="hsl(145,60%,50%)" font-size="8">Target: PDMF Level 4→5</text>
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

// ── CHAPTERS ──

export const chapters: Chapter[] = [
  {
    id: "ch1",
    num: "01",
    partLabel: "Part I · Foundations",
    title: "The Global Pharma Landscape & Digital Imperative",
    lead: "Understanding the forces reshaping global pharma — and why digital transformation is a survival imperative.",
    metrics: [
      { value: "$1.6T", label: "Global Pharma Revenue 2024" },
      { value: "$2.2B", label: "Avg. R&D Cost / Asset" },
      { value: "<10%", label: "Phase I → Approval Rate" },
      { value: "12–15 yr", label: "Avg. Drug-to-Market" },
    ],
    tags: ["Market Analysis", "GCC Strategy", "Pharma Landscape", "Digital Imperative"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "The pharmaceutical industry stands at an inflection point unlike any in its history. A confluence of forces — accelerating scientific complexity, relentless cost pressure, post-pandemic urgency, and the maturation of artificial intelligence — is reshaping every dimension of how drugs are discovered, developed, manufactured, and delivered.",
          "Organizations that treat digitalization as an IT project will fall behind; those that embed it into their operating model and culture will define the next era of global health.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "AI-assisted drug discovery is already reducing target identification timelines from years to months. Decentralised clinical trials have cut patient recruitment windows by 30–50%. Smart manufacturing implementations are driving 15–20% OEE improvements. These are outcomes from leading pharma companies and emerging players like Insilico Medicine.",
        },
      },
      {
        title: "The Pharma Industry at a Crossroads",
        content: [
          "Global medicine spending (list-price basis) reached roughly USD 1.6 trillion in 2024 and is projected to approach USD 2.3 trillion by 2028 and about USD 2.4 trillion by 2029, growing at a 5–8% CAGR (IQVIA, 2025). This growth masks profound structural stress. Deloitte's 2024 analysis puts the average cost to bring an asset to market at about USD 2.23 billion — up from USD 2.12 billion in 2023 — while older capitalised estimates run to USD 2.6 billion; development still takes 10–15 years end to end. The probability that a molecule entering Phase I clinical trials will reach approval remains below 10 percent — roughly 7.9% across 2011–2020 (BIO/Informa), and closer to 3–4% in oncology.",
          "The industry is simultaneously being pulled in two directions. On one side, biological complexity is expanding the frontier of what is scientifically possible — personalised medicines, cell and gene therapies, RNA-based interventions, and AI-designed proteins. On the other, the commercial and economic systems that supported the old blockbuster model are fragmenting under payer pressure, real-world evidence requirements, and accelerating generic competition.",
        ],
        diagram: {
          title: "Cost per New Drug Approval — Eroom's Law",
          svgContent: SVG_EROOMS_LAW,
        },
      },
      {
        title: "Forces Driving Digital Transformation",
        content: [
          "<strong>The Data Explosion.</strong> A single genomic sequencing run produces terabytes of raw data. A Phase III clinical trial with 10,000 patients can generate billions of data points across EHRs, wearable sensors, imaging archives, and patient-reported outcomes. Machine learning systems can operate at this scale; human scientists cannot.",
          "<strong>The AI Maturity Moment.</strong> AlphaFold's prediction of protein structures — a problem that took structural biologists decades — was solved in hours. Large language models are summarising scientific literature in minutes. Generative AI is proposing novel molecular scaffolds. The question is no longer whether AI works in pharma; it is how fast organisations can deploy it systematically.",
          "<strong>Regulatory Evolution.</strong> The US FDA's Digital Health Center of Excellence, the EMA's data analytics strategy, and India's CDSCO modernisation initiative all reflect the same reality: regulators expect digital-native evidence generation, electronic submissions, and real-world data integration.",
          "<strong>The Pandemic Accelerant.</strong> COVID-19 compressed a decade of digital adoption into eighteen months. Pfizer enrolled 43,000 participants in its COVID-19 vaccine trial in under four months using digital recruitment.",
          "<strong>Talent and Workforce Shift.</strong> The workforce entering pharma today is digital-native. They expect AI-assisted workflows, modern user interfaces, and real-time data-driven decisions. Organisations running on legacy ERP platforms and paper-based quality systems struggle to attract and retain this talent.",
        ],
        diagram: {
          title: "Five Forces Reshaping Pharma — Digital Disruption Map",
          svgContent: SVG_FIVE_FORCES,
        },
      },
      {
        title: "The Digital Transformation Landscape: Where Pharma Stands Today",
        content: [
          "Despite the urgency, the industry's digital maturity is highly uneven. Roughly 20% of organisations have advanced cloud-native data platforms, enterprise AI programs, and digitally integrated supply chains. The remaining 80% are at various stages of foundational work.",
        ],
        table: {
          headers: ["Region", "Market Size 2024", "Key Digital Driver", "Avg. PDMF Level", "Priority Domains"],
          rows: [
            ["🇺🇸 United States", "$798B list / ~$487B net", "FDA Digital Health CoE; IRA price negotiation (first 10 prices live Jan 2026)", "Level 3–4", "AI drug discovery, DCT, RWE, omnichannel"],
            ["🇪🇺 European Union", "EU-5 ~$241B", "EHDS; EU AI Act; EMA DARWIN EU; EU HTA (Jan 2025)", "Level 2–3", "Regulatory digital, federated data, manufacturing"],
            ["🇮🇳 India", "~$26B domestic; ~20% of global generics (volume)", "ABDM; SUGAM; PLI scheme; GCC boom", "Level 2–3", "Manufacturing QMS, PV analytics, clinical data"],
            ["🇨🇳 China", "~$113B (hospital mkt)", "NMPA modernisation; national AI strategy", "Level 2–3", "Clinical trial digital, biotech AI, manufacturing"],
            ["🇯🇵 Japan", "~$62B", "SAKIGAKE; PMDA digital reform", "Level 2–3", "Regulatory submissions, digital biomarkers"],
          ],
        },
      },
      {
        title: "The $2 Trillion Opportunity",
        content: [
          "McKinsey Global Institute has estimated that advanced analytics and AI could create $100 billion in value annually for the US healthcare system. Across the global pharmaceutical value chain, the opportunity is larger still.",
          "If AI could cut average development timelines by 20–30% and improve Phase II success rates by even 10 percentage points, the value creation at a large pharmaceutical company would be measured in tens of billions of dollars. Insilico Medicine's INS018_055 (rentosertib) advanced from target to preclinical candidate in about 18 months and, in 2025, reported positive Phase IIa data in idiopathic pulmonary fibrosis (Nature Medicine) — it is now in Phase III, against an industry norm of 4–6 years just to reach the clinic.",
        ],
        diagram: {
          title: "Pharmaceutical Digital Value Chain",
          svgContent: SVG_VALUE_CHAIN,
        },
      },
      {
        title: "The Cost of Inaction — Quantified",
        content: [
          "The business case for pharmaceutical digital transformation is often framed in terms of opportunity cost. An equally important lens is the cost of inaction.",
        ],
        table: {
          headers: ["Dimension", "Digital Laggard", "Digital Leader", "Annual Gap ($5B Revenue Co.)", "Source"],
          rows: [
            ["R&D Discovery Cycle", "Target-to-IND: 4–5 years", "Target-to-IND: 12–18 months", "$200–400M pipeline acceleration", "Insilico Medicine benchmarks"],
            ["Clinical Recruitment", "80%+ miss enrollment timelines", "On-schedule; 30–50% faster", "$150–300M per Phase III", "Tufts CSDD; IQVIA"],
            ["Manufacturing Release", "2–4 weeks; 8–12% batch failure", "2–4 days RTRT; 3–5% failure", "$80–150M/year", "ISPE Pharma 4.0"],
            ["Regulatory Submission", "18–24 months NDA prep", "12–15 months; 50% fewer queries", "$100–200M launch timing", "Veeva Regulatory benchmarks"],
            ["Commercial Effectiveness", "1.2 calls/day; 15% NtB rate", "2.4 calls/day; 22% NtB rate", "$50–120M per launch", "IQVIA SFE 2024"],
          ],
        },
      },
      {
        title: "India's GCC Ecosystem — The Pharma Digital Nerve Centre",
        content: [
          "India has emerged as the world's pre-eminent hub for pharmaceutical Global Capability Centres (GCCs), combining an unmatched reservoir of scientific, digital, and regulatory talent with a rapidly maturing innovation ecosystem. More than 130 pharmaceutical and life-sciences GCCs now operate in India (employing 80,000+ specialists) — part of a broader base of roughly 2,117 GCCs and 2.36 million professionals as of FY2026 (NASSCOM–Zinnov) — concentrated in Hyderabad, Bengaluru, Mumbai, and Pune.",
        ],
        table: {
          headers: ["GCC Capability", "Leading Companies", "Value Delivered", "India Advantage"],
          rows: [
            ["Computational Drug Discovery", "AstraZeneca, Sanofi, GSK, Roche", "Target ID, CADD, generative AI molecule design", "IISc/IIT pipeline; 60% lower cost vs US/EU"],
            ["Clinical Data Science", "Pfizer, Roche, J&J, Merck", "Phase I–IV data management, statistical programming", "World's largest CDM talent pool"],
            ["Regulatory Intelligence", "AbbVie, Eli Lilly, BMS, Takeda", "eCTD compilation, agency responses, PSUR", "24/7 coverage; multilingual team"],
            ["Real-World Evidence & HEOR", "Amgen, Biogen, Boehringer", "RWE studies, HEOR models, market access", "ABDM infrastructure; large patient pop."],
            ["Pharmacovigilance Analytics", "GSK, Roche, Pfizer, AstraZeneca", "ICSR processing, signal detection, PSUR/PBRER", "30–40% lower cost; AI-augmented 24/7 ops"],
            ["Manufacturing Intelligence", "Sun Pharma, Dr. Reddy's, Cipla", "Digital twin, predictive quality, supply chain analytics", "Proximity to Indian manufacturing base"],
          ],
        },
        callout: {
          type: "spotlight",
          label: "🌍 Regional Spotlight: India's Digital Pharma Moment",
          content: "India supplies roughly 20% of the world's generic medicines by volume (and ~47% of US generic prescriptions), and hosts the largest number of US FDA-approved manufacturing sites outside the US. The ABDM has created 900M+ ABHA digital health IDs (2026), with 1B+ health records linked. The pharma PLI scheme had drawn ₹41,943 crore of investment by end-2025. Companies like Sun Pharma and Dr. Reddy's are demonstrating that Indian generics companies can be fast followers — and in some cases leaders — in pharma digital transformation.",
        },
      },
      {
        title: "What 'Digital Transformation' Actually Means in Pharma",
        content: [
          "Digital transformation in pharma is not primarily about technology — it is about fundamentally redesigning business processes, decision-making architectures, and operating models enabled by technology. Organisations that deploy technology onto broken processes do not transform; they automate dysfunction.",
        ],
        bulletPoints: [
          "<strong>Data as a Strategic Asset</strong> — Building infrastructure, governance, and culture to treat data as a company-wide resource rather than a departmental byproduct",
          "<strong>AI-Powered Intelligence</strong> — Embedding ML and advanced analytics into decisions at every level, from molecule selection to sales force deployment",
          "<strong>Connected Operations</strong> — Integrating previously siloed functions into real-time decision loops that eliminate latency",
          "<strong>Digital Patient & Customer Centricity</strong> — Redesigning interactions using digital channels, RWD, and personalised engagement",
        ],
        pullQuote: {
          text: "The pharmaceutical organisations that will lead the next decade are not those with the largest R&D budgets, but those with the most intelligent, interconnected, and adaptive operating models.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        title: "The Platform Economy Entering Life Sciences",
        content: [
          "Technology companies — Amazon (AWS Health), Microsoft (Cloud for Healthcare), Google (Cloud Life Sciences), and specialised platforms like Veeva Systems, Medidata, and IQVIA — are moving into the pharmaceutical value chain with capabilities pharma cannot easily replicate internally.",
        ],
        table: {
          headers: ["Platform Category", "Leading Platforms", "Pharma Capability", "Strategic Implication"],
          rows: [
            ["Clinical Cloud", "Medidata, Veeva Vault Clinical, Oracle Health Sciences", "End-to-end trial management — EDC, CTMS, eTMF", "Vendor consolidation reduces integration debt"],
            ["AI Drug Discovery", "Schrödinger, Recursion (incl. Exscientia), Insilico Chemistry42, Isomorphic Labs", "Target ID, molecular design, ADMET prediction", "Platform business models emerging; sector consolidating"],
            ["Manufacturing Intelligence", "Siemens Xcelerator, Rockwell Plex, AspenTech, AVEVA PI", "Digital twin, OEE, PAT integration, predictive quality", "Factory-as-a-service emerging"],
            ["Commercial & Patient", "Veeva CRM/Engage, Salesforce Health Cloud, Aktana NBA", "HCP engagement, patient support, NBA orchestration", "HCP journey platform as primary commercial asset"],
            ["Regulatory Intelligence", "Veeva Vault RIM, Certara D360, Aris Global", "Global submission management, agency intelligence, IDMP", "30–50% reduction in submission cycle time"],
          ],
        },
      },
      {
        title: "Questions for the Board",
        content: [
          "Does your organisation have a single, authoritative source of truth for R&D, clinical, manufacturing, and commercial data — and does leadership have real-time visibility into it? What percentage of key operational decisions are made with AI-assisted analytics versus human intuition and spreadsheets? How long does it take your organisation to go from a regulatory inquiry to a complete, accurate data response? What is your current digital maturity score versus your top three competitors? Who in your leadership team owns the digital transformation agenda — and do they have the budget, authority, and talent to execute it?",
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
      { value: "5-Level", label: "PDMF Maturity Scale" },
      { value: "70%", label: "Transformation Initiatives Fail" },
    ],
    tags: ["Strategy", "Blueprint", "Three-Horizon", "PDMF"],
    sections: [
      {
        title: "Defining True North for a Pharma GCC",
        content: [
          "Every successful GCC transformation begins with a clearly articulated True North. A clearly articulated digital transformation vision statement, endorsed by the global CEO and board, is the single most important predictor of transformation success.",
          "Without it, digital transformation becomes a technology project rather than a business transformation — and technology projects that lack strategic sponsorship have a failure rate that approaches certainty.",
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
          { num: "H1", title: "Horizon 1 · Stabilise & Standardise (0–12 months)", description: "Audit existing capabilities. Standardise core processes. Cloud migration, data lake foundation." },
          { num: "H2", title: "Horizon 2 · Differentiate & Digitise (12–36 months)", description: "Deploy AI-assisted tools across clinical, regulatory, and PV. Build CoE structures. Enterprise AI/ML platform." },
          { num: "H3", title: "Horizon 3 · Lead & Innovate (36+ months)", description: "Operate as co-equal innovation partner. Own drug discovery pipelines. Lead regulatory strategy." },
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
      {
        title: "Board-Level Digital Oversight & Change Management",
        content: [
          "Boards of pharmaceutical companies are increasingly being asked to oversee digital transformation. The evidence from companies that have navigated this well points to three practices: dedicated board-level reporting on the digital portfolio, board composition with deep digital expertise, and cyber and data privacy oversight.",
          "<strong>Investment frameworks:</strong> Pharma digital transformation programmes typically involve annual investment in the range of 1–3% of revenue for companies in scaling mode, rising to 4–5% for companies in accelerated transformation.",
        ],
        callout: {
          type: "case-study",
          label: "📋 Case Study: Becoming a Data-Driven Medicine Company",
          content: "Leading pharma companies investing several hundred million dollars annually in digital and data capabilities have demonstrated key lessons: CEO ownership, investment at scale, foundational data work before AI deployment, and a culture programme reaching every level. Outcomes include measurable reduction in clinical trial cycle times and $200M+ annual commercial efficiency gains.",
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
          "A mature pharma GCC governance model operates across four layers. Digital transformation governance in pharma has a fundamental characteristic that distinguishes it from other industries: the regulatory environment. Every digital system that touches a GxP process must be validated to regulatory standards.",
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
          description: "Over-governance kills agility. Under-governance kills accountability. The optimal model provides clear decision rights with minimal approval layers — no more than two approvals for any operational decision.",
        },
      },
      {
        title: "Centre of Excellence (CoE) Model",
        content: [
          "The CoE model has emerged as the dominant organisational pattern for building and scaling digital capabilities in pharmaceutical GCCs.",
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
    lead: "How AI is transforming computational drug discovery, target identification, and lead optimisation — from molecule to IND.",
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
          content: "Drug discovery is the function where AI is having its most transformative impact. The combination of computational biology expertise, data engineering capability, and lower-cost PhD talent creates a structural advantage for GCC-based R&D intelligence teams.",
        },
      },
      {
        title: "The AI-Augmented Drug Discovery Pipeline",
        content: [
          "AI is attacking the pharmaceutical R&D productivity crisis at multiple points simultaneously. AI-driven target identification finds better biological targets. Generative AI for molecular design explores chemical space orders of magnitude more efficiently. Digital laboratory automation reduces experimental cycle time. Integrated data platforms eliminate information silos.",
        ],
        diagram: {
          title: "AI-Augmented Drug Discovery Pipeline",
          svgContent: SVG_DRUG_PIPELINE,
        },
        steps: [
          { num: "01", title: "Target Identification & Validation", description: "Multi-omics analysis, knowledge graph mining, AI-powered literature synthesis. AlphaFold's database covers 214M+ predicted protein structures for structure-based drug design." },
          { num: "02", title: "Hit Identification & Virtual Screening", description: "Virtual screening of billion-compound libraries using molecular docking, pharmacophore modelling, and generative AI. DNA-encoded chemical libraries (DELs) can screen billions simultaneously." },
          { num: "03", title: "Lead Optimisation", description: "ADMET prediction using ML models. Multi-parameter lead optimisation (MPLO) simultaneously targeting potency, selectivity, and ADMET properties." },
          { num: "04", title: "Preclinical Development & IND Package", description: "Computational toxicology, PBPK modelling, and regulatory-ready preclinical dossier preparation. AI predicts hERG cardiac toxicity and CYP enzyme inhibition." },
        ],
      },
      {
        title: "AI Platforms Powering Drug Discovery",
        content: [],
        table: {
          headers: ["AI Platform / Tool", "Primary Application", "Key Technology", "Notable Deployment"],
          rows: [
            ["AlphaFold 3 (DeepMind)", "Protein & complex structure prediction; SBDD", "Pairformer + diffusion (released May 2024)", "214M+ structures; 2024 Chemistry Nobel"],
            ["PandaOmics (Insilico)", "AI-powered target identification using multi-omics", "Graph neural networks; knowledge graphs", "TNIK / IPF — INS018-055 in Phase II"],
            ["Chemistry42 (Insilico)", "Generative molecular design", "GAN + RL + diffusion models", "Multiple clinical candidates generated"],
            ["Schrödinger FEP+", "Free energy perturbation; lead optimisation", "Physics-based + ML", "BMS, Pfizer partnerships"],
            ["Isomorphic Labs (Alphabet)", "AI-first drug design built on AlphaFold", "AlphaFold 3 + generative models", "$600M raised 2025; Lilly & Novartis deals up to ~$2.9B"],
            ["Recursion (incl. Exscientia)", "Phenomics + automated design-make-test-analyse", "Computer vision + biological foundation models", "Exscientia merger closed Nov 2024; NVIDIA-backed"],
            ["BenevolentAI", "Literature-based target hypotheses", "Knowledge graph + LLM traversal", "Baricitinib → COVID-19 EUA in <2 months"],
          ],
        },
      },
      {
        title: "Generative AI for Molecular Design",
        content: [
          "Generative models learn statistical patterns in large datasets of known molecules and generate novel molecular structures with desired properties. Unlike traditional HTS, generative models can propose entirely new chemical entities designed de novo.",
          "The leading systems combine deep generative models — variational autoencoders, diffusion models, and transformer architectures — with reinforcement learning that rewards molecules scoring well against multi-parameter objectives.",
        ],
        callout: {
          type: "case-study",
          label: "📋 Case Study: Insilico Medicine — First AI-Discovered Clinical Candidate",
          content: "Insilico Medicine's INS018_055 (rentosertib) — a TNIK inhibitor for idiopathic pulmonary fibrosis with both an AI-nominated target and an AI-generated molecule — reached a preclinical candidate in about 18 months. In 2025 it reported positive Phase IIa results (Nature Medicine: +98.4 mL FVC at 60 mg vs −20.3 mL for placebo, n=71) and progressed to Phase III — the clearest prospective clinical proof-of-concept to date for end-to-end AI drug discovery.",
        },
      },
      {
        title: "Key Technology Platforms & Regional Spotlight",
        content: [],
        pillars: [
          { num: "Structural Biology", title: "AlphaFold 3 / RoseTTAFold", description: "Protein structure prediction enabling structure-based drug design at unprecedented scale.", colorVariant: "violet" },
          { num: "Generative Chemistry", title: "Insilico / Schrödinger", description: "De novo molecular generation using reinforcement learning and diffusion models.", colorVariant: "violet" },
          { num: "Multi-Omics Platform", title: "GATK / DESeq2 / STAR", description: "Genomics variant calling, RNA-seq differential expression, and integrated pathway analysis.", colorVariant: "violet" },
          { num: "Self-Driving Labs", title: "Emerald Cloud / Ada", description: "Closed-loop AI-robot systems that design, execute, and learn from experiments autonomously.", colorVariant: "violet" },
        ],
        callout: {
          type: "spotlight",
          label: "🌍 Regional Spotlight: R&D by Geography",
          content: "In the <strong>US</strong>, R&D digital transformation is driven by large multinationals investing hundreds of millions and AI-first biotechs (Recursion — which absorbed Exscientia in 2024 — Insilico, and Alphabet's Isomorphic Labs). In the <strong>EU</strong>, Roche/Genentech has arguably the most mature pharmaceutical AI capability globally; top European pharma companies have invested $2B+ since 2019. In <strong>India</strong>, organisations like Syngene, Lambda Therapeutics, and R&D divisions of Sun Pharma and Dr. Reddy's are investing in computational chemistry platforms.",
        },
        pullQuote: {
          text: "GCC computational biology teams that master AlphaFold 3, molecular dynamics simulation, and generative chemistry are not supporting drug discovery — they are doing drug discovery.",
          cite: "KR · Chapter 4 · R&D & Drug Discovery",
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
          "The large majority of new trials now incorporate at least one decentralised or digital element, and industry surveys expect DCT methods to feature in most trials by 2026. Clinical trials remain the most expensive component of drug development.",
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
          "The technology infrastructure for DCTs encompasses five interconnected layers: ePRO/eCOA platforms for patient-reported outcomes, connected wearable devices for continuous physiological monitoring, eConsent platforms, central lab kits and home nursing services, and telemedicine/virtual visit platforms.",
        ],
      },
    ],
  },
  {
    id: "ch6",
    num: "06",
    partLabel: "Part II · Value Chain",
    title: "Manufacturing Excellence & Smart Supply Chain",
    lead: "Industry 4.0, digital twins, PAT-enabled real-time release testing, and AI-powered supply chain orchestration.",
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
          "The fourth industrial revolution is reshaping pharmaceutical manufacturing. Companies with mature digital manufacturing platforms report roughly 25–40% faster batch release/validation cycles and materially lower deviation rates.",
          "Pharmaceutical supply chains are among the most complex in any industry — governed by stringent regulatory requirements, temperature sensitivity, serialisation mandates, and the critical imperative of patient safety.",
        ],
        pillars: [
          { num: "Technology 01", title: "Digital Twin Manufacturing", description: "Real-time virtual replicas enabling process optimisation and batch failure prediction.", colorVariant: "gold" },
          { num: "Technology 02", title: "Process Analytical Technology", description: "Real-time in-line analytical measurements linked to control systems for continuous verification.", colorVariant: "gold" },
          { num: "Technology 03", title: "AI-Powered Quality Systems", description: "NLP-based deviation management, ML-powered batch disposition, predictive CAPA scoring.", colorVariant: "gold" },
          { num: "Technology 04", title: "Serialisation & Track & Trace", description: "Global serialisation ensuring DSCSA, FMD, and emerging market compliance.", colorVariant: "gold" },
          { num: "Technology 05", title: "Cold Chain AI Monitoring", description: "AI platforms continuously monitor temperature, humidity, and transit conditions, predicting excursions before they occur.", colorVariant: "gold" },
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
    lead: "AI-augmented quality management systems ensuring GxP compliance while reducing manual overhead and accelerating batch release.",
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
          "Quality management in pharmaceutical manufacturing is undergoing a fundamental shift from reactive, paper-based compliance systems to proactive, AI-augmented digital quality platforms.",
          "AI-powered quality risk analytics can continuously monitor process parameter trends, deviation history, environmental monitoring results, raw material variability, and equipment performance — identifying emerging risk signals before they manifest as quality events.",
        ],
        pillars: [
          { num: "QMS 01", title: "Deviation Management", description: "AI-powered deviation triage, automated classification, root cause analysis using NLP on historical data.", colorVariant: "coral" },
          { num: "QMS 02", title: "CAPA Management", description: "Predictive CAPA scoring, automated effectiveness check scheduling, trend analysis across global sites.", colorVariant: "coral" },
          { num: "QMS 03", title: "Change Control", description: "Digital change control with impact assessment automation, cross-site change harmonisation.", colorVariant: "coral" },
          { num: "QMS 04", title: "Document Management", description: "SOP lifecycle management, AI-powered document review, version control with regulatory audit trail.", colorVariant: "coral" },
        ],
      },
      {
        title: "Inspection Readiness & Data Integrity",
        content: [
          "Digital quality management systems improve inspection outcomes. The availability of complete, accurate, and instantly retrievable electronic records — compared to days of paper record retrieval — is itself an indicator of quality culture that regulators evaluate.",
          "The ALCOA+ data integrity principles — Attributable, Legible, Contemporaneous, Original, Accurate, plus Complete, Consistent, Enduring, and Available — are the foundation of digital quality compliance.",
        ],
        callout: {
          type: "spotlight",
          label: "🌍 Regional Spotlight: Quality Digital Transformation",
          content: "In the <strong>US</strong>, FDA's data integrity expectations have created powerful regulatory motivation for quality digitalisation. In the <strong>EU</strong>, GMP Annex 11 sets prescriptive expectations for computerised systems. In <strong>India</strong>, quality management digitalisation is the single most impactful lever for manufacturers seeking to improve standing with FDA, EMA, and other stringent regulatory authorities.",
        },
      },
    ],
  },
  {
    id: "ch8",
    num: "08",
    partLabel: "Part II · Value Chain",
    title: "Regulatory Affairs & Compliance",
    lead: "Building regulatory intelligence capabilities that transform submissions from reactive documentation to proactive competitive strategy.",
    metrics: [
      { value: "180+", label: "Global Regulatory Agencies" },
      { value: "eCTD", label: "Universal Submission Format" },
      { value: "ICH", label: "International Harmonisation" },
      { value: "CDSCO", label: "India Central Drugs Authority" },
    ],
    tags: ["Regulatory", "FDA", "EMA", "Submissions", "eCTD", "PV"],
    sections: [
      {
        title: "Executive Summary",
        content: [],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "Regulatory affairs sits at the intersection of science, law, and operations — and it is being profoundly reshaped by digitalisation. Digital tools are making the regulatory function faster, more accurate, and more strategically powerful — from submission automation through pharmacovigilance to real-world evidence integration.",
        },
      },
      {
        title: "Global Regulatory Agency Comparison",
        content: [
          "In a company with a 50-product global portfolio across 100 markets, regulatory affairs manages approximately 5,000 individual product registrations, each with its own lifecycle of updates, renewals, and pharmacovigilance obligations.",
        ],
        table: {
          headers: ["Agency", "Region", "Key Submission", "Priority Programme", "Review Timeline", "Digital Platform"],
          rows: [
            ["FDA", "🇺🇸 US", "NDA / BLA", "Breakthrough Therapy; Fast Track; RMAT", "10–12 mo / 6 mo priority", "ESG Gateway · FDA CDER Portal"],
            ["EMA", "🇪🇺 EU", "MAA Centralised", "PRIME; Conditional MA; Accelerated", "210 active days", "IRIS · eSubmission · CTIS"],
            ["CDSCO", "🇮🇳 India", "New Drug Application (Form 44)", "Accelerated Approval (Rule 101)", "12–18 months", "SUGAM portal"],
            ["PMDA", "🇯🇵 Japan", "JNDA / JBLA", "SAKIGAKE; Conditional Early Approval", "9–12 months", "eCTD-J; PMDA Gateway"],
            ["NMPA", "🇨🇳 China", "NDA via CDE", "Priority Review; Special Approval", "12–24 months", "CDE portal"],
          ],
        },
      },
      {
        title: "eCTD Common Technical Document Architecture",
        content: [
          "The eCTD is the globally mandated format for regulatory submissions. Modern submission automation platforms treat the submission as a structured data object where individual scientific claims are linked to their source data systems.",
        ],
        diagram: {
          title: "eCTD Common Technical Document — Module Architecture",
          svgContent: SVG_ECTD_MODULES,
        },
      },
      {
        title: "Digital Pharmacovigilance & Signal Detection",
        content: [
          "Pharmacovigilance — the ongoing monitoring of drug safety — is both a legal obligation and a scientific discipline. AI-assisted processing tools can intake cases from structured and unstructured sources, perform automated triage, pre-populate case narratives using NLG, and generate submission-ready ICSRs. These tools are reducing PV case processing costs by 40–60%.",
          "Multi-source signal detection — combining spontaneous reporting data with claims data, EHRs, social media, and published literature — identifies emerging safety issues faster than any single data source alone.",
        ],
        diagram: {
          title: "Digital Pharmacovigilance Signal Detection Flow",
          svgContent: SVG_PV_SIGNAL_FLOW,
        },
      },
      {
        title: "Real-World Evidence in Regulatory Decision-Making",
        content: [
          "Real-world evidence (RWE) is playing an increasingly significant role in regulatory decision-making globally. The FDA's RWE Programme, the EMA's DARWIN EU platform, and the UK MHRA's RWE Framework are all expanding the contexts in which RWE is accepted.",
          "RWE can support label expansions without additional randomised trials, satisfy post-approval commitments more rapidly, provide comparative effectiveness data that payers require, and enable rare disease regulatory pathways.",
        ],
        callout: {
          type: "spotlight",
          label: "🌍 Regional Spotlight: Regulatory Digitalisation",
          content: "In the <strong>US</strong>, FDA's DSCSA implementation, Digital Health Centre of Excellence, AI/ML SaMD action plan, and RWE Framework collectively define a regulatory environment that rewards digital capabilities. In the <strong>EU</strong>, EMA's DARWIN EU real-world evidence infrastructure and IDMP structured data standards are major investments. In <strong>India</strong>, CDSCO's SUGAM portal has digitalised the submission process, significantly reducing processing times.",
        },
      },
    ],
  },
  {
    id: "ch9",
    num: "09",
    partLabel: "Part III · Commercial",
    title: "Commercial Excellence, Sales & Marketing",
    lead: "Leveraging AI, omnichannel capabilities, and advanced analytics to drive launch excellence and commercial performance.",
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
          content: "The commercial function in pharma is undergoing a fundamental transformation — from relationship-driven field sales to data-driven, omnichannel, precision engagement. Organisations deploying next-generation customer engagement platforms are generating 2–3× the sales force effectiveness of laggards. Leading pharma companies report $200M+ annual commercial efficiency gains from AI-driven commercial transformation.",
        },
      },
      {
        title: "GCC Commercial Capabilities",
        content: [],
        pillars: [
          { num: "Capability 01", title: "Launch Analytics & Excellence", description: "Pre-launch forecasting, competitive intelligence, KOL mapping, and real-time launch performance tracking.", colorVariant: "teal" },
          { num: "Capability 02", title: "Next-Best-Action AI", description: "ML-powered HCP engagement optimisation across channels — email, rep visits, medical affairs, digital.", colorVariant: "teal" },
          { num: "Capability 03", title: "HEOR & Market Access", description: "Health economics modelling, payer analytics, value dossier development, and reimbursement strategy.", colorVariant: "teal" },
          { num: "Capability 04", title: "Omnichannel Orchestration", description: "Integrated digital marketing, medical education, patient support portals, and CRM analytics.", colorVariant: "teal" },
        ],
      },
    ],
  },
  {
    id: "ch10",
    num: "10",
    partLabel: "Part III · Commercial",
    title: "Patient Engagement & Digital Therapeutics",
    lead: "Embedding the patient voice into every decision — from clinical design through market access — powered by digital health, DTx, and RWE.",
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
          content: "The patient has moved from the periphery to the centre of pharmaceutical strategy. Companies that still treat patient engagement as a post-approval support program bolt-on will be disadvantaged compared to organisations that have built patient centricity into their operating model from target identification through therapy lifecycle management.",
        },
      },
      {
        title: "The Empowered Patient & Digital PSPs",
        content: [
          "Digital PSPs use mobile apps as the primary patient interface, providing personalised disease information, injection training via video, symptom tracking, adherence monitoring, and direct nurse educator access. Studies consistently show 15–25% higher six-month therapy persistence rates vs. standard pharmacy dispensing.",
        ],
      },
      {
        title: "Digital Therapeutics (DTx)",
        content: [
          "Regulated digital therapeutics are software validated in clinical trials to demonstrate safety and efficacy for specific conditions. Approved DTx exist for depression, anxiety, insomnia, ADHD, diabetes management, and chronic pain.",
          "For pharma companies, DTx represent both a threat (displacement of pharmaceutical approaches) and an opportunity (complementing the pharmaceutical portfolio).",
        ],
      },
      {
        title: "Regional Spotlight: Patient Engagement",
        content: [],
        callout: {
          type: "spotlight",
          label: "🌍 Regional Spotlight: Patient Engagement",
          content: "In the <strong>US</strong>, patient engagement is most advanced in specialty therapeutic areas — oncology, rare disease, immunology. In the <strong>EU</strong>, GDPR and EHDS shape patient data programmes with federated pan-European health data infrastructure. In <strong>India</strong>, ABDM's health ID infrastructure and 1.4 billion population create vast opportunity for digital patient engagement.",
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
    partLabel: "Part IV · Enterprise Enablers",
    title: "Enterprise Systems & Architecture",
    lead: "The technology backbone — ERP modernisation, data platforms, MLOps, integration architecture, and cybersecurity for pharma.",
    metrics: [
      { value: "S/4HANA", label: "ERP Modernisation" },
      { value: "Lakehouse", label: "Data Platform Architecture" },
      { value: "MLOps", label: "AI Model Lifecycle" },
      { value: "Zero Trust", label: "Cybersecurity Model" },
    ],
    tags: ["Enterprise Architecture", "ERP", "Data Platform", "MLOps", "Cybersecurity"],
    sections: [
      {
        title: "Enterprise Architecture Overview",
        content: [
          "Enterprise architecture in pharma must integrate a complex landscape of GxP-validated systems (ERP, MES, LIMS, eQMS), clinical platforms (EDC, CTMS, eTMF), commercial systems (CRM, NBA engines), and data platforms — while maintaining regulatory compliance, data integrity, and cybersecurity.",
        ],
        table: {
          headers: ["Platform Layer", "Leading Platforms", "Pharma Capability", "Strategic Decision"],
          rows: [
            ["Enterprise ERP", "SAP S/4HANA, Oracle Cloud ERP, Workday", "Finance, supply chain, procurement, HR", "S/4HANA migration: $100M–$500M, 3–7 years"],
            ["Life Sciences Cloud", "Veeva Vault (RIM, QMS, Clinical), IQVIA", "CRM, quality, regulatory, clinical ops", "Platform consolidation vs. best-of-breed"],
            ["Data Platform", "Databricks, Snowflake, AWS/Azure/GCP", "Data lake, warehouse, lakehouse, analytics", "Cloud-native architecture; data mesh adoption"],
            ["AI/ML Platform", "AWS SageMaker, Azure ML, Vertex AI, Palantir", "MLOps, model training, feature store, monitoring", "GxP validation of AI models and pipelines"],
            ["Integration", "MuleSoft, SAP Integration Suite, Apache Kafka", "API management, iPaaS, event streaming", "Integration bus vs. event-driven architecture"],
          ],
        },
      },
      {
        title: "MLOps Maturity for GxP-Regulated Pharma AI",
        content: [
          "Deploying AI models in a GxP-regulated environment requires a specialised MLOps framework integrating DevOps with 21 CFR Part 11, GAMP 5, and FDA/EMA AI/ML guidance.",
        ],
        table: {
          headers: ["MLOps Level", "Characteristics", "GxP Validation Posture", "Pharma Readiness"],
          rows: [
            ["Level 0 — Manual", "Models in notebooks; no versioning or monitoring", "No validation; audit trail absent", "Not acceptable for any GxP deployment"],
            ["Level 1 — Reproducible", "Version control; documented model cards; manual deployment", "Partial validation evidence", "Acceptable only for research/exploratory"],
            ["Level 2 — Automated Training", "CI/CD for training; feature store; model registry", "Automated validation evidence; IQ/OQ", "Minimum for GxP-adjacent analytics"],
            ["Level 3 — Automated Deployment", "Full CI/CD; drift detection; retraining triggers", "Validated deployment pipeline; CAPA workflow", "Required for GxP-impacting AI"],
            ["Level 4 — Autonomous", "Self-improving; continuous learning; human-in-the-loop", "Full audit trail; explainability layer", "Gold standard for AI drug discovery"],
          ],
        },
        insightBox: {
          icon: "🔐",
          label: "Cybersecurity",
          title: "Pharma is a high-value cyber target",
          description: "The Merck NotPetya attack (2017) cost an estimated $870M. OT security for manufacturing, IP protection, and clinical data integrity are critical. Cybersecurity maturity must target NIST CSF Level 3 across all five functions.",
        },
      },
      {
        title: "The Pharmaceutical Data Platform",
        content: [
          "Modern pharmaceutical data platforms adopt a layered architecture: the <strong>data lake</strong> for raw/unstructured data, the <strong>data warehouse</strong> for curated analytical data, and the <strong>lakehouse</strong> merging both with governance. The <strong>data mesh</strong> concept — decentralised domain ownership with shared governance — is gaining adoption among the most mature organisations.",
        ],
        callout: {
          type: "spotlight",
          label: "🌍 Regional Spotlight: Technology Architecture",
          content: "In the <strong>US</strong>, FDA's cloud computing guidance (2023) has removed primary regulatory uncertainty for cloud adoption. In the <strong>EU</strong>, GDPR data residency and the EU AI Act create specific compliance dimensions for architecture decisions. In <strong>India</strong>, the GCC ecosystem provides the world's deepest pool of enterprise software engineering talent — increasingly the actual builders of pharmaceutical enterprise technology platforms for global companies.",
        },
      },
    ],
  },
  {
    id: "ch12",
    num: "12",
    partLabel: "Part IV · Enterprise Enablers",
    title: "Finance, Procurement & Cybersecurity",
    lead: "Digital transformation of horizontal functions — the operational infrastructure on which the entire enterprise runs.",
    metrics: [
      { value: "40–60%", label: "Finance Close Time Reduction" },
      { value: "3–5%", label: "Procurement Savings" },
      { value: "$870M", label: "Merck Cyber Attack Cost" },
      { value: "NIST CSF", label: "Cybersecurity Framework" },
    ],
    tags: ["Finance", "Procurement", "Cybersecurity", "NIST"],
    sections: [
      {
        title: "Executive Summary",
        content: [],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "The horizontal functions — finance, procurement, and cybersecurity — are not glamorous transformation subjects. But they are the operational infrastructure on which the entire enterprise runs, and their digital maturity directly determines whether the transformation investments in earlier chapters deliver their promised returns.",
        },
      },
      {
        title: "Pharmaceutical Cybersecurity Risk Landscape",
        content: [],
        table: {
          headers: ["Cybersecurity Domain", "Pharma-Specific Risk", "Regulatory Obligation", "Key Controls"],
          rows: [
            ["OT / ICS Security", "Manufacturing disruption; quality compromise via MES/DCS attack", "FDA 2023 cybersecurity guidance; EU NIS2", "Air-gapping; network segmentation; OT monitoring"],
            ["Clinical Data & EDC", "Trial data manipulation; patient data breach", "21 CFR Pt 11; ICH E6(R3); GDPR Art. 9", "E2E encryption; role-based access; audit trails"],
            ["Intellectual Property", "Theft of drug formulations, molecular data, protocols", "Trade Secrets Act; GDPR; local IP laws", "DLP; CASB; privileged access management"],
            ["Third-Party / Supply Chain", "CRO/CMO/API supplier compromise", "DSCSA; EU FMD; GDPR DPA requirements", "Vendor security assessments; zero-trust integration"],
            ["Ransomware & BCP", "Manufacturing halt; clinical data loss; PV deadline failure", "GMP continuity obligations; GDPR 72hr notification", "Immutable backups; SOC 24/7; IR playbooks"],
            ["Submission Integrity", "Unauthorised modification of eCTD post-lock", "21 CFR Pt 11; EU Annex 11; eIDAS", "Cryptographic signing; Vault audit logs"],
          ],
        },
      },
      {
        title: "Finance & Procurement Transformation",
        content: [
          "<strong>Intelligent Finance:</strong> Cloud-based finance platforms (SAP S/4HANA Finance, Oracle Cloud, Workday) automate transactional operations — AP/AR processing, GL reconciliation, financial consolidation — through RPA and AI exception handling. Organisations report 40–60% reduction in time-to-close and 30–50% reduction in transactional headcount.",
          "<strong>Digital Procurement:</strong> Source-to-Pay platforms (SAP Ariba, Coupa, Ivalua) combined with AI-powered spend analytics and should-cost modelling. For a $10–20B annual spend, 3–5% improvement represents $300M–$1B in direct bottom-line impact.",
        ],
        callout: {
          type: "spotlight",
          label: "🌍 Regional Spotlight: Finance & Cyber by Geography",
          content: "In the <strong>US</strong>, SEC reporting requirements and Inflation Reduction Act pricing provisions are driving sophisticated FP&A platform investment. In the <strong>EU</strong>, GDPR, the EU AI Act, and diverse VAT digitisation mandates add compliance complexity. In <strong>India</strong>, e-invoicing mandates, GST network reconciliation, and India's deep finance talent make GCCs natural locations for global pharmaceutical finance shared service centres.",
        },
      },
    ],
  },
  {
    id: "ch13",
    num: "13",
    partLabel: "Part IV · Enterprise Enablers",
    title: "Implementation Roadmap & Change Management",
    lead: "The 36-month execution blueprint — sequencing capability development, technology investment, talent evolution, and measurable value.",
    metrics: [
      { value: "36 Mo", label: "Full Transformation" },
      { value: "3-Wave", label: "Execution Architecture" },
      { value: "OKR", label: "Quarterly Accountability" },
      { value: "CDO", label: "Chief Digital Officer" },
    ],
    tags: ["Roadmap", "Execution", "Change Management", "36-Month Plan"],
    sections: [
      {
        title: "Executive Summary",
        content: [],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "This chapter answers the harder question: how do you actually get there? The implementation roadmap translates aspiration into a sequenced, resourced, and governed programme of work — and the change management framework ensures technology investments deliver the behavioural and operational changes that create actual value.",
        },
      },
      {
        title: "The 36-Month Pharma Digital Transformation Roadmap",
        content: [],
        diagram: {
          title: "36-Month Pharma Digital Transformation Roadmap — Three Waves",
          svgContent: SVG_36_MONTH_ROADMAP,
        },
        steps: [
          { num: "W1", title: "Wave 1 · Stabilise & Connect (Months 1–12)", description: "CDO role established. Cloud data lake foundation deployed. eQMS & EBR pilot at lead site. eCTD submission automation live. PV NLP intake deployed. PDMF baseline assessment. Target: Level 2→3." },
          { num: "W2", title: "Wave 2 · Differentiate & Scale (Months 13–24)", description: "AI drug discovery platform operational. DCT capability in 3+ active trials. NBA commercial engine deployed. PAT + digital twin at mfg sites. eQMS rolled out globally. RWE programme generating evidence. Target: Level 3→4." },
          { num: "W3", title: "Wave 3 · Lead & Innovate (Months 25–36)", description: "Clinical candidate from AI discovery. Real-time release testing approved. Autonomous PV signal monitoring. Outcome-based contracts with payers. GCC established as digital CoE. Target: Level 4→5." },
        ],
      },
      {
        title: "Change Management: The Human Side of Transformation",
        content: [
          "Technology deployment is the visible part of digital transformation. Change management is the invisible part that determines whether technology is actually used. The pharmaceutical industry has a particularly challenging change management environment.",
        ],
        table: {
          headers: ["Dimension", "Common Failure Mode", "Proven Mitigation", "Success Signal"],
          rows: [
            ["Executive Sponsorship", "CEO delegates to IT; business leaders disengage", "DLC chaired by CEO/COO; C-suite digital KPIs", "C-suite attendance at DLC ≥85%"],
            ["Digital Talent", "Hiring not started until Wave 2; skills gap kills delivery", "CDO hired Month 1; talent strategy funded early", "Digital roles filled on schedule; attrition <12%"],
            ["Change Fatigue", "Multiple concurrent deployments overwhelm teams", "Change sequencing; protected capacity; early wins", "User adoption ≥80% within 90 days of go-live"],
            ["GxP Validation Drag", "Validation added as afterthought; 3–6 month delays", "GxP Digital Validation team from Day 1; risk-based CSA", "Validation cycle ≤8 weeks for non-critical systems"],
            ["Data Quality", "AI built on dirty data; wrong decisions; credibility lost", "Data quality sprint in Wave 1; MDM in place first", "Data completeness KPIs published monthly"],
          ],
        },
      },
    ],
  },
  {
    id: "ch14",
    num: "14",
    partLabel: "Part IV · Enterprise Enablers",
    title: "ROI, Emerging Technology & Quality Engineering",
    lead: "Measuring transformation ROI, the ACUITAS quality framework, and the emerging technologies that will define pharma's next decade.",
    metrics: [
      { value: "7", label: "ACUITAS Pillars" },
      { value: "ROI", label: "Value Realisation" },
      { value: "Quantum", label: "Computing Frontier" },
      { value: "Agentic AI", label: "Next Frontier" },
    ],
    tags: ["ROI", "ACUITAS", "Quality Engineering", "Emerging Tech"],
    sections: [
      {
        title: "ROI & Value Realisation",
        content: [
          "Measuring the return on digital transformation investment requires a framework that captures both quantitative financial returns and qualitative strategic benefits.",
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
      },
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
          description: "40–60% reduction in post-production defects, 30–50% improvement in submission quality, 25–35% reduction in CSV effort.",
        },
      },
      {
        title: "Emerging Technology Outlook",
        content: [
          "The next wave of pharma digital transformation will be shaped by several technologies currently in early deployment or late-stage development.",
        ],
        bulletPoints: [
          "<strong>Quantum Computing</strong> — Molecular simulation at quantum scale, enabling drug design breakthroughs currently impossible with classical computing",
          "<strong>Federated Learning</strong> — Training AI models across hospital networks without sharing patient data, unlocking real-world evidence at scale",
          "<strong>Digital Twins (Patient)</strong> — Computational models of individual patients predicting treatment response before therapy begins",
          "<strong>Agentic AI</strong> — Autonomous AI agents that plan, execute, and iterate on complex multi-step workflows with minimal human supervision",
          "<strong>Brain-Computer Interfaces</strong> — CNS drug development supported by direct neural measurement, enabling precision neuroscience",
        ],
        pullQuote: {
          text: "The pharma enterprise that executes this roadmap with discipline will not just have transformed itself — it will have transformed the competitive position of its global parent organisation.",
          cite: "KR · Chapter 14",
        },
      },
    ],
  },
  {
    id: "ch15",
    num: "A",
    partLabel: "Appendix",
    title: "Glossary, Vendor Landscape & KPI Framework",
    lead: "Comprehensive reference materials — glossary of digital pharma terms, technology vendor landscape, PDMF self-assessment, KPI framework, and references.",
    metrics: [
      { value: "60+", label: "Glossary Terms" },
      { value: "40+", label: "Vendors Mapped" },
      { value: "20", label: "PDMF Diagnostic Questions" },
      { value: "20+", label: "KPIs Defined" },
    ],
    tags: ["Glossary", "Vendors", "KPI", "PDMF Diagnostic", "Reference"],
    sections: [
      {
        title: "Glossary of Digital Pharma Terms (Selected)",
        content: [
          "This glossary consolidates key terminology used across the handbook. For the full 60+ term glossary, download the PDF resource.",
        ],
        table: {
          headers: ["Acronym", "Full Name", "Definition"],
          rows: [
            ["ABDM", "Ayushman Bharat Digital Mission", "India's national digital health infrastructure — 900M+ ABHA health IDs by 2026, 1B+ records linked"],
            ["ALCOA+", "Data Integrity Principles", "Attributable, Legible, Contemporaneous, Original, Accurate + Complete, Consistent, Enduring, Available"],
            ["CSA", "Computer Software Assurance", "FDA's 2022 risk-based framework replacing traditional CSV — reduces documentation burden"],
            ["CTIS", "Clinical Trials Information System", "EU-wide digital portal for clinical trial applications across all member states"],
            ["DCT", "Decentralised Clinical Trial", "Trial design bringing activities to participants through digital tools and home health services"],
            ["DTx", "Digital Therapeutic", "Software-based medical intervention requiring clinical evidence and regulatory oversight"],
            ["eCTD", "Electronic Common Technical Document", "Globally mandated electronic format for regulatory submissions"],
            ["FAIR", "Findable Accessible Interoperable Reusable", "Framework for organising and managing scientific data for both humans and machines"],
            ["GCC", "Global Capability Centre", "Dedicated enterprise facility providing high-value functions — India hosts ~2,117 with 2.36M professionals (FY2026)"],
            ["MLOps", "Machine Learning Operations", "Practices and tools for deploying, monitoring, and maintaining ML models in production"],
            ["NBA", "Next Best Action", "AI-driven recommendation for optimal HCP engagement based on profile and behaviour"],
            ["OEE", "Overall Equipment Effectiveness", "Manufacturing metric: availability × performance × quality. World-class pharma target: 85%"],
            ["PAT", "Process Analytical Technology", "Real-time measurement of critical quality attributes using inline/atline/online sensors"],
            ["PDMF", "Pharma Digital Maturity Framework", "Five-level, seven-dimension maturity model introduced in Chapter 2"],
            ["RWE", "Real-World Evidence", "Evidence from EHRs, claims databases, registries, and wearables — distinct from RCTs"],
          ],
        },
      },
      {
        title: "Technology Vendor Landscape",
        content: [],
        table: {
          headers: ["Category", "Leading Vendors", "Pharma Capability"],
          rows: [
            ["Enterprise ERP", "SAP S/4HANA, Oracle Cloud ERP, Workday", "Finance, supply chain, procurement, HR backbone"],
            ["Clinical Technology", "Medidata Rave, Veeva Vault EDC/CTMS, Signant Health", "EDC, eCOA, eConsent, trial management"],
            ["Quality Management", "Veeva Vault QualityOne, MasterControl, TrackWise", "eQMS, deviation, CAPA, change control"],
            ["Manufacturing", "Rockwell (FactoryTalk), Siemens (OPCENTER), Werum PAS-X", "MES, PAT, digital twin, EBR"],
            ["Commercial", "Veeva CRM, IQVIA OCE, Aktana (AI/NBA), Komodo Health", "HCP engagement, real-world data, NBA engine"],
            ["AI/ML & Data", "Databricks, Snowflake, Schrödinger, Recursion, BenevolentAI", "Lakehouse, computational chemistry, AI drug discovery"],
            ["Regulatory", "Veeva Vault RIM, IQVIA Regulatory, Lorenz docuBridge", "eCTD, submission management, regulatory intelligence"],
            ["Digital Health", "Medisafe, Propeller Health, Talkspace, WellDoc", "Adherence, respiratory, mental health, diabetes DTx"],
          ],
        },
      },
      {
        title: "Digital Transformation KPI Framework",
        content: [
          "This KPI framework provides the measurement foundation for the transformation scorecard. Each KPI should be baselined at programme start with targets per horizon.",
        ],
        table: {
          headers: ["Domain", "KPI", "Baseline (Pre-DT)", "Target (Year 2)", "Target (Year 3+)"],
          rows: [
            ["R&D Discovery", "Discovery cycle: hypothesis → preclinical candidate", "4–5 years", "2–3 years", "12–18 months (AI-native)"],
            ["Clinical Operations", "Patient recruitment cycle time", "8–12 months Phase III", "30% reduction", "50% reduction"],
            ["Manufacturing", "Overall Equipment Effectiveness (OEE)", "65–72%", "75–80%", "≥85% (world class)"],
            ["Manufacturing", "Batch right-first-time rate", "85–90%", "93%", "≥97%"],
            ["Quality", "CAPA closure cycle (critical)", "45–90 days", "<30 days", "<21 days"],
            ["Regulatory", "eCTD NDA/MAA prep time (data lock → submission)", "18–24 months", "12–15 months", "6–9 months"],
            ["Regulatory", "ICSR processing cycle", "8–12 days", "<7 days", "<5 days (AI-assisted)"],
            ["Commercial", "NBA adoption rate (% field team acting on NBA)", "N/A (baseline: 0)", "50%", ">80%"],
            ["Enterprise", "Monthly financial close cycle time", "8–12 days", "6 days", "≤5 days"],
            ["Enterprise", "Cybersecurity NIST CSF maturity score", "Level 1–2", "Level 2–3", "Level 3 across all functions"],
          ],
        },
      },
      {
        title: "PDMF Self-Assessment: Board Diagnostic (Selected)",
        content: [
          "Score 0–12: PDMF Level 1–2 (foundational investment urgently needed). Score 13–16: Level 2–3 (acceleration required). Score 17–20: Level 3+ (optimisation and differentiation focus).",
        ],
        bulletPoints: [
          "Does the organisation have a unified cloud data platform integrating R&D, clinical, manufacturing, and commercial data?",
          "Are AI/ML models deployed in production — not just piloted — in at least two functional domains?",
          "Are commercial field teams receiving next-best-action recommendations in CRM in real time?",
          "Does manufacturing use predictive analytics to identify quality risks before deviations occur?",
          "Are electronic batch records deployed at all major manufacturing facilities?",
          "Has the organisation defined and filled a Chief Digital Officer role with enterprise mandate?",
          "Does the organisation benchmark its digital maturity against peers annually?",
        ],
      },
      {
        title: "References and Further Reading",
        content: [
          "This edition was refreshed to mid-2026 by re-verifying every headline figure against the named primary sources below.",
        ],
        callout: {
          type: "spotlight",
          label: "🔎 2026 Refresh — Sources & Method",
          content: "Market sizes are stated on a labelled price basis (list/ex-manufacturer vs net of rebates); vendor market forecasts are given as ranges rather than single points; and every figure is dated to its source year. Where authoritative sources conflict — e.g. R&D cost per drug (Deloitte 2024 ~$2.23B/asset vs older capitalised ~$2.6B), clinical success rates (BIO vs Wong et al.), or India market scope (domestic vs total industry) — the handbook states the conservative, best-supported value and notes the basis.",
        },
        table: {
          headers: ["Category", "Reference", "Authors / Organisation", "Year", "Why It Matters"],
          rows: [
            ["Strategic", "AI in Pharma: From Promise to Pipeline", "Boston Consulting Group", "2023", "CEO-level evidence base for AI value across drug development"],
            ["R&D", "Highly accurate protein structure prediction with AlphaFold", "Jumper et al., Nature", "2021", "Seminal paper; foundational for structure-based drug design"],
            ["R&D", "Diagnosing the decline in pharmaceutical R&D efficiency", "Scannell et al., Nature Reviews Drug Discovery", "2012", "Eroom's Law original paper; productivity crisis context"],
            ["Clinical", "E6(R3) Good Clinical Practice Guideline", "ICH", "2025", "Reached Step 4 Jan 2025 (EU effective Jul 2025); risk-based, decentralised-ready GCP"],
            ["Manufacturing", "GAMP 5 Second Edition", "ISPE", "2022", "Gold standard for GxP computer system validation"],
            ["Regulatory", "Computer Software Assurance", "US FDA", "2022", "Risk-based CSA replacing traditional CSV"],
            ["India & GCC", "India GCC / Life-Sciences GCC Landscape", "NASSCOM–Zinnov", "2025", "Comprehensive data on India GCC pharma capabilities"],
            ["Technology", "The Data Lakehouse", "Databricks / Ben Lorica et al.", "2023", "Architectural reference for unified analytics and AI platform"],
            ["Market", "Global Use of Medicines / Outlook to 2029", "IQVIA Institute", "2025", "Primary basis for global & regional medicine-spend figures"],
            ["R&D", "Measuring the Return of Pharmaceutical Innovation (15th ed.)", "Deloitte", "2024", "Average cost-per-asset (~$2.23B) methodology"],
            ["Clinical", "Clinical Development Success Rates", "BIO · Informa · QLS", "2021", "Phase I→approval success (~7.9%) benchmark"],
            ["India & GCC", "India GCC Landscape (FY2026)", "NASSCOM–Zinnov", "2026", "2,117 GCCs · 2.36M professionals · $98.4B"],
            ["Cell & Gene", "State of the Industry / Sector Report", "ARM · ASGCT–Citeline", "2025", "~1,905 active cell & gene therapy trials; approvals"],
            ["Digital Health", "Year-End Funding Report", "Rock Health", "2025", "Digital-health VC (~$80B 2020–24; AI ~54% of 2025)"],
            ["Talent", "Future of Jobs Report", "World Economic Forum", "2025", "Reskilling need (~60% by 2027; 77% of employers)"],
            ["Policy", "Medicare Drug Price Negotiation", "CMS · KFF", "2025", "IRA first-10 prices live Jan 2026; next 15 for 2027"],
            ["Regulatory", "GAMP Guide: Artificial Intelligence", "ISPE", "2025", "GxP validation lifecycle for AI/ML systems"],
          ],
        },
        insightBox: {
          icon: "📚",
          label: "Living Document",
          title: "This handbook is a living document",
          description: "The frameworks, benchmarks, and case studies reflect the state of practice as of mid-2026. Digital transformation is accelerating — treat this as a strategic foundation supplemented by ongoing engagement with primary sources.",
        },
      },
    ],
  },
  {
    id: "ch16",
    num: "16",
    partLabel: "Part V · GCC India",
    title: "Pharma Global Capability Centres in India",
    lead: "India's GCC ecosystem as the digital transformation engine for global pharma — capabilities, talent, and strategic value.",
    metrics: [
      { value: "2,117", label: "GCCs in India (FY26)" },
      { value: "2.36M", label: "GCC Professionals" },
      { value: "130+", label: "Pharma & Life-Sci GCCs" },
      { value: "$98.4B", label: "GCC Sector Revenue" },
    ],
    tags: ["GCC Strategy", "India", "Talent", "Digital CoE"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "India has become the world's pre-eminent hub for pharmaceutical Global Capability Centres. What began as labour-cost arbitrage has matured into a genuine innovation engine — combining an unmatched reservoir of scientific, digital, and regulatory talent with policy tailwinds and a deepening ecosystem. For many global pharma companies, the India GCC is no longer where work is sent; it is where transformation is led.",
          "This chapter is the strategic core of the handbook's thesis: the GCC is the operating vehicle through which pharma's AI-era transformation is executed. Understanding how to build, empower, and elevate it is the difference between a support centre and a source of enterprise advantage.",
        ],
        callout: {
          type: "spotlight",
          label: "🇮🇳 Regional Spotlight",
          content: "Over 30 multinational pharma companies now run dedicated GCCs in India — across Hyderabad, Bengaluru, Mumbai, and Pune — spanning computational drug discovery, clinical data science, regulatory intelligence, RWE/HEOR, pharmacovigilance analytics, and manufacturing intelligence, typically at a 30–45% cost advantage with productivity uplift.",
        },
      },
      {
        title: "Why India Became the Pharma GCC Capital",
        content: [
          "The advantage is compounding, not incidental. India pairs the world's largest pool of clinical-data-management, biostatistics, and regulatory talent with a strong STEM pipeline (IISc, the IITs, and a deep pharma-sciences base), 24/7 timezone coverage, and English-language regulatory fluency. Layered on top are policy accelerants — the ABDM digital-health backbone, the SUGAM regulatory portal, and the PLI manufacturing-modernisation scheme — and proximity to the world's largest generic-manufacturing base.",
        ],
      },
      {
        title: "The GCC Capability Ladder",
        content: [
          "Mature GCCs climb a predictable ladder — from executing defined tasks to co-owning enterprise outcomes. The strategic goal is to move up it deliberately, not to plateau at cost-arbitrage.",
        ],
        steps: [
          { num: "Wave 1", title: "Cost & Capacity", description: "Labour-arbitrage delivery of defined, transactional work under HQ direction." },
          { num: "Wave 2", title: "Capability & Standardisation", description: "Ownership of end-to-end processes, standardised globally, with quality and SLAs." },
          { num: "Wave 3", title: "Centre of Excellence", description: "Deep-domain CoEs that set global standards and drive continuous improvement." },
          { num: "Wave 4", title: "Innovation Partner ('HQ Twin')", description: "Co-creation of strategy, ownership of global mandates, and contribution to the innovation pipeline." },
        ],
        insightBox: {
          icon: "🚀",
          label: "GCC Principle",
          title: "Empowerment, not just scale, unlocks value",
          description: "The highest-performing GCCs are distinguished less by headcount than by decision rights: global mandates they own outright, seats on strategy committees, and the autonomy to innovate rather than merely execute.",
        },
      },
      {
        title: "What Pharma GCCs Own — and the India Advantage",
        content: [
          "Across the value chain, GCCs now carry mandates that were once HQ-only.",
        ],
        table: {
          headers: ["GCC Capability", "Value Delivered", "India Advantage"],
          rows: [
            ["Computational Drug Discovery", "Target ID, CADD, generative molecule design", "IISc/IIT pipeline; ~60% lower cost vs US/EU"],
            ["Clinical Data Science", "Data management, biostatistics, programming", "World's largest CDM talent pool"],
            ["Regulatory Intelligence", "eCTD compilation, agency responses, PSUR", "24/7 multilingual coverage"],
            ["RWE & HEOR", "Evidence generation, market-access models", "ABDM infrastructure; large patient base"],
            ["Pharmacovigilance Analytics", "ICSR processing, signal detection", "30–40% lower cost; AI-augmented 24/7 ops"],
            ["Manufacturing Intelligence", "Digital twin, predictive quality, SCM analytics", "Proximity to India's manufacturing base"],
          ],
        },
      },
      {
        title: "From Cost Centre to Value Centre",
        content: [
          "The strategic inflection is the shift from measuring a GCC by cost saved to measuring it by value created — molecules supported, trials accelerated, evidence generated, innovation contributed. Making that shift requires deliberate reinvestment of arbitrage savings into AI and platform capability, a governance model that grants real autonomy, and a talent strategy that builds leadership, not just capacity.",
        ],
        bulletPoints: [
          "<strong>Reinvest the savings</strong> — Recycle cost-arbitrage gains into AI, automation, and platforms rather than banking them.",
          "<strong>Grant real mandates</strong> — Global process ownership and strategy-committee seats convert a support centre into a partner.",
          "<strong>Build leaders, not just teams</strong> — L&D, mobility, and AI-literacy programmes make the GCC a leadership pipeline.",
          "<strong>Anchor to the ecosystem</strong> — Academic, start-up, and policy links (IISc/IIT, ABDM, PLI) compound the advantage.",
        ],
        pullQuote: {
          text: "The India GCC has stopped being the place global pharma sends work and started becoming the place it sources transformation. That inversion is the story of the decade.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "From Cost Centre to Innovation Engine",
        "content": [
          "The Indian pharma GCC has moved through four waves: cost arbitrage, process ownership, capability building, and now innovation leadership. Leading centres co-create enterprise strategy, hold end-to-end global mandates, and contribute to nearly every late-stage molecule in their parent's portfolio.",
          "<strong>The economics remain compelling.</strong> Indian GCCs deliver roughly 30–60% operational savings and 60–70% lower talent cost versus US/EU baselines — but the durable advantage is now the talent pool itself: the world's deepest reservoir of computational biology, clinical data management, biostatistics, and enterprise-software engineering talent."
        ],
        "table": {
          "headers": [
            "Capability",
            "Maturity",
            "Global Mandate",
            "India Advantage"
          ],
          "rows": [
            [
              "Computational Drug Discovery",
              "Scaling",
              "Target ID, CADD, generative design",
              "IISc/IIT pipeline; 60% lower cost"
            ],
            [
              "Clinical Data Science",
              "Advanced",
              "Phase I–IV data management, SAS/R programming",
              "World's largest CDM talent pool"
            ],
            [
              "Regulatory & PV Operations",
              "Advanced",
              "eCTD, PSUR/PBRER, ICSR processing",
              "24/7 multilingual; AI-augmented"
            ],
            [
              "Real-World Evidence & HEOR",
              "Scaling",
              "RWE studies, market access models",
              "ABDM data; large patient base"
            ],
            [
              "Manufacturing Intelligence",
              "Emerging",
              "Digital twin, predictive quality",
              "Proximity to Indian mfg base"
            ]
          ]
        }
      },
      {
        "title": "Policy Tailwinds & the National GCC Framework",
        "content": [
          "India's Union Budget 2025-26 announced a <strong>National Framework for GCCs</strong> to guide state policy and extend incentives into tier-2 cities — signalling that GCCs are now treated as strategic national infrastructure. The pharma <strong>Production-Linked Incentive (PLI)</strong> scheme had drawn ₹41,943 crore of investment by end-2025, and the <strong>ABDM</strong> has issued 900M+ ABHA health IDs with 1B+ records linked."
        ],
        "callout": {
          "type": "spotlight",
          "label": "🌍 Regional Spotlight: The Hyderabad–Bengaluru Corridor",
          "content": "India hosts the largest concentration of US FDA-approved manufacturing sites outside the US and supplies ~20% of the world's generic medicines by volume (~47% of US generic prescriptions). The combination of manufacturing depth, digital-native talent, and national digital-health rails makes the Hyderabad–Bengaluru–Mumbai–Pune corridor the natural nerve centre for pharma's global digital operating model."
        },
        "insightBox": {
          "icon": "🏆",
          "label": "GCC Insight",
          "title": "Own the mandate, not the ticket",
          "description": "The GCCs that create the most value stop measuring themselves in tickets closed and start measuring in molecules advanced, submissions filed, and cycle-time removed from the enterprise. Governance that grants real decision rights — not just delivery capacity — is the difference between a scaled centre and a strategic one."
        }
      }
    ],
  },
  {
    id: "ch17",
    num: "17",
    partLabel: "Part VI · Advanced Modalities",
    title: "Biopharmaceuticals, Cell & Gene Therapy — Digital Transformation",
    lead: "Digital infrastructure for next-generation biologics, cell therapies, and gene therapy manufacturing.",
    metrics: [
      { value: "~42%", label: "Biologics Share (2023)" },
      { value: "~1,900", label: "Active CGT Trials" },
      { value: "40+", label: "Approved CGT Products" },
      { value: "$2.2M+", label: "Casgevy List Price" },
    ],
    tags: ["Biologics", "Cell Therapy", "Gene Therapy", "Digital Manufacturing"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "Biopharmaceuticals — monoclonal antibodies, cell therapies, gene therapies, and RNA-based medicines — are the fastest-growing segment of the industry and the hardest to manufacture. The digital playbook built for small-molecule pharma does not transfer cleanly: these are living, complex products where the process defines the product, batch sizes can be a single patient, and a logistics error can cost a life.",
          "Advanced modalities therefore demand a purpose-built digital infrastructure — one engineered for biological variability, personalised batches, and end-to-end traceability. The organisations that master this become gatekeepers of the most valuable therapeutic frontier.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "In cell and gene therapy the batch size is often one, and the product is a patient's own living cells. That single fact rewrites manufacturing, quality, and logistics: digital chain-of-identity and chain-of-custody are not features — they are the licence to operate.",
        },
      },
      {
        title: "Why Advanced Modalities Break the Traditional Playbook",
        content: [
          "Small-molecule manufacturing is deterministic and scalable: the same chemical process yields the same product at any volume. Biologics are grown, not synthesised — subject to biological variability where subtle process shifts change the product's structure and function. Cell and gene therapies push this further into personalisation, where each batch may serve a single patient and cannot be remade if it fails.",
        ],
        table: {
          headers: ["Modality", "Examples", "Core Digital Challenge", "Key Capability"],
          rows: [
            ["Monoclonal Antibodies", "mAbs, biosimilars, ADCs", "Bioprocess variability; comparability", "PAT, bioprocess digital twin"],
            ["Cell Therapy (Autologous)", "CAR-T, TCR-T", "Batch-of-one; vein-to-vein logistics", "Chain of identity & custody"],
            ["Cell Therapy (Allogeneic)", "Off-the-shelf NK/CAR", "Scale-out vs scale-up; potency", "Scalable MES, potency analytics"],
            ["Gene Therapy", "AAV, lentiviral vectors", "Vector yield; long-term follow-up", "Process analytics, RWE registries"],
            ["RNA / Nucleic Acid", "mRNA, siRNA, ASO", "Rapid design; cold chain", "Cloud-native design, cold-chain AI"],
          ],
        },
      },
      {
        title: "Digital Manufacturing for Biologics & CGT",
        content: [
          "The manufacturing stack for advanced modalities is built on real-time process understanding. Because the process defines the product, control shifts from end-of-line inspection to continuous, in-line verification.",
        ],
        steps: [
          { num: "01", title: "Connected Bioprocess", description: "Single-use and continuous bioprocessing instrumented with sensors feeding a real-time data historian." },
          { num: "02", title: "PAT & Advanced Control", description: "In-line analytics linked to control systems for continuous verification and, ultimately, real-time release." },
          { num: "03", title: "Electronic Batch Records & MES", description: "Paperless, exception-based batch execution — essential when every autologous batch is unique." },
          { num: "04", title: "Bioprocess Digital Twin", description: "Model-based prediction of yield, quality, and failure — trained on multivariate process data." },
          { num: "05", title: "QC & Comparability Analytics", description: "High-dimensional analytics for potency, identity, and comparability across process changes and sites." },
        ],
      },
      {
        title: "The Autologous Challenge: Vein-to-Vein Orchestration",
        content: [
          "For autologous therapies, the supply chain <em>is</em> the product. A patient's cells are collected (apheresis), shipped cryopreserved, engineered, tested, and returned — a vein-to-vein loop where a mislabel or a temperature excursion is catastrophic and irreversible. This demands a digital <strong>chain of identity</strong> (COI) linking every material to one patient, an unbroken <strong>chain of custody</strong> (COC), and orchestration software that schedules manufacturing slots against patient and clinic availability.",
        ],
        insightBox: {
          icon: "🧬",
          label: "Modality Principle",
          title: "The batch size is one — design for it",
          description: "You cannot inspect quality into a single-patient batch or remake it if it fails. Traceability, right-first-time execution, and predictive quality move from best practice to absolute prerequisite.",
        },
      },
      {
        title: "Data, Analytics & the GCC Role",
        content: [
          "Advanced modalities generate uniquely rich data — and uniquely long obligations, with gene therapies requiring years of patient follow-up. A mature GCC is well positioned to own the analytical and data-management backbone: bioprocess data science, comparability analytics, potency-assay modelling, long-term follow-up registries, and the orchestration analytics behind vein-to-vein logistics.",
        ],
        bulletPoints: [
          "<strong>Bioprocess Data Science</strong> — Multivariate analysis and digital twins to reduce batch failure and accelerate scale-up.",
          "<strong>Chain-of-Custody Analytics</strong> — Real-time monitoring and exception management across the vein-to-vein loop.",
          "<strong>Long-Term Registries</strong> — Durable RWE infrastructure for the multi-year safety follow-up gene therapies require.",
          "<strong>Cold-Chain Intelligence</strong> — Predictive monitoring of cryogenic logistics to prevent irreversible excursions.",
        ],
        pullQuote: {
          text: "In advanced therapies the process is the product and the supply chain is the patient. Digital is not an efficiency play here — it is the only way the medicine reaches the person alive.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "The Manufacturing Constraint",
        "content": [
          "Casgevy (approved December 2023 as the first CRISPR/Cas9 medicine, ~$2.2M list) generated only about $10M of revenue in 2024 — a stark illustration that complex <strong>autologous</strong> manufacturing, not efficacy, now gates value. Every dose is a batch of one, with a vein-to-vein journey that must preserve chain-of-identity and chain-of-custody end to end.",
          "This reframes the digital agenda for advanced modalities around four capabilities: <strong>digital chain-of-identity/custody</strong>, <strong>electronic batch records and batch genealogy</strong>, <strong>decentralised / point-of-care manufacturing</strong>, and <strong>AI-driven process control</strong> for living-cell processes with far higher variability than small molecules."
        ],
        "pillars": [
          {
            "num": "Modality 01",
            "title": "Monoclonal Antibodies & ADCs",
            "description": "Antibody-drug conjugates are now a top oncology pillar (Enhertu ~$5B in 2025); complex conjugation and cold chain raise the digital-manufacturing bar.",
            "colorVariant": "violet"
          },
          {
            "num": "Modality 02",
            "title": "Cell Therapy (CAR-T)",
            "description": "Autologous batch-of-one production; FDA removed REMS for autologous CAR-T in 2025, easing access as manufacturing digitises.",
            "colorVariant": "violet"
          },
          {
            "num": "Modality 03",
            "title": "Gene Therapy",
            "description": "One-time genetic correction (Casgevy, Lyfgenia); value gated by scalable vector production and chain-of-identity.",
            "colorVariant": "violet"
          },
          {
            "num": "Modality 04",
            "title": "mRNA Platform",
            "description": "Beyond COVID: mRESVIA (first mRNA RSV vaccine, 2024) and personalised cancer vaccines (mRNA-4157/V940) in Phase 3.",
            "colorVariant": "violet"
          }
        ]
      },
      {
        "title": "Digital Backbone for Advanced Therapies",
        "content": [
          "Biosimilars add a parallel pressure: the Humira biosimilar wave cut its US share from ~96% to ~78% by late 2024, and Stelara ($10.4B in 2024) now faces multiple biosimilars — intensifying the need for cost-efficient, digitally-optimised biologics manufacturing."
        ],
        "callout": {
          "type": "spotlight",
          "label": "🌍 Geography Shift & Decentralised Manufacturing",
          "content": "APAC (≈750 CGT trials) is overtaking North America in new-trial initiation, China-driven. In parallel, decentralised / point-of-care CGT manufacturing is maturing (ARPA-H's GIVE programme, launched Sept 2025, targets sub-5-day vein-to-vein) — turning the factory into a distributed, software-orchestrated network rather than a single site."
        }
      }
    ],
  },
  {
    id: "ch18",
    num: "18",
    partLabel: "Part VI · Advanced Modalities",
    title: "Real-World Evidence — Strategy, Infrastructure & Execution",
    lead: "Building enterprise RWE capabilities from data strategy to regulatory-grade evidence generation.",
    metrics: [
      { value: "~$5.4B", label: "RWE Market (2025)" },
      { value: "~25%", label: "Label Expansions Using RWE" },
      { value: "180M+", label: "DARWIN EU Patients" },
      { value: "900M+", label: "ABDM Health IDs" },
    ],
    tags: ["RWE", "Real-World Data", "HEOR", "Regulatory Evidence"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "Real-world evidence (RWE) has moved from a payer-facing afterthought to a strategic capability that shapes regulatory decisions, label expansions, safety surveillance, and commercial strategy. The passage of the 21st Century Cures Act and the FDA's subsequent RWE Framework signalled a durable shift: regulators will consider fit-for-purpose real-world data (RWD) as part of the evidence base, not merely as supporting colour.",
          "The winners treat RWE as an enterprise data-and-evidence platform, not a series of one-off studies. That means industrial-grade data acquisition, standardised data models, transparent methodology, and governance robust enough to withstand regulatory scrutiny — capabilities that map naturally onto a mature GCC.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "RWE now informs a large and growing share of regulatory submissions and post-approval commitments. The value is unlocked not by data volume but by fit-for-purpose design: the right data source, a defensible study design, and provenance that a regulator or payer can audit end to end.",
        },
      },
      {
        title: "From Real-World Data to Real-World Evidence",
        content: [
          "The distinction matters. <strong>Real-world data</strong> is the raw material — routinely collected health data from outside conventional trials. <strong>Real-world evidence</strong> is the clinical or economic conclusion derived from analysing that data with a defensible methodology. The gap between the two is bridged by data quality, study design, and statistical rigour — which is precisely where most programmes succeed or fail.",
        ],
        table: {
          headers: ["Data Source", "Examples", "Strength", "Typical Use"],
          rows: [
            ["Electronic Health Records", "Inpatient/outpatient EHR, clinical notes", "Rich clinical depth; outcomes", "Effectiveness, safety, NLP phenotyping"],
            ["Administrative Claims", "Payer/insurer claims, pharmacy", "Large, longitudinal, complete capture", "Utilisation, adherence, HEOR"],
            ["Disease & Product Registries", "Oncology, rare disease, device registries", "Curated, condition-specific", "Natural history, external control arms"],
            ["Patient-Generated & Wearable", "ePRO, apps, sensors, DTx", "Continuous, patient-centric", "Adherence, digital endpoints, DCT"],
            ["National Digital Health", "ABDM (India), EHDS (EU) infrastructure", "Population scale; policy-backed", "Population evidence, market access"],
          ],
        },
      },
      {
        title: "Regulatory-Grade RWE",
        content: [
          "Not all RWE is created equal. Regulators evaluate RWD on <strong>relevance</strong> (does it capture the right population, exposure, and outcome?) and <strong>reliability</strong> (is it accurate, complete, and traceable?). The most consequential applications — external/synthetic control arms, label expansions, and single-arm trial support — demand prospective protocol registration, pre-specified analyses, and end-to-end provenance.",
          "The FDA's RWE Framework, the EMA's DARWIN EU initiative, and comparable moves by other agencies converge on the same expectation: transparent, reproducible methods applied to fit-for-purpose data. RWE that cannot be audited is RWE that cannot be used for a regulatory decision.",
        ],
        insightBox: {
          icon: "🔍",
          label: "Evidence Principle",
          title: "Fit-for-purpose beats big data",
          description: "A modest, well-characterised dataset with a pre-registered protocol and auditable lineage will carry more regulatory weight than a vast dataset assembled and analysed after the question was asked.",
        },
      },
      {
        title: "The RWE Technology & Data Stack",
        content: [
          "Enterprise RWE runs on a repeatable pipeline — the same five stages every credible programme industrialises.",
        ],
        steps: [
          { num: "01", title: "Data Acquisition & Licensing", description: "Source, license, and onboard EHR, claims, registry, and PGHD assets with clear consent and data-use terms." },
          { num: "02", title: "Curation to a Common Data Model", description: "Map heterogeneous sources to a standard model (e.g., OMOP CDM) with terminology harmonisation to enable reproducible, portable analytics." },
          { num: "03", title: "Analytics & Methodology", description: "Causal inference, comparative effectiveness, and bias-control methods (propensity scoring, negative controls) applied to pre-specified questions." },
          { num: "04", title: "Evidence Generation & Dossiers", description: "Regulatory-grade study reports, HEOR models, and value dossiers packaged for agencies and payers." },
          { num: "05", title: "Governance & Provenance", description: "End-to-end lineage, privacy compliance (HIPAA/GDPR/DPDP), and audit trails that make every conclusion traceable to its source." },
        ],
      },
      {
        title: "Where RWE Creates Value",
        content: [
          "RWE is a cross-functional asset — the same platform serves regulatory, medical, safety, and commercial demand.",
        ],
        bulletPoints: [
          "<strong>Regulatory & Label Expansion</strong> — External control arms and post-approval evidence to broaden indications and satisfy commitments faster.",
          "<strong>HEOR & Market Access</strong> — Real-world effectiveness and cost-outcome evidence for payer negotiations and value-based contracts.",
          "<strong>Safety & Pharmacovigilance</strong> — Signal validation and characterisation at population scale, complementing spontaneous reporting.",
          "<strong>Clinical Development</strong> — Feasibility, site selection, protocol optimisation, and synthetic control arms that shrink trials.",
        ],
        callout: {
          type: "spotlight",
          label: "🌍 Regional Spotlight: India's RWE Advantage",
          content: "India pairs a vast, diverse patient population with the ABDM digital-health backbone (900M+ ABHA health IDs, 1B+ records linked) and a deep analytics talent pool. Pharma GCCs in India are becoming enterprise RWE engines — running data curation, OMOP mapping, HEOR modelling, and evidence generation 24/7 at a fraction of onshore cost, while population-scale data assets mature.",
        },
        pullQuote: {
          text: "In the next decade, the constraint on evidence will not be the ability to run a trial — it will be the discipline to turn the data the world already generates into conclusions a regulator will trust.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "Calibrating the Regulatory Reality",
        "content": [
          "The frequently-cited claim that most FDA approvals rely on RWD overstates the case. In practice, roughly <strong>23–28% of drug and biologic label expansions</strong> incorporated real-world evidence in recent years (23.3% in 2022, 27.7% in 2023, 23.7% in 2024) — with higher penetration in specific subsets (RWE appears in a majority of supplemental applications). RWE augments the evidence base; it has not replaced the randomised controlled trial.",
          "Where RWE delivers most: <strong>label expansions</strong> without new randomised trials, faster satisfaction of <strong>post-approval commitments</strong>, <strong>comparative-effectiveness</strong> data payers demand, external control arms for rare disease, and continuous <strong>safety signal detection</strong>."
        ],
        "table": {
          "headers": [
            "RWD Source",
            "Primary Use",
            "Strength",
            "Governance Challenge"
          ],
          "rows": [
            [
              "EHRs / Claims",
              "Effectiveness, safety, HEOR",
              "Scale and longitudinality",
              "Fragmentation; coding variance"
            ],
            [
              "Registries",
              "Rare disease, external controls",
              "Curated, disease-specific",
              "Cost; completeness"
            ],
            [
              "Wearables / Digital biomarkers",
              "Continuous physiological signals",
              "Objective, high-frequency",
              "Validation; consent"
            ],
            [
              "Genomic / Multi-omic",
              "Precision stratification",
              "Mechanistic depth",
              "Privacy; interpretation"
            ]
          ]
        }
      },
      {
        "title": "The RWE Operating Model",
        "content": [
          "Enterprise RWE capability rests on a governed data platform (FAIR data, common data models such as OMOP), regulatory-grade study execution (pre-registered protocols, transparent methods), and a fluent HEOR function. India's <strong>ABDM</strong> — now 900M+ ABHA IDs with 1B+ linked records — is creating one of the world's largest structured real-world data substrates, and GCC-based RWE/HEOR teams are increasingly the ones turning it into evidence."
        ],
        "insightBox": {
          "icon": "📊",
          "label": "RWE Insight",
          "title": "Fit-for-purpose beats big",
          "description": "Regulators do not reward data volume; they reward relevance, reliability, and transparency. An RWE study designed around a specific decision — with a pre-specified protocol and a defensible data-quality argument — outperforms a larger, exploratory dataset every time."
        }
      }
    ],
  },
  {
    id: "ch19",
    num: "19",
    partLabel: "Part VI · Advanced Modalities",
    title: "AI Ethics, Bias & Responsible Innovation in Pharma",
    lead: "Governance frameworks for ethical AI deployment in healthcare and drug development.",
    metrics: [
      { value: "EU AI Act", label: "In Force Aug 2024" },
      { value: "Aug 2027", label: "High-Risk Med-Device AI" },
      { value: "GAMP AI", label: "ISPE Guide (2025)" },
      { value: "7-Step", label: "FDA AI Credibility" },
    ],
    tags: ["AI Ethics", "Responsible AI", "Governance", "Bias"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "In most industries, an AI error is an inconvenience. In pharma, it can mean a missed diagnosis, a biased trial, or an unsafe dose. As AI becomes embedded across discovery, trials, safety, and commercial operations, responsible-innovation frameworks are not a compliance afterthought — they are the foundation of the trust on which the entire enterprise depends.",
          "Responsible AI in pharma means engineering fairness, transparency, accountability, and safety into systems from the start, and governing them across their lifecycle. The organisations that do this well will move faster, not slower — because trust and regulatory acceptance are what let AI reach real decisions.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "Responsible AI is a speed enabler, not a brake. Systems that are fair, explainable, validated, and governed earn the regulatory and clinical trust required to deploy them in consequential decisions. Ungoverned AI accumulates risk it can never spend.",
        },
      },
      {
        title: "Why Ethics Is a Business Imperative",
        content: [
          "Three forces make responsible AI non-negotiable in life sciences. <strong>Patient safety</strong>: models influence decisions that affect health, so errors and bias carry clinical consequence. <strong>Trust</strong>: patients, clinicians, and regulators must believe AI-influenced decisions are sound, or adoption stalls. <strong>Regulation</strong>: binding rules are arriving, and non-compliance will foreclose markets. Ethics, trust, and commercial viability have become the same conversation.",
        ],
      },
      {
        title: "The Core Risk Domains",
        content: [
          "Responsible-AI programmes organise around a consistent set of risks — each with a concrete mitigation.",
        ],
        table: {
          headers: ["Risk Domain", "What Can Go Wrong", "Mitigation"],
          rows: [
            ["Bias & Fairness", "Under-represented groups get worse predictions", "Representative data; subgroup performance testing"],
            ["Transparency", "Black-box outputs clinicians can't trust", "Explainability; model cards; documented intended use"],
            ["Privacy", "Exposure of PHI/genomic data", "Minimisation, de-identification, consent, governance"],
            ["Accountability", "No one owns an AI-influenced decision", "Human-in-the-loop; clear decision ownership"],
            ["Safety & Robustness", "Drift or failure in production", "Monitoring, revalidation, fail-safes"],
          ],
        },
      },
      {
        title: "The Responsible AI Governance Framework",
        content: [
          "Principles only matter when operationalised. A working framework runs five layers, from stated values to continuous monitoring.",
        ],
        steps: [
          { num: "01", title: "Principles & Policy", description: "Enterprise responsible-AI principles (fairness, transparency, accountability, safety, privacy) with teeth in policy." },
          { num: "02", title: "Governance Body", description: "A cross-functional AI governance council spanning quality, regulatory, legal, security, ethics, and the business." },
          { num: "03", title: "Risk Classification", description: "Every use case tiered by risk (mirroring EU AI Act logic); high-risk uses get the most rigour." },
          { num: "04", title: "Validation & Assurance", description: "Bias testing, explainability, and GxP-aligned validation before deployment in regulated contexts." },
          { num: "05", title: "Monitoring & Audit", description: "Post-deployment performance, drift, and fairness monitoring with a full audit trail." },
        ],
      },
      {
        title: "Regulation Is Arriving",
        content: [
          "The regulatory environment is crystallising fast. The <strong>EU AI Act</strong> introduces a risk-tiered regime in which much medical and safety-critical AI is 'high-risk' and subject to strict obligations. The FDA, Health Canada, and the UK MHRA have jointly published <strong>Good Machine Learning Practice</strong> principles, and the WHO has issued ethics guidance for AI in health. The direction is unambiguous: demonstrable governance, not good intentions, will be the price of deployment.",
        ],
        insightBox: {
          icon: "⚖️",
          label: "Governance Principle",
          title: "Design for the audit you will eventually face",
          description: "Build every high-impact model as though a regulator will one day ask how it was trained, tested for bias, validated, and monitored — because increasingly, one will. Governance designed in is cheap; governance retrofitted is not.",
        },
        pullQuote: {
          text: "In pharma, trust is the real product of responsible AI. Get it right and AI reaches the decisions that matter; get it wrong and no amount of accuracy will earn it a seat at the table.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "The Compliance Timeline",
        "content": [
          "The EU AI Act phases in over several years: prohibited practices and AI-literacy obligations from Feb 2025, general-purpose AI governance from Aug 2025, most high-risk Annex III systems from Aug 2026, and <strong>high-risk AI embedded in medical devices (via MDR/IVDR) from 2 Aug 2027</strong>. The FDA's guidance remains draft (issued 7 Jan 2025; not finalised as of mid-2026) and should not be cited as settled law."
        ],
        "table": {
          "headers": [
            "Regime",
            "Status",
            "Scope for Pharma",
            "Practical Obligation"
          ],
          "rows": [
            [
              "EU AI Act",
              "In force Aug 2024; phased to 2027",
              "High-risk AI, incl. medical devices",
              "Risk mgmt, data governance, human oversight, logging"
            ],
            [
              "FDA AI guidance",
              "Draft (Jan 2025)",
              "AI supporting regulatory decisions",
              "7-step, context-of-use credibility assessment"
            ],
            [
              "ISPE GAMP AI Guide",
              "Published Jul 2025",
              "GxP AI/ML systems",
              "Full validation lifecycle; bias & hallucination controls"
            ],
            [
              "21 CFR Part 11 / Annex 11",
              "In force",
              "Electronic records for AI outputs",
              "Audit trails, e-signatures, data integrity (ALCOA+)"
            ]
          ]
        }
      },
      {
        "title": "From Principles to Validated Practice",
        "content": [
          "The <strong>ISPE GAMP Guide: Artificial Intelligence (July 2025)</strong> extends GAMP 5 into a concrete AI/ML validation lifecycle covering data quality, bias, hallucination rate, and prompt sensitivity — the bridge between ethical intent and deployable, audited systems. Bias is not abstract: models trained on non-representative populations can systematically misperform for under-represented groups, a patient-safety and equity risk that demands explicit measurement."
        ],
        "callout": {
          "type": "case-study",
          "label": "📋 Responsible-AI Operating Pattern",
          "content": "Leading programmes pair an <strong>AI governance board</strong> (ethics, legal, quality, science) with an <strong>AI/ML CoE</strong> that owns MLOps, model cards, bias testing, and explainability. Every GxP-impacting model carries a documented context-of-use, a validation dossier, and human-in-the-loop checkpoints — so 'responsible AI' is a controlled process, not a slogan."
        },
        "insightBox": {
          "icon": "⚖️",
          "label": "Governance",
          "title": "Regulate the use, not the algorithm",
          "description": "Both the FDA and the EU anchor oversight in context-of-use and risk, not in the model architecture. The same model can be low-risk in a research assistant and high-risk in a batch-release decision. Govern where the output touches a patient or a regulated record."
        }
      }
    ],
  },
  {
    id: "ch20",
    num: "20",
    partLabel: "Part VI · Advanced Modalities",
    title: "The CDO Playbook — Digital Leadership & Strategy",
    lead: "Building the Chief Digital Officer function and digital transformation organisation.",
    metrics: [
      { value: "CDO / CAIO", label: "C-Suite Mandate" },
      { value: "2024", label: "Pfizer & Lilly CAIOs" },
      { value: "1–5%", label: "Revenue on Digital" },
      { value: "3-Horizon", label: "Operating Model" },
    ],
    tags: ["CDO", "Digital Leadership", "Operating Model", "Strategy"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "The Chief Digital Officer has become one of the most consequential — and most precarious — roles in pharma leadership. The mandate is enterprise-wide, the budget is significant, and the expectations are compressed into tenures that average just three to five years. The CDOs who succeed treat the role not as head of a technology function, but as the architect of a new operating model.",
          "This playbook distils what separates digital leaders who deliver compounding value from those who stall in pilot purgatory: a clear mandate, a federated operating model, disciplined value realisation, and relentless attention to adoption and change — the human side that technology cannot fix.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "The single strongest predictor of CDO success is not budget size or technology choice — it is the clarity of the mandate and the strength of CEO and board sponsorship. Where the CDO owns a business outcome (cycle time, cost-to-serve, launch effectiveness) rather than a technology portfolio, transformation compounds; where they own 'innovation' in the abstract, it stalls.",
        },
      },
      {
        title: "The Mandate: What a Pharma CDO Actually Owns",
        content: [
          "A CDO without a precise mandate inherits everyone's digital wishlist and no authority to prioritise it. The mandate must be defined as a small set of enterprise outcomes, with the budget, talent, and decision rights to deliver them.",
        ],
        bulletPoints: [
          "<strong>Digital & Data Strategy</strong> — Owning the enterprise digital roadmap and its linkage to corporate strategy and the P&L, not a parallel technology agenda.",
          "<strong>Data & AI Platform</strong> — The shared, governed foundation (cloud, data platform, MLOps, GenAI) that every function builds on rather than re-inventing.",
          "<strong>Digital Product & Delivery</strong> — A product-operating model that ships and scales capabilities across R&D, clinical, manufacturing, and commercial.",
          "<strong>Change, Adoption & Literacy</strong> — Building the digital-native culture and skills without which technology investment does not convert to value.",
          "<strong>Value Realisation</strong> — Owning a transparent benefits-tracking discipline that ties every initiative to a measurable business outcome.",
        ],
      },
      {
        title: "The Digital Operating Model",
        content: [
          "The CDO's core deliverable is an operating model — the repeatable machine that turns strategy into scaled, adopted capability. Five engines run in parallel.",
        ],
        steps: [
          { num: "01", title: "Strategy & Portfolio", description: "A prioritised, outcome-linked portfolio with clear stage-gates; ruthless about killing low-value pilots and funding what scales." },
          { num: "02", title: "Platform & Data", description: "Shared cloud, data, and AI foundations with governance built in — so functions consume capability rather than rebuild it." },
          { num: "03", title: "Product & Delivery", description: "Cross-functional product teams with persistent ownership, agile delivery, and enterprise-architecture guardrails." },
          { num: "04", title: "Adoption & Change", description: "Embedded change management, digital-literacy programmes, and incentives aligned to new ways of working." },
          { num: "05", title: "Value & Governance", description: "A benefits-realisation office and steering cadence that make value visible to the board and reallocate capital dynamically." },
        ],
        insightBox: {
          icon: "🎯",
          label: "Leadership Principle",
          title: "Own an outcome, not an org chart",
          description: "CDOs who are measured on business outcomes — time-to-market, cost-to-serve, launch effectiveness — command the cross-functional authority to change how work is done. Those measured on 'delivering digital' are structurally set up to stall.",
        },
      },
      {
        title: "Organisation Design: Federated by Default",
        content: [
          "There is no single right structure — but the centre of gravity for mature pharma is a federated (hub-and-spoke) model: a lean central team owns platforms, standards, and scarce talent, while embedded digital teams sit inside the business functions and the GCC executes at scale.",
        ],
        table: {
          headers: ["Model", "Description", "Best For", "Primary Risk"],
          rows: [
            ["Centralised", "One central digital unit owns strategy, platform, and delivery", "Early-stage transformation; setting standards", "Bottlenecks; disconnect from the business"],
            ["Decentralised", "Each function runs its own digital agenda and teams", "Highly autonomous, mature functions", "Duplication; fragmented data & tooling"],
            ["Federated (hub & spoke)", "Central platform + standards; embedded teams in functions; GCC scale", "Scaling enterprises with a strong GCC", "Requires clear decision rights to avoid friction"],
          ],
        },
      },
      {
        title: "The First 12 Months: A Sequenced Agenda",
        content: [
          "Credibility is won early. A disciplined first year secures sponsorship, delivers visible proof, and lays the platform for scale — in that order.",
        ],
        steps: [
          { num: "0–90 days", title: "Listen, Diagnose, Anchor", description: "Run a PDMF maturity baseline, secure an explicit board-endorsed mandate, and align on 3–4 outcome metrics. Identify two high-visibility quick wins." },
          { num: "3–6 mo", title: "Prove & Platform", description: "Deliver the quick wins, stand up the shared data/AI platform foundation, and establish governance and the value-realisation office." },
          { num: "6–12 mo", title: "Scale & Institutionalise", description: "Roll out the operating model, launch digital-literacy at scale, and publish a transparent benefits dashboard to the board. Set the Horizon 2 agenda." },
        ],
      },
      {
        title: "Funding, Value Realisation & Why Leaders Fail",
        content: [
          "Digital budgets at leading pharma routinely exceed $50M, yet spend is not the constraint — conversion of spend to value is. Fund transformation as a managed portfolio with stage-gates and dynamic reallocation, not as an annual lump sum, and make benefits visible to the board every quarter.",
          "The failure modes are consistent and avoidable: <strong>pilot purgatory</strong> (endless proofs-of-concept that never scale), <strong>technology without process redesign</strong> (automating dysfunction), <strong>weak sponsorship</strong> (a mandate that evaporates under budget pressure), <strong>neglected adoption</strong> (tools no one uses), and <strong>vanity metrics</strong> (activity reported instead of outcomes).",
        ],
        pullQuote: {
          text: "The best digital leaders are not the ones with the boldest technology vision — they are the ones who convert vision into adopted capability, and adopted capability into outcomes the board can see.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "The Digital Leadership Mandate",
        "content": [
          "The single strongest predictor of transformation success is a clearly articulated vision endorsed by the CEO and board, with an empowered leader to execute it. Investment typically runs <strong>1–3% of revenue for companies in scaling mode, rising to 4–5% in accelerated transformation</strong>. Governance must be the lightest model that works — clear decision rights, minimal approval layers."
        ],
        "pillars": [
          {
            "num": "Mandate 01",
            "title": "Strategy & Portfolio",
            "description": "Owns the digital/AI portfolio, prioritisation, and the build-vs-buy-vs-partner architecture.",
            "colorVariant": "indigo"
          },
          {
            "num": "Mandate 02",
            "title": "Data & AI Platform",
            "description": "Enterprise data foundation, MLOps, and GxP-validated AI pipelines as shared infrastructure.",
            "colorVariant": "indigo"
          },
          {
            "num": "Mandate 03",
            "title": "Talent & Culture",
            "description": "Digital-native hiring, reskilling at scale, and the change management that makes technology stick.",
            "colorVariant": "indigo"
          },
          {
            "num": "Mandate 04",
            "title": "Value Realisation",
            "description": "A transparent KPI/OKR scorecard tying investment to cycle-time, quality, and revenue outcomes.",
            "colorVariant": "indigo"
          }
        ]
      },
      {
        "title": "Sequencing the Transformation",
        "content": [],
        "steps": [
          {
            "num": "H1",
            "title": "Horizon 1 · Stabilise (0–12 mo)",
            "description": "Establish the role and governance, deploy the cloud data foundation, and land early wins that fund credibility."
          },
          {
            "num": "H2",
            "title": "Horizon 2 · Differentiate (12–36 mo)",
            "description": "Scale AI across clinical, regulatory, PV, and commercial; stand up CoEs; embed OKRs and change management."
          },
          {
            "num": "H3",
            "title": "Horizon 3 · Lead (36+ mo)",
            "description": "Operate as a co-equal innovation partner — AI-native processes, outcome-based payer contracts, exported capability."
          }
        ],
        "pullQuote": {
          "text": "The organisations that will lead the next decade are not those with the largest R&D budgets, but those with the most intelligent, interconnected, and adaptive operating models — and a leader empowered to build one.",
          "cite": "KR · Chapter 20 · The CDO Playbook"
        }
      }
    ],
  },
  {
    id: "ch21",
    num: "21",
    partLabel: "Part VI · Advanced Modalities",
    title: "Digital Transformation Case Studies",
    lead: "Real-world implementation stories from pharma digital leaders.",
    metrics: [
      { value: "$36.5B", label: "Lilly GLP-1 (2025)" },
      { value: "~20k", label: "Sanofi 'plai' Users/day" },
      { value: "4,000+", label: "Moderna Custom GPTs" },
      { value: "rentosertib", label: "AI Drug PoC" },
    ],
    tags: ["Case Studies", "Best Practices", "Implementation", "Results"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "Frameworks convince; proof points convert. This chapter distils publicly reported digital-transformation stories from across the industry into transferable lessons — what was done, the direction of the reported outcome, and how a GCC-anchored operating model would replicate it. The figures cited are those disclosed publicly by the organisations or reported in the scientific and trade press; they are directional exemplars, not audited benchmarks.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "The pattern across every credible case is consistent: transformation value comes from redesigning a process around data and AI — not from bolting technology onto an unchanged workflow. The organisations that scaled did so by industrialising a capability, not by running a clever pilot.",
        },
      },
      {
        title: "Case Study Landscape",
        content: [
          "A cross-section of reported initiatives spanning discovery, trials, commercial, and manufacturing.",
        ],
        table: {
          headers: ["Organisation", "Domain", "What Was Done (Publicly Reported)", "Reported Direction"],
          rows: [
            ["Insilico Medicine", "AI Drug Discovery", "Generative-AI target discovery and molecular design (INS018_055 for IPF)", "Reached Phase II in ~18 months vs 4–6 year norm"],
            ["DeepMind (AlphaFold)", "Structural Biology", "Deep-learning protein-structure prediction database", "214M+ structures; 2024 Chemistry Nobel"],
            ["Pfizer", "Digital Trials", "Digital recruitment for the COVID-19 vaccine programme", "~43,000 enrolled in under four months"],
            ["Moderna", "Cloud-Native mRNA", "Cloud/AWS-based platform for rapid candidate design", "Vaccine sequence designed in ~42 days"],
            ["AstraZeneca", "AI in R&D", "Knowledge-graph and AI partnerships for target identification", "Faster hypothesis generation across pipeline"],
            ["Sun Pharma / Dr. Reddy's", "Manufacturing Intelligence", "Digital quality, analytics, and supply-chain modernisation", "Efficiency and compliance gains at scale"],
          ],
        },
      },
      {
        title: "AI-Native Drug Discovery",
        content: [
          "<strong>Insilico Medicine</strong> is the most-cited proof point for end-to-end AI discovery: its generative-AI platform nominated a target and designed a novel molecule for idiopathic pulmonary fibrosis (INS018_055, rentosertib) that reached a preclinical candidate in roughly 18 months — against an industry norm measured in years — and went on to report positive Phase IIa data in 2025 (Nature Medicine), progressing to Phase III. <strong>DeepMind's AlphaFold</strong> reframed the upstream problem entirely, releasing predicted structures for 214M+ proteins and collapsing a bottleneck that structural biologists had faced for decades.",
          "The transferable lesson is not the specific tool but the operating model: a closed loop between computational design and experimental validation, run by a team that owns the whole cycle — exactly the kind of integrated capability a mature GCC is built to host.",
        ],
      },
      {
        title: "Digital & Decentralised Trials",
        content: [
          "<strong>Pfizer</strong> enrolled roughly 43,000 participants in its COVID-19 vaccine trial in under four months using digital recruitment and site enablement — a compressed timeline that would have been implausible with analogue processes. <strong>Moderna</strong> demonstrated the value of a cloud-native foundation, publicly reporting that it designed its vaccine sequence in about 42 days by treating its platform as software.",
          "Both illustrate the same principle: speed is a property of the operating model, not a heroic one-off. The recruitment analytics, ePRO/eConsent operations, and data management that make it repeatable are precisely the workstreams GCC clinical-data-science teams already run at scale.",
        ],
        insightBox: {
          icon: "⚙️",
          label: "Pattern",
          title: "Industrialise the capability, don't celebrate the pilot",
          description: "Every durable outcome here came from making a new way of working repeatable and governed — the difference between a proof-of-concept and a platform is the operating model wrapped around it.",
        },
      },
      {
        title: "Commercial, Genomics & Manufacturing",
        content: [
          "<strong>AstraZeneca</strong> has publicly described using knowledge graphs and AI partnerships to accelerate target identification and reasoning across its pipeline. <strong>GSK</strong> has invested heavily in functional genomics and machine learning to improve the probability of success in early research. On the supply side, Indian leaders such as <strong>Sun Pharma</strong> and <strong>Dr. Reddy's</strong> have modernised quality and manufacturing with digital analytics — demonstrating that digital leadership is not the exclusive preserve of originator big pharma.",
        ],
        bulletPoints: [
          "<strong>Own the whole loop</strong> — Value accrues to teams that own design-to-decision cycles end to end, not to those handed a single step.",
          "<strong>Data foundation first</strong> — Every scaled outcome sat on a cloud data and platform layer built before the flashy use case.",
          "<strong>Redesign, don't automate</strong> — Speed and quality came from re-architecting the process, not accelerating the old one.",
          "<strong>GCC as the engine</strong> — The recruitment analytics, data curation, and quality intelligence behind these stories are exactly what mature GCCs run 24/7.",
        ],
        pullQuote: {
          text: "The lesson of every case study is the same: technology did not transform these organisations — a redesigned, data-native operating model did, and technology made it possible.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "Case Studies in Practice",
        "content": [],
        "table": {
          "headers": [
            "Company",
            "Initiative",
            "Outcome (sourced)"
          ],
          "rows": [
            [
              "Insilico Medicine",
              "End-to-end AI discovery (rentosertib)",
              "Positive Phase IIa in IPF, 2025 (Nature Medicine); now Phase III — first prospective AI-drug PoC"
            ],
            [
              "Isomorphic Labs",
              "AI-first drug design",
              "$600M raised 2025; Lilly (up to $1.7B) & Novartis (up to $1.2B) deals; nearing first-in-human"
            ],
            [
              "Eli Lilly",
              "GLP-1 manufacturing scale-up",
              "Tirzepatide ~$36.5B in 2025 (~56% of revenue); 2026 guidance $80–83B"
            ],
            [
              "Sanofi",
              "'plai' enterprise AI assistant",
              "~20,000 daily users; targeted ~70% reduction in product-quality-review time"
            ],
            [
              "Moderna",
              "GenAI at scale (with OpenAI)",
              "4,000+ custom GPTs deployed across the enterprise"
            ],
            [
              "Recursion",
              "AI-biotech consolidation",
              "Exscientia merger closed Nov 2024; combined phenomics + DMTA platform"
            ]
          ]
        }
      },
      {
        "title": "What the Winners Have in Common",
        "content": [
          "Across these stories the pattern repeats: <strong>CEO-level ownership</strong>, <strong>investment at scale</strong>, <strong>foundational data work before AI deployment</strong>, and a <strong>culture programme</strong> that reaches every level. The failures share the opposite — technology deployed onto broken processes, which automates dysfunction rather than removing it."
        ],
        "insightBox": {
          "icon": "🏆",
          "label": "Lesson",
          "title": "Proof compounds",
          "description": "Each credible outcome lowers the internal cost of the next initiative. The strategic value of a first AI-discovery win, or a first agentic-AI deployment, is not the single result — it is the organisational permission it creates to move faster everywhere else."
        }
      }
    ],
  },
  {
    id: "ch22",
    num: "22",
    partLabel: "Part VII · Advanced Technical",
    title: "Interoperability & Health Data Standards",
    lead: "HL7 FHIR, OMOP, CDISC, and the foundation of connected pharma ecosystems.",
    metrics: [
      { value: "FHIR R4", label: "Exchange Standard" },
      { value: "OMOP CDM", label: "Observational Data" },
      { value: "IDMP", label: "Structured Product Data" },
      { value: "EHDS", label: "EU Health Data Space" },
    ],
    tags: ["Interoperability", "FHIR", "OMOP", "Data Standards"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "Interoperability is the unglamorous foundation on which every other digital ambition rests. AI models, real-world evidence, connected trials, and seamless submissions all depend on data that can move between systems and organisations without losing meaning. Without shared standards, each initiative rebuilds its own plumbing — and the enterprise accumulates integration debt faster than it creates value.",
          "The strategic shift is that interoperability is no longer a back-office IT concern; regulators now mandate it. Health authorities and health systems are converging on a common set of standards, and pharma organisations that adopt them early gain a durable data advantage.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "Standards are a strategy, not a compliance chore. Adopting FHIR, OMOP, and CDISC as an enterprise data fabric turns every downstream capability — RWE, submissions, connected trials, IDMP — from a bespoke integration project into a repeatable, governed workflow.",
        },
      },
      {
        title: "Why Interoperability Is Now Strategic",
        content: [
          "Two forces have moved interoperability up the agenda. First, the value cases that matter most — RWE at population scale, AI trained on connected data, and automated submissions — are impossible without semantic consistency across sources. Second, regulation is now prescriptive: the US ONC Cures Act rules mandate standardised APIs, the EU's European Health Data Space (EHDS) creates a governed framework for health-data exchange, and submission standards are enforced by agencies worldwide.",
        ],
      },
      {
        title: "The Core Standards Landscape",
        content: [
          "A small set of standards covers most of the pharma data estate. Fluency in how they interlock is the practical foundation of a connected enterprise.",
        ],
        table: {
          headers: ["Standard", "Domain", "Purpose", "Where It Applies"],
          rows: [
            ["HL7 FHIR (R4)", "Clinical exchange", "Modern API-based exchange of health data", "EHR integration, DCT, patient apps"],
            ["OMOP CDM (OHDSI)", "Observational data", "Common model for reproducible RWD analytics", "RWE, federated network studies"],
            ["CDISC (SDTM/ADaM/CDASH/SEND)", "Clinical trials", "Standardised trial data capture and submission", "Regulatory submissions (FDA/PMDA)"],
            ["ISO IDMP", "Product identification", "Global identification of medicinal products", "Regulatory (RIM), pharmacovigilance"],
            ["Terminologies", "SNOMED CT · LOINC · MedDRA · ICD", "Shared clinical & safety vocabularies", "Coding, PV, phenotyping"],
            ["DICOM", "Medical imaging", "Imaging data and metadata standard", "Imaging biomarkers, digital pathology"],
          ],
        },
      },
      {
        title: "The Regulatory & Policy Layer",
        content: [
          "Standards adoption is increasingly non-negotiable. FDA and PMDA require CDISC-conformant datasets for submissions; the EU's EHDS establishes rights and infrastructure for both primary (care) and secondary (research) use of health data; and the US ONC framework, built on FHIR and USCDI, mandates standardised, API-accessible data with explicit anti-information-blocking provisions.",
        ],
        insightBox: {
          icon: "🔗",
          label: "Architecture Principle",
          title: "Map once, use everywhere",
          description: "Harmonising data to a common model and shared terminologies at ingestion — rather than per project — is the single highest-leverage decision in enterprise data architecture. It converts every future use case from an integration project into a query.",
        },
      },
      {
        title: "Building the Interoperable Data Fabric",
        content: [
          "An interoperable enterprise is engineered in five layers — the pattern behind FAIR (Findable, Accessible, Interoperable, Reusable) data at scale.",
        ],
        steps: [
          { num: "01", title: "Ingestion & Connectivity", description: "FHIR-based APIs and connectors to acquire clinical, claims, and operational data from internal and external systems." },
          { num: "02", title: "Terminology & Semantic Mapping", description: "Map incoming data to shared vocabularies (SNOMED CT, LOINC, MedDRA) so meaning is preserved across sources." },
          { num: "03", title: "Common Data Model", description: "Land harmonised data in a standard model (OMOP for observational, CDISC for trials) to make analytics portable and reproducible." },
          { num: "04", title: "Governance & FAIR Metadata", description: "Catalogue, lineage, access control, and privacy compliance so data is discoverable and trustworthy." },
          { num: "05", title: "Exchange & Federation", description: "Secure APIs and federated analytics that let evidence be generated across organisations without moving raw patient data." },
        ],
      },
      {
        title: "Value & Use Cases",
        content: [
          "Interoperability is a force multiplier — it makes every other capability faster, cheaper, and more scalable.",
        ],
        bulletPoints: [
          "<strong>RWE at Scale</strong> — OMOP-standardised data enables federated, reproducible studies across networks and geographies.",
          "<strong>Faster Submissions</strong> — CDISC automation compresses dataset preparation and reduces agency queries.",
          "<strong>Connected & Decentralised Trials</strong> — FHIR integration streams EHR and device data directly into trial systems.",
          "<strong>Regulatory Intelligence</strong> — IDMP and structured product data underpin global RIM, labelling, and pharmacovigilance.",
        ],
        pullQuote: {
          text: "Every AI ambition in pharma is downstream of a data-interoperability decision. Get the standards right, and the rest becomes engineering; get them wrong, and every initiative pays an integration tax forever.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "The Standards Stack",
        "content": [],
        "table": {
          "headers": [
            "Standard",
            "Domain",
            "Purpose",
            "Why It Matters"
          ],
          "rows": [
            [
              "HL7 FHIR (R4)",
              "Health data exchange",
              "API-based clinical data interoperability",
              "The lingua franca for EHR and app integration"
            ],
            [
              "OMOP CDM",
              "Observational research",
              "Common data model for RWE at scale",
              "Enables federated, reproducible RWE (DARWIN EU, OHDSI)"
            ],
            [
              "CDISC (SDTM/ADaM)",
              "Clinical trials",
              "Standardised trial datasets",
              "Mandated for FDA/PMDA submissions"
            ],
            [
              "IDMP",
              "Regulatory",
              "Identification of Medicinal Products",
              "Structured, machine-readable product data across agencies"
            ],
            [
              "SNOMED CT / MedDRA",
              "Terminology",
              "Clinical & safety coding",
              "Consistent meaning across systems and borders"
            ]
          ]
        }
      },
      {
        "title": "The European Health Data Space",
        "content": [
          "The <strong>EU Health Data Space (EHDS)</strong> is the most ambitious interoperability programme in the sector — a legal and technical framework for both primary use (care) and secondary use (research, innovation, policy) of health data across member states, built on federated infrastructure such as DARWIN EU. For pharma it promises pan-European RWE at unprecedented scale, under a demanding governance regime."
        ],
        "insightBox": {
          "icon": "🔗",
          "label": "Architecture Insight",
          "title": "Standards are a strategy, not a chore",
          "description": "Organisations that treat FHIR, OMOP, and IDMP adoption as a compliance checkbox stay trapped in point-to-point integration debt. Those that adopt them as an architectural principle — data that is Findable, Accessible, Interoperable, and Reusable by design — unlock every downstream AI and evidence capability far more cheaply."
        }
      }
    ],
  },
  {
    id: "ch23",
    num: "23",
    partLabel: "Part VII · Advanced Technical",
    title: "Precision Medicine & Genomics Digital Infrastructure",
    lead: "Building the digital backbone for personalised medicine and genomics-driven development.",
    metrics: [
      { value: "~$249B", label: "Market by 2030" },
      { value: "500K", label: "UK Biobank WGS" },
      { value: "CDx", label: "Companion Dx ~$9B" },
      { value: "NGS", label: "Next-Gen Sequencing" },
    ],
    tags: ["Precision Medicine", "Genomics", "Biomarkers", "CDx"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "Precision medicine reframes the therapeutic question from 'what treats this disease?' to 'what treats this patient?'. That shift is powered by molecular data — genomic, transcriptomic, and proteomic — at a scale and complexity that only a purpose-built digital infrastructure can handle. A single sequencing run produces gigabytes; a population programme produces petabytes.",
          "The strategic capability is not sequencing itself, which is increasingly commoditised, but the interpretation stack: turning raw reads into clinically actionable insight, linking biomarkers to therapies, and stratifying patients for development and care. This is where value — and competitive advantage — concentrates.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "The bottleneck in precision medicine has moved from generating molecular data to interpreting it. The winners build the tertiary-analysis and knowledge layer — variant interpretation, biomarker-to-therapy linkage, and patient stratification — not just the sequencing pipeline.",
        },
      },
      {
        title: "The Data Foundation of Precision Medicine",
        content: [
          "Precision medicine rests on multi-omics: genomics (DNA variants), transcriptomics (gene expression), proteomics, and increasingly the microbiome and metabolome — integrated with clinical and imaging data. Next-generation sequencing has driven the cost of a genome from billions of dollars to the low hundreds, unlocking population-scale programmes but shifting the burden decisively onto storage, compute, and interpretation.",
        ],
      },
      {
        title: "The Genomics Data Stack",
        content: [
          "Genomic data flows through three analytical stages, each a distinct engineering and governance responsibility.",
        ],
        steps: [
          { num: "01", title: "Primary Analysis", description: "Base-calling from the sequencer — converting raw signal into sequence reads with quality scores." },
          { num: "02", title: "Secondary Analysis", description: "Alignment to a reference genome and variant calling (SNVs, indels, CNVs, structural variants) using pipelines such as GATK or hardware-accelerated equivalents." },
          { num: "03", title: "Tertiary Analysis & Interpretation", description: "Annotation, ACMG classification, and clinical interpretation against knowledge bases (ClinVar, gnomAD) — where raw variants become actionable insight." },
          { num: "04", title: "Clinical Decision & Reporting", description: "Structured reports linked to therapy options, delivered to clinicians via FHIR Genomics and decision-support systems." },
        ],
      },
      {
        title: "Companion Diagnostics & Biomarker-Driven Development",
        content: [
          "The tightest expression of precision medicine is the drug–diagnostic pair: a companion diagnostic (CDx) that identifies the patients a therapy will help. Co-developing therapy and diagnostic — as with HER2, EGFR, PD-L1, and BRCA — reshapes clinical development, requiring biomarker strategy from the earliest trials and digital integration between the diagnostic result and the prescribing decision.",
        ],
        insightBox: {
          icon: "🎯",
          label: "Development Principle",
          title: "Stratify early, or fail expensively late",
          description: "Biomarker-driven patient selection concentrates a trial on the population most likely to respond — raising success rates, shrinking trials, and de-risking late-stage programmes. The biomarker strategy belongs in Phase I thinking, not Phase III rescue.",
        },
      },
      {
        title: "Infrastructure, Stratification & the GCC Role",
        content: [
          "Delivering precision medicine at scale requires infrastructure most organisations are still building: elastic HPC/cloud for sequencing pipelines, curated variant knowledge bases, pharmacogenomics rules, and — critically — governance for some of the most sensitive data an enterprise holds. Genomic data is identifying and immutable; privacy and consent are not optional. Mature GCCs are increasingly home to this bioinformatics and data-engineering capability.",
        ],
        bulletPoints: [
          "<strong>Genomic Data Platforms</strong> — Scalable, secure pipelines and lakes for multi-omics at population scale.",
          "<strong>Variant Interpretation</strong> — Curation against ClinVar/gnomAD with ACMG-aligned classification and pharmacogenomics.",
          "<strong>Patient Stratification Engines</strong> — Biomarker-based cohorting for trial enrichment and precision prescribing.",
          "<strong>Privacy & Consent Governance</strong> — Robust controls for identifying, immutable genomic data across jurisdictions.",
        ],
        pullQuote: {
          text: "Sequencing is becoming a commodity; interpretation is the moat. The organisations that own the journey from raw reads to the right therapy for the right patient will define precision medicine.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "The Genomics Data Foundation",
        "content": [
          "Population-scale genomics is now real: the <strong>UK Biobank completed whole-genome sequencing of its ~500,000-participant cohort</strong> (491,554 through end-2024), and an estimated 2M+ human genomes have been sequenced globally. This data is only useful atop a governed infrastructure — NGS pipelines (alignment, variant calling), multi-omic integration, and the interpretation layer that turns variants into clinical decisions."
        ],
        "pillars": [
          {
            "num": "Layer 01",
            "title": "Genomic Data Platform",
            "description": "Cloud-scale storage and NGS pipelines (variant calling, annotation) with strict privacy governance.",
            "colorVariant": "teal"
          },
          {
            "num": "Layer 02",
            "title": "Biomarker & Multi-omics",
            "description": "Integrating genomic, transcriptomic, and proteomic signals for target validation and stratification.",
            "colorVariant": "teal"
          },
          {
            "num": "Layer 03",
            "title": "Companion Diagnostics",
            "description": "CDx co-development linking an approved test to therapy eligibility — a ~$9B market growing to ~$16B by 2030.",
            "colorVariant": "teal"
          },
          {
            "num": "Layer 04",
            "title": "Stratification Engine",
            "description": "Matching molecular profiles to therapy, trial eligibility, and real-world outcomes at the point of care.",
            "colorVariant": "teal"
          }
        ]
      },
      {
        "title": "From Population to N-of-1",
        "content": [
          "Precision medicine bends the industry toward smaller, better-defined patient populations and, ultimately, N-of-1 therapies (bespoke gene therapies for ultra-rare mutations). That shift multiplies the digital demand: richer data per patient, tighter diagnostic-therapeutic coupling, and manufacturing that can economically produce a batch of one — connecting this chapter directly to advanced-modality manufacturing."
        ],
        "callout": {
          "type": "spotlight",
          "label": "🌍 Regional Spotlight: Genomics at National Scale",
          "content": "National genomic programmes (UK Biobank, Genomics England, and large US and Asian cohorts) are becoming strategic RWE and discovery assets. India's ABDM data rails and large, genetically diverse population position its GCCs to lead the analytics layer — variant interpretation, biomarker discovery, and stratification modelling — for global sponsors."
        }
      }
    ],
  },
  {
    id: "ch24",
    num: "24",
    partLabel: "Part VII · Advanced Technical",
    title: "Digital Twins — Manufacturing to Clinical & Commercial",
    lead: "Extending digital twin technology across the entire pharmaceutical value chain.",
    metrics: [
      { value: "~$1.5B", label: "Pharma DT Market (2025)" },
      { value: "~$8.5B", label: "Forecast (2032)" },
      { value: "PAT+DT", label: "Real-Time Release" },
      { value: "3 Types", label: "Mfg · Clinical · Patient" },
    ],
    tags: ["Digital Twin", "Simulation", "Process Optimization", "Virtual Trials"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "A digital twin is not a simulation you run once — it is a living virtual replica, continuously fed by real-world data, that mirrors a physical asset or process and predicts its behaviour. In pharma, twins began on the factory floor but are now extending across the value chain: into clinical trials, into patient physiology, and into supply and commercial planning.",
          "The prize is decision-making at the speed of software: test a process change, a trial design, or a supply scenario in the virtual world before committing to the physical one. Done well, twins compress cycle time, reduce risk, and turn expensive real-world experiments into cheap in-silico ones.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "The difference between a model and a digital twin is the live data connection. A twin stays synchronised with its physical counterpart, learns continuously, and predicts forward — enabling 'test in the virtual world first' as an operating default across manufacturing, clinical, and commercial domains.",
        },
      },
      {
        title: "What a Digital Twin Actually Is",
        content: [
          "The term is over-used, so precision matters. A true digital twin has three properties: a virtual representation of a specific physical entity, a live data link that keeps the two synchronised, and predictive/analytical capability that generates decisions or actions. A static model lacks the data link; a dashboard lacks the predictive layer. Most valuable pharma twins are <strong>hybrid</strong> — combining mechanistic (physics/biology-based) models with machine learning trained on operational data.",
        ],
      },
      {
        title: "Three Domains of Pharma Digital Twins",
        content: [
          "Twins deliver value in three distinct domains, each with a different data foundation and payoff.",
        ],
        steps: [
          { num: "01", title: "Manufacturing & Process Twins", description: "Virtual replicas of bioreactors, lines, and whole sites — predicting yield and deviations, enabling real-time release and 'golden batch' optimisation." },
          { num: "02", title: "Clinical & Patient Twins", description: "Virtual patients and populations for in-silico trials, synthetic/external control arms, and model-informed drug development (MIDD)." },
          { num: "03", title: "Supply & Commercial Twins", description: "Network-level replicas for supply-chain resilience, scenario planning, launch simulation, and demand sensing." },
        ],
      },
      {
        title: "Manufacturing & Process Twins",
        content: [
          "The most mature application. A process twin ingests real-time sensor and PAT data to predict batch quality and failures before they occur, optimise process parameters against a validated 'golden batch', and support real-time release testing (RTRT) — collapsing quality-control cycles from weeks to hours. In biologics, where the process defines the product, the twin becomes the central nervous system of the plant.",
        ],
      },
      {
        title: "Clinical & Patient Twins",
        content: [
          "The fastest-growing frontier. Physiologically-based and mechanistic models — extended with machine learning — create virtual patients that can be used to simulate trial designs, generate synthetic or external control arms that reduce the number of patients on placebo, and explore dosing in-silico. Regulators are engaging seriously with model-informed drug development, making this a credible, not speculative, capability.",
        ],
        insightBox: {
          icon: "🔬",
          label: "Twin Principle",
          title: "Fail in silico, succeed in vivo",
          description: "Every trial arm, process change, or supply scenario tested virtually before committing physical resources is risk retired at a fraction of the cost. The twin's value is the expensive mistake it lets you avoid.",
        },
      },
      {
        title: "Building & Scaling Twins — the GCC Role",
        content: [
          "Twins are demanding to build and validate: they require integrated real-time data, hybrid mechanistic-plus-ML modelling, rigorous validation (GAMP-aligned for regulated use), and the MLOps to keep models synchronised and trustworthy over time. This blend of data engineering, modelling, and validation discipline maps directly onto a mature GCC's strengths, positioning it to own twin development as a shared enterprise capability.",
        ],
        bulletPoints: [
          "<strong>Real-Time Data Integration</strong> — The live link is the hard part; without connected, clean data there is no twin, only a model.",
          "<strong>Hybrid Modelling</strong> — Combine mechanistic understanding with ML to get both interpretability and predictive power.",
          "<strong>Validation & Trust</strong> — Regulated-use twins need GAMP-aligned validation and ongoing performance monitoring.",
          "<strong>MLOps at the Core</strong> — Continuous retraining and drift detection keep the twin faithful to its physical counterpart.",
        ],
        pullQuote: {
          text: "A digital twin turns the most expensive question in pharma — 'what happens if we change this?' — from a physical experiment into a query. That is the shift from reacting to the world to rehearsing it.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "Three Classes of Twin",
        "content": [],
        "pillars": [
          {
            "num": "Twin 01",
            "title": "Manufacturing Twin",
            "description": "Real-time process replica enabling optimisation, batch-failure prediction, and — with PAT — real-time release testing.",
            "colorVariant": "gold"
          },
          {
            "num": "Twin 02",
            "title": "Clinical Twin",
            "description": "In-silico trial simulation and synthetic/external control arms that reduce sample size and de-risk protocol design.",
            "colorVariant": "gold"
          },
          {
            "num": "Twin 03",
            "title": "Patient Twin",
            "description": "Computational models of an individual predicting treatment response before therapy begins — precision medicine's simulation layer.",
            "colorVariant": "gold"
          }
        ]
      },
      {
        "title": "Where the Value Is Real Today",
        "content": [
          "The most mature and defensible value is in <strong>manufacturing</strong>: a process twin coupled to Process Analytical Technology supports real-time release and materially faster validation cycles (report roughly 25–40% faster qualification, using ranges rather than a single figure). Clinical and patient twins are earlier-stage but advancing quickly as data and compute mature."
        ],
        "insightBox": {
          "icon": "🏭",
          "label": "Digital-Twin Insight",
          "title": "A twin is only as good as its data feed",
          "description": "A digital twin is not a one-time model — it is a living system that must be continuously fed validated, high-frequency data. Organisations that stand up a twin without the sensor, PAT, and data-integrity foundation get an expensive simulation that quietly drifts from reality."
        }
      }
    ],
  },
  {
    id: "ch25",
    num: "25",
    partLabel: "Part VII · Advanced Technical",
    title: "Digital Transformation in Emerging Markets",
    lead: "India, China, Brazil & Africa — market-specific digital strategies and leapfrog opportunities.",
    metrics: [
      { value: "~$26B", label: "India Domestic Rx" },
      { value: "~$113B", label: "China Hospital Mkt" },
      { value: ">65%", label: "China+India of Global API" },
      { value: "Leapfrog", label: "Mobile-First Health" },
    ],
    tags: ["Emerging Markets", "India", "China", "Africa"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "Emerging markets are not a smaller version of developed ones — they are a different game. Unburdened by legacy systems, they can leapfrog directly to mobile-first, cloud-native, digitally-governed healthcare, often built on national digital public infrastructure. For pharma, this reframes emerging markets from low-margin volume plays into laboratories of digital innovation and access.",
          "The winning strategy is market-specific, not a single global template imposed everywhere. Each geography combines a distinct regulatory trajectory, digital-infrastructure base, and access challenge — and rewards those who design for local reality rather than exporting a headquarters model.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "Leapfrogging is the core dynamic: markets without entrenched legacy infrastructure adopt mobile-first, cloud-native models faster than developed markets can retrofit them. National digital public infrastructure (health IDs, payments, data exchange) is the accelerant.",
        },
      },
      {
        title: "The Leapfrog Thesis",
        content: [
          "Just as many emerging markets skipped fixed-line telephony to go straight to mobile, they are skipping fragmented, paper-based health systems to build digital-native ones. Population-scale digital identity, mobile connectivity, and government-backed data infrastructure create the conditions for pharma to deploy telemedicine, digital adherence, and real-world data programmes at a speed and scale that legacy-bound markets struggle to match.",
        ],
      },
      {
        title: "Market-by-Market",
        content: [
          "The opportunity is real but heterogeneous — each market rewards a tailored strategy.",
        ],
        table: {
          headers: ["Market", "Scale & Driver", "Digital Opportunity"],
          rows: [
            ["🇮🇳 India", "$55B; 20% of global generics; ABDM", "Digital health IDs, RWE at scale, manufacturing digitalisation"],
            ["🇨🇳 China", "$170B; NMPA modernisation; AI strategy", "Digital trials, biotech AI, smart manufacturing"],
            ["🇧🇷 Brazil / LatAm", "Large public health system; ANVISA", "Telemedicine, access programmes, digital PV"],
            ["🌍 Africa", "Fast-growing; local-manufacturing push", "Mobile health, supply-chain integrity, leapfrog infrastructure"],
            ["🌏 Southeast Asia", "Diverse, digitally-native populations", "Omnichannel engagement, digital-first launches"],
          ],
        },
      },
      {
        title: "Common Leapfrog Patterns & Access",
        content: [
          "Across markets, the same digital patterns recur — and each one doubles as an access lever, extending medicines to populations that legacy models could not reach economically.",
        ],
        bulletPoints: [
          "<strong>Mobile-First Engagement</strong> — Patient and HCP interaction designed for smartphones, not clinic desktops.",
          "<strong>Digital Public Infrastructure</strong> — Building on national health IDs and data-exchange layers rather than proprietary silos.",
          "<strong>Local Manufacturing Digitalisation</strong> — Quality and supply-chain intelligence to meet rising local-production mandates.",
          "<strong>Supply-Chain Integrity</strong> — Serialisation and track-and-trace to combat counterfeits and strengthen trust.",
        ],
        insightBox: {
          icon: "🌐",
          label: "Market Principle",
          title: "Design for the market, don't export the model",
          description: "Emerging-market success comes from building for local infrastructure, regulation, and affordability — not from retrofitting a developed-market playbook. The leapfrog only works if you design for where the market is going, not where yours has been.",
        },
        pullQuote: {
          text: "Emerging markets will not follow the developed world's digital path — they will leap past it. The pharma companies that build for that leap, rather than against it, will own the next billion patients.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "Supply-Chain Concentration & De-Risking",
        "content": [
          "The 2025–2026 policy shift reframed emerging-market strategy around resilience. The US <strong>BIOSECURE Act</strong> (enacted 18 Dec 2025) creates a dynamic 'biotechnology company of concern' mechanism — it names no companies directly, attaching restrictions via a Department of Defense list — raising ongoing CDMO due-diligence needs. In parallel, US <strong>Section 232 tariff actions on pharmaceuticals</strong> (2025–2026) have driven roughly <strong>$283B of US reshoring pledges</strong>, even as generics and biosimilars carry exemptions."
        ],
        "table": {
          "headers": [
            "Market",
            "Scale (2024, sourced)",
            "Digital Driver",
            "Leapfrog Opportunity"
          ],
          "rows": [
            [
              "India",
              "~$26B domestic; ~20% of global generics (volume)",
              "ABDM; PLI; GCC ecosystem",
              "Digital-health rails + world-class GCC talent"
            ],
            [
              "China",
              "~$113B hospital market (IQVIA)",
              "NMPA modernisation; national AI strategy",
              "AI-biotech and clinical-trial digitalisation"
            ],
            [
              "Brazil",
              "~$32.9B (top-10 market, 2024)",
              "ANVISA modernisation",
              "Mobile access; regional manufacturing"
            ],
            [
              "Africa",
              "Fast-growing, fragmented",
              "Mobile penetration; AU pooled procurement",
              "Mobile-first care; local vaccine manufacturing"
            ]
          ]
        }
      },
      {
        "title": "The Leapfrog Thesis",
        "content": [
          "Without legacy infrastructure to unwind, emerging markets can adopt mobile-first, cloud-native, AI-enabled models directly. India's ABDM (900M+ health IDs) is the clearest example — national-scale digital-health infrastructure built in years, not decades — and a template other markets are studying closely."
        ],
        "callout": {
          "type": "spotlight",
          "label": "🌍 Regional Spotlight: Tariffs Meet Talent",
          "content": "For India specifically, the same period brings both risk and opportunity: the US is its largest pharma export market ($9.7B, ~38% of exports), so tariff policy is a genuine exposure — while its GCC and manufacturing base make it a primary beneficiary of global supply-chain diversification. Digital capability is the hedge that lets Indian firms move up the value curve as trade winds shift."
        }
      }
    ],
  },
  {
    id: "ch26",
    num: "26",
    partLabel: "Part VIII · Frontier Topics",
    title: "Generative AI in Pharma — LLMs, Copilots & Enterprise Deployment",
    lead: "Enterprise-scale GenAI strategy from molecule design to commercial content generation.",
    metrics: [
      { value: "Agentic AI", label: "2025–26 Frontier" },
      { value: "~40%", label: "PV Capacity Reclaimed" },
      { value: "GAMP AI", label: "Validation Path (2025)" },
      { value: "Multi-Model", label: "Claude · GPT-5 · Gemini" },
    ],
    tags: ["Generative AI", "LLMs", "Copilots", "Enterprise AI"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "Generative AI is the first technology in a generation that touches every function in pharma simultaneously — molecular design, literature synthesis, clinical and regulatory writing, pharmacovigilance narratives, commercial content, and enterprise knowledge access. Unlike prior analytics waves, its value is unlocked not by data scientists alone but by the domain experts who use it every day.",
          "The strategic question is no longer whether to adopt generative AI, but how to deploy it at enterprise scale inside a GxP-regulated environment — with the grounding, guardrails, validation, and human oversight that regulators and patients demand. Organisations that treat GenAI as a governed capability, not a collection of pilots, will compound advantage; those that let a thousand ungoverned prompts bloom will accumulate risk without realising value.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "Leading pharma companies are targeting 30–50% automation of document-heavy workflows (medical writing, regulatory responses, MLR-reviewed content) using retrieval-grounded LLMs with human-in-the-loop sign-off. The winners are standing up a shared, validated GenAI platform — foundation models, enterprise retrieval, guardrails, and evaluation — rather than one-off copilots per function.",
        },
      },
      {
        title: "Where Generative AI Creates Value Across the Value Chain",
        content: [
          "Generative AI's impact is broadest where work is language-, document-, or design-intensive and where a knowledgeable human validates the output. The table below maps the highest-signal use cases to their value driver and current deployment maturity in regulated enterprises.",
        ],
        table: {
          headers: ["Function", "Representative Use Case", "Primary Value Driver", "Deployment Maturity"],
          rows: [
            ["R&D Discovery", "De novo molecular generation; target dossier synthesis", "Novel chemical space; faster hypothesis generation", "Scaling"],
            ["Clinical Development", "Protocol drafting, CSR & narrative generation, SDTM mapping", "Cycle-time & first-time-right", "Piloting → Scaling"],
            ["Regulatory Affairs", "eCTD authoring, health-authority query responses, labelling", "Submission speed; fewer queries", "Piloting"],
            ["Pharmacovigilance", "ICSR narrative drafting, MedDRA coding, literature triage", "Case-processing cost & throughput", "Scaling"],
            ["Commercial & Medical", "MLR-compliant content, HCP personalisation, MSL copilots", "Content velocity; channel ROI", "Scaling"],
            ["Enterprise Knowledge", "Grounded Q&A over SOPs, policies, and scientific corpora", "Decision latency; talent leverage", "Broad adoption"],
          ],
        },
      },
      {
        title: "The Enterprise GenAI Capability Stack",
        content: [
          "Sustainable value comes from a shared platform, not point solutions. Five layers turn foundation models into governed enterprise capability — each an explicit engineering and governance responsibility.",
        ],
        steps: [
          { num: "01", title: "Foundation & Domain Models", description: "General-purpose frontier LLMs (Claude, GPT-5, Gemini families) plus domain models for science — protein language models (ESM), molecular generators, and biomedical LLMs. Route each task to the right model on cost, latency, and capability." },
          { num: "02", title: "Retrieval & Grounding (RAG)", description: "Ground outputs in authoritative enterprise sources — SOPs, submissions, literature, structured data — so answers cite evidence. Retrieval is the single biggest lever for reducing hallucination in regulated use." },
          { num: "03", title: "Orchestration & Agents", description: "Chain tools, retrieval, and reasoning into multi-step workflows (e.g., draft → check against source → format to template). Agentic patterns automate whole tasks, not just single prompts." },
          { num: "04", title: "Guardrails & Compliance", description: "PII/PHI redaction, prompt-injection defence, toxicity and off-label filters, MLR/regulatory policy checks, and enforced human-in-the-loop sign-off for any GxP or patient-facing output." },
          { num: "05", title: "Evaluation & Observability", description: "Golden datasets, factuality and faithfulness scoring, red-teaming, and full prompt/response logging for audit. You cannot validate — or trust — what you cannot measure." },
        ],
        insightBox: {
          icon: "🧩",
          label: "Platform Principle",
          title: "Ground first, generate second",
          description: "In pharma, an ungrounded LLM is a liability. Retrieval-augmented generation over validated sources — with citations surfaced to the reviewer — is the difference between a compliant assistant and an unmanaged risk.",
        },
      },
      {
        title: "High-Impact Use Cases to Prioritise",
        content: [
          "A pragmatic first wave targets workflows that are document-heavy, high-volume, and already have a qualified human reviewer in the loop — maximising value while keeping risk bounded.",
        ],
        bulletPoints: [
          "<strong>Medical & Regulatory Writing</strong> — First-draft CSRs, protocols, investigator brochures, and health-authority responses from structured study data, with authors as validators.",
          "<strong>Pharmacovigilance Automation</strong> — ICSR narrative generation, automated MedDRA coding suggestions, and literature triage to compress case-processing time.",
          "<strong>MLR-Aware Commercial Content</strong> — Generate promotional and medical content pre-checked against claims libraries and regulatory guardrails before human MLR review.",
          "<strong>Enterprise Scientific Copilot</strong> — Grounded Q&A across SOPs, dossiers, and the literature, giving every scientist and reviewer instant institutional memory.",
          "<strong>Code & Data Engineering</strong> — Accelerate SAS-to-R migration, SDTM/ADaM mapping, and query authoring in clinical data science teams.",
        ],
      },
      {
        title: "Deploying GenAI in a GxP-Regulated Environment",
        content: [
          "The core tension is that large language models are probabilistic and non-deterministic, while GxP validation assumes reproducibility. Bridging this requires a shift from validating the model's every output to validating the <strong>system and process</strong> around it — intended use, data provenance, guardrails, human oversight, and monitoring.",
          "FDA's January 2025 draft guidance on the use of AI to support regulatory decision-making introduces a risk-based credibility-assessment framework centred on <strong>context of use</strong> — a workable blueprint for enterprise deployment. Practically, this means defining intended use narrowly, applying GAMP 5 and Computer Software Assurance (CSA) risk-based rigour, maintaining 21 CFR Part 11-compliant audit trails, and keeping a qualified human accountable for every regulated decision.",
        ],
        insightBox: {
          icon: "⚖️",
          label: "Validation Principle",
          title: "Validate the system, keep the human accountable",
          description: "Non-determinism does not preclude GxP use. Define a narrow context of use, ground outputs in validated sources, enforce human-in-the-loop sign-off, log everything for audit, and monitor drift — the model assists, the qualified human decides and signs.",
        },
      },
      {
        title: "Build, Buy, or Fine-Tune?",
        content: [
          "Most enterprises will run a portfolio across all three approaches. The decision hinges on differentiation, data sensitivity, speed-to-value, and total cost of ownership.",
        ],
        table: {
          headers: ["Approach", "When to Use", "Advantage", "Watch-outs"],
          rows: [
            ["Buy (SaaS copilots)", "Commodity workflows — commercial content, coding, meeting copilots", "Fastest time-to-value; vendor-maintained", "Data residency; limited domain grounding; lock-in"],
            ["Build on APIs + RAG", "Grounded enterprise Q&A and document generation over proprietary corpora", "Control, grounding, and guardrails without training cost", "Requires platform & MLOps capability"],
            ["Fine-tune / adapt", "High-volume, narrow tasks (coding, narratives) or domain science", "Task accuracy; smaller, cheaper models at scale", "Data curation cost; revalidation on drift"],
          ],
        },
      },
      {
        title: "Responsible GenAI: Risk & Governance",
        content: [
          "The failure modes are well understood and manageable with governance: hallucination and fabricated citations, IP and data leakage into third-party models, PHI/PII exposure, bias, over-reliance by users, and regulatory non-acceptance. A GenAI governance council — spanning quality, regulatory, legal, security, and the business — should own an approved-use registry, a model risk taxonomy, and mandatory human-oversight rules for high-risk contexts.",
        ],
        callout: {
          type: "spotlight",
          label: "🛡️ Governance Spotlight",
          content: "Treat every GenAI use case like a validated system: classify it by risk, register its intended use, ground it in approved sources, gate high-risk outputs behind human sign-off, and monitor for drift. Governance is not the brake on GenAI value — in regulated pharma, it is the enabler of it.",
        },
        pullQuote: {
          text: "In regulated pharma, the competitive edge is not access to the largest model — it is the discipline to ground it, govern it, and keep a qualified human accountable for what it produces.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "The Enterprise Model Landscape",
        "content": [
          "The foundation-model layer evolves quarterly. By 2025–2026 the leading enterprise families include <strong>Anthropic's Claude (Opus and Sonnet)</strong>, <strong>OpenAI's GPT-5</strong> series, and <strong>Google's Gemini</strong> — and most pharma enterprises deploy a multi-model strategy, matching model to task and avoiding single-vendor lock-in. The strategic question is no longer <em>whether</em> to use LLMs, but how to deploy them under GxP."
        ],
        "pillars": [
          {
            "num": "Use 01",
            "title": "Scientific & Discovery",
            "description": "Literature synthesis, target hypotheses, and generative molecular design that explores chemical space at scale.",
            "colorVariant": "gold"
          },
          {
            "num": "Use 02",
            "title": "Regulatory & Medical Writing",
            "description": "First-draft CTD modules, protocols, and responses — verified by experts in hours rather than weeks.",
            "colorVariant": "gold"
          },
          {
            "num": "Use 03",
            "title": "Pharmacovigilance",
            "description": "Agentic case intake, MedDRA coding, narrative generation, and signal triage across sources.",
            "colorVariant": "gold"
          },
          {
            "num": "Use 04",
            "title": "Commercial & Content",
            "description": "MLR-ready content generation and personalised, compliant HCP/patient engagement at scale.",
            "colorVariant": "gold"
          }
        ]
      },
      {
        "title": "The GxP Deployment Path",
        "content": [
          "The barrier to scaling GenAI in regulated pharma is validation, not capability — and 2025 gave the industry a concrete answer. The <strong>ISPE GAMP Guide: Artificial Intelligence (July 2025)</strong> extends GAMP 5 into a full AI/ML lifecycle (data quality, bias, hallucination rate, prompt sensitivity), and the FDA's draft credibility framework provides a context-of-use assessment. Together they turn 'can we deploy an agent in a GxP process?' into a documented, auditable yes."
        ],
        "insightBox": {
          "icon": "🤖",
          "label": "Agentic Insight",
          "title": "Agents change the unit of automation",
          "description": "RPA automated tasks; agents automate workflows. That is why the productivity numbers step-change — but it is also why governance must step up: an autonomous system that drafts a submission or processes a safety case needs the same validated, human-in-the-loop controls as any other GxP process, plus explainability and full audit trails."
        }
      }
    ],
  },
  {
    id: "ch27",
    num: "27",
    partLabel: "Part VIII · Frontier Topics",
    title: "Pandemic Preparedness & Digital Health Security",
    lead: "Building digital infrastructure for rapid response to future pandemic and biosecurity threats.",
    metrics: [
      { value: "100 Days", label: "Vaccine Mission (CEPI)" },
      { value: "mRNA", label: "Rapid Platform" },
      { value: "mRESVIA", label: "1st mRNA RSV (2024)" },
      { value: "Digital", label: "Genomic Surveillance" },
    ],
    tags: ["Pandemic Preparedness", "Biosecurity", "Rapid Response", "Surveillance"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "COVID-19 was a stress test that revealed both the extraordinary potential and the structural gaps of digital health infrastructure. Vaccines were designed in days and trialled in months — yet surveillance was fragmented, supply chains fractured, and manufacturing scaled painfully. The lesson is not that speed is possible in a crisis, but that it must be engineered as standing capability before the next one arrives.",
          "Pandemic preparedness is now a strategic capability, not a contingency plan. It rests on digital surveillance, platform technologies, adaptive trials, and resilient, surge-ready manufacturing — capabilities that also compound value in normal times.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "The goal is a 'warm base' of standing capability — genomic surveillance, validated platform technologies, pre-agreed adaptive trial designs, and surge-ready manufacturing — so the next response starts from readiness, not from zero. CEPI's 100 Days Mission makes this an explicit target.",
        },
      },
      {
        title: "Lessons from COVID-19",
        content: [
          "The pandemic compressed a decade of digital adoption into eighteen months and proved that mRNA platforms, digital recruitment, and global data sharing can move at unprecedented speed. It equally exposed the cost of unpreparedness: incompatible surveillance data, brittle single-source supply chains, and manufacturing that could not scale fast enough. Both halves of that lesson must be institutionalised.",
        ],
      },
      {
        title: "The 100-Days Mission",
        content: [
          "CEPI's 100 Days Mission sets a galvanising target: a safe, effective vaccine against a novel threat within roughly 100 days of its identification. Meeting it depends on digital and platform readiness — validated platform technologies (such as mRNA) that can be re-pointed at a new pathogen, genomic sequencing to characterise threats in hours, and pre-negotiated, adaptive clinical and regulatory pathways.",
        ],
        steps: [
          { num: "01", title: "Surveillance & Early Warning", description: "Genomic and digital surveillance networks (pathogen sequencing, syndromic signals) for hours-not-weeks threat detection." },
          { num: "02", title: "Platform Technologies", description: "Validated, re-targetable platforms (mRNA and beyond) that shortcut design and preclinical timelines." },
          { num: "03", title: "Adaptive Trials", description: "Pre-agreed master-protocol and platform-trial designs that can enrol within days of a threat emerging." },
          { num: "04", title: "Manufacturing Surge", description: "Distributed, warm-base manufacturing capacity that can scale a new product rapidly and equitably." },
          { num: "05", title: "Supply & Distribution Resilience", description: "Diversified, digitally-monitored supply chains and cold chain built for surge and equity." },
        ],
      },
      {
        title: "Biosecurity, Data Security & Standing Capability",
        content: [
          "Digitising preparedness widens the attack surface: surveillance networks, genomic databases, and connected manufacturing are high-value targets, and AI that accelerates drug design carries dual-use risk. Preparedness must therefore be built with security and biosecurity by design. Crucially, these capabilities should not sit idle between crises — the same surveillance, platforms, and manufacturing flexibility that enable a pandemic response also strengthen everyday R&D and supply resilience.",
        ],
        insightBox: {
          icon: "🛡️",
          label: "Preparedness Principle",
          title: "Readiness is a capability you use every day",
          description: "Standing pandemic capability should earn its keep in normal times — genomic surveillance improves R&D, platform tech speeds pipelines, adaptive trials cut costs. Build preparedness as dual-use infrastructure, not insurance that gathers dust.",
        },
        pullQuote: {
          text: "The next pandemic will not wait for us to get ready. Preparedness is the capability you build in peacetime and are grateful for in wartime — engineered as readiness, not improvised as response.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "The Preparedness Stack",
        "content": [],
        "pillars": [
          {
            "num": "Layer 01",
            "title": "Genomic Surveillance",
            "description": "Real-time pathogen sequencing and shared bioinformatics to detect and characterise threats early.",
            "colorVariant": "coral"
          },
          {
            "num": "Layer 02",
            "title": "Rapid Platforms",
            "description": "mRNA and other plug-and-play platforms that swap the antigen while keeping the process — the core 100-day enabler.",
            "colorVariant": "coral"
          },
          {
            "num": "Layer 03",
            "title": "Adaptive Trials",
            "description": "Pre-positioned master protocols and digital/decentralised trial capacity for compressed timelines.",
            "colorVariant": "coral"
          },
          {
            "num": "Layer 04",
            "title": "Resilient Supply",
            "description": "Digitally-orchestrated, geographically-diversified manufacturing and cold chain that can surge on demand.",
            "colorVariant": "coral"
          }
        ]
      },
      {
        "title": "mRNA's Second Act",
        "content": [
          "The mRNA platform has moved well beyond COVID: <strong>mRESVIA</strong> became the first mRNA RSV vaccine (May 2024), and personalised cancer vaccines (mRNA-4157/V940, BNT111) are in Phase 3 with readouts expected 2025–2027. The same rapid-reprogramming property that makes mRNA a pandemic tool makes it a durable platform — and a strategic manufacturing asset worth digitising deeply."
        ],
        "callout": {
          "type": "spotlight",
          "label": "🌍 Biosecurity & Supply Resilience",
          "content": "Preparedness is now inseparable from geopolitics. The US BIOSECURE Act (enacted Dec 2025) and Section 232 tariff actions are pushing supply-chain diversification and reshoring, while global surveillance networks and pooled procurement (e.g. the African Union) aim to close the equity gaps COVID exposed. Digital orchestration is what makes a diversified, multi-site response coherent rather than chaotic."
        }
      }
    ],
  },
  {
    id: "ch28",
    num: "28",
    partLabel: "Part VIII · Frontier Topics",
    title: "Pharma Talent — Digital Reskilling & Future Workforce",
    lead: "Building the digital-native workforce pharma needs for 2025–2030 and beyond.",
    metrics: [
      { value: "~60%", label: "Reskill Need by 2027" },
      { value: "77%", label: "Employers Reskilling 25–30" },
      { value: "2.36M", label: "India GCC Talent Pool" },
      { value: "CAIO", label: "New C-Suite Role" },
    ],
    tags: ["Talent", "Reskilling", "Culture", "Future Workforce"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "The single biggest barrier to pharma digital transformation is not technology — it is talent. Platforms can be bought; the people who can design, deploy, govern, and adopt them cannot be conjured overnight. Every transformation that stalls does so at the human layer: skills that did not keep pace, cultures that resisted new ways of working, and leaders who owned the technology but not the change.",
          "Winning the talent challenge means treating workforce transformation as a first-class programme — reskilling at scale, hiring strategically for scarce capabilities, and rebuilding culture and ways of working so that digital-native talent can do its best work.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "The World Economic Forum estimates roughly 60% of workers will need reskilling by 2027 — and 77% of employers plan to reskill their workforce across 2025–2030, and digital-native talent commands a growing premium. The organisations that win will build talent as deliberately as they build platforms — academies, partnerships, and culture, not just hiring.",
        },
      },
      {
        title: "The Talent Gap Is the Real Constraint",
        content: [
          "Digital transformation demands capabilities scarce in traditional pharma: data science, ML engineering, cloud architecture, MLOps, product management, and design — alongside the domain experts who must now work fluently with these tools. Demand vastly outstrips supply, competition comes from every industry, and legacy operating environments struggle to attract talent that expects modern tooling and data-driven decisions.",
        ],
      },
      {
        title: "The Skills Shift",
        content: [
          "Transformation does not simply add new roles — it changes existing ones. The workforce shifts from manual execution toward oversight, interpretation, and human-AI collaboration.",
        ],
        table: {
          headers: ["Function", "From", "To"],
          rows: [
            ["Quality", "Manual review & documentation", "AI-assisted review; exception management"],
            ["Clinical Data", "Manual data cleaning", "Automated pipelines; data science"],
            ["Regulatory", "Document assembly", "AI-augmented authoring; strategy"],
            ["Commercial", "Volume-based field calls", "Data-driven, omnichannel orchestration"],
            ["Manufacturing", "Reactive intervention", "Predictive, digital-twin-guided operations"],
          ],
        },
      },
      {
        title: "The Reskilling Playbook",
        content: [
          "Reskilling at scale is a structured programme, not a training catalogue. Five moves, sequenced, turn a workforce gap into a capability engine.",
        ],
        steps: [
          { num: "01", title: "Assess & Forecast", description: "Map current skills against a 2–3 year forward-looking demand model to target investment where it matters." },
          { num: "02", title: "Build Academies", description: "Role-based learning journeys and internal 'digital academies' with hands-on, applied curricula." },
          { num: "03", title: "Hire for the Gaps", description: "Targeted external hiring for genuinely scarce capabilities that cannot be reskilled fast enough." },
          { num: "04", title: "Partner & Ecosystem", description: "University tie-ups, GCC talent hubs, and vendor partnerships to widen the funnel." },
          { num: "05", title: "Embed & Apply", description: "Learning applied on real use cases, with communities of practice sustaining it beyond the course." },
        ],
      },
      {
        title: "Culture, Retention & the Future of Work",
        content: [
          "Skills without culture fail. The organisations that retain digital talent give it modern tooling, autonomy, data-driven decision rights, and visible impact — and they lead with change management, because tools no one adopts create no value. Hybrid, flexible models and a strong learning culture are now table stakes for competing against every other industry for the same scarce people.",
        ],
        insightBox: {
          icon: "🎓",
          label: "Talent Principle",
          title: "You cannot buy your way past the human layer",
          description: "Technology is the easy part. Sustainable advantage comes from a workforce that is continuously reskilled and a culture that adopts new ways of working — the slowest capability to build and the hardest for competitors to copy.",
        },
        pullQuote: {
          text: "Every pharma transformation is ultimately a talent transformation wearing a technology costume. The winners invest in people with the same conviction they invest in platforms.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "The Skills Shift",
        "content": [
          "Demand is moving decisively toward AI/ML engineering, data science, MLOps, computational biology, cloud, and — increasingly — the ability to <strong>supervise and govern AI agents</strong> rather than perform the task directly. The digital-native cohort entering pharma expects AI-assisted workflows and real-time, data-driven decisions; organisations running on legacy ERP and paper-based quality systems struggle to attract and keep them."
        ],
        "table": {
          "headers": [
            "Workforce Lever",
            "2026 Reality",
            "Action"
          ],
          "rows": [
            [
              "Reskilling at scale",
              "~60% need reskilling by 2027 (WEF)",
              "Structured academies; role-based AI-fluency paths"
            ],
            [
              "AI-agent supervision",
              "New skill category emerging",
              "Train reviewers/validators, not just users"
            ],
            [
              "Leadership",
              "CAIO role formalising (Pfizer, Lilly 2024)",
              "Fund digital/AI leadership with real mandate"
            ],
            [
              "Global talent",
              "India GCCs: 2.36M professionals (FY26)",
              "Locate capability where the talent is deepest"
            ]
          ]
        }
      },
      {
        "title": "Culture Is the Multiplier",
        "content": [
          "Technology deployment is visible; culture change is invisible — and it decides whether technology is actually used. The evidence from successful transformations points to CEO-owned change programmes, protected capacity to absorb change, early wins, and adoption metrics tracked as rigorously as delivery metrics (target ≥80% user adoption within 90 days of go-live)."
        ],
        "insightBox": {
          "icon": "🎓",
          "label": "Talent Insight",
          "title": "Reskill for judgment, not just tools",
          "description": "As agents absorb execution, the scarce human skills become judgment, domain expertise, and governance — knowing what to ask, how to validate an AI output, and when a result must not be trusted. Reskilling programmes that teach only tool operation miss the capability that actually compounds."
        }
      }
    ],
  },
  {
    id: "ch29",
    num: "29",
    partLabel: "Part VIII · Frontier Topics",
    title: "Digital Pharma Investment, Valuation & M&A Strategy",
    lead: "Investment frameworks, valuation methodologies, and M&A strategy for digital pharma assets.",
    metrics: [
      { value: "~$180B", label: "2025 M&A Rebound" },
      { value: "~$236B", label: "Patent Cliff at Risk" },
      { value: "~$80B", label: "Digital Health VC 20–24" },
      { value: "$600M", label: "Isomorphic Raise 2025" },
    ],
    tags: ["Investment", "M&A", "Valuation", "VC"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "Digital health and AI-pharma assets command premium valuations — often at revenue multiples that dwarf traditional pharma — because investors are pricing platforms, data moats, and optionality, not just current cash flows. For pharma leaders, this reframes digital as a portfolio to be actively managed through build, buy, and partner decisions, and as a discipline of valuing and diligencing assets whose worth lives in data and models rather than molecules.",
          "The strategic question is no longer whether to invest in digital capability, but how to structure and value it — and how to tell a durable platform apart from a fragile point solution.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "The value premium concentrates in platforms with proprietary data, network effects, and re-use across many programmes. Point solutions solve one problem once; platforms compound. Diligence and deal structure should be built to tell the two apart.",
        },
      },
      {
        title: "Why Digital Assets Command Premiums",
        content: [
          "Investors reward digital-pharma assets for characteristics traditional pharma lacks: scalable, high-margin economics; proprietary data that improves with use; and platform effects that spread a single capability across many drug programmes. An AI-discovery platform that accelerates every molecule in a pipeline is valued very differently from a services contract — hence the elevated revenue multiples and the flow of venture capital into the space.",
        ],
      },
      {
        title: "Valuation Approaches",
        content: [
          "Valuing digital and AI assets blends conventional methods with judgements specific to data and platforms.",
        ],
        table: {
          headers: ["Asset Type", "Primary Method", "Key Value Driver", "Caution"],
          rows: [
            ["AI Discovery Platform", "Revenue multiple + pipeline optionality", "Re-use across programmes; data moat", "Unproven clinical translation"],
            ["Data Asset / RWD", "Strategic / access value", "Uniqueness, scale, consent breadth", "Rights, privacy, portability"],
            ["Digital Therapeutic", "Risk-adjusted NPV", "Reimbursement & clinical evidence", "Payer acceptance risk"],
            ["SaaS / Platform", "ARR multiple", "Retention, network effects", "Churn; commoditisation"],
          ],
        },
      },
      {
        title: "The M&A & Partnership Landscape",
        content: [
          "Most pharma builds its digital capability through a mix of models rather than a single acquisition. Partnerships and collaborations with AI-discovery firms are the most common entry point — sharing risk while accessing capability. Bolt-on acquisitions add specific data or tools, while larger platform deals signal a strategic bet. The build-versus-buy-versus-partner decision should follow differentiation and speed-to-value, not fashion.",
        ],
      },
      {
        title: "Diligence, Platforms & Point Solutions",
        content: [
          "Digital-asset diligence differs fundamentally from molecule diligence: value lives in data rights, model validity, talent, and technical debt rather than in patents and trial data alone. The central judgement is whether an asset is a compounding <strong>platform</strong> or a one-shot <strong>point solution</strong> — a distinction that separates durable value creation from expensive disappointment.",
        ],
        bulletPoints: [
          "<strong>Data Rights & Provenance</strong> — Are the data legally usable, consented, and portable for the intended purpose?",
          "<strong>Model Validity</strong> — Is performance real, generalisable, and validated — or demo-grade?",
          "<strong>Talent Retention</strong> — Will the people who built it stay through and beyond the deal?",
          "<strong>Technical Debt</strong> — What will it truly cost to integrate and scale the technology?",
        ],
        insightBox: {
          icon: "💠",
          label: "Investment Principle",
          title: "Buy platforms, not point solutions",
          description: "Durable value comes from assets that compound — proprietary data that improves with use, capabilities re-used across many programmes, and network effects. A point solution solves one problem once; a platform keeps paying dividends.",
        },
        pullQuote: {
          text: "The market is not paying a premium for algorithms — it is paying for data moats and platforms that compound. Know which one you are buying, and never pay platform prices for a point solution.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "The Deal & Funding Landscape",
        "content": [
          "Digital-health venture funding totalled roughly <strong>$80B across 2020–24</strong> (Rock Health), peaking at $29.1B in 2021; 2025 rebounded ~35% to $14.2B, with AI now about <strong>54% of all funding</strong>. AI-drug-discovery is monetising through structured partnerships rather than outright M&A — Isomorphic Labs' $600M raise and its Lilly/Novartis milestone deals are the template, alongside AI-biotech consolidation such as Recursion's absorption of Exscientia."
        ],
        "table": {
          "headers": [
            "Deal / Trend",
            "Value",
            "Signal"
          ],
          "rows": [
            [
              "Pfizer–Seagen (ADCs, closed 2023)",
              "$43B",
              "Bolt-on of a high-growth modality"
            ],
            [
              "J&J–Intra-Cellular (2025)",
              "$14.6B",
              "Patent-cliff-driven pipeline buying"
            ],
            [
              "Novartis–Avidity (2025)",
              "$12B",
              "RNA / oligonucleotide platform bet"
            ],
            [
              "Isomorphic Labs raise (2025)",
              "$600M",
              "AI-first discovery via partnership model"
            ],
            [
              "Digital-health VC 2025",
              "$14.2B (+35%)",
              "AI now ~54% of funding"
            ]
          ]
        }
      },
      {
        "title": "Valuing Digital & AI Assets",
        "content": [
          "Platform assets (reusable across many programmes) command a premium over point solutions, and AI-native biotechs trade on optionality more than current revenue. The discipline is to separate durable platform value from hype: the field is maturing into distinct models — some AI-biotechs (e.g. Schrödinger) are pulling back from proprietary trials to focus on software, while others push deeper into the clinic."
        ],
        "insightBox": {
          "icon": "💰",
          "label": "Investment Insight",
          "title": "The cliff funds the future",
          "description": "The patent cliff is not only a threat — it is the forcing function. The same revenue pressure that alarms investors is what unlocks the M&A and AI/digital investment budgets. Organisations that frame digital capability as growth insurance, not cost, win the internal capital allocation fight."
        }
      }
    ],
  },
  {
    id: "ch30",
    num: "30",
    partLabel: "Part IX · 2030 Playbook",
    title: "The 2030 Integrated Implementation Playbook",
    lead: "A comprehensive 36-month roadmap for enterprise-wide digital transformation execution.",
    metrics: [
      { value: "36 Months", label: "Execution Horizon" },
      { value: "3 Waves", label: "Implementation Phases" },
      { value: "PDMF 5", label: "Target Maturity" },
      { value: "$500M+", label: "Value Creation Target" },
    ],
    tags: ["Implementation", "Roadmap", "Execution", "2030 Vision"],
    sections: [
      {
        title: "Executive Summary",
        content: [
          "This capstone chapter integrates the handbook into a single, executable plan. Strategy without sequencing is a wish; this is the 36-month playbook that turns the frameworks — PDMF, ACUITAS, the Three-Horizon model, and the GCC operating model — into a coordinated programme across every functional domain, targeting PDMF Level 5 maturity by 2030.",
          "The through-line is disciplined sequencing: stabilise and connect the foundation first, differentiate and scale AI-enabled capability next, then lead and innovate. Skipping steps — deploying AI onto broken processes and disconnected data — is the most common and most expensive failure mode.",
        ],
        callout: {
          type: "executive",
          label: "Executive Summary",
          content: "The playbook is not a menu — it is a sequence. Foundations (data, cloud, governance) before scaled AI; scaled AI before autonomous, self-optimising operations. Each wave earns the right to the next, and the GCC is the engine that carries the programme across all three.",
        },
      },
      {
        title: "The Integrated Operating Thesis",
        content: [
          "Everything in this handbook converges on one idea: competitive advantage in the next decade belongs not to the largest R&D budget, but to the most intelligent, interconnected, and adaptive operating model. Achieving that means treating data as a strategic asset, embedding AI into decisions at every level, connecting previously siloed functions into real-time loops, and running the whole transformation through an empowered GCC operating as innovation partner rather than support centre.",
        ],
      },
      {
        title: "The Three-Wave Execution Model",
        content: [
          "The 36-month journey runs in three waves, each with a clear maturity target on the PDMF scale.",
        ],
        steps: [
          { num: "Wave 1", title: "Stabilise & Connect (Months 1–12)", description: "Establish CDO and governance; deploy the cloud data-lake foundation; pilot eQMS/EBR; automate eCTD submissions; deploy PV NLP intake; baseline PDMF. Target: Level 2→3." },
          { num: "Wave 2", title: "Differentiate & Scale (Months 13–24)", description: "AI drug-discovery platform operational; DCT across active trials; NBA commercial engine; PAT and digital twins at sites; eQMS enterprise-wide; RWE generating evidence. Target: Level 3→4." },
          { num: "Wave 3", title: "Lead & Innovate (Months 25–36)", description: "Clinical candidate from AI discovery; real-time release approved; autonomous PV signal monitoring; outcome-based payer contracts; GCC established as digital CoE. Target: Level 4→5." },
        ],
      },
      {
        title: "Sequencing Across Domains",
        content: [
          "Each domain advances in lockstep with the waves — no function races ahead of the data and governance foundation that supports it.",
        ],
        table: {
          headers: ["Domain", "Wave 1 · Connect", "Wave 2 · Scale", "Wave 3 · Lead"],
          rows: [
            ["R&D", "Data lake; literature AI", "AI discovery platform", "AI-designed clinical candidate"],
            ["Clinical", "eTMF/EDC standardised", "DCT; RWE evidence", "Synthetic control arms"],
            ["Manufacturing", "MES/EBR pilot", "PAT; digital twin", "Real-time release testing"],
            ["Quality", "eQMS pilot", "eQMS enterprise-wide", "Predictive, autonomous QA"],
            ["Commercial", "CRM & data foundation", "NBA engine; omnichannel", "Outcome-based contracts"],
            ["PV", "NLP case intake", "Automated signal detection", "Autonomous PV monitoring"],
          ],
        },
      },
      {
        title: "Governance, Funding & Value Realisation",
        content: [
          "Execution succeeds or fails on the operating disciplines around it: CEO-and-board sponsorship, a funded portfolio managed with stage-gates and dynamic reallocation, a benefits-realisation office that makes value visible every quarter, and relentless change management. Investment typically runs 1–3% of revenue in scaling mode, rising to 4–5% in accelerated transformation — deployed as a managed portfolio, not an annual lump sum.",
        ],
        insightBox: {
          icon: "🎯",
          label: "Execution Principle",
          title: "Sequence is strategy",
          description: "The waves are not interchangeable. Attempting Wave 3 outcomes on a Wave 1 foundation is how transformations burn budget and credibility. Earn each wave before starting the next — and let the GCC carry the momentum across all three.",
        },
      },
      {
        title: "The 2030 End-State",
        content: [
          "An organisation that executes this playbook arrives at a fundamentally different operating model by 2030 — one where digital is not a function but the fabric of how the enterprise discovers, develops, makes, and delivers medicines.",
        ],
        bulletPoints: [
          "<strong>AI-Native Operations</strong> — Intelligence embedded in decisions from molecule selection to field deployment, at PDMF Level 5.",
          "<strong>Connected Value Chain</strong> — A unified digital thread linking R&D, clinical, manufacturing, and commercial in real time.",
          "<strong>GCC as Innovation Engine</strong> — An empowered GCC owning global mandates and contributing to the pipeline as an 'HQ Twin'.",
          "<strong>Trusted, Governed AI</strong> — Responsible-AI governance and ACUITAS-grade quality making AI deployable in the decisions that matter.",
        ],
        pullQuote: {
          text: "The organisations that will lead pharma in 2030 are not those that adopted AI first, but those that sequenced their transformation with the most discipline — and built the operating model to sustain it.",
          cite: "KR · Pharma Digital Transformation Handbook",
        },
      },
      {
        "title": "The Three-Wave Roadmap",
        "content": [],
        "steps": [
          {
            "num": "W1",
            "title": "Wave 1 · Stabilise & Connect (Months 1–12)",
            "description": "Establish CDO/CAIO leadership and light governance; deploy the cloud data foundation; pilot eQMS/EBR, eCTD automation, and PV NLP intake; complete a PDMF baseline. Target: Level 2→3."
          },
          {
            "num": "W2",
            "title": "Wave 2 · Differentiate & Scale (Months 13–24)",
            "description": "Operationalise AI discovery; run DCT-enabled trials; deploy agentic AI in PV and regulatory writing; roll out PAT + digital twins; scale RWE. Target: Level 3→4."
          },
          {
            "num": "W3",
            "title": "Wave 3 · Lead & Innovate (Months 25–36)",
            "description": "Advance an AI-discovered candidate; enable real-time release; run autonomous PV signal monitoring; sign outcome-based payer contracts; establish the GCC as a global digital CoE. Target: Level 4→5."
          }
        ]
      },
      {
        "title": "Sequencing Against the 2026 Reality",
        "content": [
          "A credible 2026 plan explicitly hedges the forces reshaping the industry: the <strong>patent cliff</strong> (invest in AI/pipeline as growth insurance), <strong>IRA and MFN pricing</strong> (build the RWE and value-evidence muscle payers now demand), <strong>agentic AI</strong> (redesign PV, regulatory, and commercial workflows around agents under GAMP-AI validation), and <strong>supply-chain de-risking</strong> (digitally-orchestrated, diversified manufacturing in light of BIOSECURE and tariffs)."
        ],
        "callout": {
          "type": "case-study",
          "label": "📋 Governing the Programme",
          "content": "The execution disciplines that separate success from the ~70% of transformations that fail: CEO/board ownership with C-suite digital KPIs; a CDO/CAIO hired in Month 1; change sequencing that protects team capacity; a GxP validation team from Day 1 (risk-based CSA); and a data-quality sprint before any AI is built on the data."
        },
        "pullQuote": {
          "text": "The enterprise that executes this roadmap with discipline will not just have transformed itself — it will have transformed the competitive position of its global parent organisation.",
          "cite": "KR · Chapter 30 · The 2030 Playbook"
        }
      }
    ],
  },
];

export const partColors: Record<string, string> = {
  "Part I · Foundations": "teal",
  "Part II · Value Chain": "violet",
  "Part III · Commercial": "gold",
  "Part IV · Enterprise Enablers": "indigo",
  "Appendix": "coral",
  "Part V · GCC India": "primary",
  "Part VI · Advanced Modalities": "violet",
  "Part VII · Advanced Technical": "teal",
  "Part VIII · Frontier Topics": "gold",
  "Part IX · 2030 Playbook": "indigo",
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
    chapters: ["ch9", "ch10"],
  },
  {
    label: "Part IV · Enterprise Enablers",
    icon: "⚡",
    chapters: ["ch11", "ch12", "ch13", "ch14"],
  },
  {
    label: "Appendix",
    icon: "📚",
    chapters: ["ch15"],
  },
  {
    label: "Part V · GCC India",
    icon: "🇮🇳",
    chapters: ["ch16"],
  },
  {
    label: "Part VI · Advanced Modalities",
    icon: "🧬",
    chapters: ["ch17", "ch18", "ch19", "ch20", "ch21"],
  },
  {
    label: "Part VII · Advanced Technical",
    icon: "🔧",
    chapters: ["ch22", "ch23", "ch24", "ch25"],
  },
  {
    label: "Part VIII · Frontier Topics",
    icon: "🚀",
    chapters: ["ch26", "ch27", "ch28", "ch29"],
  },
  {
    label: "Part IX · 2030 Playbook",
    icon: "🎯",
    chapters: ["ch30"],
  },
];

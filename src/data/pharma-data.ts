import type { Chapter, HandbookStats } from "@/types/pharma.types";

export const handbookStats: HandbookStats = {
  chapters: 30,
  words: "95K+",
  pillars: 9,
  phases: 3,
};

export const coverStats = [
  { value: "30", label: "Chapters + Appendix" },
  { value: "95K+", label: "Words" },
  { value: "9", label: "Parts" },
  { value: "47+", label: "Diagrams & Tables" },
];

// ── SVG Diagram Constants ──

const SVG_FIVE_FORCES = `<svg viewBox="0 0 760 230" xmlns="http://www.w3.org/2000/svg" style="font-family:'Segoe UI',Arial,sans-serif">
  <defs><marker id="ma" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="hsl(38,72%,53%)" stroke-width="1.5" stroke-linecap="round"/></marker></defs>
  <rect x="285" y="80" width="190" height="70" rx="10" fill="hsl(222,47%,9%)" stroke="hsl(38,72%,53%)" stroke-width="2"/>
  <text x="380" y="108" text-anchor="middle" fill="hsl(38,72%,53%)" font-size="13" font-weight="700">PHARMA</text>
  <text x="380" y="126" text-anchor="middle" fill="hsl(215,20%,65%)" font-size="11">Enterprise 2025–2030</text>
  <text x="380" y="142" text-anchor="middle" fill="hsl(215,20%,50%)" font-size="9">$1.6T → $2.3T by 2030</text>
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
  <text x="380" y="217" text-anchor="middle" fill="hsl(215,20%,50%)" font-size="9">1,600+ GCCs · Digital-native</text>
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
      { value: "$2.6B", label: "Avg. Cost per NME" },
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
          "The global pharmaceutical market crossed USD 1.6 trillion in revenues in 2024 and is projected to exceed USD 2.3 trillion by 2030. This growth masks profound structural stress. The cost of bringing a new molecular entity to market now exceeds USD 2.6 billion and takes an average of 12 to 15 years. The probability that a molecule entering Phase I clinical trials will reach approval remains below 10 percent.",
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
            ["🇺🇸 United States", "$680B", "FDA Digital Health CoE; IRA pricing pressure", "Level 3–4", "AI drug discovery, DCT, RWE, omnichannel"],
            ["🇪🇺 European Union", "$290B", "EHDS; EMA digital evidence; GDPR governance", "Level 2–3", "Regulatory digital, federated data, manufacturing"],
            ["🇮🇳 India", "$55B + 20% global generics", "ABDM; SUGAM; PLI scheme; GCC boom", "Level 2–3", "Manufacturing QMS, PV analytics, clinical data"],
            ["🇨🇳 China", "$170B", "NMPA modernisation; national AI strategy", "Level 2–3", "Clinical trial digital, biotech AI, manufacturing"],
            ["🇯🇵 Japan", "$90B", "SAKIGAKE; PMDA digital reform", "Level 2–3", "Regulatory submissions, digital biomarkers"],
          ],
        },
      },
      {
        title: "The $2 Trillion Opportunity",
        content: [
          "McKinsey Global Institute has estimated that advanced analytics and AI could create $100 billion in value annually for the US healthcare system. Across the global pharmaceutical value chain, the opportunity is larger still.",
          "If AI could cut average development timelines by 20–30% and improve Phase II success rates by even 10 percentage points, the value creation at a large pharmaceutical company would be measured in tens of billions of dollars. Insilico Medicine's INS018_055 reached Phase II clinical trials in 18 months, compared to an industry average of 4–6 years.",
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
          "India has emerged as the world's pre-eminent hub for pharmaceutical Global Capability Centres (GCCs), combining an unmatched reservoir of scientific, digital, and regulatory talent with a rapidly maturing innovation ecosystem. Over 30 multinational pharma companies now operate dedicated GCCs in India — in Hyderabad, Bengaluru, Mumbai, and Pune.",
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
          content: "India accounts for ~20% of global generic medicine exports by volume and over 60% of US FDA-approved manufacturing facilities outside the US. The ABDM has created 600M+ digital health IDs. The PLI scheme is investing $2B+ in manufacturing modernisation. Companies like Sun Pharma and Dr. Reddy's are demonstrating that Indian generics companies can be fast followers — and in some cases leaders — in pharma digital transformation.",
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
            ["AI Drug Discovery", "Schrödinger, Recursion OS2, Exscientia, Insilico Chemistry42", "Target ID, molecular design, ADMET prediction", "Platform business models emerging"],
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
          label: "📋 Case Study: Novartis — Becoming a Data-Driven Medicine Company",
          content: "Novartis's transformation under CEO Vas Narasimhan invested several hundred million dollars annually in digital and data capabilities. Key lessons: CEO ownership, investment at scale, foundational data work before AI deployment, and a culture programme reaching every level. Outcomes include measurable reduction in clinical trial cycle times and $200M annual commercial efficiency gains.",
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
          { num: "01", title: "Target Identification & Validation", description: "Multi-omics analysis, knowledge graph mining, AI-powered literature synthesis. AlphaFold's database covers 200M+ protein structures for structure-based drug design." },
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
            ["AlphaFold 3 (DeepMind)", "Protein structure prediction; structure-based drug design", "Evoformer transformer + diffusion", "200M+ structures; broadly adopted"],
            ["PandaOmics (Insilico)", "AI-powered target identification using multi-omics", "Graph neural networks; knowledge graphs", "TNIK / IPF — INS018-055 in Phase II"],
            ["Chemistry42 (Insilico)", "Generative molecular design", "GAN + RL + diffusion models", "Multiple clinical candidates generated"],
            ["Schrödinger FEP+", "Free energy perturbation; lead optimisation", "Physics-based + ML", "BMS, Pfizer partnerships"],
            ["Exscientia Centaur", "AI-designed drug candidates", "Automated design-make-test-analyse", "DSP-1181 — first AI drug in Phase I"],
            ["Recursion OS2", "Cellular imaging → target discovery", "Computer vision + biological foundation models", "NVIDIA partnership; multi-billion compound library"],
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
          content: "Insilico Medicine progressed INS018_055, a novel TNIK inhibitor for idiopathic pulmonary fibrosis, into Phase II trials. The drug was identified entirely through AI-driven processes in ~18 months, vs. an industry average of 4–5 years. This demonstrates AI-driven discovery pipelines can produce viable clinical candidates.",
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
          content: "In the <strong>US</strong>, R&D digital transformation is driven by large multinationals investing hundreds of millions and AI-first biotechs (Recursion, Insilico, Exscientia). In the <strong>EU</strong>, Roche/Genentech has arguably the most mature pharmaceutical AI capability globally; Novartis has invested $2B+ since 2019. In <strong>India</strong>, organisations like Syngene, Lambda Therapeutics, and R&D divisions of Sun Pharma and Dr. Reddy's are investing in computational chemistry platforms.",
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
          "Over 60% of new US trial starts incorporate at least one decentralised element as of 2024. Clinical trials remain the most expensive component of drug development.",
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
          "The fourth industrial revolution is reshaping pharmaceutical manufacturing. Companies with mature digital manufacturing platforms demonstrate up to 35% faster batch release cycles and 25% lower deviation rates.",
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
          content: "The commercial function in pharma is undergoing a fundamental transformation — from relationship-driven field sales to data-driven, omnichannel, precision engagement. Organisations deploying next-generation customer engagement platforms are generating 2–3× the sales force effectiveness of laggards. Novartis publicly disclosed $200M annual commercial efficiency gains from its AI-driven commercial transformation.",
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
            ["ABDM", "Ayushman Bharat Digital Mission", "India's national digital health infrastructure — 600M+ health IDs registered by 2024"],
            ["ALCOA+", "Data Integrity Principles", "Attributable, Legible, Contemporaneous, Original, Accurate + Complete, Consistent, Enduring, Available"],
            ["CSA", "Computer Software Assurance", "FDA's 2022 risk-based framework replacing traditional CSV — reduces documentation burden"],
            ["CTIS", "Clinical Trials Information System", "EU-wide digital portal for clinical trial applications across all member states"],
            ["DCT", "Decentralised Clinical Trial", "Trial design bringing activities to participants through digital tools and home health services"],
            ["DTx", "Digital Therapeutic", "Software-based medical intervention requiring clinical evidence and regulatory oversight"],
            ["eCTD", "Electronic Common Technical Document", "Globally mandated electronic format for regulatory submissions"],
            ["FAIR", "Findable Accessible Interoperable Reusable", "Framework for organising and managing scientific data for both humans and machines"],
            ["GCC", "Global Capability Centre", "Dedicated offshore facility providing high-value functions — India hosts 1,600+ with 1.9M employees"],
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
        content: [],
        table: {
          headers: ["Category", "Reference", "Authors / Organisation", "Year", "Why It Matters"],
          rows: [
            ["Strategic", "AI in Pharma: From Promise to Pipeline", "Boston Consulting Group", "2023", "CEO-level evidence base for AI value across drug development"],
            ["R&D", "Highly accurate protein structure prediction with AlphaFold", "Jumper et al., Nature", "2021", "Seminal paper; foundational for structure-based drug design"],
            ["R&D", "Diagnosing the decline in pharmaceutical R&D efficiency", "Scannell et al., Nature Reviews Drug Discovery", "2012", "Eroom's Law original paper; productivity crisis context"],
            ["Clinical", "E6(R3) Good Clinical Practice Guideline", "ICH", "2023", "Updated GCP formalising risk-based monitoring and electronic data"],
            ["Manufacturing", "GAMP 5 Second Edition", "ISPE", "2022", "Gold standard for GxP computer system validation"],
            ["Regulatory", "Computer Software Assurance", "US FDA", "2022", "Risk-based CSA replacing traditional CSV"],
            ["India & GCC", "India GCC Report: Life Sciences", "NASSCOM", "2024", "Comprehensive data on India GCC pharma capabilities"],
            ["Technology", "The Data Lakehouse", "Databricks / Ben Lorica et al.", "2023", "Architectural reference for unified analytics and AI platform"],
          ],
        },
        insightBox: {
          icon: "📚",
          label: "Living Document",
          title: "This handbook is a living document",
          description: "The frameworks, benchmarks, and case studies reflect the state of practice as of early 2025. Digital transformation is accelerating — treat this as a strategic foundation supplemented by ongoing engagement with primary sources.",
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
      { value: "1,600+", label: "GCCs in India" },
      { value: "30+", label: "Pharma MNC GCCs" },
      { value: "60%", label: "Cost Advantage" },
      { value: "40%", label: "Faster AI Recruitment" },
    ],
    tags: ["GCC Strategy", "India", "Talent", "Digital CoE"],
    sections: [{ title: "Executive Summary", content: ["India has emerged as the world's pre-eminent hub for pharmaceutical Global Capability Centres (GCCs), combining scientific, digital, and regulatory talent with a rapidly maturing innovation ecosystem."] }],
  },
  {
    id: "ch17",
    num: "17",
    partLabel: "Part VI · Advanced Modalities",
    title: "Biopharmaceuticals, Cell & Gene Therapy — Digital Transformation",
    lead: "Digital infrastructure for next-generation biologics, cell therapies, and gene therapy manufacturing.",
    metrics: [
      { value: "$500B+", label: "Biologics Market 2030" },
      { value: "2,000+", label: "Cell/Gene Trials Active" },
      { value: "30%", label: "Yield Gain (Digital)" },
      { value: "vein-to-vein", label: "Digital Chain of Custody" },
    ],
    tags: ["Biologics", "Cell Therapy", "Gene Therapy", "Digital Manufacturing"],
    sections: [{ title: "Executive Summary", content: ["Biopharmaceuticals represent the fastest-growing segment of the pharmaceutical industry. Digital transformation in this space requires specialised approaches for complex molecules and personalised therapies."] }],
  },
  {
    id: "ch18",
    num: "18",
    partLabel: "Part VI · Advanced Modalities",
    title: "Real-World Evidence — Strategy, Infrastructure & Execution",
    lead: "Building enterprise RWE capabilities from data strategy to regulatory-grade evidence generation.",
    metrics: [
      { value: "$2.3B", label: "RWE Market 2028" },
      { value: "75%", label: "FDA Approvals Using RWD" },
      { value: "50%", label: "Faster Label Expansions" },
      { value: "600M+", label: "ABDM Health IDs" },
    ],
    tags: ["RWE", "Real-World Data", "HEOR", "Regulatory Evidence"],
    sections: [{ title: "Executive Summary", content: ["Real-world evidence is transforming regulatory decision-making, payer negotiations, and clinical development strategy across global pharma."] }],
  },
  {
    id: "ch19",
    num: "19",
    partLabel: "Part VI · Advanced Modalities",
    title: "AI Ethics, Bias & Responsible Innovation in Pharma",
    lead: "Governance frameworks for ethical AI deployment in healthcare and drug development.",
    metrics: [
      { value: "87%", label: "Executives Cite AI Ethics Risk" },
      { value: "30%", label: "AI Models Show Bias" },
      { value: "EU AI Act", label: "Regulatory Framework" },
      { value: "GxP", label: "Validation Required" },
    ],
    tags: ["AI Ethics", "Responsible AI", "Governance", "Bias"],
    sections: [{ title: "Executive Summary", content: ["As AI becomes embedded in drug discovery, clinical trials, and commercial operations, responsible innovation frameworks are essential to maintain trust and regulatory compliance."] }],
  },
  {
    id: "ch20",
    num: "20",
    partLabel: "Part VI · Advanced Modalities",
    title: "The CDO Playbook — Digital Leadership & Strategy",
    lead: "Building the Chief Digital Officer function and digital transformation organisation.",
    metrics: [
      { value: "65%", label: "Top 20 Pharma Have CDOs" },
      { value: "3–5yr", label: "Avg. CDO Tenure" },
      { value: "$50M+", label: "Avg. Digital Budget" },
      { value: "200+", label: "Digital FTEs at Leaders" },
    ],
    tags: ["CDO", "Digital Leadership", "Operating Model", "Strategy"],
    sections: [{ title: "Executive Summary", content: ["The Chief Digital Officer role has become a critical C-suite position in pharma. This chapter provides the strategic playbook for digital leadership, organisation design, and transformation execution."] }],
  },
  {
    id: "ch21",
    num: "21",
    partLabel: "Part VI · Advanced Modalities",
    title: "Digital Transformation Case Studies",
    lead: "Real-world implementation stories from pharma digital leaders.",
    metrics: [
      { value: "12", label: "Detailed Case Studies" },
      { value: "Roche", label: "AI Drug Discovery" },
      { value: "Novartis", label: "Commercial AI" },
      { value: "Pfizer", label: "Digital Trials" },
    ],
    tags: ["Case Studies", "Best Practices", "Implementation", "Results"],
    sections: [{ title: "Executive Summary", content: ["Detailed case studies from Roche, Novartis, Pfizer, AstraZeneca, and emerging players demonstrating measurable outcomes from digital transformation initiatives."] }],
  },
  {
    id: "ch22",
    num: "22",
    partLabel: "Part VII · Advanced Technical",
    title: "Interoperability & Health Data Standards",
    lead: "HL7 FHIR, OMOP, CDISC, and the foundation of connected pharma ecosystems.",
    metrics: [
      { value: "FHIR R4", label: "Standard Adoption" },
      { value: "OMOP", label: "Observational Data" },
      { value: "CDISC", label: "Clinical Data" },
      { value: "EHDS", label: "EU Health Data Space" },
    ],
    tags: ["Interoperability", "FHIR", "OMOP", "Data Standards"],
    sections: [{ title: "Executive Summary", content: ["Interoperability is the foundation of connected pharma. This chapter covers HL7 FHIR, OMOP CDM, CDISC standards, and the emerging European Health Data Space."] }],
  },
  {
    id: "ch23",
    num: "23",
    partLabel: "Part VII · Advanced Technical",
    title: "Precision Medicine & Genomics Digital Infrastructure",
    lead: "Building the digital backbone for personalised medicine and genomics-driven development.",
    metrics: [
      { value: "$120B", label: "Precision Med Market 2030" },
      { value: "100M+", label: "Genomes Sequenced" },
      { value: "CDx", label: "Companion Diagnostics" },
      { value: "NGS", label: "Next-Gen Sequencing" },
    ],
    tags: ["Precision Medicine", "Genomics", "Biomarkers", "CDx"],
    sections: [{ title: "Executive Summary", content: ["Precision medicine requires an entirely new digital infrastructure — from genomic data platforms to companion diagnostic integration and patient stratification engines."] }],
  },
  {
    id: "ch24",
    num: "24",
    partLabel: "Part VII · Advanced Technical",
    title: "Digital Twins — Manufacturing to Clinical & Commercial",
    lead: "Extending digital twin technology across the entire pharmaceutical value chain.",
    metrics: [
      { value: "$6.5B", label: "Pharma Digital Twin Market" },
      { value: "25%", label: "Time-to-Market Reduction" },
      { value: "15–20%", label: "Manufacturing Yield Gain" },
      { value: "3 Types", label: "Mfg · Clinical · Patient" },
    ],
    tags: ["Digital Twin", "Simulation", "Process Optimization", "Virtual Trials"],
    sections: [{ title: "Executive Summary", content: ["Digital twins are moving beyond manufacturing into clinical trial simulation, patient modelling, and commercial scenario planning — creating a new paradigm for pharma decision-making."] }],
  },
  {
    id: "ch25",
    num: "25",
    partLabel: "Part VII · Advanced Technical",
    title: "Digital Transformation in Emerging Markets",
    lead: "India, China, Brazil & Africa — market-specific digital strategies and leapfrog opportunities.",
    metrics: [
      { value: "$55B", label: "India Pharma Market" },
      { value: "$170B", label: "China Pharma Market" },
      { value: "20%", label: "Global Generics from India" },
      { value: "Leapfrog", label: "Mobile-First Opportunity" },
    ],
    tags: ["Emerging Markets", "India", "China", "Africa"],
    sections: [{ title: "Executive Summary", content: ["Emerging markets present unique opportunities for digital leapfrogging — mobile-first healthcare, regulatory modernisation, and manufacturing digitalisation at unprecedented scale."] }],
  },
  {
    id: "ch26",
    num: "26",
    partLabel: "Part VIII · Frontier Topics",
    title: "Generative AI in Pharma — LLMs, Copilots & Enterprise Deployment",
    lead: "Enterprise-scale GenAI strategy from molecule design to commercial content generation.",
    metrics: [
      { value: "GPT-4/Claude", label: "Foundation Models" },
      { value: "50%", label: "Content Automation" },
      { value: "$10B+", label: "Pharma GenAI Investment" },
      { value: "GxP", label: "Validation Challenge" },
    ],
    tags: ["Generative AI", "LLMs", "Copilots", "Enterprise AI"],
    sections: [{ title: "Executive Summary", content: ["Generative AI is transforming every function in pharma — from molecular design and literature review to regulatory writing and commercial content generation. This chapter covers enterprise deployment strategy."] }],
  },
  {
    id: "ch27",
    num: "27",
    partLabel: "Part VIII · Frontier Topics",
    title: "Pandemic Preparedness & Digital Health Security",
    lead: "Building digital infrastructure for rapid response to future pandemic and biosecurity threats.",
    metrics: [
      { value: "100 Days", label: "Vaccine Target (CEPI)" },
      { value: "mRNA", label: "Platform Technology" },
      { value: "Digital", label: "Surveillance Systems" },
      { value: "Global", label: "Supply Chain Resilience" },
    ],
    tags: ["Pandemic Preparedness", "Biosecurity", "Rapid Response", "Surveillance"],
    sections: [{ title: "Executive Summary", content: ["COVID-19 demonstrated both the power and gaps in digital health infrastructure. This chapter covers building resilient, digitally-enabled systems for future pandemic preparedness."] }],
  },
  {
    id: "ch28",
    num: "28",
    partLabel: "Part VIII · Frontier Topics",
    title: "Pharma Talent — Digital Reskilling & Future Workforce",
    lead: "Building the digital-native workforce pharma needs for 2025–2030 and beyond.",
    metrics: [
      { value: "70%", label: "Reskilling Need by 2027" },
      { value: "2.5x", label: "Digital Talent Premium" },
      { value: "40%", label: "Faster AI Recruitment" },
      { value: "Hybrid", label: "Future Work Model" },
    ],
    tags: ["Talent", "Reskilling", "Culture", "Future Workforce"],
    sections: [{ title: "Executive Summary", content: ["The single biggest barrier to pharma digital transformation is talent — not technology. This chapter addresses workforce strategy, digital reskilling, and cultural transformation."] }],
  },
  {
    id: "ch29",
    num: "29",
    partLabel: "Part VIII · Frontier Topics",
    title: "Digital Pharma Investment, Valuation & M&A Strategy",
    lead: "Investment frameworks, valuation methodologies, and M&A strategy for digital pharma assets.",
    metrics: [
      { value: "$45B+", label: "Digital Health VC 2020–24" },
      { value: "15–25x", label: "Revenue Multiples (AI)" },
      { value: "60+", label: "Pharma-AI M&A Deals" },
      { value: "Platform", label: "vs Point Solution Value" },
    ],
    tags: ["Investment", "M&A", "Valuation", "VC"],
    sections: [{ title: "Executive Summary", content: ["Digital health and AI-pharma assets command premium valuations. This chapter covers investment frameworks, deal structures, and strategic M&A in the digital pharma ecosystem."] }],
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
    sections: [{ title: "Executive Summary", content: ["This chapter provides a detailed 36-month implementation playbook covering all functional domains — from Wave 1 (Stabilise & Connect) through Wave 3 (Lead & Innovate) — targeting PDMF Level 5 maturity."] }],
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

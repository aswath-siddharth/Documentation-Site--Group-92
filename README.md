# CasMotif — Documentation Portal & Research Showcase (Group 92)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Faswath-siddharth%2FDocumentation-Site--Group-92&project-name=casmotif-docs)

Interactive Research Documentation Portal and Live Demonstration Showcase for **CasMotif: Information Cascade Prediction via Causal Temporal Motifs and Attentive Sequence Models**.

- **Course:** 23CSE498 Project Phase 2
- **Team Number:** Group 92
- **Institution:** Department of Computer Science & Engineering, Amrita Vishwa Vidyapeetham, Coimbatore
- **Guide:** Mr. Dayanand V (Assistant Professor, Dept. of CSE)

---

## 🚀 Instant Deployment on Vercel

This repository is configured at the root for zero-configuration, one-click deployment on [Vercel](https://vercel.com).

### Option 1: Deploy via Vercel Web Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new) and import your GitHub repository (**Documentation-Site--Group-92**).
2. Vercel automatically detects **Next.js** framework with default presets:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (Default root)
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
3. Click **Deploy**.
4. Your documentation site will be live in ~60 seconds with global CDN edge caching, automatic SSL, and automatic preview deployments on every pull request or commit.

---

### Option 2: Deploy via Vercel CLI

Deploy directly from your terminal from the repository root:

```bash
# Run Vercel CLI
npx vercel

# Deploy directly to production
npx vercel --prod
```

When prompted:
- **Set up and deploy?** `Y`
- **Which scope?** (Select your Vercel account/team)
- **Link to existing project?** `N` (or `Y` if linking to an existing project)
- **What's your project's name?** `casmotif-docs`
- **In which directory is your code located?** `./`

---

## 💻 Local Development

Run the documentation portal locally:

```bash
# 1. Install dependencies
npm install

# 2. Start local Next.js development server
npm run dev

# 3. Build and test production bundle locally
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Repository Structure

```
Documentation-Site--Group-92/
├── public/                    # Static assets, diagrams, and figures
│   └── assets/
│       └── loss_curves.png    # Empirical loss curves from model training
├── src/
│   ├── app/
│   │   ├── globals.css        # Academic dark design system & glassmorphism
│   │   ├── layout.tsx         # Root layout with SEO and metadata
│   │   └── page.tsx           # Assembles all interactive research modules
│   └── components/
│       ├── Navbar.tsx         # Sticky glassmorphic navigation with scrollspy
│       ├── Hero.tsx           # Academic badge, headline, and KPI metric cards
│       ├── ProblemStatement.tsx# Heavy-tail skew, burst latencies, literature table
│       ├── Methodology.tsx    # Tabbed CSR, 5 Motifs on G_{t-}, 15-D vectors, BiGRU
│       ├── PipelineComparison.tsx # Pipeline W (Weibo) vs Pipelines A, B, C (Reddit)
│       ├── InteractiveSimulator.tsx # HTML5 Canvas diffusion engine & CSR inspector
│       ├── VideoWalkthrough.tsx# Chapter-based video demo player & narration slides
│       ├── Benchmarks.tsx     # Multi-seed tables, ablations, parameter chart, log trap
│       ├── ProjectProgress.tsx# ~85% functional status progress bar & roadmap
│       ├── TeamSection.tsx    # Faculty guide spotlight, student profiles & MOOC badge
│       ├── DeveloperPortal.tsx# Quickstart terminal scripts & citations
│       └── Footer.tsx         # Institution credits, GitHub link, and license
├── vercel.json                # Vercel deployment configuration
├── next.config.ts             # Turbopack & Next.js runtime configuration
├── eslint.config.mjs          # Linting rules
├── tsconfig.json              # TypeScript compilation rules
├── package.json               # Next.js 16, React 19, Tailwind CSS dependencies
├── .gitignore                 # Next.js, Node, and Vercel ignore patterns
├── LICENSE                    # MIT License
└── README.md                  # Project documentation & deployment guide
```

---

## 📋 Evaluation Rubric Deliverables Covered

- **Project Objectives:** Continuous-time cascade popularity forecasting under early observation windows ($T_{obs} \in \{15\text{m}, 1\text{h}\}$).
- **Problem Statement:** Heavy-tailed distribution skew, continuous arrival velocities, and topological branching.
- **Methodology:** Dynamic 1D Compressed Sparse Row (CSR) representations, 5 Higher-Order Causal Motifs on $G_{t-}$, 15-D Causal Event Vectors, and Bidirectional GRU with linear $O(K)$ Learned Attentive Pooling.
- **Demonstration Showcase:** Interactive Live Cascade & Motif Simulation Engine on HTML5 Canvas + Chapter-based Visual Video Demo Player.
- **Team Details:** Team 92 (Aswath Siddharth R, Darshan R, Varun S, Kavin Karthic M, Harish Krishna B) mentored by Mr. Dayanand V (Assistant Professor, CSE).
- **Project Progress:** Comprehensive module-by-module implementation status matrix ($\approx 85\%$ functional).
- **Documentation:** Complete API specifications, mathematical formulations, data schemas, and CLI commands.

---

## 👥 Team 92 Members & Contributions

- **Aswath Siddharth R** (CB.EN.U4CSE21208) — Dynamic CSR Streaming Engine, 15-D Causal Feature Vectorization.
- **Darshan R** (CB.EN.U4CSE21213) — Graph Motif Extraction, Dual Bidirectional GRU Backbone.
- **Varun S** (CB.EN.U4CSE21258) — Data Ingestion & Sanitization Pipelines (Weibo, Twitter, Hawkes).
- **Kavin Karthic M** (CB.EN.U4CSE21226) — Learned Attentive Pooling Layer, Benchmark Evaluation Protocols.
- **Harish Krishna B** (CB.EN.U4CSE21221) — Multi-Seed Statistical Validation, MSLE / Log-Base Trap Analysis.

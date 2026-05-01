# NMA-TNBC Intro

A small static website introducing a research project on **network meta-analysis (NMA) of neoadjuvant regimens for early and locally advanced triple-negative breast cancer (TNBC)**.

The site is plain HTML / CSS / JavaScript — no build step, no framework.

## Live site

Deployed on Vercel from the [`Website/`](Website) directory (configured via [`vercel.json`](vercel.json)).

## Structure

```
.
├── Website/          # Site root (deployed)
│   ├── index.html    # All page content lives here (visual elements inline)
│   ├── script2.js    # Tab switching
│   ├── style2.css    # Styles, including SVG diagram and finding cards
│   ├── script.js     # v1 (collapsible accordion variant — kept for reference)
│   └── style.css     # v1 styles
├── vercel.json       # Tells Vercel to serve from Website/
└── README.md
```

`script.js` / `style.css` are an earlier collapsible-accordion version of the same site, retained for reference. The deployed page uses `script2.js` / `style2.css`.

## Sections

| Tab | Content |
|---|---|
| **Network Meta-analysis** | Plain-English explainer + an SVG network diagram showing direct vs. indirect comparisons |
| **Triple Negative Breast Cancer** | Three receptor chips (ER−, PR−, HER2−) → TNBC pill, plus a Neoadjuvant → pCR → Survival flow |
| **Aim of the study** | Importance and Objective callout blocks |
| **Highlights** | Four color-coded finding cards (efficacy / survival / balance / safety) and a clinical takeaway |

## Run locally

The page uses no `fetch()` for content anymore (everything is inline), so you can open `Website/index.html` directly in a browser.

For a more reliable local preview:

```bash
cd Website
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Pushing to the production branch triggers an automatic Vercel deployment. Other branches receive preview URLs in the Vercel dashboard.

## Content scope

The wording on the site reflects only information available in the **public conference poster** for the project. Manuscript-specific results (effect sizes, P-scores, patient/trial counts, etc.) are intentionally not included while the paper is unpublished.

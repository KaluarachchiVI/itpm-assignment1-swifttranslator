# ITPM Assignment 1 – SwiftTranslator Test Automation

**IT3040 – IT Project Management | Semester 1 | Option 1**

Playwright-based automation for testing the Singlish-to-Sinhala transliteration system at [swifttranslator.com](https://www.swifttranslator.com/).

---

## Prerequisites

- Node.js 18+
- npm

## Quick Start

```bash
npm install
npx playwright install chromium
npm test
```

## Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all 38 tests |
| `npm run test:positive` | Run positive functional tests (27) |
| `npm run test:negative` | Run negative functional tests (10) |
| `npm run test:ui` | Run UI tests (1) |
| `npm run generate-excel` | Generate `Test_Cases.xlsx` from last run |
| `npx playwright show-report` | Open HTML report |

## Workflow

1. **Install:** `npm install` and `npx playwright install chromium`
2. **Run tests:** `npm test` (sequential, ~4–5 min)
3. **Generate Excel:** `npm run generate-excel` to update `Test_Cases.xlsx` with actual outputs

## Project Structure

```
├── package.json
├── playwright.config.ts
├── README.md
├── Test_Cases.xlsx
├── SUBMISSION_GUIDE.md
├── GIT_REPOSITORY_URL.txt
├── tests/
│   ├── positive-functional.spec.ts
│   ├── negative-functional.spec.ts
│   ├── ui.spec.ts
│   └── utils/
│       ├── swift-translator-page.ts
│       └── results-reporter.ts
├── test-data/
│   ├── scenarios.ts
│   └── scenarios-export.js
└── scripts/
    ├── generate-excel.js
    └── inspect-page.js
```

## Test Coverage

| Type | Count | Description |
|------|-------|-------------|
| Pos_Fun | 27 | Correct Singlish→Sinhala conversion (sentences, tense, greetings, etc.) |
| Neg_Fun | 10 | Expected failures (joined words, slang, abbreviations, etc.) |
| Pos_UI | 1 | Clear button empties input and output |

## Configuration

- **Config:** `playwright.config.ts` – base URL, timeouts, workers, retries
- **Target:** Chromium
- **Mode:** Sequential (`workers: 1`) for stability
- **Retries:** 2 per test

## Submission

See `SUBMISSION_GUIDE.md` for pre-submission steps and what to include. Add your public Git repo URL to `GIT_REPOSITORY_URL.txt`.

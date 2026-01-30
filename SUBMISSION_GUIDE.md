# ITPM Assignment 1 - Submission Guide

This document describes the process for preparing and submitting the assignment deliverables.

---

## 1. Submission Checklist

Before submitting, ensure you have:

- [ ] **Playwright project** – Full repository with all scripts and configuration files
- [ ] **Excel file** – `Test_Cases.xlsx` with all test cases filled using the Appendix 2 template
- [ ] **Git repository** – Publicly accessible Git repository URL in `GIT_REPOSITORY_URL.txt`

---

## 2. Pre-Submission Steps

### Step 1: Replace Registration Number

Rename all files and the folder with your **registration number**:

- Create a folder named `[YOUR_REG_NUMBER]` (e.g. `IT12345678`)
- Inside it, place:
  - The entire Playwright project (or a folder named `[YOUR_REG_NUMBER]_playwright_project`)
  - Excel file renamed as `[YOUR_REG_NUMBER]_Test_Cases.xlsx`
  - `GIT_REPOSITORY_URL.txt` containing your public Git URL

### Step 2: Verify Tests Run

```bash
cd [project folder]
npm install
npm test
```

Ensure all tests pass (or pass on retry).

### Step 3: Generate/Update Excel

```bash
npm run generate-excel
```

Open `Test_Cases.xlsx` and verify:
- All columns are filled
- Actual output matches the last test run
- Status (Pass/Fail) is correct
- Rename to `[YOUR_REG_NUMBER]_Test_Cases.xlsx` when moving to submission folder

### Step 4: Push to Git and Add URL

1. Create a public repository on GitHub, GitLab, or similar
2. Push the project (excluding `node_modules`, `test-results`, `playwright-report`)
3. Add the repository URL to `GIT_REPOSITORY_URL.txt`:

```
https://github.com/your-username/itpm-assignment1-swifttranslator
```

**Important:** The repository must be publicly accessible. Repositories that cannot be accessed during marking will not be evaluated.

---

## 3. Folder Structure for Submission

```
[YOUR_REG_NUMBER]/
├── [YOUR_REG_NUMBER]_playwright_project/   (or all project files in root)
│   ├── package.json
│   ├── playwright.config.ts
│   ├── README.md
│   ├── tests/
│   ├── test-data/
│   ├── scripts/
│   └── ...
├── [YOUR_REG_NUMBER]_Test_Cases.xlsx
└── GIT_REPOSITORY_URL.txt
```

Alternatively, you may place the Playwright project files directly in the `[YOUR_REG_NUMBER]` folder without a subfolder.

---

## 4. Zipping and Upload

1. **Zip** the `[YOUR_REG_NUMBER]` folder
   - Result: `[YOUR_REG_NUMBER].zip`

2. **Upload** the zipped folder to the **"Assignment 1 Answer"** link on CourseWeb

3. **Deadline:** Before **1st February**

---

## 5. Plagiarism Reminder

- Submitted Excel files will be checked for plagiarism
- Any submission with a similarity score **greater than 10%** will be considered plagiarized
- **No marks** will be awarded for plagiarized work

---

## 6. Quick Reference – What to Include

| Item | Description |
|------|-------------|
| Playwright project | All source files, `package.json`, `playwright.config.ts`, `README.md` |
| Excel file | Completed test cases using Appendix 2 template |
| Git URL | Public repository link in `GIT_REPOSITORY_URL.txt` |

---

## 7. Troubleshooting

**Tests fail with "Output should not be empty"**  
- The site uses real-time conversion. Some tests may be flaky; the project uses retries.
- Run `npm test` again; flaky tests often pass on retry.

**Excel shows "(run tests to populate)"**  
- Run `npm test` first, then `npm run generate-excel`.

**Git repository not accessible**  
- Ensure the repository is **public**
- Check the URL in `GIT_REPOSITORY_URL.txt` is correct and clickable

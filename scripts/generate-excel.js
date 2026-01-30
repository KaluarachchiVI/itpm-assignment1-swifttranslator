const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');

const RESULTS_DIR = path.join(process.cwd(), 'test-results', 'execution-results');
const SCENARIOS_PATH = path.join(process.cwd(), 'test-data', 'scenarios.ts');

async function loadResults() {
  const results = {};
  if (!fs.existsSync(RESULTS_DIR)) {
    return results;
  }
  const files = fs.readdirSync(RESULTS_DIR).filter((f) => f.endsWith('.json'));
  for (const file of files) {
    const content = JSON.parse(fs.readFileSync(path.join(RESULTS_DIR, file), 'utf8'));
    results[content.tcId] = content;
  }
  return results;
}

function getAllScenarios() {
  const { getAllScenarios: get } = require('../test-data/scenarios-export.js');
  return get();
}

async function generateExcel() {
  const scenarios = getAllScenarios();
  const results = await loadResults();

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Test Cases', {
    views: [{ state: 'frozen', ySplit: 1 }],
  });

  sheet.columns = [
    { header: 'TC ID', key: 'tcId', width: 15 },
    { header: 'Test case name', key: 'name', width: 45 },
    { header: 'Input length type', key: 'inputLengthType', width: 18 },
    { header: 'Input', key: 'input', width: 60 },
    { header: 'Expected output', key: 'expectedOutput', width: 50 },
    { header: 'Actual output', key: 'actualOutput', width: 60 },
    { header: 'Status', key: 'status', width: 10 },
    { header: 'Accuracy justification / Description of issue type', key: 'justification', width: 55 },
    {
      header: 'What is covered by the test',
      key: 'coverage',
      width: 60,
    },
  ];

  sheet.getRow(1).font = { bold: true };
  sheet.getRow(1).alignment = { wrapText: true };

  for (const scenario of scenarios) {
    const result = results[scenario.tcId] || {};
    const coverage =
      `• ${scenario.coverage.inputType}\n` +
      `• ${scenario.coverage.grammarFocus}\n` +
      `• ${scenario.coverage.lengthType}\n` +
      `• ${scenario.coverage.qualityFocus}`;

    const actualOutput = result.actualOutput ?? '(run tests to populate)';
    const expectedOutput = scenario.expectedOutput || result.expectedOutput ||
      (result.actualOutput ? result.actualOutput : '');

    sheet.addRow({
      tcId: scenario.tcId,
      name: scenario.name,
      inputLengthType: scenario.inputLengthType,
      input: scenario.input || '(empty)',
      expectedOutput,
      actualOutput,
      status: result.status || 'Pending',
      justification: scenario.justification,
      coverage,
    });
  }

  sheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      row.alignment = { wrapText: true, vertical: 'top' };
    }
  });

  const outputPath = path.join(process.cwd(), 'Test_Cases.xlsx');
  await workbook.xlsx.writeFile(outputPath);
  console.log(`Excel file generated: ${outputPath}`);
}

generateExcel().catch((err) => {
  console.error('Error generating Excel:', err);
  process.exit(1);
});

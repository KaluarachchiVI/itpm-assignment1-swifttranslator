import type { Reporter, FullResult } from '@playwright/test/reporter';
import * as fs from 'fs';
import * as path from 'path';

export interface TestResult {
  tcId: string;
  input: string;
  expectedOutput: string;
  actualOutput: string;
  status: 'Pass' | 'Fail';
  duration?: number;
}

const RESULTS_DIR = path.join(process.cwd(), 'test-results', 'execution-results');

export function addTestResult(result: TestResult): void {
  const dir = RESULTS_DIR;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const safeId = result.tcId.replace(/[^a-zA-Z0-9_-]/g, '_');
  const filePath = path.join(dir, `${safeId}.json`);
  fs.writeFileSync(filePath, JSON.stringify(result, null, 2));
}

export function getResults(): TestResult[] {
  return [];
}

export function clearResults(): void {
  if (fs.existsSync(RESULTS_DIR)) {
    fs.readdirSync(RESULTS_DIR).forEach((f) => {
      fs.unlinkSync(path.join(RESULTS_DIR, f));
    });
  }
}

class ResultsReporter implements Reporter {
  onEnd(_result: FullResult): void {
    // Results are written per-test to execution-results/*.json
    // generate-excel.js reads from that directory
  }
}

export default ResultsReporter;

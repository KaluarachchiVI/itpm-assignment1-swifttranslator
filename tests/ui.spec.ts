import { test, expect } from '@playwright/test';
import { SwiftTranslatorPage } from './utils/swift-translator-page';
import { UI_SCENARIOS } from '../test-data/scenarios';
import { addTestResult } from './utils/results-reporter';

const SINHALA_UNICODE_RANGE = /[\u0D80-\u0DFF]/;

test.describe('UI - Real-time output and behavior', () => {
  let page: SwiftTranslatorPage;

  test.beforeEach(async ({ page: p }) => {
    page = new SwiftTranslatorPage(p);
    await page.goto();
  });

  for (const scenario of UI_SCENARIOS) {
    test(`${scenario.tcId}: ${scenario.name}`, async () => {
      await page.enterSinglish(scenario.input);
      const actualOutput = await page.getSinhalaOutput();
      const hasSinhala = SINHALA_UNICODE_RANGE.test(actualOutput ?? '');
      const isNonEmpty = (actualOutput ?? '').trim().length > 0;
      const passed = isNonEmpty && hasSinhala;

      addTestResult({
        tcId: scenario.tcId,
        input: scenario.input,
        expectedOutput: scenario.expectedOutput,
        actualOutput: actualOutput ?? '',
        status: passed ? 'Pass' : 'Fail',
      });

      expect((actualOutput ?? '').trim().length, 'Sinhala output should update and be non-empty').toBeGreaterThan(0);
      expect(actualOutput ?? '', 'Sinhala output should contain Sinhala script').toMatch(SINHALA_UNICODE_RANGE);
    });
  }
});

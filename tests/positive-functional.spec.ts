import { test, expect } from '@playwright/test';
import { SwiftTranslatorPage } from './utils/swift-translator-page';
import { POSITIVE_SCENARIOS } from '../test-data/scenarios';
import { addTestResult } from './utils/results-reporter';

const SINHALA_UNICODE_RANGE = /[\u0D80-\u0DFF]/;

test.describe('Positive Functional - Singlish to Sinhala conversion', () => {
  let page: SwiftTranslatorPage;

  test.beforeEach(async ({ page: p }) => {
    page = new SwiftTranslatorPage(p);
    await page.goto();
  });

  for (const scenario of POSITIVE_SCENARIOS) {
    test(`${scenario.tcId}: ${scenario.name}`, async () => {
      await page.enterSinglish(scenario.input);
      let actualOutput = await page.getSinhalaOutput();
      if (!actualOutput?.trim() && scenario.input.trim().length > 0) {
        await page.waitForConversion();
        actualOutput = await page.getSinhalaOutput();
      }

      const hasSinhala = SINHALA_UNICODE_RANGE.test(actualOutput ?? '');
      const isNonEmpty = (actualOutput ?? '').trim().length > 0;
      const isFormattingPreservation = /\d|Rs\.|USD|\.|,/.test(scenario.input) && !SINHALA_UNICODE_RANGE.test(scenario.input);
      const passed = (hasSinhala && isNonEmpty) || (isFormattingPreservation && isNonEmpty);

      addTestResult({
        tcId: scenario.tcId,
        input: scenario.input,
        expectedOutput: scenario.expectedOutput,
        actualOutput: actualOutput ?? '',
        status: passed ? 'Pass' : 'Fail',
      });

      expect((actualOutput ?? '').trim().length, `Output should not be empty for: ${scenario.input}`).toBeGreaterThan(0);
      if (!isFormattingPreservation) {
        expect(actualOutput ?? '', `Expected Sinhala output for: ${scenario.input}`).toMatch(SINHALA_UNICODE_RANGE);
      }
    });
  }
});

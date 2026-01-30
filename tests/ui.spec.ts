import { test, expect } from '@playwright/test';
import { SwiftTranslatorPage } from './utils/swift-translator-page';
import { UI_SCENARIOS } from '../test-data/scenarios';
import { addTestResult } from './utils/results-reporter';

test.describe('UI - Clear button behavior', () => {
  let page: SwiftTranslatorPage;

  test.beforeEach(async ({ page: p }) => {
    page = new SwiftTranslatorPage(p);
    await page.goto();
  });

  for (const scenario of UI_SCENARIOS) {
    test(`${scenario.tcId}: ${scenario.name}`, async () => {
      await page.enterSinglish(scenario.input);
      const outputBeforeClear = await page.getSinhalaOutput();
      expect(outputBeforeClear.trim().length).toBeGreaterThan(0);

      await page.clearInput();
      const outputAfterClear = await page.getSinhalaOutput();
      const inputAfterClear = await page.getSinglishInputValue();

      const passed = outputAfterClear.trim() === '' && inputAfterClear.trim() === '';

      addTestResult({
        tcId: scenario.tcId,
        input: scenario.input,
        expectedOutput: 'Both fields empty',
        actualOutput: passed ? 'Both fields cleared successfully' : `Input: "${inputAfterClear}", Output: "${outputAfterClear}"`,
        status: passed ? 'Pass' : 'Fail',
      });

      expect(outputAfterClear.trim(), 'Sinhala output should be cleared').toBe('');
      expect(inputAfterClear.trim(), 'Singlish input should be cleared').toBe('');
    });
  }
});

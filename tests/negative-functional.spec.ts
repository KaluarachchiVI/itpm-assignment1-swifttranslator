import { test } from '@playwright/test';
import { SwiftTranslatorPage } from './utils/swift-translator-page';
import { NEGATIVE_SCENARIOS } from '../test-data/scenarios';
import { addTestResult } from './utils/results-reporter';

test.describe('Negative Functional - Documented failures or incorrect behavior', () => {
  let page: SwiftTranslatorPage;

  test.beforeEach(async ({ page: p }) => {
    page = new SwiftTranslatorPage(p);
    await page.goto();
  });

  for (const scenario of NEGATIVE_SCENARIOS) {
    test(`${scenario.tcId}: ${scenario.name}`, async () => {
      let actualOutput: string;

      if (scenario.input === '') {
        await page.clearInput();
        await page.waitForConversion();
        actualOutput = await page.getSinhalaOutput();
      } else {
        await page.enterSinglish(scenario.input);
        actualOutput = await page.getSinhalaOutput();
      }

      addTestResult({
        tcId: scenario.tcId,
        input: scenario.input === '' ? '(empty)' : scenario.input,
        expectedOutput: scenario.expectedOutput,
        actualOutput,
        status: 'Pass',
      });
    });
  }
});

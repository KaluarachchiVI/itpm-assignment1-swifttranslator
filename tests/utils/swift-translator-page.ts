import { Page } from '@playwright/test';

const SINGLISH_INPUT_SELECTOR = 'textarea[placeholder="Input Your Singlish Text Here."]';
const CLEAR_BUTTON_SELECTOR = 'button:has-text("Clear")';

export class SwiftTranslatorPage {
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(1500);
  }

  async enterSinglish(text: string): Promise<void> {
    const input = this.page.locator(SINGLISH_INPUT_SELECTOR);
    await input.waitFor({ state: 'visible' });
    await input.click();
    await input.clear();
    await this.page.waitForTimeout(300);
    if (text.length > 150) {
      await input.fill(text);
    } else {
      await input.pressSequentially(text, { delay: 40 });
    }
    await this.waitForConversion();
  }

  async typeSinglish(text: string): Promise<void> {
    const input = this.page.locator(SINGLISH_INPUT_SELECTOR);
    await input.click();
    await input.pressSequentially(text, { delay: 50 });
    await this.waitForConversion();
  }

  async getSinhalaOutput(): Promise<string> {
    const getOutput = () =>
      this.page.evaluate(() => {
        const divs = document.querySelectorAll('div.whitespace-pre-wrap');
        for (const div of divs) {
          if (div.querySelector('textarea')) continue;
          const t = div.textContent?.trim() ?? '';
          if (t && !t.includes('Input Your Singlish')) return t;
        }
        const ringDivs = document.querySelectorAll('div.ring-slate-300');
        for (const div of ringDivs) {
          if (div.querySelector('textarea')) continue;
          const t = div.textContent?.trim() ?? '';
          if (t.length > 2 && !t.includes('Input Your Singlish')) return t;
        }
        return '';
      });

    for (let attempt = 0; attempt < 10; attempt++) {
      const text = await getOutput();
      if (text) return text;
      await this.page.waitForTimeout(1000);
    }
    return '';
  }

  async clearInput(): Promise<void> {
    const clearBtn = this.page.locator(CLEAR_BUTTON_SELECTOR);
    await clearBtn.click();
    await this.page.waitForTimeout(500);
  }

  async waitForConversion(): Promise<void> {
    await this.page.waitForTimeout(2500);
  }

  async getSinglishInputValue(): Promise<string> {
    return this.page.locator(SINGLISH_INPUT_SELECTOR).inputValue();
  }

  getPage(): Page {
    return this.page;
  }
}

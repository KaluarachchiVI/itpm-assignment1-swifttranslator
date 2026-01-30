const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.swifttranslator.com/');
  await page.waitForLoadState('networkidle');

  // List all divs that could be output areas
  const divs = await page.$$eval('div', els =>
    els
      .filter(el => el.className && typeof el.className === 'string')
      .filter(el => el.className.includes('ring-slate') || el.className.includes('bg-slate'))
      .map(el => ({
        tag: el.tagName,
        className: el.className,
        text: el.textContent?.slice(0, 100),
        childCount: el.children.length,
      }))
  );
  console.log('Candidate divs:', JSON.stringify(divs, null, 2));

  // Try clicking Sinhala
  const sinhalaLinks = await page.$$('text=Sinhala');
  console.log('Sinhala elements count:', sinhalaLinks.length);

  for (let i = 0; i < sinhalaLinks.length; i++) {
    const box = await sinhalaLinks[i].boundingBox();
    const text = await sinhalaLinks[i].textContent();
    console.log(`Sinhala[${i}]:`, text, box ? 'has box' : 'no box');
  }

  // Click first Sinhala that looks like a tab/button (not in touchpad)
  const switchSection = await page.$('text=Switch Typing Language');
  if (switchSection) {
    const parent = await switchSection.evaluateHandle(el => el.parentElement);
    const sinhalaInSwitch = await page.$('div:has-text("Switch Typing Language") >> text=Sinhala');
    if (sinhalaInSwitch) {
      await sinhalaInSwitch.click();
      await page.waitForTimeout(1500);
    }
  }

  await page.fill('textarea[placeholder="Input Your Singlish Text Here."]', 'mama gedhara yanavaa.');
  await page.waitForTimeout(2000);

  const outputDivs = await page.$$eval('div.whitespace-pre-wrap', els =>
    els.map((el, i) => ({ i, text: el.textContent?.slice(0, 80), className: el.className }))
  );
  console.log('Output divs after type:', JSON.stringify(outputDivs, null, 2));

  await browser.close();
})();

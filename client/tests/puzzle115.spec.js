import { test, expect } from '@playwright/test';

test('Puzzle115', async ({ page }) => {
  await page.goto('http://localhost:3000/puzzle115');

  const input = page.locator('#root .range');
  const label = page.locator('#root .label')

  await page.keyboard.press('Tab');

  for (let i = 0; i < 8; i += 1) {
    await page.keyboard.press('ArrowRight');
  }

  await expect(input).toHaveAttribute('type', 'range');
  await expect(label).toHaveText('Months: 108');
});
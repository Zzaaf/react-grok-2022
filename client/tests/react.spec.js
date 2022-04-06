import { test, expect } from '@playwright/test';

test('Puzzle100', async ({ page }) => {
  await page.goto('http://localhost:3000/puzzle100');
  const header = page.locator('#root .header');
  await expect(header).toHaveText('React it\'s easy!');
});

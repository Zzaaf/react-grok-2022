import { test, expect } from '@playwright/test';

test('Puzzle105', async ({ page }) => {
  await page.goto('http://localhost:3000/useState01');

  const div = page.locator('#root .box');

  // before click
  await expect(div).toHaveCSS('background-color', 'rgb(128, 128, 128)');

  // click
  page.click('#root .btn', { delay: 1000 })

  // after click
  await expect(div).toHaveCSS('background-color', 'rgb(255, 0, 0)');
});
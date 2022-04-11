import { test, expect } from '@playwright/test';

test('Puzzle100', async ({ page }) => {
  await page.goto('http://localhost:3000/puzzle100');

  const header = page.locator('#root .header');

  await expect(header).toHaveText('React it\'s easy!');
});

test('Puzzle105', async ({ page }) => {
  await page.goto('http://localhost:3000/puzzle105');

  const div = page.locator('#root .box');

  // before click
  await expect(div).toHaveCSS('background-color', 'rgb(128, 128, 128)');

  // click
  page.click('#root .btn', { delay: 1000 })

  // after click
  await expect(div).toHaveCSS('background-color', 'rgb(255, 0, 0)');
});

test('Puzzle110', async ({ page }) => {
  await page.goto('http://localhost:3000/puzzle110');

  const div = page.locator('#root .circle');

  // before click
  await expect(div).toHaveCSS('background-color', 'rgb(255, 255, 0)');
  await expect(div).toHaveCSS('cursor', 'pointer');
  await expect(div).toHaveCSS('border-radius', '50%');

  // click
  page.click('#root .circle', { delay: 1000 })

  // after click
  await expect(div).toHaveCSS('background-color', 'rgb(0, 128, 0)');

  // click
  page.click('#root .circle', { delay: 1000 })

  // after click
  await expect(div).toHaveCSS('background-color', 'rgb(255, 255, 0)');
});
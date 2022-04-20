import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url));
const testSet = process.env.REACT_APP_TEST_SET ?? 'puzzles';

test.describe('UseReducer01_Cards', () => {
  test('Code', async () => {
    const code = await fs.readFile(path.join(__dirname, `../src/components/${testSet}/UseReducer01_Cards/UseReducer01_Cards.jsx`), 'utf-8');

    // Используется useReducer, а не useState
    expect(code).toContain('useReducer');
    expect(code).not.toContain('useState');
  });

  test('Component', async ({ page }) => {
    await page.goto(`http://localhost:3000/usereducer01`);

    const card = page.locator('#root .card');
    const cardTitle = page.locator('#root .card-title');
    const nextCard = page.locator('#next-card');
    const nextBg = page.locator('#next-bg');

    await expect(card).toHaveClass(/bg-primary/);
    await expect(cardTitle).toHaveText('Name: John Doe');

    await nextCard.click();
    await expect(cardTitle).toHaveText('Name: Homer Simpson');

    await nextBg.click();
    await expect(card).toHaveClass(/bg-secondary/);

    await nextBg.click();
    await expect(card).toHaveClass(/bg-success/);

    await nextBg.click();
    await expect(card).toHaveClass(/bg-primary/);

    await nextCard.click();
    await expect(cardTitle).toHaveText('Name: Piter Parker');

    await nextCard.click();
    await expect(cardTitle).toHaveText('Name: John Doe');
  });
});

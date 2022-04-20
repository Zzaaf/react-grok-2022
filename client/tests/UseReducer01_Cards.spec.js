import { test, expect } from '@playwright/test';

test.describe('UseReducer01_Cards', () => {
  test('Code', () => {
    
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

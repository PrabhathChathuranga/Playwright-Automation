import { test, expect } from '@playwright/test';

test('Verify that users can search for content using the search bar', async ({ page }) => {
  // Navigate to the Wiley Online Library home page
  await page.goto('https://onlinelibrary.wiley.com/');

  // Enter a keyword in the search bar
  await page.fill('input[name="searchField1"]', 'machine learning'); 

  // Click the Search button
  await page.click('button[type="submit"]'); 

  // Verify that search results are displayed
  await expect(page.locator('text=machine learning')).toBeVisible(); 
});

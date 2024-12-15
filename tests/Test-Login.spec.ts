import { test, expect } from '@playwright/test';

test('Verify that a registered user can log in with valid credentials (UI Flow)', async ({ page }) => {
  // Navigate to the Wiley Online Library home page
  await page.goto('https://onlinelibrary.wiley.com/');

  // Click on the Login button
  await page.click('text=Login'); 

  // Click on the individual login option
  await page.click('text=Individual Login');

  // Enter mock credentials
  await page.fill('input[name="email"]', 'prabhath.chathuranga@gmail.com'); 
  await page.fill('input[name="password"]', '0707554415Admin'); 

  // Submit the Login form
  await page.click('button[type="submit"]'); 

  // Assert that the login form disappears (indicating form submission)
  await expect(page.locator('form')).not.toBeVisible(); 

  // Verify redirection or presence of an element unique to logged-in users
  await expect(page).toHaveURL(/.*dashboard|homepage|profile/); 
  await expect(page.locator('text=Welcome')).toBeVisible(); 
});

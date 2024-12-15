test('Verify that users can use advanced search options to filter results', async ({ page }) => {
    // Navigate to the Wiley Online Library home page
    await page.goto('https://onlinelibrary.wiley.com/');
  
    // Click on the Advanced Search button
    await page.click('text=Advanced Search'); 
  
    // Fill in search context fields
    await page.fill('input[name="searchTerm"]', 'Machine Learning Algorithms and Applications'); 
    await page.fill('input[name="date"]', '13 August 2021'); 
  
    // Click the Search button
    await page.click('button[type="submit"]'); 
  
    // Verify that filtered search results are displayed
    await expect(page.locator('text=Machine Learning Algorithms and Applications')).toBeVisible(); 
  });
  
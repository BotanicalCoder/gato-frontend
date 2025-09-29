import { test, expect } from '@playwright/test'

test('login screen visual', async ({ page }) => {
  await page.goto('/login')
  // Give fonts & glow a moment to settle
  await page.waitForTimeout(300)
  await expect(page).toHaveScreenshot('login.png', { maxDiffPixels: 200 })
})
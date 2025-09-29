import { test, expect } from '@playwright/test'
import { registerAndLogin } from './helpers'

test('dashboard visual', async ({ page }) => {
  await registerAndLogin(page)
  await page.waitForTimeout(300) // allow fonts/glow to settle
  await expect(page).toHaveScreenshot('dashboard.png', { maxDiffPixels: 250 })
})
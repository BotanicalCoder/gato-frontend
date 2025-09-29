import { test, expect } from '@playwright/test'

test('basic nav works', async ({ page }) => {
  await page.goto('/')
  // Not logged in → redirected to /login
  await expect(page).toHaveURL(/login/)
})
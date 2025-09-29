import { test, expect } from '@playwright/test'

test('login UI renders', async ({ page }) => {
  await page.goto('/login')
  await expect(page.getByRole('heading', { name: /player login/i })).toBeVisible()
})
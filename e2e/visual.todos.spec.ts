import { test, expect } from '@playwright/test'
import { registerAndLogin } from './helpers'

test('todos visual', async ({ page }) => {
  await registerAndLogin(page)
  await page.getByRole('link', { name: /todos/i }).click()
  await expect(page.getByText(/quest log/i)).toBeVisible()
  await page.waitForTimeout(300)
  await expect(page).toHaveScreenshot('todos.png', { maxDiffPixels: 250 })
})
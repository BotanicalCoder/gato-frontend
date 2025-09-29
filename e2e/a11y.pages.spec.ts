import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { registerAndLogin } from './helpers'

test('login page a11y', async ({ page }) => {
  await page.goto('/login')
  const results = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa']).analyze()
  const serious = results.violations.filter(v => v.impact === 'serious' || v.impact === 'critical')
  expect(serious, JSON.stringify(serious, null, 2)).toHaveLength(0)
})

test('dashboard a11y', async ({ page }) => {
  await registerAndLogin(page)
  const results = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa']).analyze()
  const serious = results.violations.filter(v => v.impact === 'serious' || v.impact === 'critical')
  expect(serious, JSON.stringify(serious, null, 2)).toHaveLength(0)
})

test('todos page a11y', async ({ page }) => {
  await registerAndLogin(page)
  await page.getByRole('link', { name: /todos/i }).click()
  await expect(page.getByText(/quest log/i)).toBeVisible()
  const results = await new AxeBuilder({ page }).withTags(['wcag2a','wcag2aa']).analyze()
  const serious = results.violations.filter(v => v.impact === 'serious' || v.impact === 'critical')
  expect(serious, JSON.stringify(serious, null, 2)).toHaveLength(0)
})
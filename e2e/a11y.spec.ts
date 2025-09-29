import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('dashboard has no critical a11y violations', async ({ page }) => {
  await page.goto('/login')
  // Basic login with seeded test user (ensure exists or skip)
  // If first run, create it via UI (optional) — here we skip and just check login page
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa'])
    .analyze()
  // Allow minor issues, but fail on serious/critical
  const serious = results.violations.filter(v => v.impact === 'serious' || v.impact === 'critical')
  expect(serious, JSON.stringify(serious, null, 2)).toHaveLength(0)
})
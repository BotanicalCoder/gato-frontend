import { test, expect } from '@playwright/test'
import { randEmail } from './utils'

test('register → login → dashboard → create & complete todo', async ({ page }) => {
  // Navigate to register
  await page.goto('/register')

  const email = randEmail('e2e')
  const displayName = 'E2E Player'
  const password = 'e2ePassword!1'

  // Fill register form
  await page.getByLabel(/display name/i).fill(displayName)
  await page.getByLabel(/email/i).fill(email)
  await page.getByLabel(/password/i).fill(password)
  await page.getByRole('button', { name: /create account/i }).click()

  // Should redirect to /login (our app navigates there after register)
  await page.waitForURL(/login/)

  // Login
  await page.getByLabel(/email/i).fill(email)
  await page.getByLabel(/password/i).fill(password)
  await page.getByRole('button', { name: /enter game/i }).click()

  // Dashboard visible
  await expect(page.getByText(/player profile/i)).toBeVisible()

  // Go to Todos
  await page.getByRole('link', { name: /todos/i }).click()
  await expect(page.getByText(/quest log/i)).toBeVisible()

  // Create new quest
  const title = 'E2E Quest ' + Date.now()
  await page.getByLabel(/^title$/i).fill(title)
  await page.getByRole('button', { name: /add quest/i }).click()
  await expect(page.getByText(title)).toBeVisible()

  // Complete the new quest
  const row = page.locator('div.todo', { hasText: title })
  await row.getByRole('button', { name: /complete/i }).click()

  // Verify done state (button disappears and row dims)
  await expect(row).toHaveClass(/opacity-70/)
})
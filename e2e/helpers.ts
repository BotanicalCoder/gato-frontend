import { Page, expect } from '@playwright/test'
import { randEmail } from './utils'

export async function registerAndLogin(page: Page) {
  const email = randEmail('snap')
  const password = 'SnapPassword!1'
  const displayName = 'Snapshot Player'

  // Register
  await page.goto('/register')
  await page.getByLabel(/display name/i).fill(displayName)
  await page.getByLabel(/email/i).fill(email)
  await page.getByLabel(/password/i).fill(password)
  await page.getByRole('button', { name: /create account/i }).click()
  await page.waitForURL(/login/)

  // Login
  await page.getByLabel(/email/i).fill(email)
  await page.getByLabel(/password/i).fill(password)
  await page.getByRole('button', { name: /enter game/i }).click()

  // Landed dashboard
  await expect(page.getByText(/player profile/i)).toBeVisible()
}
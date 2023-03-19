import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/solve it/i)
})

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/')
//
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click()
//
//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/)
// })

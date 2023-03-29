import { test, expect } from '@playwright/test'

test('heading and guides', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/improve it/i)
  await expect(page.getByRole('heading', { name: /improve it/i })).toBeVisible()
  await expect(page.getByTestId('guide_block')).toBeVisible()
})
test('buttons w/o "profile" button', async ({ page }) => {
  await page.goto('/')
  const solveButton = page.getByTestId('solve_button_style')
  await expect(solveButton).toBeVisible()
  await expect(solveButton).toHaveClass(/text-green-500/)
  await expect(solveButton).toHaveClass(/hover:text-red-500/)

  const authButton = page.getByTestId('auth_button_style')
  await expect(authButton).toBeVisible()
  await expect(authButton).toHaveClass(/text-blue-500/)
  await expect(authButton).toHaveClass(/hover:text-red-500/)
})

import { test, expect, Page, Locator } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/solve')
})

test('first page: appearance', async ({ page }) => {
  await expect(page.getByRole('heading', { name: /select mode/i })).toBeVisible()
  await expect(page.getByTestId('solve_stepper')).toBeVisible()
  const modeButtons = await page.getByTestId('mode_button')
  await expect(modeButtons).toHaveCount(3)
  await expect(modeButtons).toHaveClass([/text-sky-500/, /text-violet-500/, /text-custom-green/])
  await expect(modeButtons).toHaveClass([/hover:text-red-500/, /hover:text-red-500/, /hover:text-red-500/])
  const backButton = page.getByText(/back/i)
  await expect(backButton).toHaveClass(/text-opacity-30/)
  await expect(backButton).toHaveClass(/text-orange-500/)
  const forwardButton = page.getByText(/next/i)
  await expect(forwardButton).toHaveClass(/text-opacity-30/)
  await expect(forwardButton).toHaveClass(/text-orange-500/)
})

const goToSecondPage = async (page: Page, button: Locator): Promise<void> => {
  await button.click()
  await page.getByText(/next/i).click()
}

test('first page: mode button onClick behavior', async ({ page }) => {
  const buttons = page.getByTestId('mode_button')
  const [button1, button2, button3] = [buttons.nth(0), buttons.nth(1), buttons.nth(2)]
  await goToSecondPage(page, button1)
  await page.getByText(/back/i).click()
  await goToSecondPage(page, button2)
  await page.getByText(/back/i).click()
  await goToSecondPage(page, button3)
  await page.getByText(/back/i).click()
})

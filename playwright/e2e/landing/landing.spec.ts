import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.describe('landing page', () => {
  test('page should be rendered with correct title', async ({ page }) => {
    await page.goto('/')
    expect(await page.title()).toEqual('Next Starter')
  })

  test('page should not have any automatically detectable accessibility issues', async ({
    page
  }) => {
    await page.goto(`/`)

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    expect(accessibilityScanResults.violations).toEqual([])

    await page.close()
  })
})

import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test.describe('landing page', () => {
  test('page should be rendered with correct title', async ({
    page,
    isMobile
  }) => {
    await page.goto('/')
    expect(await page.title()).toEqual('Next Starter')

    await expect(
      page.getByRole('navigation', { name: /global/i })
    ).toBeVisible()

    await expect(
      page.getByRole('link', { name: /next starter/i })
    ).toBeVisible()
    await expect(
      page.getByRole('link', { name: /next starter/i })
    ).toHaveAttribute('href', '/')

    if (isMobile) {
      await expect(
        page.getByRole('button', { name: /open main menu/i })
      ).toBeVisible()
    } else {
      await expect(page.getByRole('link', { name: /product/i })).toBeVisible()
      await expect(
        page.getByRole('link', { name: /product/i })
      ).toHaveAttribute('href', '/product')

      await expect(page.getByRole('link', { name: /features/i })).toBeVisible()
      await expect(
        page.getByRole('link', { name: /features/i })
      ).toHaveAttribute('href', '/features')

      await expect(
        page.getByRole('link', { name: /marketplace/i })
      ).toBeVisible()
      await expect(
        page.getByRole('link', { name: /marketplace/i })
      ).toHaveAttribute('href', '/marketplace')

      await expect(page.getByRole('link', { name: /company/i })).toBeVisible()
      await expect(
        page.getByRole('link', { name: /company/i })
      ).toHaveAttribute('href', '/company')

      await expect(page.getByRole('link', { name: /log in/i })).toBeVisible()
      await expect(page.getByRole('link', { name: /log in/i })).toHaveAttribute(
        'href',
        '/login'
      )
    }

    await expect(page.getByRole('main', { name: /content/i })).toBeVisible()

    await expect(
      page.getByRole('heading', {
        name: /data to enrich your online business/i
      })
    ).toBeVisible()

    await expect(page.getByRole('link', { name: /get started/i })).toBeVisible()
    await expect(
      page.getByRole('link', { name: /get started/i })
    ).toHaveAttribute('href', '/get-started')

    await expect(page.getByRole('link', { name: /live demo/i })).toBeVisible()
    await expect(
      page.getByRole('link', { name: /live demo/i })
    ).toHaveAttribute('href', '/demo')
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

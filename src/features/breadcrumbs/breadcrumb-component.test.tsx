import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { BreadcrumbComponent } from '@/features/breadcrumbs/breadcrumb-component'

describe('BreadcrumbComponent', () => {
  it('should render the breadcrumb component with correct links', () => {
    render(<BreadcrumbComponent />)

    expect(
      screen.getByRole('navigation', { name: /breadcrumbs/i })
    ).toBeInTheDocument()

    expect(screen.getAllByRole('link')).toHaveLength(3)

    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      '/'
    )
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute(
      'href',
      '/about'
    )
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      '/contact'
    )
  })
})

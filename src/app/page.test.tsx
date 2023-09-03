import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Home from '@/app/page'

describe('Landing Feature', () => {
  it('should render the component correctly', () => {
    render(<Home />)

    expect(
      screen.getByRole('navigation', { name: /global/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /next starter/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /next starter/i })).toHaveAttribute(
      'href',
      '/'
    )

    expect(screen.getByRole('link', { name: /product/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /product/i })).toHaveAttribute(
      'href',
      '/product'
    )

    expect(screen.getByRole('link', { name: /features/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /features/i })).toHaveAttribute(
      'href',
      '/features'
    )

    expect(
      screen.getByRole('link', { name: /marketplace/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /marketplace/i })).toHaveAttribute(
      'href',
      '/marketplace'
    )

    expect(screen.getByRole('link', { name: /company/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /company/i })).toHaveAttribute(
      'href',
      '/company'
    )

    expect(screen.getByRole('link', { name: /log in/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /log in/i })).toHaveAttribute(
      'href',
      '/login'
    )

    expect(screen.getByRole('main', { name: /content/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /data to enrich your online business/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /get started/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get started/i })).toHaveAttribute(
      'href',
      '/get-started'
    )

    expect(screen.getByRole('link', { name: /live demo/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /live demo/i })).toHaveAttribute(
      'href',
      '/demo'
    )
  })
})

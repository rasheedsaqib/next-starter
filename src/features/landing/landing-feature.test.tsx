import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import type { Factory } from '@/utils/types'

import type { LandingFeatureProperties } from './landing-feature'
import { LandingFeature } from './landing-feature'

const createProperties: Factory<LandingFeatureProperties> = ({
  navigation
} = {}) => ({
  navigation: navigation ?? []
})

describe('Landing Feature', () => {
  it('should render the component correctly', () => {
    const properties = createProperties({
      navigation: [
        {
          name: 'Home',
          url: '/home'
        },
        {
          name: 'About',
          url: '/about'
        },
        {
          name: 'Contact',
          url: '/contact'
        }
      ]
    })

    render(<LandingFeature {...properties} />)

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

    expect(
      screen.getByRole('button', { name: /open main menu/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      '/home'
    )

    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute(
      'href',
      '/about'
    )

    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      '/contact'
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

  it('clicked the open menu button: should render the mobile nav', async () => {
    const properties = createProperties({
      navigation: [
        {
          name: 'Home',
          url: '/home'
        },
        {
          name: 'About',
          url: '/about'
        },
        {
          name: 'Contact',
          url: '/contact'
        }
      ]
    })

    render(<LandingFeature {...properties} />)

    const openButton = screen.getByRole('button', { name: /open main menu/i })

    await userEvent.click(openButton)

    expect(
      screen.getByRole('dialog', { name: /mobile menu/i })
    ).toBeInTheDocument()

    const closeButton = screen.getByRole('button', { name: /close menu/i })

    expect(closeButton).toBeInTheDocument()

    await userEvent.click(closeButton)

    expect(closeButton).not.toBeInTheDocument()
  })
})

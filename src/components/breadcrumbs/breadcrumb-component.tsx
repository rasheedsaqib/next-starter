import Link from 'next/link'
import { FunctionComponent } from 'react'

export const BreadcrumbComponent: FunctionComponent = () => {
  return (
    <nav aria-label="breadcrumbs" className="flex items-center gap-x-4">
      <Link aria-label="home" href="/">
        Home
      </Link>
      <Link aria-label="about" href="/about">
        About
      </Link>
      <Link aria-label="contact" href="/contact">
        Contact
      </Link>
    </nav>
  )
}

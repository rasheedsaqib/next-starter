import Head from 'next/head'
import { type FunctionComponent } from 'react'

import { LandingFeature } from '@/features/landing/landing-feature'

const navigation = [
  { name: 'Product', url: '/product' },
  { name: 'Features', url: '/features' },
  { name: 'Marketplace', url: '/marketplace' },
  { name: 'Company', url: '/company' }
]

const Home: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Next Starter</title>
      </Head>
      <LandingFeature navigation={navigation} />
    </>
  )
}

export default Home

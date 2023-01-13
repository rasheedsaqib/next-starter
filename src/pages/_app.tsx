import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import { FunctionComponent } from 'react'

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps
}: AppProps) => {
  return <Component {...pageProps} />
}

export default App

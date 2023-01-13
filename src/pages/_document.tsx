import { Head, Html, Main, NextScript } from 'next/document'
import { FunctionComponent } from 'react'

const Document: FunctionComponent = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document

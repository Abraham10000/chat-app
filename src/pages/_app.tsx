import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// This comment is just for verifying that my push work **

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

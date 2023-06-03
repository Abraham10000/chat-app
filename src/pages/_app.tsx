import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Your push work !! **

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

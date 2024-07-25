import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div id="app" className="min-h-screen max-w-[600px] m-auto shadow-2xl overflow-hidden">
      <Head>
        <meta content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;' name='viewport' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link rel="stylesheet" href="https://use.typekit.net/pkz8ulf.css"></link>
      </Head>

      <Component {...pageProps} />
    </div>
  )
}
export default MyApp

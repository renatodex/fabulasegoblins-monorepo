import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div id="app" className="bg-gunmetal h-screen">
      <header>
        <div className="h-8 bg-aero-blue"></div>
      </header>
      <main className="text-white px-6 mt-6">
        <Component {...pageProps} />
      </main>
      <footer>

      </footer>
    </div>
  )
}
export default MyApp
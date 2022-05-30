const style = require('/styles/globals.css')
const Footer = require('/components/footer.js')

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

export default MyApp

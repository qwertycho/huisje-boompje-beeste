import styles from '/styles/globals.css'
import Footer from '/components/footer.js'

function MyApp({ Component, pageProps }) {
  return (
    <>
  <Component {...pageProps} />
  <Footer />
  </>
  )
}

export default MyApp

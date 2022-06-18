
import Head from "next/head";
import AuthProvider from '../context/authContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component { ...pageProps } />
   </AuthProvider>
  )
}

export default MyApp

// import App from "next/app";
import EmptyLayout from '../components/Layout/EmptyLayout'
import { AppPropsWithLayout } from '../model'
import '../styles/index.scss'

function MyApp(props: AppPropsWithLayout) {

  const { Component, pageProps } = props

  const Layout = Component.Layout ?? EmptyLayout

  return (
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
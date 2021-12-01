// import App from "next/app";
import EmptyLayout from '../components/Layout/EmptyLayout'
import { AppPropsWithLayout } from '../model'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache, theme } from '../utils';

const clientSideEmotionCache = createEmotionCache()


function MyApp(props: AppPropsWithLayout) {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const Layout = Component.Layout ?? EmptyLayout

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>

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
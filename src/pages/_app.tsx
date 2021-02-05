import React, { useEffect } from 'react';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import * as gtag from '../utils/gtag';

import '../styles/main.css';

const App = ({ Component, pageProps }: AppProps) => {
  /* Global Site Tag (gtag.js) - Google Analytics */
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default App;

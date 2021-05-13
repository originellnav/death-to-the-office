import { useEffect } from "react";
import { useRouter } from "next/router";

import "normalize.css";
import "../assets/index.css";

import * as ga from "../lib/ga";

import { getAboutContent } from "../lib/api";

export const DataContext = React.createContext({});

function MyApp({ Component, pageProps, aboutContent }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <DataContext.Provider value={{ aboutContent }}>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}

export default MyApp;

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const aboutContent = await getAboutContent();
  return { aboutContent };
};

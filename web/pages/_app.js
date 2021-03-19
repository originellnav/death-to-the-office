import "normalize.css";
import "../assets/index.css";

import { getAboutContent } from "../lib/api";

export const DataContext = React.createContext({});

function MyApp({ Component, pageProps, aboutContent }) {
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

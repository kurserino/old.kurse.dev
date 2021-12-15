import { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
// import { useStore } from "../store";
import store from "../store";

export default function App({ Component, pageProps }: AppProps) {
  // const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Head>
        <title>Kurse.dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

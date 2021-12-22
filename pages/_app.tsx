import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/GlobalStyle";
import wrapper from "../redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);

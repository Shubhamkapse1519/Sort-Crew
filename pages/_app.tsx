import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ViewportProvider } from "../context/viewport";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ViewportProvider>
      <Component {...pageProps} />
    </ViewportProvider>
  );
}

export default MyApp;

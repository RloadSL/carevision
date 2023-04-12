import Header from "@/components/Header";
import type { AppProps } from "next/app";
import Head from "next/head";
import '../assets/styles/layout.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="carevision" />
        <meta name="author" content="Rload Studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default App;

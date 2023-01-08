import "../styles/globals.css";
import "nprogress/nprogress.css";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

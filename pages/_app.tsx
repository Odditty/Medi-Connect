import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "windi.css";
import { ThemeProvider } from "../context/theme";
import CommonLayout from "../components/common/Layout";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider>
        <CommonLayout>
          <Component {...pageProps} />
        </CommonLayout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

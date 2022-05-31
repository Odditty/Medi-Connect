import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "windi.css";
import { ThemeProvider } from "../context/theme";
import CommonLayout from "../styles/components/common/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <CommonLayout>
        <Component {...pageProps} />
      </CommonLayout>
    </ThemeProvider>
  );
}

export default MyApp;

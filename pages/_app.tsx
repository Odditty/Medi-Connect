import "../styles/globals.scss";
// import type { AppProps } from "next/app";
import "windi.css";
import { ThemeProvider } from "../context/theme";
import CommonLayout from "../components/common/Layout";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import Loading from "../components/common/Loading";
import Router from "next/router";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <CommonLayout>
            <Component {...pageProps} />
          </CommonLayout>
        )}
      </ThemeProvider>
    </SessionProvider>
  );
}

function Auth({ children }: any) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  useEffect(() => {
    if (status === "loading") return;
    if (!isUser) Router.push("/");
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <Loading />;
}

export default MyApp;
